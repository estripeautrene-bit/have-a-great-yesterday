<script setup lang="ts">
const choices = usePainChoices()

const writtenText = ref('')
const selectedCardIndex = ref<number | null>(null)
const hasTrackedStart = ref(false)
const sectionRef = ref<HTMLElement | null>(null)
let viewObserver: IntersectionObserver | null = null

const canSubmit = computed(() => writtenText.value.trim().length > 0)

const { $posthog } = useNuxtApp()
function track(name: string, props: Record<string, unknown> = {}) {
  if ($posthog.__loaded) $posthog.capture(name, props)
}

function selectCard(index: number) {
  selectedCardIndex.value = selectedCardIndex.value === index ? null : index
}

function onInput(e: Event) {
  const el = e.target as HTMLTextAreaElement
  el.style.height = 'auto'
  el.style.height = `${el.scrollHeight}px`
  if (!hasTrackedStart.value) {
    hasTrackedStart.value = true
    track('doorway_input_started', { source: 'homepage' })
  }
}

function handleSubmit() {
  if (!canSubmit.value) return
  track('doorway_homepage_submitted', {
    source: 'homepage',
    card_selected: selectedCardIndex.value !== null,
  })
  // Item 2: state machine wired here
  console.log('[doorway] submit', {
    text: writtenText.value,
    situationCard: selectedCardIndex.value !== null ? choices[selectedCardIndex.value] : null,
    source: 'homepage',
  })
}

onMounted(() => {
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
        Tell us a little about your actual life.
      </h2>
      <p class="doorway__subhead">
        A few sentences about your days is plenty—the people in them, what you do, what you carry,
        what you enjoy, and anything specific that brought you here. We'll show you a personalized
        Starting Point: where meaningful moments may already be happening.
      </p>

      <form class="doorway__form" novalidate @submit.prevent="handleSubmit">
        <label class="sr-only" for="doorway-input">Tell us about your days</label>
        <textarea
          id="doorway-input"
          v-model="writtenText"
          class="doorway__textarea"
          placeholder="Start anywhere—a normal Tuesday is perfect."
          rows="3"
          aria-describedby="doorway-reassurance"
          @input="onInput"
        />
        <button
          type="submit"
          class="doorway__submit"
          :disabled="!canSubmit"
        >
          <svg
            aria-hidden="true"
            class="doorway__submit-icon"
            fill="currentColor"
            height="18"
            viewBox="0 0 24 24"
            width="18"
          >
            <circle cx="12" cy="12" r="4.5" />
            <line stroke="currentColor" stroke-linecap="round" stroke-width="2" x1="12" x2="12" y1="2" y2="5" />
            <line stroke="currentColor" stroke-linecap="round" stroke-width="2" x1="12" x2="12" y1="19" y2="22" />
            <line stroke="currentColor" stroke-linecap="round" stroke-width="2" x1="2" x2="5" y1="12" y2="12" />
            <line stroke="currentColor" stroke-linecap="round" stroke-width="2" x1="19" x2="22" y1="12" y2="12" />
            <line stroke="currentColor" stroke-linecap="round" stroke-width="2" x1="4.93" x2="6.34" y1="4.93" y2="6.34" />
            <line stroke="currentColor" stroke-linecap="round" stroke-width="2" x1="17.66" x2="19.07" y1="17.66" y2="19.07" />
            <line stroke="currentColor" stroke-linecap="round" stroke-width="2" x1="4.93" x2="6.34" y1="19.07" y2="17.66" />
            <line stroke="currentColor" stroke-linecap="round" stroke-width="2" x1="17.66" x2="19.07" y1="6.34" y2="4.93" />
          </svg>
          Show me my Starting Point
        </button>
        <p id="doorway-reassurance" class="doorway__reassurance">
          No account or email needed to see it.
        </p>
      </form>

      <div class="doorway__cards" role="group" aria-label="Situation categories — optional context">
        <p class="doorway__cards-intro">Or start with what brought you here:</p>
        <ul class="doorway__cards-list" role="list">
          <li v-for="(choice, index) in choices" :key="choice">
            <button
              type="button"
              class="doorway__card"
              :class="{ 'doorway__card--selected': selectedCardIndex === index }"
              :aria-pressed="selectedCardIndex === index"
              @click="selectCard(index)"
            >
              <span aria-hidden="true" class="doorway__card-dot" />
              <span class="doorway__card-label">{{ choice }}</span>
            </button>
          </li>
        </ul>
      </div>
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
  margin-bottom: var(--space-12);
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
  gap: var(--space-2);
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

.doorway__submit-icon {
  flex-shrink: 0;
}

.doorway__reassurance {
  font-size: var(--text-small);
  color: var(--color-muted-ink);
  line-height: var(--lh-ui);
  text-align: center;
}

/* ── Situation cards ─────────────────────────────────────── */

.doorway__cards-intro {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: var(--weight-semibold);
  color: var(--color-muted-ink);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: var(--space-4);
}

.doorway__cards-list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: var(--space-3);
}

.doorway__card {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  padding: var(--space-4) var(--space-5);
  background: var(--color-paper);
  border: 1.5px solid rgba(17, 17, 17, 0.1);
  border-radius: var(--radius-lg);
  cursor: pointer;
  text-align: left;
  box-shadow: 0 1px 6px rgba(17, 17, 17, 0.04);
  transition:
    background var(--transition-fast),
    border-color var(--transition-fast),
    box-shadow var(--transition-fast);
}

.doorway__card:hover:not(.doorway__card--selected) {
  border-color: rgba(17, 17, 17, 0.22);
  box-shadow: 0 2px 12px rgba(17, 17, 17, 0.08);
}

.doorway__card:focus-visible {
  outline: 3px solid var(--color-ink);
  outline-offset: 2px;
}

.doorway__card--selected {
  background: var(--color-warm-paper);
  border-color: var(--color-sun);
  border-width: 2px;
  box-shadow: 0 2px 12px rgba(244, 197, 66, 0.18);
}

.doorway__card-dot {
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1.5px solid rgba(17, 17, 17, 0.25);
  background: transparent;
  transition:
    background var(--transition-fast),
    border-color var(--transition-fast);
}

.doorway__card--selected .doorway__card-dot {
  background: var(--color-sun);
  border-color: var(--color-sun);
}

.doorway__card-label {
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: var(--weight-medium);
  color: var(--color-ink);
  line-height: var(--lh-ui);
}

@media (max-width: 640px) {
  .doorway__cards-list { grid-template-columns: 1fr; }
  .doorway__form { max-width: 100%; }
}
</style>
