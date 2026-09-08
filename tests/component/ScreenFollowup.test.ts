import { mount, flushPromises } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref, defineComponent, readonly } from 'vue'
import ScreenFollowup from '../../app/components/doorway/ScreenFollowup.vue'

// ── Mocks ────────────────────────────────────────────────────────────────────

const mockSubmitFollowup = vi.fn()
const mockSkipFollowup = vi.fn()

vi.mock('~/composables/useDoorwaySession', () => ({
  useDoorwaySession: () => ({
    submitFollowup: mockSubmitFollowup,
    skipFollowup: mockSkipFollowup,
  }),
}))

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Mount ScreenFollowup and return the wrapper. */
function mountFollowup() {
  return mount(ScreenFollowup)
}

/**
 * Mount ScreenFollowup inside a minimal parent that mirrors the real
 * what-are-you-going-through.vue conditional rendering. The parent exposes
 * a reactive `state` so tests can simulate a screen transition.
 */
function mountWithParent(initialState: string = 'FOLLOWUP') {
  const state = ref(initialState)

  // Wire mockSubmitFollowup / mockSkipFollowup to change state, exactly as
  // the real generate() does when the followup step completes.
  mockSubmitFollowup.mockImplementation(() => { state.value = 'GENERATING' })
  mockSkipFollowup.mockImplementation(() => { state.value = 'GENERATING' })

  const Parent = defineComponent({
    components: { ScreenFollowup },
    setup: () => ({ state }),
    template: `
      <div>
        <ScreenFollowup v-if="state === 'FOLLOWUP'" />
        <div v-else-if="state === 'GENERATING'" data-testid="generating-screen">Generating…</div>
        <div v-else data-testid="response-screen">Response</div>
      </div>
    `,
  })

  return { wrapper: mount(Parent), state }
}

// ── Tests ─────────────────────────────────────────────────────────────────────

const CHIPS = ['Work', 'The kids / family', 'Something for me', 'Someone else'] as const

describe('ScreenFollowup — chip button interactions', () => {
  beforeEach(() => { vi.clearAllMocks() })

  for (const chip of CHIPS) {
    it(`clicking "${chip}" calls submitFollowup({ chip, freeText: '' })`, async () => {
      const wrapper = mountFollowup()
      const buttons = wrapper.findAll('.followup__chip')
      const btn = buttons.find(b => b.text().trim() === chip)
      expect(btn, `chip button "${chip}" not found`).toBeDefined()
      await btn!.trigger('click')
      expect(mockSubmitFollowup).toHaveBeenCalledOnce()
      expect(mockSubmitFollowup).toHaveBeenCalledWith({ chip, freeText: '' })
    })
  }

  for (const chip of CHIPS) {
    it(`clicking "${chip}" advances state from FOLLOWUP to GENERATING`, async () => {
      const { wrapper, state } = mountWithParent('FOLLOWUP')
      expect(wrapper.findComponent(ScreenFollowup).exists()).toBe(true)

      const buttons = wrapper.findAll('.followup__chip')
      const btn = buttons.find(b => b.text().trim() === chip)
      await btn!.trigger('click')
      await flushPromises()

      expect(state.value).toBe('GENERATING')
      expect(wrapper.find('[data-testid="generating-screen"]').exists()).toBe(true)
      expect(wrapper.findComponent(ScreenFollowup).exists()).toBe(false)
    })
  }
})

describe('ScreenFollowup — skip link interaction', () => {
  beforeEach(() => { vi.clearAllMocks() })

  it('clicking "Skip this question" calls skipFollowup', async () => {
    const wrapper = mountFollowup()
    const skip = wrapper.find('.followup__skip')
    expect(skip.exists()).toBe(true)
    expect(skip.text()).toBe('Skip this question')
    await skip.trigger('click')
    expect(mockSkipFollowup).toHaveBeenCalledOnce()
  })

  it('clicking "Skip this question" advances state from FOLLOWUP to GENERATING', async () => {
    const { wrapper, state } = mountWithParent('FOLLOWUP')
    expect(wrapper.findComponent(ScreenFollowup).exists()).toBe(true)

    await wrapper.find('.followup__skip').trigger('click')
    await flushPromises()

    expect(state.value).toBe('GENERATING')
    expect(wrapper.find('[data-testid="generating-screen"]').exists()).toBe(true)
    expect(wrapper.findComponent(ScreenFollowup).exists()).toBe(false)
  })
})

describe('ScreenFollowup — copy and structure', () => {
  it('renders the heading "One quick question"', () => {
    const wrapper = mountFollowup()
    expect(wrapper.find('h1').text()).toBe('One quick question')
  })

  it('renders the body question about better moments', () => {
    const wrapper = mountFollowup()
    expect(wrapper.find('.followup__body').text()).toContain('where do the better moments in your day usually come from')
  })

  it('renders exactly four chip buttons', () => {
    const wrapper = mountFollowup()
    expect(wrapper.findAll('.followup__chip')).toHaveLength(4)
  })

  it('skip link text is "Skip this question"', () => {
    const wrapper = mountFollowup()
    expect(wrapper.find('.followup__skip').text()).toBe('Skip this question')
  })
})
