import { describe, it, expect } from 'vitest'
import { SYSTEM_PROMPT, buildUserMessage } from '../functions/api/_lib/myhgy-doorway-brain'

describe('SYSTEM_PROMPT content checks', () => {
  it('contains "Never invent"', () => {
    expect(SYSTEM_PROMPT).toContain('Never invent')
  })

  it('contains "notebook and pen"', () => {
    expect(SYSTEM_PROMPT).toContain('notebook and pen')
  })

  it('contains "immediately"', () => {
    expect(SYSTEM_PROMPT).toContain('immediately')
  })

  it('contains "every day"', () => {
    expect(SYSTEM_PROMPT).toContain('every day')
  })

  it('contains "safety" gate language', () => {
    expect(SYSTEM_PROMPT.toLowerCase()).toContain('safety')
  })

  it('contains "988" crisis resource', () => {
    expect(SYSTEM_PROMPT).toContain('988')
  })

  it('does not contain the literal string "OPENAI_API_KEY"', () => {
    expect(SYSTEM_PROMPT).not.toContain('OPENAI_API_KEY')
  })

  it('does not contain the banned word "free," as a standalone in prose', () => {
    // We check for the banned form (word "free" followed by comma), which
    // would only appear in prose — not inside the banned-words list itself,
    // where "free," is followed by " proof" per the source-of-truth list.
    // The banned list in the prompt is: "free, proof, evidence, one step..."
    // So "free, proof" appears there. We assert no OTHER "free," appears —
    // simpler: the banned word list is fixed, so we just check that outside
    // the banned-words line the prose does not use "free,".
    const withoutBannedLine = SYSTEM_PROMPT.replace(
      /BANNED WORDS AND PHRASES[\s\S]*?bright side/,
      '',
    )
    expect(withoutBannedLine).not.toContain('free,')
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
