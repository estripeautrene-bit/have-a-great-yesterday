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

  it('exports MYHGY_DOORWAY_BRAIN_VERSION as "3.0.0"', () => {
    expect(MYHGY_DOORWAY_BRAIN_VERSION).toBe('3.0.0')
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

  // ── CAS destination ──────────────────────────────────────────────────────

  it('contains "Clarity, Accuracy, Self-Confidence" (CAS) as the destination', () => {
    expect(SYSTEM_PROMPT).toMatch(/Clarity, Accuracy, and Self-Confidence|CAS/i)
  })

  it('contains "confidence comes from evidence" as a locked principle', () => {
    expect(SYSTEM_PROMPT.toLowerCase()).toContain('confidence comes from evidence')
  })

  it('defines Clarity explicitly in the prompt', () => {
    expect(SYSTEM_PROMPT).toMatch(/Clarity means seeing/i)
  })

  it('defines Accuracy explicitly in the prompt', () => {
    expect(SYSTEM_PROMPT).toMatch(/Accuracy means separating/i)
  })

  it('defines Self-Confidence explicitly in the prompt', () => {
    expect(SYSTEM_PROMPT).toMatch(/Self-Confidence means having lived evidence/i)
  })

  // ── Four operating keys ──────────────────────────────────────────────────

  it('contains "repetition" as one of the four operating keys', () => {
    expect(SYSTEM_PROMPT).toMatch(/FOUR OPERATING KEYS|four operating keys/i)
    expect(SYSTEM_PROMPT).toMatch(/repetition/i)
  })

  it('contains "consistency" as one of the four operating keys', () => {
    expect(SYSTEM_PROMPT).toMatch(/consistency/i)
  })

  it('contains "continuity" as one of the four operating keys', () => {
    expect(SYSTEM_PROMPT).toMatch(/continuity/i)
  })

  it('contains "visibility" as one of the four operating keys', () => {
    expect(SYSTEM_PROMPT).toMatch(/visibility/i)
  })

  it('Job 4 requires the four operating keys and savoring', () => {
    const job4 = SYSTEM_PROMPT.match(/Job 4[\s\S]{0,500}/)
    expect(job4?.[0]).toMatch(/repetition/i)
    expect(job4?.[0]).toMatch(/consistency/i)
    expect(job4?.[0]).toMatch(/continuity/i)
    expect(job4?.[0]).toMatch(/visibility/i)
    expect(job4?.[0]).toMatch(/savor/i)
  })

  it('Job 3 explicitly requires defining CAS in the visitor context', () => {
    const job3 = SYSTEM_PROMPT.match(/Job 3[\s\S]{0,400}/)
    expect(job3?.[0]).toMatch(/Clarity, Accuracy, and Self-Confidence/i)
    expect(job3?.[0]).toMatch(/define|what.*means/i)
  })

  // ── Savoring ─────────────────────────────────────────────────────────────

  it('contains savoring / letting the moment land', () => {
    expect(SYSTEM_PROMPT).toMatch(/savor|let the moment.{0,30}reach|let it land/i)
  })

  it('savoring section uses the canonical phrase "Let the good moment fully reach you"', () => {
    expect(SYSTEM_PROMPT).toMatch(/Let the good moment fully reach you/i)
  })

  // ── Seven required jobs ──────────────────────────────────────────────────

  it('contains all seven required jobs', () => {
    expect(SYSTEM_PROMPT).toMatch(/THE SEVEN REQUIRED JOBS|seven required jobs/i)
    expect(SYSTEM_PROMPT).toMatch(/Job 1/i)
    expect(SYSTEM_PROMPT).toMatch(/Job 2/i)
    expect(SYSTEM_PROMPT).toMatch(/Job 3/i)
    expect(SYSTEM_PROMPT).toMatch(/Job 4/i)
    expect(SYSTEM_PROMPT).toMatch(/Job 5/i)
    expect(SYSTEM_PROMPT).toMatch(/Job 6/i)
    expect(SYSTEM_PROMPT).toMatch(/Job 7/i)
  })

  // ── Word count guidance ───────────────────────────────────────────────────

  it('contains word count guidance for 550–700 actual words', () => {
    expect(SYSTEM_PROMPT).toMatch(/550.{0,5}700/i)
  })

  // ── Two speeds and value bridge ──────────────────────────────────────────

  it('contains two connected speeds concept', () => {
    expect(SYSTEM_PROMPT).toMatch(/TWO CONNECTED SPEEDS|two connected speeds/i)
  })

  it('contains value bridge arc', () => {
    expect(SYSTEM_PROMPT).toMatch(/VALUE BRIDGE|value bridge/i)
  })

  it('VALUE BRIDGE arc includes old-story displacement and ability to keep moving toward', () => {
    const bridge = SYSTEM_PROMPT.match(/THE VALUE BRIDGE[\s\S]{0,800}/)
    expect(bridge?.[0]).toMatch(/self-story|incomplete.*story|old.*story/i)
    expect(bridge?.[0]).toMatch(/make choices|keep moving toward/i)
  })

  // ── Never Negative ────────────────────────────────────────────────────────

  it('contains NEVER NEGATIVE rule', () => {
    expect(SYSTEM_PROMPT).toMatch(/NEVER NEGATIVE/i)
  })

  it('NEVER NEGATIVE rule instructs not making pain the destination or identity', () => {
    const neverNeg = SYSTEM_PROMPT.match(/NEVER NEGATIVE[\s\S]{0,500}/)
    expect(neverNeg?.[0]).toMatch(/identity|destination/i)
  })

  // ── Output format ─────────────────────────────────────────────────────────

  it('continuationBridge output format does not instruct the model to invite email entry', () => {
    const outputSection = SYSTEM_PROMPT.match(/OUTPUT FORMAT[\s\S]*/)
    // Old form was "entering their name and email" — must be gone
    expect(outputSection?.[0]).not.toMatch(/entering.{0,30}email|enter.{0,30}name and email/i)
  })

  it('RULE 7 explicitly prohibits email mention in continuationBridge', () => {
    const rule7 = SYSTEM_PROMPT.match(/RULE 7[\s\S]{0,500}/)
    expect(rule7?.[0]).toMatch(/email/i)
  })

  it('moment meaning spec requires evidence function', () => {
    const outputSection = SYSTEM_PROMPT.match(/OUTPUT FORMAT[\s\S]*/)
    const meaningSpec = outputSection?.[0].match(/meaning:[\s\S]{0,300}/)
    expect(meaningSpec?.[0]).toMatch(/evidence|proves|what.{0,20}show/i)
  })

  it('continuationBridge spec requires naming what the practice builds', () => {
    const outputSection = SYSTEM_PROMPT.match(/OUTPUT FORMAT[\s\S]*/)
    const bridgeSpec = outputSection?.[0].match(/continuationBridge:[\s\S]{0,500}/)
    expect(bridgeSpec?.[0]).toMatch(/more accurate|fuller.*record|confidence.*grows|what.*builds/i)
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

// ── Card submission routing ──────────────────────────────────────────────────

const SITUATION_CARDS = [
  'I have ADD or ADHD.',
  "I'm getting divorced.",
  'I stopped drinking.',
  'I lost my job.',
  'Someone I love died.',
  'I am overweight.',
  'I am depressed.',
  'I feel behind in life.',
  "I can't stop gambling.",
  'I keep putting things off.',
  'Porn is affecting my life.',
  'I feel anxious or overwhelmed.',
] as const

describe('buildUserMessage — all 12 situation cards bypass followup gate', () => {
  for (const card of SITUATION_CARDS) {
    it(`card "${card}" includes SITUATION CARD marker`, () => {
      const msg = buildUserMessage(card, null, null, card)
      expect(msg).toContain('SITUATION CARD:')
      expect(msg).toContain(card)
    })

    it(`card "${card}" does not include followup chip section`, () => {
      const msg = buildUserMessage(card, null, null, card)
      expect(msg).not.toContain('Followup chip selected:')
    })
  }

  it('card submission includes directive against followup_needed', () => {
    const msg = buildUserMessage('I have ADD or ADHD.', null, null, 'I have ADD or ADHD.')
    expect(msg).toMatch(/do not set followup_needed to true/i)
  })

  it('typed entry without a card does not include SITUATION CARD marker', () => {
    const msg = buildUserMessage('I work at a school and I have two kids.', null, null, null)
    expect(msg).not.toContain('SITUATION CARD:')
  })

  it('typed entry without a card starts with Visitor input:', () => {
    const msg = buildUserMessage('I work at a school and I have two kids.', null, null, null)
    expect(msg).toMatch(/^Visitor input:/)
  })
})

// ── Follow-up chip buttons and skip ─────────────────────────────────────────

const FOLLOWUP_CHIPS = ['Work', 'The kids / family', 'Something for me', 'Someone else'] as const

describe('buildUserMessage — followup chip buttons', () => {
  for (const chip of FOLLOWUP_CHIPS) {
    it(`chip "${chip}" appears in the Followup chip section`, () => {
      const msg = buildUserMessage('My days are pretty typical.', chip, null, null)
      expect(msg).toContain(`Followup chip selected: ${chip}`)
    })
  }

  it('skip (null chip) does not include Followup chip section', () => {
    const msg = buildUserMessage('My days are pretty typical.', null, null, null)
    expect(msg).not.toContain('Followup chip selected:')
  })

  it('chip and followup text both appear when provided together', () => {
    const msg = buildUserMessage('My days are pretty typical.', 'Work', 'mornings are hectic', null)
    expect(msg).toContain('Followup chip selected: Work')
    expect(msg).toContain('mornings are hectic')
  })
})
