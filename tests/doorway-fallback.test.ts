import { describe, it, expect } from 'vitest'
import { getFallback, FALLBACK_GENERAL } from '../functions/api/_lib/fallbacks'
import { qualityCheck } from '../functions/api/_lib/quality-validator'

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

describe('getFallback — routing', () => {
  it('null situationCard returns FALLBACK_GENERAL', () => {
    expect(getFallback(null)).toBe(FALLBACK_GENERAL)
  })

  it('unknown situationCard returns FALLBACK_GENERAL', () => {
    expect(getFallback('some situation not in the library')).toBe(FALLBACK_GENERAL)
  })

  for (const card of SITUATION_CARDS) {
    it(`card "${card}" returns a distinct fallback (not the general one)`, () => {
      expect(getFallback(card)).not.toBe(FALLBACK_GENERAL)
    })
  }
})

describe('FALLBACK_GENERAL — structure and quality', () => {
  it('kind is "guidance"', () => {
    expect(FALLBACK_GENERAL.kind).toBe('guidance')
  })

  it('meta.followup_needed is false', () => {
    expect(FALLBACK_GENERAL.meta.followup_needed).toBe(false)
  })

  it('meta.safety_flag is false', () => {
    expect(FALLBACK_GENERAL.meta.safety_flag).toBe(false)
  })

  it('has exactly 3 moments', () => {
    expect(FALLBACK_GENERAL.moments).toHaveLength(3)
  })

  it('passes the quality validator', () => {
    const result = qualityCheck(FALLBACK_GENERAL)
    expect(result.valid).toBe(true)
    expect(result.failures).toEqual([])
  })
})

describe('situation-card fallbacks — each passes quality validator', () => {
  for (const card of SITUATION_CARDS) {
    it(`"${card}" fallback is valid guidance`, () => {
      const fallback = getFallback(card)
      expect(fallback.kind).toBe('guidance')
      expect(fallback.meta.followup_needed).toBe(false)
      expect(fallback.meta.safety_flag).toBe(false)
      expect(fallback.moments).toHaveLength(3)
      const result = qualityCheck(fallback)
      expect(result.valid).toBe(true)
      expect(result.failures).toEqual([])
    })
  }
})
