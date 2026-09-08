// Pure TypeScript — no Cloudflare-specific imports.
// Input validation for the doorway API endpoint.

export const MAX_TEXT_LENGTH = 2000

/**
 * Validates the request body for /api/doorway.
 * Returns null if valid, or an error message string if invalid.
 */
export function validateInput(body: unknown): string | null {
  if (typeof body !== 'object' || body === null || Array.isArray(body)) {
    return 'Request body must be a JSON object.'
  }

  const b = body as Record<string, unknown>

  if (typeof b.text !== 'string') {
    return 'Field "text" is required and must be a string.'
  }

  if (b.text.trim().length === 0) {
    return 'Field "text" must not be empty.'
  }

  if (b.text.length > MAX_TEXT_LENGTH) {
    return `Field "text" must not exceed ${MAX_TEXT_LENGTH} characters.`
  }

  if (b.followupChip !== undefined && b.followupChip !== null) {
    if (typeof b.followupChip !== 'string') {
      return 'Field "followupChip", if present and non-null, must be a string.'
    }
  }

  if (b.followupText !== undefined && b.followupText !== null) {
    if (typeof b.followupText !== 'string') {
      return 'Field "followupText", if present and non-null, must be a string.'
    }
  }

  if (b.situationCard !== undefined && b.situationCard !== null) {
    if (typeof b.situationCard !== 'string') {
      return 'Field "situationCard", if present and non-null, must be a string.'
    }
  }

  if (b.followupSkipped !== undefined && b.followupSkipped !== null) {
    if (typeof b.followupSkipped !== 'boolean') {
      return 'Field "followupSkipped", if present and non-null, must be a boolean.'
    }
  }

  return null
}
