import { describe, it, expect } from 'vitest'
import { validateDoorwayResponse, type DoorwayApiResponse } from '../functions/api/_lib/schema'

function makeValidResponse(overrides: Partial<DoorwayApiResponse> = {}): DoorwayApiResponse {
  return {
    opening: 'You mentioned working at a school, spending evenings with your kids, and running on weekends.',
    terrains: [
      {
        title: 'At the school',
        kind_of_moment: 'A moment when a student says or does something that catches you off guard.',
        privacy_note: 'Keep the capture about the moment, not student names.',
        be_ready: 'Be ready: keep a small notebook and pen in your desk drawer.',
        source_span: 'working at a school',
      },
      {
        title: 'With your kids',
        kind_of_moment: 'A small thing one of them says or does that makes you pause.',
        privacy_note: null,
        be_ready: 'Be ready: notebook and pen on the kitchen counter for evening moments.',
        source_span: 'evenings with your kids',
      },
      {
        title: 'On the run',
        kind_of_moment: 'A moment when the pace drops and something simple catches your eye.',
        privacy_note: null,
        be_ready: 'Be ready: keep a small notebook and pen in your running bag.',
        source_span: 'running on weekends',
      },
    ],
    closing: 'Keep a small notebook and pen nearby. Write the next good moment down before it fades.',
    meta: {
      terrains_detected: 3,
      used_followup: false,
      safety_flag: false,
      followup_needed: false,
    },
    ...overrides,
  }
}

describe('validateDoorwayResponse', () => {
  it('accepts a valid full response with 3 terrains and followup_needed: false', () => {
    expect(validateDoorwayResponse(makeValidResponse())).toBe(true)
  })

  it('accepts a valid followup response with 0 terrains and followup_needed: true', () => {
    const followupResponse: DoorwayApiResponse = {
      opening: 'Could you tell me a bit more about what your ordinary days look like?',
      terrains: [],
      closing: '',
      meta: {
        terrains_detected: 0,
        used_followup: false,
        safety_flag: false,
        followup_needed: true,
      },
    }
    expect(validateDoorwayResponse(followupResponse)).toBe(true)
  })

  it('accepts a valid response with 2 terrains and followup_needed: false', () => {
    const twoTerrains = makeValidResponse()
    twoTerrains.terrains = twoTerrains.terrains.slice(0, 2)
    expect(validateDoorwayResponse(twoTerrains)).toBe(true)
  })

  it('rejects response missing "opening" field', () => {
    const bad = makeValidResponse() as Record<string, unknown>
    delete bad.opening
    expect(validateDoorwayResponse(bad)).toBe(false)
  })

  it('rejects response missing "followup_needed" in meta', () => {
    const bad = makeValidResponse()
    const meta = bad.meta as Record<string, unknown>
    delete meta.followup_needed
    expect(validateDoorwayResponse(bad)).toBe(false)
  })

  it('rejects response with terrains containing wrong types', () => {
    const bad = makeValidResponse()
    // @ts-expect-error intentional bad data
    bad.terrains[0].title = 42
    expect(validateDoorwayResponse(bad)).toBe(false)
  })

  it('rejects response with only 1 terrain when followup_needed is false', () => {
    const bad = makeValidResponse()
    bad.terrains = [bad.terrains[0]]
    expect(validateDoorwayResponse(bad)).toBe(false)
  })

  it('rejects null', () => {
    expect(validateDoorwayResponse(null)).toBe(false)
  })

  it('rejects a string', () => {
    expect(validateDoorwayResponse('hello')).toBe(false)
  })
})
