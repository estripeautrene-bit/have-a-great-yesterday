import { describe, it, expect } from 'vitest'
import { validateDoorwayResponse, type DoorwayApiResponse } from '../functions/api/_lib/schema'

function makeValidGuidance(overrides: Partial<DoorwayApiResponse> = {}): DoorwayApiResponse {
  return {
    kind: 'guidance',
    headline: 'You have real places worth catching in your week.',
    opening:
      'You mentioned working at a school, evenings with your kids, and running on weekends. That is enough to begin.',
    mechanism:
      'MyHGY works by helping you notice specific good things as they happen and writing them down before they fade. In your context that means catching what a normal day already contains.',
    moments: [
      {
        title: 'At the school',
        example: 'A student says something that catches you off guard. Write it down before the rest of the day covers it.',
        meaning: 'Capturing it immediately keeps it from fading into the noise of the afternoon.',
      },
      {
        title: 'With your kids in the evening',
        example: 'One of them says or does something small that makes you pause. Write down what happened.',
        meaning: 'Small evening moments are the ones most easily lost by the next morning.',
      },
      {
        title: 'On the weekend run',
        example: 'A moment when the pace drops and something simple catches your eye. Capture the moment.',
        meaning: 'These count as much as anything else — write them the moment you notice them.',
      },
    ],
    practice:
      'Carry a small notebook and pen. Notice at least three specific good things while they happen, write each one down immediately, and repeat every day.',
    continuationBridge:
      'If you want your Starting Point in your inbox with a few short notes to keep you going, enter your name and email below.',
    meta: {
      safety_flag: false,
      followup_needed: false,
      word_count: 220,
    },
    ...overrides,
  }
}

describe('validateDoorwayResponse', () => {
  it('accepts a valid guidance response (3 moments, followup_needed: false)', () => {
    expect(validateDoorwayResponse(makeValidGuidance())).toBe(true)
  })

  it('accepts a valid safety response (0 moments, safety_flag: true)', () => {
    const safety: DoorwayApiResponse = {
      kind: 'safety',
      headline: 'Please reach out right now.',
      opening: 'What you described is beyond what MyHGY can help with. Please call a crisis line or a trusted person nearby.',
      mechanism: '988 Suicide and Crisis Lifeline: call or text 988. Crisis Text Line: text HOME to 741741.',
      moments: [],
      practice: '',
      continuationBridge: '',
      meta: {
        safety_flag: true,
        followup_needed: false,
        word_count: 40,
      },
    }
    expect(validateDoorwayResponse(safety)).toBe(true)
  })

  it('accepts a valid followup response (0 moments, guidance kind, followup_needed: true)', () => {
    const followup: DoorwayApiResponse = {
      kind: 'guidance',
      headline: '',
      opening: 'Could you tell me a bit more about what your ordinary days look like?',
      mechanism: '',
      moments: [],
      practice: '',
      continuationBridge: '',
      meta: {
        safety_flag: false,
        followup_needed: true,
        word_count: 15,
      },
    }
    expect(validateDoorwayResponse(followup)).toBe(true)
  })

  it('rejects guidance with 1 moment when followup_needed: false', () => {
    const bad = makeValidGuidance()
    bad.moments = [bad.moments[0]]
    expect(validateDoorwayResponse(bad)).toBe(false)
  })

  it('rejects guidance with 4 moments', () => {
    const bad = makeValidGuidance()
    bad.moments = [...bad.moments, bad.moments[0]]
    expect(validateDoorwayResponse(bad)).toBe(false)
  })

  it('rejects response missing headline', () => {
    const bad = makeValidGuidance() as Record<string, unknown>
    delete bad.headline
    expect(validateDoorwayResponse(bad)).toBe(false)
  })

  it('rejects response missing kind', () => {
    const bad = makeValidGuidance() as Record<string, unknown>
    delete bad.kind
    expect(validateDoorwayResponse(bad)).toBe(false)
  })

  it('rejects response with a wrong kind value', () => {
    const bad = makeValidGuidance() as Record<string, unknown>
    bad.kind = 'other'
    expect(validateDoorwayResponse(bad)).toBe(false)
  })

  it('rejects response missing meta.safety_flag', () => {
    const bad = makeValidGuidance()
    const meta = bad.meta as Record<string, unknown>
    delete meta.safety_flag
    expect(validateDoorwayResponse(bad)).toBe(false)
  })

  it('rejects response missing meta.followup_needed', () => {
    const bad = makeValidGuidance()
    const meta = bad.meta as Record<string, unknown>
    delete meta.followup_needed
    expect(validateDoorwayResponse(bad)).toBe(false)
  })

  it('rejects moment missing "example"', () => {
    const bad = makeValidGuidance()
    const m0 = bad.moments[0] as Record<string, unknown>
    delete m0.example
    expect(validateDoorwayResponse(bad)).toBe(false)
  })

  it('rejects moment missing "meaning"', () => {
    const bad = makeValidGuidance()
    const m0 = bad.moments[0] as Record<string, unknown>
    delete m0.meaning
    expect(validateDoorwayResponse(bad)).toBe(false)
  })

  it('rejects null', () => {
    expect(validateDoorwayResponse(null)).toBe(false)
  })

  it('rejects a string', () => {
    expect(validateDoorwayResponse('hello')).toBe(false)
  })
})
