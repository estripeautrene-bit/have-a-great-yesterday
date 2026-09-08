import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')

function readSource(relativePath: string): string {
  return readFileSync(resolve(root, relativePath), 'utf-8')
}

describe('API key safety', () => {
  it('composable does not contain literal "OPENAI_API_KEY"', () => {
    const source = readSource('app/composables/useDoorwaySession.ts')
    expect(source).not.toContain('OPENAI_API_KEY')
  })

  it('prompt file does not contain literal "OPENAI_API_KEY"', () => {
    const source = readSource('functions/api/_lib/prompt.ts')
    expect(source).not.toContain('OPENAI_API_KEY')
  })

  it('doorway function does not contain any "sk-" prefix (no hardcoded key)', () => {
    const source = readSource('functions/api/doorway.ts')
    // sk- is the OpenAI key prefix — should never appear as a literal in source
    expect(source).not.toMatch(/['"`]sk-/)
  })

  it('composable only reaches the API via the relative URL /api/doorway', () => {
    const source = readSource('app/composables/useDoorwaySession.ts')
    expect(source).toContain('/api/doorway')
    // Must not contain any absolute URL pointing to an external API
    expect(source).not.toContain('api.openai.com')
    expect(source).not.toContain('openai.com')
  })

  it('schema file does not contain literal "OPENAI_API_KEY"', () => {
    const source = readSource('functions/api/_lib/schema.ts')
    expect(source).not.toContain('OPENAI_API_KEY')
  })

  it('validate file does not contain literal "OPENAI_API_KEY"', () => {
    const source = readSource('functions/api/_lib/validate.ts')
    expect(source).not.toContain('OPENAI_API_KEY')
  })
})
