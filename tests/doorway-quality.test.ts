import { describe, it, expect } from 'vitest'
import { qualityCheck, BANNED_PHRASES } from '../functions/api/_lib/quality-validator'
import type { DoorwayApiResponse } from '../functions/api/_lib/schema'

function makeValidGuidance(overrides: Partial<DoorwayApiResponse> = {}): DoorwayApiResponse {
  return {
    kind: 'guidance',
    headline: 'You have real places worth catching in your week.',
    opening:
      'You mentioned working at a school, evenings with your kids, and running on weekends. That is enough to begin. There is real material in your ordinary week that MyHGY is built to help you keep.',
    mechanism:
      'MyHGY works by helping you notice specific good things as they happen and writing them down before they fade. In your context that means catching what a normal day already contains and preserving it before it slips out of reach.',
    moments: [
      {
        title: 'At the school',
        example:
          'Watch for a student saying something that catches you off guard, or a colleague thanking you for a small favor. Write down what happened and the feeling it created before the rest of the day covers it.',
        meaning: 'Capturing it immediately keeps the moment from fading into the noise of the afternoon.',
      },
      {
        title: 'With your kids in the evening',
        example: 'One of them says or does something small that makes you pause. Write down what happened and what it meant to you.',
        meaning: 'Small evening moments are the ones most easily lost by the next morning if not captured now.',
      },
      {
        title: 'On the weekend run',
        example: 'A stretch when the pace drops and something simple catches your eye. Capture the moment and how it landed.',
        meaning: 'These count as much as anything else — write them the moment you notice them.',
      },
    ],
    practice:
      'Carry a small notebook and pen. Notice at least three specific good things while they happen, write each one down immediately, and repeat every day.',
    continuationBridge:
      'If you want to keep going with this, continue with MyHGY — the practice builds from here.',
    meta: {
      safety_flag: false,
      followup_needed: false,
      word_count: 260,
    },
    ...overrides,
  }
}

describe('qualityCheck', () => {
  it('accepts a valid full guidance response', () => {
    const result = qualityCheck(makeValidGuidance())
    expect(result.valid).toBe(true)
    expect(result.failures).toEqual([])
  })

  it('rejects a response that uses the banned phrase "feel free"', () => {
    const bad = makeValidGuidance()
    bad.opening = `Feel free to start whenever you are ready. ${bad.opening}`
    const result = qualityCheck(bad)
    expect(result.valid).toBe(false)
    expect(result.failures.some(f => f.includes('"feel free"'))).toBe(true)
  })

  it('allows normal uses of the word "free" such as "free time"', () => {
    const good = makeValidGuidance()
    good.opening = `You mentioned having some free time in your schedule. ${good.opening}`
    const result = qualityCheck(good)
    expect(result.failures.some(f => f.includes('"feel free"'))).toBe(false)
  })

  it('rejects a response that uses the banned word "journey"', () => {
    const bad = makeValidGuidance()
    bad.opening = `${bad.opening} This is your journey.`
    const result = qualityCheck(bad)
    expect(result.valid).toBe(false)
    expect(result.failures.some(f => f.toLowerCase().includes('journey'))).toBe(true)
  })

  it('rejects guidance with only 1 moment', () => {
    const bad = makeValidGuidance()
    bad.moments = [bad.moments[0]]
    const result = qualityCheck(bad)
    expect(result.valid).toBe(false)
  })

  it('rejects a response missing the noticing mechanic', () => {
    const bad = makeValidGuidance()
    // Strip "notic" from all text
    const scrub = (s: string) => s.replace(/notic\w*/gi, 'see')
    bad.headline = scrub(bad.headline)
    bad.opening = scrub(bad.opening)
    bad.mechanism = scrub(bad.mechanism)
    bad.practice = scrub(bad.practice)
    bad.continuationBridge = scrub(bad.continuationBridge)
    bad.moments = bad.moments.map(m => ({
      title: scrub(m.title),
      example: scrub(m.example),
      meaning: scrub(m.meaning),
    }))
    const result = qualityCheck(bad)
    expect(result.valid).toBe(false)
    expect(result.failures.some(f => f.toLowerCase().includes('notic'))).toBe(true)
  })

  it('rejects a response missing the writing mechanic', () => {
    const bad = makeValidGuidance()
    const scrub = (s: string) =>
      s
        .replace(/writing/gi, 'seeing')
        .replace(/written/gi, 'seen')
        .replace(/write/gi, 'see')
        .replace(/captur\w*/gi, 'seeing')
    bad.headline = scrub(bad.headline)
    bad.opening = scrub(bad.opening)
    bad.mechanism = scrub(bad.mechanism)
    bad.practice = scrub(bad.practice)
    bad.continuationBridge = scrub(bad.continuationBridge)
    bad.moments = bad.moments.map(m => ({
      title: scrub(m.title),
      example: scrub(m.example),
      meaning: scrub(m.meaning),
    }))
    const result = qualityCheck(bad)
    expect(result.valid).toBe(false)
    expect(result.failures.some(f => f.toLowerCase().includes('writing mechanic'))).toBe(true)
  })

  it('rejects a response missing the daily repetition mechanic', () => {
    const bad = makeValidGuidance()
    const scrub = (s: string) =>
      s
        .replace(/every day/gi, 'often')
        .replace(/daily/gi, 'regularly')
        .replace(/each day/gi, 'each time')
    bad.headline = scrub(bad.headline)
    bad.opening = scrub(bad.opening)
    bad.mechanism = scrub(bad.mechanism)
    bad.practice = scrub(bad.practice)
    bad.continuationBridge = scrub(bad.continuationBridge)
    bad.moments = bad.moments.map(m => ({
      title: scrub(m.title),
      example: scrub(m.example),
      meaning: scrub(m.meaning),
    }))
    const result = qualityCheck(bad)
    expect(result.valid).toBe(false)
    expect(result.failures.some(f => f.toLowerCase().includes('daily repetition'))).toBe(true)
  })

  it('accepts a safety response without applying content checks', () => {
    const safety: DoorwayApiResponse = {
      kind: 'safety',
      headline: 'Please reach out right now.',
      opening: 'What you described is beyond what MyHGY can help with.',
      mechanism: '988 Suicide and Crisis Lifeline: call or text 988. Crisis Text Line: text HOME to 741741.',
      moments: [],
      practice: '',
      continuationBridge: '',
      meta: {
        safety_flag: true,
        followup_needed: false,
        word_count: 30,
      },
    }
    const result = qualityCheck(safety)
    expect(result.valid).toBe(true)
    expect(result.failures).toEqual([])
  })

  it('accepts a followup response without applying content checks', () => {
    const followup: DoorwayApiResponse = {
      kind: 'guidance',
      headline: '',
      opening: 'Could you tell me more about your ordinary days?',
      mechanism: '',
      moments: [],
      practice: '',
      continuationBridge: '',
      meta: {
        safety_flag: false,
        followup_needed: true,
        word_count: 10,
      },
    }
    const result = qualityCheck(followup)
    expect(result.valid).toBe(true)
    expect(result.failures).toEqual([])
  })

  it('rejects a response containing markdown code fences', () => {
    const bad = makeValidGuidance()
    bad.mechanism = `${bad.mechanism}\n\`\`\`\nsome fenced content\n\`\`\``
    const result = qualityCheck(bad)
    expect(result.valid).toBe(false)
    expect(result.failures.some(f => f.toLowerCase().includes('code fence'))).toBe(true)
  })

  it('exports the full BANNED_PHRASES list including canon section 6 additions', () => {
    expect(BANNED_PHRASES).toContain('feel free')
    expect(BANNED_PHRASES).toContain('journey')
    expect(BANNED_PHRASES).toContain('proof')
    // Canon section 6 additions
    expect(BANNED_PHRASES).toContain("you're not broken")
    expect(BANNED_PHRASES).toContain('honor your journey')
    expect(BANNED_PHRASES).toContain('in this season')
    expect(BANNED_PHRASES).toContain('reframe')
    expect(BANNED_PHRASES).toContain('lean into')
    expect(BANNED_PHRASES).toContain('nervous system regulation')
    expect(BANNED_PHRASES).toContain('your feelings are valid')
    expect(BANNED_PHRASES).toContain('everything happens for a reason')
    expect(BANNED_PHRASES.length).toBeGreaterThanOrEqual(23)
  })

  it('rejects a response using banned phrase "reframe"', () => {
    const bad = makeValidGuidance()
    bad.opening = `${bad.opening} Let's reframe how you see this.`
    const result = qualityCheck(bad)
    expect(result.valid).toBe(false)
    expect(result.failures.some(f => f.toLowerCase().includes('reframe'))).toBe(true)
  })

  it('rejects a response using banned phrase "nervous system regulation"', () => {
    const bad = makeValidGuidance()
    bad.mechanism = `${bad.mechanism} This supports nervous system regulation.`
    const result = qualityCheck(bad)
    expect(result.valid).toBe(false)
    expect(result.failures.some(f => f.toLowerCase().includes('nervous system'))).toBe(true)
  })

  it('rejects a response using banned phrase "you\'re not broken"', () => {
    const bad = makeValidGuidance()
    bad.opening = `You're not broken. ${bad.opening}`
    const result = qualityCheck(bad)
    expect(result.valid).toBe(false)
    expect(result.failures.some(f => f.toLowerCase().includes("you're not broken"))).toBe(true)
  })

  // ── v2.0.0 additions ──────────────────────────────────────────────────────

  it('BANNED_PHRASES now includes "rewiring"', () => {
    expect(BANNED_PHRASES).toContain('rewiring')
  })

  it('BANNED_PHRASES now includes "dopamine"', () => {
    expect(BANNED_PHRASES).toContain('dopamine')
  })

  it('BANNED_PHRASES now includes "guaranteed"', () => {
    expect(BANNED_PHRASES).toContain('guaranteed')
  })

  it('rejects a response using banned word "rewiring"', () => {
    const bad = makeValidGuidance()
    bad.mechanism = `${bad.mechanism} This is like rewiring your outlook.`
    const result = qualityCheck(bad)
    expect(result.valid).toBe(false)
    expect(result.failures.some(f => f.toLowerCase().includes('rewiring'))).toBe(true)
  })

  it('rejects a response using banned word "dopamine"', () => {
    const bad = makeValidGuidance()
    bad.mechanism = `${bad.mechanism} It activates the dopamine pathway.`
    const result = qualityCheck(bad)
    expect(result.valid).toBe(false)
    expect(result.failures.some(f => f.toLowerCase().includes('dopamine'))).toBe(true)
  })

  it('rejects a response using banned word "guaranteed"', () => {
    const bad = makeValidGuidance()
    bad.continuationBridge = 'This is guaranteed to help you. Keep going with MyHGY.'
    const result = qualityCheck(bad)
    expect(result.valid).toBe(false)
    expect(result.failures.some(f => f.toLowerCase().includes('guaranteed'))).toBe(true)
  })

  it('"evidence" is no longer a banned phrase', () => {
    expect(BANNED_PHRASES).not.toContain('evidence')
  })

  it('accepts a response that uses the word "evidence" in a moment meaning', () => {
    const good = makeValidGuidance()
    good.moments[0].meaning = 'This is evidence that you are still capable of action on hard days.'
    const result = qualityCheck(good)
    expect(result.failures.some(f => f.toLowerCase().includes('"evidence"'))).toBe(false)
  })

  it('rejects continuationBridge that mentions email', () => {
    const bad = makeValidGuidance()
    bad.continuationBridge = 'Enter your email below to get your Starting Point.'
    const result = qualityCheck(bad)
    expect(result.valid).toBe(false)
    expect(result.failures.some(f => f.toLowerCase().includes('continuationbridge'))).toBe(true)
  })

  it('rejects continuationBridge that mentions "Starting Point"', () => {
    const bad = makeValidGuidance()
    bad.continuationBridge = 'Sign up to receive your Starting Point.'
    const result = qualityCheck(bad)
    expect(result.valid).toBe(false)
    expect(result.failures.some(f => f.toLowerCase().includes('continuationbridge'))).toBe(true)
  })

  it('rejects continuationBridge that mentions "inbox"', () => {
    const bad = makeValidGuidance()
    bad.continuationBridge = 'Check your inbox for next steps with MyHGY.'
    const result = qualityCheck(bad)
    expect(result.valid).toBe(false)
    expect(result.failures.some(f => f.toLowerCase().includes('continuationbridge'))).toBe(true)
  })

  it('accepts a clean continuationBridge with no delivery promise', () => {
    const good = makeValidGuidance()
    good.continuationBridge = 'Keep going with MyHGY — the practice builds from here.'
    const result = qualityCheck(good)
    expect(result.failures.some(f => f.toLowerCase().includes('continuationbridge'))).toBe(false)
  })
})
