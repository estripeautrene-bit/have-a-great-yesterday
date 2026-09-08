// Client-side state machine for the MyHGY™ personalized doorway (§2).
// Uses Nuxt useState for SSR-safe state that persists across SPA navigation.

// ── Types ────────────────────────────────────────────────────────────────

export type DoorwayState =
  | 'ENTRY'
  | 'INPUT_SUBMITTED'
  | 'FOLLOWUP'
  | 'GENERATING'
  | 'RESPONSE_READY'
  | 'GENERATION_FAILED'
  | 'SAFETY_INTERRUPTED'
  | 'EMAIL_INVITED'
  | 'EMAIL_SUBMITTING'
  | 'EMAIL_FAILED'
  | 'EMAIL_SUBMITTED'
  | 'EMAIL_DECLINED'

export interface SessionInput {
  text: string
  situationCard: string | null
  source: 'homepage' | 'direct'
}

export interface FollowupAnswer {
  chip: string | null
  freeText: string
}

export interface TerrainItem {
  title: string
  kind_of_moment: string
  privacy_note: string | null
  be_ready: string
  source_span: string
}

export interface DoorwayResponse {
  opening: string
  terrains: TerrainItem[]
  closing: string
  meta: {
    terrains_detected: number
    used_followup: boolean
    safety_flag: boolean
    followup_needed: boolean
  }
}

// ── Constants ────────────────────────────────────────────────────────────

// Server constant per §3.1 — never model-generated, never altered.
export const FIXED_PRACTICE_LINE =
  'Notice at least three real, specific good things — and write each one down the moment it happens, while life is still moving. Aim for at least three every day, and again tomorrow.'

// ── Real engine call ─────────────────────────────────────────────────────

// ── Composable ───────────────────────────────────────────────────────────

export function useDoorwaySession() {
  const state = useState<DoorwayState>('doorway.state', () => 'ENTRY')
  const sessionInput = useState<SessionInput | null>('doorway.input', () => null)
  const followupAnswer = useState<FollowupAnswer | null>('doorway.followup', () => null)
  const response = useState<DoorwayResponse | null>('doorway.response', () => null)

  function reset() {
    state.value = 'ENTRY'
    sessionInput.value = null
    followupAnswer.value = null
    response.value = null
  }

  async function callRealEngine(): Promise<DoorwayResponse> {
    const body = {
      text: sessionInput.value!.text,
      source: sessionInput.value!.source,
      followupChip: followupAnswer.value?.chip ?? null,
      followupText: followupAnswer.value?.freeText ?? null,
    }
    const res = await fetch('/api/doorway', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    if (!res.ok) throw new Error(`api_error:${res.status}`)
    return res.json()
  }

  async function generate() {
    state.value = 'GENERATING'
    try {
      const [result] = await Promise.all([
        callRealEngine(),
        new Promise<void>(r => setTimeout(r, 3500)),
      ])
      if (result.meta.safety_flag) {
        state.value = 'SAFETY_INTERRUPTED'
        return
      }
      if (result.meta.followup_needed) {
        // Server decided it needs more info — store the opening as a prompt and show FOLLOWUP
        response.value = result
        state.value = 'FOLLOWUP'
        return
      }
      response.value = result
      state.value = 'RESPONSE_READY'
      // RESPONSE_READY is a real, visible state. Visitor reads their Starting
      // Point here — free, complete, no email required. EMAIL_INVITED is only
      // reached when they explicitly tap the "keep going" affordance via
      // showEmailGate() below.
    }
    catch {
      state.value = 'GENERATION_FAILED'
    }
  }

  function submitInput(input: SessionInput) {
    sessionInput.value = input
    state.value = 'INPUT_SUBMITTED'
    void generate()
  }

  function submitFollowup(answer: FollowupAnswer) {
    followupAnswer.value = answer
    void generate()
  }

  function skipFollowup() {
    void generate()
  }

  function retryGeneration() {
    void generate()
  }

  // Manual transition — visitor explicitly taps the email affordance on Screen 5.
  function showEmailGate() {
    if (state.value === 'RESPONSE_READY') state.value = 'EMAIL_INVITED'
  }

  function declineEmail() {
    state.value = 'EMAIL_DECLINED'
  }

  async function submitEmail(fields: { firstName: string; email: string; consent: boolean }) {
    state.value = 'EMAIL_SUBMITTING'
    try {
      // Stub: log payload, simulate Loops acceptance delay.
      await new Promise(r => setTimeout(r, 1000))
      console.log('[doorway] email stub — would POST to Loops', fields)
      state.value = 'EMAIL_SUBMITTED'
    }
    catch {
      state.value = 'EMAIL_FAILED'
    }
  }

  async function retryEmail(fields: { firstName: string; email: string; consent: boolean }) {
    await submitEmail(fields)
  }

  return {
    state: readonly(state),
    sessionInput: readonly(sessionInput),
    followupAnswer: readonly(followupAnswer),
    response: readonly(response),
    reset,
    submitInput,
    submitFollowup,
    skipFollowup,
    retryGeneration,
    showEmailGate,
    declineEmail,
    submitEmail,
    retryEmail,
  }
}
