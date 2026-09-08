// Pure TypeScript — no Cloudflare-specific imports.
// Content-quality checks layered on top of the structural schema validator.

import { validateDoorwayResponse, type DoorwayApiResponse } from './schema'

export interface QualityResult {
  valid: boolean
  failures: string[]
  wordCount: number
}

export const BANNED_PHRASES = [
  'free',
  'proof',
  'evidence',
  'one step at a time',
  "you're stronger than you think",
  "you've got this",
  'give yourself grace',
  'hold space',
  'journey',
  'season of life',
  'a small one counts',
  'something for me',
  'the hardest part',
  'silver lining',
  'look on the bright side',
  "you're not broken",
  'honor your journey',
  'in this season',
  'reframe',
  'lean into',
  'nervous system regulation',
  'your feelings are valid',
  'everything happens for a reason',
]

function combinedText(response: DoorwayApiResponse): string {
  const parts: string[] = [
    response.headline,
    response.opening,
    response.mechanism,
    response.practice,
    response.continuationBridge,
  ]
  for (const moment of response.moments) {
    parts.push(moment.title, moment.example, moment.meaning)
  }
  return parts.join('\n')
}

function wordCount(text: string): number {
  const trimmed = text.trim()
  if (trimmed.length === 0) return 0
  return trimmed.split(/\s+/).length
}

// Word-boundary check that respects apostrophes (so "free" won't match "freedom",
// but a leading punctuation like `"free"` still triggers).
function containsPhrase(text: string, phrase: string): boolean {
  const lowerText = text.toLowerCase()
  const lowerPhrase = phrase.toLowerCase()
  // Escape regex special characters
  const escaped = lowerPhrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  // Use \b at boundaries where the phrase begins/ends with a word char
  const startBoundary = /^\w/.test(lowerPhrase) ? '\\b' : ''
  const endBoundary = /\w$/.test(lowerPhrase) ? '\\b' : ''
  const re = new RegExp(`${startBoundary}${escaped}${endBoundary}`, 'i')
  return re.test(lowerText)
}

export function qualityCheck(response: DoorwayApiResponse): QualityResult {
  const failures: string[] = []

  // Structural
  if (!validateDoorwayResponse(response)) {
    return { valid: false, failures: ['structural: validateDoorwayResponse failed'], wordCount: 0 }
  }

  const isGuidance = response.kind === 'guidance'
  const followupNeeded = response.meta.followup_needed
  const safetyFlag = response.meta.safety_flag

  // For safety and followup responses: skip content checks
  if (!isGuidance || followupNeeded || safetyFlag) {
    return { valid: true, failures: [], wordCount: 0 }
  }

  // Guidance content checks
  if (response.moments.length !== 3) {
    failures.push(`moments count: expected 3, got ${response.moments.length}`)
  }

  const combined = combinedText(response)
  const combinedWords = wordCount(combined)
  if (combinedWords < 230 || combinedWords > 330) {
    failures.push(`word count out of range (230–330): got ${combinedWords}`)
  }

  // Banned phrases (case-insensitive)
  for (const phrase of BANNED_PHRASES) {
    if (containsPhrase(combined, phrase)) {
      failures.push(`banned phrase present: "${phrase}"`)
    }
  }

  // Mechanic checks
  const lowerCombined = combined.toLowerCase()
  if (!lowerCombined.includes('notic')) {
    failures.push('missing noticing mechanic (no "notic" root)')
  }
  if (
    !lowerCombined.includes('write')
    && !lowerCombined.includes('writing')
    && !lowerCombined.includes('written')
    && !lowerCombined.includes('captur')
  ) {
    failures.push('missing writing mechanic (no "write/writing/written/captur")')
  }
  if (
    !lowerCombined.includes('every day')
    && !lowerCombined.includes('daily')
    && !lowerCombined.includes('each day')
  ) {
    failures.push('missing daily repetition mechanic (no "every day/daily/each day")')
  }

  // Markdown code fences
  if (combined.includes('```')) {
    failures.push('markdown code fences present')
  }

  return { valid: failures.length === 0, failures, wordCount: combinedWords }
}
