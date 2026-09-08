// Live evaluation against the deployed API.
// Usage: npx tsx tests/evaluation/live-eval.ts [base-url]
// Example: npx tsx tests/evaluation/live-eval.ts https://have-a-great-yesterday.pages.dev
// Output: tests/evaluation/results-<timestamp>.json
// NEVER run in CI. Use only manually to review response quality.
// Does not require or use OPENAI_API_KEY — calls the deployed public endpoint.
// DO NOT COMMIT results-*.json

import { fixtures } from './fixtures.js'
import { writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

/**
 * 7-dimension pass/fail scoring for non-safety, non-followup guidance responses.
 * Each dimension is scored true (pass) or false (fail) based on response content.
 *
 * Dimensions:
 * 1. recognizes visitor's actual situation without inventing facts
 * 2. explains correct MyHGY theory (deliberate notice + immediate writing + daily repetition → clarity)
 * 3. gives three credible situation-specific moments
 * 4. teaches notice-now + immediate writing + ≥3/day + daily repetition
 * 5. uses plain human language without therapy-speak
 * 6. stays within claims and professional boundaries (no rewiring/dopamine/guaranteed)
 * 7. creates natural desire to continue MyHGY without pitching MyDopa
 */
interface DimensionScores {
  d1_recognizes_situation: boolean | null
  d2_explains_myhgy_theory: boolean | null
  d3_three_specific_moments: boolean | null
  d4_practice_mechanics: boolean | null
  d5_plain_language: boolean | null
  d6_claims_boundaries: boolean | null
  d7_continues_without_mydopa: boolean | null
}

function scoreDimensions(response: unknown): DimensionScores | null {
  if (typeof response !== 'object' || response === null) return null
  const r = response as Record<string, unknown>
  if (r.kind !== 'guidance') return null
  const meta = r.meta as Record<string, unknown> | undefined
  if (meta?.safety_flag === true || meta?.followup_needed === true) return null

  const allText = [
    r.headline,
    r.opening,
    r.mechanism,
    r.practice,
    r.continuationBridge,
    ...(Array.isArray(r.moments) ? r.moments.flatMap((m: Record<string, unknown>) => [m.title, m.example, m.meaning]) : []),
  ].filter(Boolean).join('\n').toLowerCase()

  const THERAPY_SPEAK = [
    'you\'re not broken', 'honor your journey', 'in this season', 'reframe', 'lean into',
    'nervous system regulation', 'your feelings are valid', 'everything happens for a reason',
    'give yourself grace', 'hold space', 'journey', 'season of life', 'silver lining',
    'look on the bright side', 'you\'re stronger than you think', 'you\'ve got this',
  ]
  const BOUNDARY_VIOLATIONS = ['rewiring', 'dopamine changes', 'guaranteed', 'rewire your brain']

  return {
    d1_recognizes_situation: typeof r.opening === 'string' && r.opening.length > 20,
    d2_explains_myhgy_theory: allText.includes('notic') && (allText.includes('write') || allText.includes('captur')),
    d3_three_specific_moments: Array.isArray(r.moments) && r.moments.length === 3,
    d4_practice_mechanics: (
      allText.includes('notic') &&
      (allText.includes('immediately') || allText.includes('right away')) &&
      (allText.includes('every day') || allText.includes('daily') || allText.includes('each day')) &&
      (allText.includes('three') || allText.includes('3'))
    ),
    d5_plain_language: !THERAPY_SPEAK.some(phrase => allText.includes(phrase.toLowerCase())),
    d6_claims_boundaries: !BOUNDARY_VIOLATIONS.some(phrase => allText.includes(phrase.toLowerCase())),
    d7_continues_without_mydopa: (
      typeof r.continuationBridge === 'string' &&
      r.continuationBridge.length > 0 &&
      !r.continuationBridge.toLowerCase().includes('mydopa')
    ),
  }
}

interface EvalResult {
  label: string
  input: string
  status: number
  ok: boolean
  expectSafety?: boolean
  expectFollowup?: boolean
  response: unknown
  debug: unknown
  dimensionScores: DimensionScores | null
  error?: string
  durationMs: number
}

async function run(baseUrl: string, labelFilter: Set<string> | null) {
  const endpoint = `${baseUrl.replace(/\/$/, '')}/api/doorway`
  const activeFixtures = labelFilter ? fixtures.filter(f => labelFilter.has(f.label)) : fixtures
  console.log(`[eval] POST → ${endpoint}`)
  console.log(`[eval] ${activeFixtures.length} fixtures${labelFilter ? ` (filtered: ${[...labelFilter].join(',')})` : ''}`)

  const results: EvalResult[] = []

  for (const fixture of activeFixtures) {
    const t0 = Date.now()
    let status = 0
    let ok = false
    let body: unknown = null
    let error: string | undefined

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: fixture.text, source: 'eval' }),
      })
      status = res.status
      ok = res.ok
      try {
        body = await res.json()
      }
      catch {
        body = await res.text()
      }
    }
    catch (e) {
      error = e instanceof Error ? e.message : String(e)
    }

    const durationMs = Date.now() - t0
    console.log(`[${status || 'ERR'}] ${fixture.label} (${durationMs}ms)`)

    const debugField = (!ok && typeof body === 'object' && body !== null)
      ? (body as Record<string, unknown>).debug ?? null
      : null

    results.push({
      label: fixture.label,
      input: fixture.text,
      status,
      ok,
      expectSafety: fixture.expectSafety,
      expectFollowup: fixture.expectFollowup,
      response: body,
      debug: debugField,
      dimensionScores: ok ? scoreDimensions(body) : null,
      error,
      durationMs,
    })
  }

  const outPath = resolve(__dirname, `results-${Date.now()}.json`)
  writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf-8')
  console.log(`\n[eval] Wrote ${results.length} results → ${outPath}`)
}

const baseUrl = process.argv[2] ?? 'https://have-a-great-yesterday.pages.dev'
const labelsArg = process.argv.find(a => a.startsWith('--labels='))
const labelFilter: Set<string> | null = labelsArg
  ? new Set(labelsArg.slice('--labels='.length).split(','))
  : null

run(baseUrl, labelFilter).catch((err) => {
  console.error('[eval] fatal:', err)
  process.exit(1)
})
