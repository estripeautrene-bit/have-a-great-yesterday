import OpenAI from 'openai'
import { DOORWAY_SCHEMA, validateDoorwayResponse, type DoorwayApiResponse } from './_lib/schema'
import { SYSTEM_PROMPT, buildUserMessage } from './_lib/prompt'
import { validateInput } from './_lib/validate'

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
): Promise<DoorwayApiResponse | null> {
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
    if (validateDoorwayResponse(parsed)) {
      return parsed
    }
    return null
  }
  catch {
    return null
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
    let result = await callOpenAI(client, userMessage)

    // One retry if first attempt failed validation
    if (result === null) {
      result = await callOpenAI(client, userMessage)
    }

    if (result === null) {
      return jsonResponse({ error: 'service_error' }, 502)
    }

    return jsonResponse(result, 200)
  }
  catch {
    return jsonResponse({ error: 'service_error' }, 502)
  }
}
