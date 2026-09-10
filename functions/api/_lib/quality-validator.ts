// Pure TypeScript — no Cloudflare-specific imports.
// Content-quality checks layered on top of the structural schema validator.
// Governed by MyHGY™ Personalized Doorway SOP v1.1.0.

import { validateDoorwayResponse, type DoorwayApiResponse } from './schema'

export interface QualityResult {
  valid: boolean
  failures: string[]
  wordCount: number
}

export const BANNED_PHRASES = [
  'feel free',
  'proof',
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
  'rewiring',
  'dopamine',
  'guaranteed',
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

export function qualityCheck(response: DoorwayApiResponse, primaryInput?: string): QualityResult {
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
  if (combinedWords < 550 || combinedWords > 700) {
    failures.push(`word count out of range (550–700): got ${combinedWords}`)
  }

  // Banned phrases (case-insensitive)
  for (const phrase of BANNED_PHRASES) {
    if (containsPhrase(combined, phrase)) {
      failures.push(`banned phrase present: "${phrase}"`)
    }
  }

  const lowerCombined = combined.toLowerCase()

  // Core mechanics
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

  // SOP v1.1.0 — savoring step
  if (
    !lowerCombined.includes('savor')
    && !lowerCombined.includes('fully reach')
    && !lowerCombined.includes('reach you')
    && !lowerCombined.includes('let it fully')
    && !lowerCombined.includes('let the moment')
    && !lowerCombined.includes('let it land')
    && !lowerCombined.includes('land before')
  ) {
    failures.push('missing savoring step (no "savor", "let the moment", "reach you", "land before", "fully reach", etc.)')
  }

  // SOP v1.1.0 — repetition and consistency (two of four operating keys)
  if (!lowerCombined.includes('repetit') && !lowerCombined.includes('consisten')) {
    failures.push('missing repetition/consistency mechanic (no "repetit" or "consisten" root)')
  }

  // SOP v1.1.0 — continuity (third operating key)
  if (!lowerCombined.includes('continuity')) {
    failures.push('missing continuity mechanic (no "continuity")')
  }

  // SOP v1.1.0 — visibility (fourth operating key)
  if (!lowerCombined.includes('visib')) {
    failures.push('missing visibility mechanic (no "visib" root)')
  }

  // SOP v1.1.0 — explicit CAS destination: all three named
  const hasClarity = lowerCombined.includes('clarity')
  const hasAccuracy = lowerCombined.includes('accuracy')
  const hasSelfConfidence = lowerCombined.includes('self-confidence') || lowerCombined.includes('self confidence')
  if (!hasClarity || !hasAccuracy || !hasSelfConfidence) {
    const missing = [
      !hasClarity && 'Clarity',
      !hasAccuracy && 'Accuracy',
      !hasSelfConfidence && 'Self-Confidence',
    ].filter(Boolean).join(', ')
    failures.push(`missing CAS destination — response must explicitly name all three: Clarity, Accuracy, and Self-Confidence (missing: ${missing})`)
  }

  // Primary-situation drift: at least one meaningful word from the original input must appear in the response.
  // Guards against the follow-up chip overriding the visitor's actual stated situation.
  if (primaryInput && primaryInput.trim().length > 15) {
    const COMMON = new Set(['about', 'after', 'again', 'being', 'before', 'could', 'doing', 'every', 'going', 'going', 'having', 'still', 'their', 'there', 'these', 'those', 'through', 'under', 'where', 'which', 'while', 'would', 'really', 'since', 'think', 'wants', 'quite', 'maybe', 'never', 'start', 'feels', 'things', 'other', 'right', 'might', 'until', 'truly', 'shall'])
    const keyWords = primaryInput
      .toLowerCase()
      .replace(/[^a-z\s]/g, ' ')
      .split(/\s+/)
      .filter(w => w.length >= 5 && !COMMON.has(w))
      .slice(0, 8)
    if (keyWords.length >= 2 && !keyWords.some(w => lowerCombined.includes(w))) {
      failures.push(
        `primary-situation drift: none of the key words from the original input ("${keyWords.join('", "')}") appear in the response — the follow-up chip may have replaced the visitor's stated situation`,
      )
    }
  }

  // Markdown code fences
  if (combined.includes('```')) {
    failures.push('markdown code fences present')
  }

  // ContinuationBridge must not promise email delivery or mention Starting Point
  if (
    response.continuationBridge.length > 0
    && /email|starting point|inbox|sent to you/i.test(response.continuationBridge)
  ) {
    failures.push('continuationBridge contains email or delivery promise (remove "email", "Starting Point", "inbox", "sent to you")')
  }

  return { valid: failures.length === 0, failures, wordCount: combinedWords }
}
