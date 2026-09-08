// Pure TypeScript — no Cloudflare-specific imports.
// Defines the OpenAI JSON Schema for Structured Outputs and a runtime validator.

export interface TerrainItem {
  title: string
  kind_of_moment: string
  privacy_note: string | null
  be_ready: string
  source_span: string
}

export interface DoorwayApiResponse {
  opening: string
  terrains: TerrainItem[]
  closing: string
  meta: {
    terrains_detected: number
    used_followup: boolean
    safety_flag: boolean
    followup_needed: boolean
  }
}

// OpenAI JSON Schema for Structured Outputs (strict mode).
// All objects have additionalProperties: false.
// Nullable strings use anyOf: [{type:'string'},{type:'null'}] as required by strict mode.
export const DOORWAY_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['opening', 'terrains', 'closing', 'meta'],
  properties: {
    opening: { type: 'string' },
    terrains: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['title', 'kind_of_moment', 'privacy_note', 'be_ready', 'source_span'],
        properties: {
          title: { type: 'string' },
          kind_of_moment: { type: 'string' },
          privacy_note: { anyOf: [{ type: 'string' }, { type: 'null' }] },
          be_ready: { type: 'string' },
          source_span: { type: 'string' },
        },
      },
    },
    closing: { type: 'string' },
    meta: {
      type: 'object',
      additionalProperties: false,
      required: ['terrains_detected', 'used_followup', 'safety_flag', 'followup_needed'],
      properties: {
        terrains_detected: { type: 'number' },
        used_followup: { type: 'boolean' },
        safety_flag: { type: 'boolean' },
        followup_needed: { type: 'boolean' },
      },
    },
  },
} as const

function isTerrainItem(v: unknown): v is TerrainItem {
  if (typeof v !== 'object' || v === null) return false
  const t = v as Record<string, unknown>
  return (
    typeof t.title === 'string'
    && typeof t.kind_of_moment === 'string'
    && (t.privacy_note === null || typeof t.privacy_note === 'string')
    && typeof t.be_ready === 'string'
    && typeof t.source_span === 'string'
  )
}

export function validateDoorwayResponse(value: unknown): value is DoorwayApiResponse {
  if (typeof value !== 'object' || value === null) return false
  const v = value as Record<string, unknown>

  // Top-level fields
  if (typeof v.opening !== 'string') return false
  if (!Array.isArray(v.terrains)) return false
  if (typeof v.closing !== 'string') return false
  if (typeof v.meta !== 'object' || v.meta === null) return false

  // Meta fields
  const meta = v.meta as Record<string, unknown>
  if (typeof meta.terrains_detected !== 'number') return false
  if (typeof meta.used_followup !== 'boolean') return false
  if (typeof meta.safety_flag !== 'boolean') return false
  if (typeof meta.followup_needed !== 'boolean') return false

  // Terrain array items
  if (!v.terrains.every(isTerrainItem)) return false

  // Terrain count rules
  if (!meta.followup_needed) {
    // When followup is not needed, must have 2 or 3 terrains
    if (v.terrains.length < 2 || v.terrains.length > 3) return false
  }
  // When followup_needed is true, terrains can be empty

  return true
}
