import { describe, it, expect } from 'vitest'
import { qualityCheck, BANNED_PHRASES } from '../functions/api/_lib/quality-validator'
import type { DoorwayApiResponse } from '../functions/api/_lib/schema'

// SOP v1.1.0 compliant fixture (~630 actual words; passes all validator checks)
function makeValidGuidance(overrides: Partial<DoorwayApiResponse> = {}): DoorwayApiResponse {
  return {
    kind: 'guidance',
    headline: 'Your work, your kids, and your run give you real ground.',
    opening:
      'You work at a school, you have kids in the evenings, and you run on weekends. That is already a life with real moments in it — moments that matter and are worth keeping. MyHGY is built to help you hold on to what is actually happening before it slips by.',
    mechanism:
      'When the weight of a hard day fills your attention, it can crowd out everything else — the useful exchange at the school, what your kids said that evening, the stretch when the run felt open and clear. Those moments happen but can go unregistered when something heavier is taking up the space. MyHGY works by helping you return to what is actually true right now, while it is still here. When a good moment arrives — a student who thanks you, an evening laugh with your kids, a clear mile on the run — the first move is to let it fully reach you before you write it down. That is the savoring step. Do not just notice and move on. Let the moment land before life moves on, so you actually feel it. Then write it down immediately, while the detail is still alive and clear. Writing turns a passing experience into evidence. One captured moment is evidence that something good is still happening in your days. One moment shows you are still capable, still connected, still moving forward in some real way. Through repetition and consistency — coming back to this practice every day — it gains continuity. Continuity means the evidence does not disappear between days; it accumulates. Through visibility — the growing pages of your notebook — you can begin to see what your ordinary days are actually made of across time. That visible record gives you something no hard day can: a fuller and more accurate picture of your life than the weight of any one afternoon allows. Clarity means seeing where you are, what matters, and where you want to go — and this record gives you exactly that, built from real days, not from how today felt. Accuracy means evaluating your life from what actually happened, not from one difficult moment or an old story about yourself that has not caught up to what you keep doing. Self-Confidence means having real evidence of what you can do, how you show up, and what you carry through — and that is exactly what your pages keep adding. Confidence comes from evidence. Over days and weeks, the pages become a record that gives you grounded confidence to keep moving toward the life you want.',
    moments: [
      {
        title: 'At the school',
        example:
          'Watch for a student who thanks you or catches you off guard with something they say. Write down what happened and how it landed before the afternoon covers it.',
        meaning: 'That moment is evidence that your work is still reaching people, even on the hard days.',
      },
      {
        title: 'With your kids in the evening',
        example:
          'One of them says or does something small that makes you pause — a funny line, a question, a moment of care. Write it down before the next morning takes it.',
        meaning: 'Capturing it shows that connection is still happening, right here in your ordinary evenings.',
      },
      {
        title: 'On the weekend run',
        example:
          'There is a stretch where the pace settles and something simple catches your eye or your mind clears. Write it down as soon as you stop.',
        meaning: 'It is evidence that your body and your ordinary days still have something worth bringing back.',
      },
    ],
    practice:
      'Carry a small notebook and pen. Notice at least three specific good things while they happen, write each one down immediately, and repeat every day. Reviewing later is optional.',
    continuationBridge:
      'Continue with MyHGY so the pages fill into a record that gives you a more accurate picture of your ordinary days — and the Clarity, Accuracy, and Self-Confidence that grow from it are earned from what your life keeps showing you, not manufactured.',
    meta: {
      safety_flag: false,
      followup_needed: false,
      word_count: 630,
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

  // ── SOP v1.1.0 additions ──────────────────────────────────────────────────

  it('rejects a response with fewer than 550 combined words', () => {
    const bad: DoorwayApiResponse = {
      kind: 'guidance',
      headline: 'You have real places to notice and keep.',
      opening: 'You mentioned your work and your family. Those are real places to begin.',
      mechanism: 'When hard things happen, they can crowd your attention. Notice good moments while they happen and write them down immediately every day.',
      moments: [
        { title: 'At work', example: 'A colleague thanks you. Write it down.', meaning: 'Evidence that your work matters.' },
        { title: 'With family', example: 'A good moment with someone you love. Write it down.', meaning: 'Shows connection is still there.' },
        { title: 'On your own', example: 'A calm moment in your day. Write it down.', meaning: 'Evidence that rest is available to you.' },
      ],
      practice: 'Carry a small notebook and pen. Notice at least three specific good things while they happen, write each one down immediately, and repeat every day. Reviewing later is optional.',
      continuationBridge: 'Continue with MyHGY so the pages build into a more accurate picture of your days.',
      meta: { safety_flag: false, followup_needed: false, word_count: 100 },
    }
    const result = qualityCheck(bad)
    expect(result.valid).toBe(false)
    expect(result.failures.some(f => f.includes('word count out of range'))).toBe(true)
  })

  it('rejects a response with more than 700 combined words', () => {
    const bad = makeValidGuidance()
    const filler = ' The practice continues to build every single day that you come back to it. Keep writing. The evidence grows. The record becomes clearer over time. More accurate. More complete. More useful than any single hard moment.'
    bad.continuationBridge = bad.continuationBridge + filler.repeat(4)
    const result = qualityCheck(bad)
    expect(result.valid).toBe(false)
    expect(result.failures.some(f => f.includes('word count out of range'))).toBe(true)
  })

  it('rejects a response missing the savoring step', () => {
    const bad = makeValidGuidance()
    const scrub = (s: string) =>
      s
        .replace(/savor\w*/gi, 'notice')
        .replace(/fully reach you/gi, 'happen')
        .replace(/let it fully/gi, 'notice it')
        .replace(/let the moment land/gi, 'write it down')
        .replace(/land before/gi, 'write before')
        .replace(/reach you/gi, 'happen')
        .replace(/let it land/gi, 'write it down')
    bad.mechanism = scrub(bad.mechanism)
    bad.opening = scrub(bad.opening)
    bad.practice = scrub(bad.practice)
    bad.continuationBridge = scrub(bad.continuationBridge)
    bad.moments = bad.moments.map(m => ({
      title: scrub(m.title),
      example: scrub(m.example),
      meaning: scrub(m.meaning),
    }))
    const result = qualityCheck(bad)
    expect(result.valid).toBe(false)
    expect(result.failures.some(f => f.toLowerCase().includes('savor'))).toBe(true)
  })

  it('rejects a response missing the CAS destination', () => {
    const bad = makeValidGuidance()
    const scrub = (s: string) =>
      s
        .replace(/\bClarity\b/gi, 'clearness')
        .replace(/\bAccuracy\b/gi, 'correctness')
        .replace(/\bSelf-Confidence\b/gi, 'assurance')
        .replace(/\bself confidence\b/gi, 'assurance')
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
    expect(result.failures.some(f => f.toLowerCase().includes('cas'))).toBe(true)
  })

  it('rejects a response missing repetition and consistency', () => {
    const bad = makeValidGuidance()
    const scrub = (s: string) =>
      s
        .replace(/repetit\w*/gi, 'practice')
        .replace(/consisten\w*/gi, 'regular')
    bad.mechanism = scrub(bad.mechanism)
    bad.practice = scrub(bad.practice)
    bad.opening = scrub(bad.opening)
    bad.continuationBridge = scrub(bad.continuationBridge)
    bad.moments = bad.moments.map(m => ({
      title: scrub(m.title),
      example: scrub(m.example),
      meaning: scrub(m.meaning),
    }))
    const result = qualityCheck(bad)
    expect(result.valid).toBe(false)
    expect(result.failures.some(f => f.toLowerCase().includes('repetition'))).toBe(true)
  })

  it('rejects a response missing continuity', () => {
    const bad = makeValidGuidance()
    bad.mechanism = bad.mechanism.replace(/continuity/gi, 'connection')
    const result = qualityCheck(bad)
    expect(result.valid).toBe(false)
    expect(result.failures.some(f => f.toLowerCase().includes('continuity'))).toBe(true)
  })

  it('rejects a response missing visibility', () => {
    const bad = makeValidGuidance()
    bad.mechanism = bad.mechanism.replace(/visib\w*/gi, 'seeing')
    const result = qualityCheck(bad)
    expect(result.valid).toBe(false)
    expect(result.failures.some(f => f.toLowerCase().includes('visibility'))).toBe(true)
  })
})
