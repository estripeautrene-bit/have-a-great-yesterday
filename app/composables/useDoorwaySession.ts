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
  skipped?: boolean
}

export interface MomentItem {
  title: string
  example: string
  meaning: string
}

export interface DoorwayResponse {
  kind: 'guidance' | 'safety'
  headline: string
  opening: string
  mechanism: string
  moments: MomentItem[]
  practice: string
  continuationBridge: string
  meta: {
    safety_flag: boolean
    followup_needed: boolean
    word_count: number
  }
}

// ── Constants ────────────────────────────────────────────────────────────

// Server constant per §3.1 — never model-generated, never altered.
export const FIXED_PRACTICE_LINE =
  'Notice at least three real, specific good things — and write each one down the moment it happens, while life is still moving. Aim for at least three every day, and again tomorrow.'

// ── Real engine call ─────────────────────────────────────────────────────

// ── Composable ───────────────────────────────────────────────────────────

export function useDoorwaySession() {
  const { apiBase } = useRuntimeConfig().public
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
      situationCard: sessionInput.value!.situationCard,
      followupChip: followupAnswer.value?.chip ?? null,
      followupText: followupAnswer.value?.freeText ?? null,
      followupSkipped: followupAnswer.value?.skipped ?? false,
    }
    const res = await fetch(`${apiBase}/api/doorway`, {
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
    followupAnswer.value = { chip: null, freeText: '', skipped: true }
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
      const res = await fetch(`${apiBase}/api/capture-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      if (!res.ok) throw new Error(`capture_error:${res.status}`)
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
