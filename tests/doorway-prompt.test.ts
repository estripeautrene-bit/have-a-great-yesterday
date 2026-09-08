import { describe, it, expect } from 'vitest'
import { SYSTEM_PROMPT, MYHGY_DOORWAY_BRAIN_VERSION, buildUserMessage } from '../functions/api/_lib/myhgy-doorway-brain'

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

  it('bans the canned phrase "feel free" in the BANNED WORDS section', () => {
    const bannedSection = SYSTEM_PROMPT.match(/BANNED WORDS AND PHRASES[\s\S]*/)
    expect(bannedSection?.[0]).toMatch(/feel free/i)
  })

  // ── Canon section 2 — governing belief ──────────────────────────────────

  it('contains "personal development deserves a practice" governing belief', () => {
    expect(SYSTEM_PROMPT.toLowerCase()).toContain('personal development deserves a practice')
  })

  // ── Canon section 3 — canonical practice ────────────────────────────────

  it('requires at least three good things (≥3)', () => {
    expect(SYSTEM_PROMPT).toMatch(/at least three|three.*minimum/i)
  })

  it('specifies noticing while happening', () => {
    expect(SYSTEM_PROMPT).toMatch(/notic\w* .{0,30}happen/i)
  })

  it('specifies writing immediately', () => {
    expect(SYSTEM_PROMPT).toMatch(/write .{0,20}immediately|immediately .{0,20}write/i)
  })

  it('specifies repeating every day / daily', () => {
    expect(SYSTEM_PROMPT).toMatch(/repeat .{0,20}every day|repeat .{0,20}daily/i)
  })

  it('specifies carrying a small notebook and pen', () => {
    expect(SYSTEM_PROMPT).toMatch(/small notebook and pen/i)
  })

  it('specifies that later review is optional', () => {
    expect(SYSTEM_PROMPT).toMatch(/review.{0,20}optional|optional.{0,20}review/i)
  })

  // ── Canon section 6 — not gratitude journaling ──────────────────────────

  it('explicitly states it is not gratitude journaling', () => {
    expect(SYSTEM_PROMPT).toMatch(/not gratitude journal/i)
  })

  // ── Canon section 7 — no unsupported claims ─────────────────────────────

  it('bans "rewiring" claims in the prompt', () => {
    expect(SYSTEM_PROMPT).toMatch(/rewiring/i)
    // Must appear in the banned list, not as a positive claim
    const bannedSection = SYSTEM_PROMPT.match(/BANNED WORDS[\s\S]*/)
    expect(bannedSection?.[0]).toMatch(/rewiring/i)
  })

  it('bans "dopamine changes" claims in the prompt', () => {
    const bannedSection = SYSTEM_PROMPT.match(/BANNED WORDS[\s\S]*/)
    expect(bannedSection?.[0]).toMatch(/dopamine/i)
  })

  it('bans "guaranteed" claims in the prompt', () => {
    const bannedSection = SYSTEM_PROMPT.match(/BANNED WORDS[\s\S]*/)
    expect(bannedSection?.[0]).toMatch(/guaranteed/i)
  })

  // ── Canon section 8 — MyDopa separation ────────────────────────────────

  it('instructs continuationBridge must not mention MyDopa', () => {
    expect(SYSTEM_PROMPT).toMatch(/[Dd]o not mention MyDopa|not mention MyDopa|[Mm]y[Dd]opa.*[Ss]eparation|[Dd]oes not mention MyDopa/i)
  })

  // ── Canon section 9 — no external authors ───────────────────────────────

  it('prohibits citing external authors', () => {
    expect(SYSTEM_PROMPT).toMatch(/external author|no.*author|Do not cite/i)
  })

  // ── Voice — plain language instruction ──────────────────────────────────

  it('instructs plain/ordinary language at ~7th grade level', () => {
    expect(SYSTEM_PROMPT).toMatch(/7th grade|thirteen.year.old|ordinary words/i)
  })

  // ── Safety branch is separate and distinct ──────────────────────────────

  it('safety branch is a distinct numbered rule (RULE 6)', () => {
    expect(SYSTEM_PROMPT).toContain('RULE 6 — SAFETY GATE')
  })

  it('safety response must set kind to "safety"', () => {
    expect(SYSTEM_PROMPT).toMatch(/set kind to .safety./i)
  })

  // ── Version export ───────────────────────────────────────────────────────

  it('exports MYHGY_DOORWAY_BRAIN_VERSION as "1.0.0"', () => {
    expect(MYHGY_DOORWAY_BRAIN_VERSION).toBe('1.0.0')
  })

  // ── New situations: gambling, procrastination, pornography, anxiety ──────

  it('contains gambling guidance positioned as supportive practice not treatment', () => {
    expect(SYSTEM_PROMPT.toLowerCase()).toContain('gambling')
    // Must explicitly state it is alongside, not a replacement for, specialized help
    const gamblingBlock = SYSTEM_PROMPT.match(/compulsive gambling[\s\S]{0,600}/)
    expect(gamblingBlock?.[0]).toMatch(/not a replacement for|alongside.*not|Gamblers Anonymous/i)
  })

  it('gambling guidance names a recognized specialized resource', () => {
    const gamblingBlock = SYSTEM_PROMPT.match(/compulsive gambling[\s\S]{0,600}/)
    expect(gamblingBlock?.[0]).toMatch(/Gamblers Anonymous|counseling|treatment program/i)
  })

  it('gambling guidance explicitly prohibits claiming MyHGY treats gambling disorder', () => {
    const gamblingBlock = SYSTEM_PROMPT.match(/With compulsive gambling:[\s\S]{0,800}/)
    expect(gamblingBlock?.[0]).toMatch(/Never claim MyHGY treats gambling/i)
  })

  it('contains procrastination guidance', () => {
    expect(SYSTEM_PROMPT).toMatch(/procrastinat/i)
  })

  it('procrastination guidance names observable moments (task started, decision made)', () => {
    const procBlock = SYSTEM_PROMPT.match(/With procrastination[\s\S]{0,600}/)
    expect(procBlock?.[0]).toMatch(/task started|decision made|moved forward/i)
  })

  it('contains pornography guidance positioned as supportive practice not treatment', () => {
    expect(SYSTEM_PROMPT).toMatch(/pornograph/i)
    const pornBlock = SYSTEM_PROMPT.match(/With compulsive pornograph[\s\S]{0,800}/)
    expect(pornBlock?.[0]).toMatch(/not a replacement for|professional support|recovery program/i)
  })

  it('pornography guidance explicitly prohibits claiming MyHGY treats sexual compulsion', () => {
    const pornBlock = SYSTEM_PROMPT.match(/With compulsive pornograph[\s\S]{0,800}/)
    expect(pornBlock?.[0]).toMatch(/Never claim MyHGY treats sexual compulsion/i)
  })

  it('contains anxiety or overwhelm guidance', () => {
    expect(SYSTEM_PROMPT).toMatch(/anxiety or overwhelm/i)
  })

  it('anxiety guidance prohibits diagnosing or claiming MyHGY treats anxiety disorders', () => {
    const anxBlock = SYSTEM_PROMPT.match(/With anxiety or overwhelm:[\s\S]{0,600}/)
    expect(anxBlock?.[0]).toMatch(/Do not diagnose anxiety|claim MyHGY treats anxiety/i)
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
