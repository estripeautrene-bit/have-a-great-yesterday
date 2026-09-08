import OpenAI from 'openai'
import { DOORWAY_SCHEMA, validateDoorwayResponse, type DoorwayApiResponse } from './_lib/schema'
import { SYSTEM_PROMPT, buildUserMessage } from './_lib/myhgy-doorway-brain'
import { validateInput } from './_lib/validate'
import { qualityCheck } from './_lib/quality-validator'

interface Env {
  OPENAI_API_KEY: string
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
): Promise<{ response: DoorwayApiResponse | null; failures: string[] }> {
  try {
    const response = await client.responses.create({
      model: 'gpt-5.6-terra',
      store: false,
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

    const parsed: unknown = JSON.parse(response.output_text)
    if (!validateDoorwayResponse(parsed)) {
      return { response: null, failures: ['structural validation failed'] }
    }
    const quality = qualityCheck(parsed)
    if (!quality.valid) {
      return { response: null, failures: quality.failures }
    }
    return { response: parsed, failures: [] }
  }
  catch {
    return { response: null, failures: ['openai call threw'] }
  }
}

export async function onRequest(context: { request: Request; env: Env }): Promise<Response> {
  const { request, env } = context

  // Handle CORS preflight
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

  // POST only
  if (request.method !== 'POST') {
    return jsonResponse({ error: 'method_not_allowed' }, 405)
  }

  // Content-Type check
  const contentType = request.headers.get('Content-Type') ?? ''
  if (!contentType.includes('application/json')) {
    return jsonResponse({ error: 'unsupported_media_type' }, 415)
  }

  // Parse body
  let body: unknown
  try {
    body = await request.json()
  }
  catch {
    return jsonResponse({ error: 'invalid_json' }, 400)
  }

  // Validate input
  const inputError = validateInput(body)
  if (inputError !== null) {
    return jsonResponse({ error: inputError }, 422)
  }

  const b = body as Record<string, unknown>
  const text = b.text as string
  const followupChip = (b.followupChip as string | null | undefined) ?? null
  const followupText = (b.followupText as string | null | undefined) ?? null

  const userMessage = buildUserMessage(text, followupChip, followupText)

  // Build OpenAI client — API key only touches this scope
  let client: OpenAI
  try {
    client = new OpenAI({
      apiKey: env.OPENAI_API_KEY,
      timeout: 25000,
    })
  }
  catch {
    return jsonResponse({ error: 'service_error' }, 502)
  }

  try {
    // First attempt
    const first = await callOpenAI(client, userMessage)

    if (first.response !== null) {
      return jsonResponse(first.response, 200)
    }

    // One retry — include failure hint on the user turn only (never in system prompt).
    const retryMessage
      = `${userMessage}\n\nPrevious response failed validation: ${first.failures.join('; ')}. Please correct these issues.`
    const second = await callOpenAI(client, retryMessage)

    if (second.response !== null) {
      return jsonResponse(second.response, 200)
    }

    return jsonResponse({ error: 'service_error' }, 502)
  }
  catch {
    return jsonResponse({ error: 'service_error' }, 502)
  }
}
