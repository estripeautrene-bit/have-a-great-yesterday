import OpenAI from 'openai'
import { DOORWAY_SCHEMA, validateDoorwayResponse, type DoorwayApiResponse } from './_lib/schema'
import { SYSTEM_PROMPT, buildUserMessage } from './_lib/myhgy-doorway-brain'
import { validateInput } from './_lib/validate'
import { qualityCheck } from './_lib/quality-validator'
import { getFallback } from './_lib/fallbacks'

interface Env {
  OPENAI_API_KEY: string
}

interface AttemptLog {
  attempt: number
  category: 'structural' | 'quality' | 'openai_threw' | 'success'
  failures: string[]
  wordCount: number
  openaiStatus: number | null
  openaiRespId: string | null
}

function jsonResponse(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
}

async function callOpenAI(
  client: OpenAI,
  userMessage: string,
  reqId: string,
  attempt: number,
  forceGuidance: boolean = false,
): Promise<{ response: DoorwayApiResponse | null; log: AttemptLog }> {
  let openaiRespId: string | null = null
  let openaiStatus: number | null = null

  try {
    const raw = await client.responses.create({
      model: 'gpt-5.6-terra',
      store: false,
      reasoning: { effort: 'none' },
      input: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: userMessage },
      ],
      text: {
        format: {
          type: 'json_schema',
          name: 'doorway_response',
          strict: true,
          schema: DOORWAY_SCHEMA,
        },
      },
    } as Parameters<typeof client.responses.create>[0])

    openaiRespId = typeof (raw as Record<string, unknown>).id === 'string'
      ? (raw as Record<string, unknown>).id as string
      : null

    const parsed: unknown = JSON.parse(raw.output_text)

    if (!validateDoorwayResponse(parsed)) {
      const log: AttemptLog = {
        attempt, category: 'structural', failures: ['structural validation failed'],
        wordCount: 0, openaiStatus: null, openaiRespId,
      }
      console.log(JSON.stringify({ reqId, ...log }))
      return { response: null, log }
    }

    const quality = qualityCheck(parsed)

    if (!quality.valid) {
      const log: AttemptLog = {
        attempt, category: 'quality', failures: quality.failures,
        wordCount: quality.wordCount, openaiStatus: null, openaiRespId,
      }
      console.log(JSON.stringify({ reqId, ...log }))
      return { response: null, log }
    }

    // Guard: card submissions and followup completions must never produce a followup response.
    if (forceGuidance && parsed.meta.followup_needed) {
      const log: AttemptLog = {
        attempt, category: 'quality',
        failures: ['force_guidance: followup_needed must be false for card or followup-complete submissions'],
        wordCount: 0, openaiStatus: null, openaiRespId,
      }
      console.log(JSON.stringify({ reqId, ...log }))
      return { response: null, log }
    }

    const log: AttemptLog = {
      attempt, category: 'success', failures: [],
      wordCount: quality.wordCount, openaiStatus: null, openaiRespId,
    }
    console.log(JSON.stringify({ reqId, ...log }))
    return { response: parsed, log }
  }
  catch (e) {
    if (e instanceof OpenAI.APIError) openaiStatus = e.status ?? null
    const log: AttemptLog = {
      attempt, category: 'openai_threw', failures: ['openai call threw'],
      wordCount: 0, openaiStatus, openaiRespId,
    }
    console.log(JSON.stringify({ reqId, ...log }))
    return { response: null, log }
  }
}

export async function onRequest(context: { request: Request; env: Env }): Promise<Response> {
  const { request, env } = context

  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    })
  }

  if (request.method !== 'POST') {
    return jsonResponse({ error: 'method_not_allowed' }, 405)
  }

  const contentType = request.headers.get('Content-Type') ?? ''
  if (!contentType.includes('application/json')) {
    return jsonResponse({ error: 'unsupported_media_type' }, 415)
  }

  let body: unknown
  try {
    body = await request.json()
  }
  catch {
    return jsonResponse({ error: 'invalid_json' }, 400)
  }

  const inputError = validateInput(body)
  if (inputError !== null) {
    return jsonResponse({ error: inputError }, 422)
  }

  const b = body as Record<string, unknown>
  const text = b.text as string
  const followupChip = (b.followupChip as string | null | undefined) ?? null
  const followupText = (b.followupText as string | null | undefined) ?? null
  const situationCard = (b.situationCard as string | null | undefined) ?? null
  const followupSkipped = (b.followupSkipped as boolean | undefined) ?? false
  const isCard = situationCard !== null
  const isFollowup = (followupChip !== null && followupChip !== '') || followupSkipped
  const forceGuidance = isCard || isFollowup

  const userMessage = buildUserMessage(text, followupChip, followupText, situationCard, followupSkipped)
  const reqId = crypto.randomUUID().slice(0, 8)

  let client: OpenAI
  try {
    client = new OpenAI({ apiKey: env.OPENAI_API_KEY, timeout: 25000 })
  }
  catch {
    return jsonResponse({ error: 'service_error' }, 502)
  }

  try {
    const { response: r1, log: l1 } = await callOpenAI(client, userMessage, reqId, 1, forceGuidance)
    if (r1 !== null) return jsonResponse(r1, 200)

    const retryMessage = `${userMessage}\n\nPrevious response failed quality validation. Failures: ${l1.failures.join('; ')}. Requirements for a valid guidance response: (1) exactly 3 moments; (2) noticing mechanic present; (3) writing or capturing mechanic present; (4) daily repetition language (every day / daily / each day); (5) total word count 230–380; (6) continuationBridge must not mention email, name, inbox, Starting Point, or any delivery; (7) no banned phrases. Generate a corrected complete guidance response now.`
    const { response: r2 } = await callOpenAI(client, retryMessage, reqId, 2, forceGuidance)
    if (r2 !== null) return jsonResponse(r2, 200)

    const fallback = getFallback(situationCard)
    console.log(JSON.stringify({ reqId, category: 'fallback', situationCard }))
    return jsonResponse(fallback, 200)
  }
  catch {
    return jsonResponse({ error: 'service_error' }, 502)
  }
}
