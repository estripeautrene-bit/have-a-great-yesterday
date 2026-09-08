import { describe, it, expect } from 'vitest'
import { SYSTEM_PROMPT, buildUserMessage } from '../functions/api/_lib/prompt'

describe('SYSTEM_PROMPT content checks', () => {
  it('contains "Never invent"', () => {
    expect(SYSTEM_PROMPT).toContain('Never invent')
  })

  it('contains "facts the visitor actually"', () => {
    expect(SYSTEM_PROMPT).toContain('facts the visitor actually')
  })

  it('contains "source_span"', () => {
    expect(SYSTEM_PROMPT).toContain('source_span')
  })

  it('contains "notebook and pen"', () => {
    expect(SYSTEM_PROMPT).toContain('notebook and pen')
  })

  it('does not contain the literal string "OPENAI_API_KEY"', () => {
    expect(SYSTEM_PROMPT).not.toContain('OPENAI_API_KEY')
  })
})

describe('buildUserMessage', () => {
  it('with text only — contains the text', () => {
    const msg = buildUserMessage('I work at a library.', null, null)
    expect(msg).toContain('I work at a library.')
  })

  it('with text and chip — contains both', () => {
    const msg = buildUserMessage('I work at a library.', 'mornings', null)
    expect(msg).toContain('I work at a library.')
    expect(msg).toContain('mornings')
  })

  it('with text and followup text — contains both', () => {
    const msg = buildUserMessage('I work at a library.', null, 'quiet afternoons')
    expect(msg).toContain('I work at a library.')
    expect(msg).toContain('quiet afternoons')
  })

  it('with all three — contains all three', () => {
    const msg = buildUserMessage('I work at a library.', 'mornings', 'quiet afternoons')
    expect(msg).toContain('I work at a library.')
    expect(msg).toContain('mornings')
    expect(msg).toContain('quiet afternoons')
  })

  it('does not contain "OPENAI_API_KEY"', () => {
    const msg = buildUserMessage('I work at a school.', null, null)
    expect(msg).not.toContain('OPENAI_API_KEY')
  })

  it('with empty chip string — does not include chip section', () => {
    const msg = buildUserMessage('I work at a school.', '', null)
    expect(msg).not.toContain('Followup chip selected:')
  })

  it('with empty followup text — does not include followup text section', () => {
    const msg = buildUserMessage('I work at a school.', null, '')
    expect(msg).not.toContain('Followup free text:')
  })
})
