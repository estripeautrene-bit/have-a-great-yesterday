// Cloudflare Pages Function — POST /api/capture-email
// Never logs firstName, email, or any visitor input.

interface Env {
  LOOPS_API_KEY?: string
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

export async function onRequest(context: { request: Request; env: Env }): Promise<Response> {
  const { request, env } = context

  // CORS preflight
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

  if (typeof body !== 'object' || body === null || Array.isArray(body)) {
    return jsonResponse({ error: 'invalid_body' }, 422)
  }

  const b = body as Record<string, unknown>

  if (typeof b.firstName !== 'string' || b.firstName.trim().length === 0) {
    return jsonResponse({ error: 'invalid_first_name' }, 422)
  }
  if (typeof b.email !== 'string' || b.email.trim().length === 0 || !b.email.includes('@')) {
    return jsonResponse({ error: 'invalid_email' }, 422)
  }
  if (b.consent !== true) {
    return jsonResponse({ error: 'consent_required' }, 422)
  }

  const firstName = b.firstName.trim()
  const email = b.email.trim()

  if (!env.LOOPS_API_KEY) {
    return jsonResponse({ error: 'service_misconfigured' }, 502)
  }

  try {
    const res = await fetch('https://app.loops.so/api/v1/contacts/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${env.LOOPS_API_KEY}`,
      },
      body: JSON.stringify({
        email,
        firstName,
        source: 'doorway',
        mailingLists: {},
      }),
    })
    if (!res.ok) {
      return jsonResponse({ error: 'capture_failed' }, 502)
    }
    return jsonResponse({ ok: true }, 200)
  }
  catch {
    return jsonResponse({ error: 'capture_failed' }, 502)
  }
}
