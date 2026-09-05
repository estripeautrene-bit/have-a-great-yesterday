// Client-side state machine for the MyHGY™ personalized doorway (§2).
// Uses Nuxt useState for SSR-safe state that persists across SPA navigation.
// Stub engine returns the Daniela example; real engine wired when backend is ready.

// ── Types (will be extracted to a dedicated file in Item 4) ──────────────

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
  }
}

// ── Constants ────────────────────────────────────────────────────────────

// Server constant per §3.1 — never model-generated, never altered.
export const FIXED_PRACTICE_LINE =
  'Notice at least three real, specific good things — and write each one down the moment it happens, while life is still moving. Aim for at least three every day, and again tomorrow.'

// Daniela example from §1 — stub engine response.
const DANIELA_STUB: DoorwayResponse = {
  opening:
    'You described most days as "putting out fires." But your days also move through your children, the systems you build at work, Sundays at the stove, the quiet start of a run, calls with your father, and time with Marco. Ordinary good moments tend to live in places like these — and they slip away fast, because the moment one happens, attention is already on whatever comes next.',
  terrains: [
    {
      title: 'With your children',
      kind_of_moment:
        'The kind of moment: a word, a question, or a small thing one of them does that catches you off guard.',
      privacy_note:
        'Keep the capture focused on the moment, nothing private or identifying.',
      be_ready:
        'Be ready: mornings and the dinner stretch — keep a small notebook and pen where the chaos actually happens.',
      source_span: 'your children',
    },
    {
      title: 'In the work you built',
      kind_of_moment:
        'The kind of moment: a process or handoff you set up running without you, when no one needs to call.',
      privacy_note: null,
      be_ready:
        'Be ready: mid-day, when things are quietly working — a small notebook and pen at hand; one line at the first pause.',
      source_span: 'the systems you build at work',
    },
    {
      title: "In a moment that's yours",
      kind_of_moment:
        'The kind of moment: the first quiet minutes of a run, or a Sunday at the stove when your head goes still.',
      privacy_note: null,
      be_ready:
        'Be ready: weekends and whenever you get the run — notebook and pen within reach before you begin.',
      source_span: 'Sundays at the stove, the quiet start of a run',
    },
  ],
  closing:
    'Keep a small notebook and pen nearby. When the next of these happens, write it down before the day moves on.',
  meta: {
    terrains_detected: 5,
    used_followup: false,
    safety_flag: false,
  },
}

// ── Terrain detection stub ───────────────────────────────────────────────

// Simple word-count proxy; real detector runs server-side (§4).
// ≥ 30 words → 3 terrains (skip follow-up)
// 15–29 words → 2 terrains (trigger follow-up)
// < 15 words  → 1 terrain (trigger follow-up)
function detectTerrains(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length
  if (words >= 30) return 3
  if (words >= 15) return 2
  return 1
}

// ── Stub engine call ─────────────────────────────────────────────────────

async function callStubEngine(): Promise<DoorwayResponse> {
  await new Promise(r => setTimeout(r, 3000))
  return { ...DANIELA_STUB, terrains: DANIELA_STUB.terrains.map(t => ({ ...t })) }
}

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

  async function generate() {
    state.value = 'GENERATING'
    try {
      const [result] = await Promise.all([
        callStubEngine(),
        new Promise<void>(r => setTimeout(r, 4500)), // guarantee all 3 lines appear (§4 Screen timing)
      ])
      if (result.meta.safety_flag) {
        state.value = 'SAFETY_INTERRUPTED'
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
    const terrains = detectTerrains(input.text)
    if (terrains >= 3) {
      void generate()
    }
    else {
      state.value = 'FOLLOWUP'
    }
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
