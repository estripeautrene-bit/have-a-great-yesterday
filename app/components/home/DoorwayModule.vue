<script setup lang="ts">
const { reset, submitInput } = useDoorwaySession()

const writtenText = ref('')
const hasTrackedStart = ref(false)
const showEmptyHint = ref(false)
const isSubmitting = ref(false)
const sectionRef = ref<HTMLElement | null>(null)
const textareaRef = ref<HTMLTextAreaElement | null>(null)
let viewObserver: IntersectionObserver | null = null

const EXAMPLE_CARDS: readonly string[] = [
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

const { $posthog } = useNuxtApp()
function track(name: string, props: Record<string, unknown> = {}) {
  if ($posthog.__loaded) $posthog.capture(name, props)
}

function onInput(e: Event) {
  const el = e.target as HTMLTextAreaElement
  el.style.height = 'auto'
  el.style.height = `${el.scrollHeight}px`
  if (writtenText.value.trim().length > 0) showEmptyHint.value = false
  if (!hasTrackedStart.value) {
    hasTrackedStart.value = true
    track('doorway_input_started', { source: 'homepage' })
  }
}

function focusTextarea() {
  nextTick(() => {
    textareaRef.value?.focus()
  })
}

function handleCardClick(text: string) {
  writtenText.value = text
  showEmptyHint.value = false
  if (!hasTrackedStart.value) {
    hasTrackedStart.value = true
    track('doorway_input_started', { source: 'homepage' })
  }
  focusTextarea()
}

function handleSubmit() {
  if (isSubmitting.value) return
  if (writtenText.value.trim().length === 0) {
    showEmptyHint.value = true
    focusTextarea()
    return
  }
  isSubmitting.value = true
  track('doorway_homepage_submitted', { source: 'homepage' })
  submitInput({ text: writtenText.value, situationCard: null, source: 'homepage' })
  navigateTo('/what-are-you-going-through')
}

onMounted(() => {
  reset() // clear any previous session when the homepage loads
  viewObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        track('doorway_input_viewed', { source: 'homepage' })
        viewObserver?.disconnect()
      }
    },
    { threshold: 0.1 }
  )
  if (sectionRef.value) viewObserver.observe(sectionRef.value)
})

onUnmounted(() => {
  viewObserver?.disconnect()
})
</script>

<template>
  <section
    id="doorway"
    ref="sectionRef"
    class="doorway section bg-stone"
    aria-labelledby="doorway-heading"
  >
    <div class="container">
      <h2 id="doorway-heading" class="doorway__heading">
        Would you like to see how MyHGY could help you?
      </h2>
      <p class="doorway__subhead">
        Tell us what's going on in your life and why MyHGY caught your attention. We'll show you where the practice could make a difference.
      </p>

      <form class="doorway__form" novalidate @submit.prevent="handleSubmit">
        <label class="sr-only" for="doorway-input">Tell us about your days</label>
        <textarea
          id="doorway-input"
          ref="textareaRef"
          v-model="writtenText"
          class="doorway__textarea"
          placeholder="Tell us a little about your life…"
          rows="3"
          aria-describedby="doorway-reassurance"
          @input="onInput"
        />
        <p class="doorway__cards-header">Or start here:</p>
        <div class="doorway__cards" role="group" aria-label="Example starting points">
          <button
            v-for="card in EXAMPLE_CARDS"
            :key="card"
            type="button"
            class="doorway__card"
            @click="handleCardClick(card)"
          >
            {{ card }}
          </button>
        </div>
        <button
          type="submit"
          class="doorway__submit"
          :disabled="isSubmitting"
        >
          Show Me How MyHGY Could Help
        </button>
        <p v-if="showEmptyHint" class="doorway__empty-hint" role="alert">
          Describe what's going on in your life — a few sentences is plenty.
        </p>
        <p id="doorway-reassurance" class="doorway__reassurance">
          No account or email needed to see it.
        </p>
      </form>
    </div>
  </section>
</template>

<style scoped>
.doorway__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
  max-width: 22ch;
  margin-bottom: var(--space-4);
}

.doorway__subhead {
  font-size: var(--text-body-lg);
  color: var(--color-muted-ink);
  line-height: var(--lh-body);
  max-width: 58ch;
  margin-bottom: var(--space-10);
}

/* ── Form ───────────────────────────────────────────────── */

.doorway__form {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: var(--container-md);
}

.doorway__textarea {
  width: 100%;
  min-height: 5.5rem;
  padding: var(--space-5) var(--space-6);
  background: var(--color-paper);
  border: 1.5px solid rgba(17, 17, 17, 0.15);
  border-radius: var(--radius-lg);
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
  resize: none;
  overflow: hidden;
  field-sizing: content;
  box-shadow: 0 2px 8px rgba(17, 17, 17, 0.04);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.doorway__textarea::placeholder {
  color: var(--color-muted-ink);
  opacity: 0.7;
}

.doorway__textarea:focus {
  outline: none;
  border-color: var(--color-ink);
  box-shadow: 0 0 0 3px rgba(17, 17, 17, 0.08), 0 2px 8px rgba(17, 17, 17, 0.04);
}

.doorway__submit {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 52px;
  padding: var(--space-4) var(--space-6);
  background: var(--color-sun);
  color: var(--color-ink);
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: var(--weight-semibold);
  border: none;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: filter var(--transition-fast), opacity var(--transition-fast);
}

.doorway__submit:hover:not(:disabled) {
  filter: brightness(0.94);
}

.doorway__submit:focus-visible {
  outline: 3px solid var(--color-ink);
  outline-offset: 3px;
}

.doorway__submit:disabled {
  opacity: 0.38;
  cursor: not-allowed;
}

/* ── Example cards ──────────────────────────────────────── */

.doorway__cards-header {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: var(--weight-semibold);
  color: var(--color-muted-ink);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-top: var(--space-3);
  margin-bottom: var(--space-3);
}

.doorway__cards {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
}

.doorway__card {
  padding: var(--space-2) var(--space-4);
  background: var(--color-paper);
  border: 1.5px solid rgba(17, 17, 17, 0.12);
  border-radius: var(--radius-full);
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: var(--weight-medium);
  color: var(--color-ink);
  cursor: pointer;
  transition: border-color var(--transition-fast);
}

.doorway__card:hover {
  border-color: rgba(17, 17, 17, 0.3);
}

.doorway__card:focus-visible {
  outline: 3px solid var(--color-ink);
  outline-offset: 3px;
}

.doorway__empty-hint {
  font-size: var(--text-small);
  color: var(--color-muted-ink);
  text-align: center;
}

.doorway__reassurance {
  font-size: var(--text-small);
  color: var(--color-muted-ink);
  line-height: var(--lh-ui);
  text-align: center;
}

@media (max-width: 640px) {
  .doorway__form { max-width: 100%; }
}
</style>
