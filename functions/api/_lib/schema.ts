// Pure TypeScript — no Cloudflare-specific imports.
// Defines the OpenAI JSON Schema for Structured Outputs and a runtime validator.

export interface MomentItem {
  title: string
  example: string
  meaning: string
}

export interface DoorwayApiResponse {
  kind: 'guidance' | 'safety'
  headline: string
  opening: string
  mechanism: string
  moments: MomentItem[]
  practice: string
  continuationBridge: string
  meta: {
    safety_flag: boolean
    followup_needed: boolean
    word_count: number
  }
}

// OpenAI JSON Schema for Structured Outputs (strict mode).
// All objects have additionalProperties: false. All fields required.
export const DOORWAY_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: [
    'kind',
    'headline',
    'opening',
    'mechanism',
    'moments',
    'practice',
    'continuationBridge',
    'meta',
  ],
  properties: {
    kind: { type: 'string', enum: ['guidance', 'safety'] },
    headline: { type: 'string' },
    opening: { type: 'string' },
    mechanism: { type: 'string' },
    moments: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['title', 'example', 'meaning'],
        properties: {
          title: { type: 'string' },
          example: { type: 'string' },
          meaning: { type: 'string' },
        },
      },
    },
    practice: { type: 'string' },
    continuationBridge: { type: 'string' },
    meta: {
      type: 'object',
      additionalProperties: false,
      required: ['safety_flag', 'followup_needed', 'word_count'],
      properties: {
        safety_flag: { type: 'boolean' },
        followup_needed: { type: 'boolean' },
        word_count: { type: 'number' },
      },
    },
  },
} as const

function isMomentItem(v: unknown): v is MomentItem {
  if (typeof v !== 'object' || v === null) return false
  const m = v as Record<string, unknown>
  return (
    typeof m.title === 'string'
    && typeof m.example === 'string'
    && typeof m.meaning === 'string'
  )
}

export function validateDoorwayResponse(value: unknown): value is DoorwayApiResponse {
  if (typeof value !== 'object' || value === null) return false
  const v = value as Record<string, unknown>

  // Top-level fields
  if (v.kind !== 'guidance' && v.kind !== 'safety') return false
  if (typeof v.headline !== 'string') return false
  if (typeof v.opening !== 'string') return false
  if (typeof v.mechanism !== 'string') return false
  if (!Array.isArray(v.moments)) return false
  if (typeof v.practice !== 'string') return false
  if (typeof v.continuationBridge !== 'string') return false
  if (typeof v.meta !== 'object' || v.meta === null) return false

  // Meta fields
  const meta = v.meta as Record<string, unknown>
  if (typeof meta.safety_flag !== 'boolean') return false
  if (typeof meta.followup_needed !== 'boolean') return false
  if (typeof meta.word_count !== 'number') return false

  // Moment array items
  if (!v.moments.every(isMomentItem)) return false

  // Moment count rules
  const isGuidance = v.kind === 'guidance'
  const followupNeeded = meta.followup_needed
  const safetyFlag = meta.safety_flag

  if (isGuidance && !followupNeeded && !safetyFlag) {
    // Guidance path with no gates: exactly 3 moments required.
    if (v.moments.length !== 3) return false
  }
  // When followup_needed or safety_flag is true: moments can be empty (or non-empty; not enforced here).

  return true
}
