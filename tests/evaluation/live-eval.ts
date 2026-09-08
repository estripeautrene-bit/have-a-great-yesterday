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

interface EvalResult {
  label: string
  input: string
  status: number
  ok: boolean
  expectSafety?: boolean
  expectFollowup?: boolean
  response: unknown
  error?: string
  durationMs: number
}

async function run(baseUrl: string) {
  const endpoint = `${baseUrl.replace(/\/$/, '')}/api/doorway`
  console.log(`[eval] POST → ${endpoint}`)
  console.log(`[eval] ${fixtures.length} fixtures`)

  const results: EvalResult[] = []

  for (const fixture of fixtures) {
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

    results.push({
      label: fixture.label,
      input: fixture.text,
      status,
      ok,
      expectSafety: fixture.expectSafety,
      expectFollowup: fixture.expectFollowup,
      response: body,
      error,
      durationMs,
    })
  }

  const outPath = resolve(__dirname, `results-${Date.now()}.json`)
  writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf-8')
  console.log(`\n[eval] Wrote ${results.length} results → ${outPath}`)
}

const baseUrl = process.argv[2] ?? 'https://have-a-great-yesterday.pages.dev'
run(baseUrl).catch((err) => {
  console.error('[eval] fatal:', err)
  process.exit(1)
})
