<script setup lang="ts">
const { reset, submitInput } = useDoorwaySession()

const writtenText = ref('')
const hasTyped = ref(false)
const hasTrackedStart = ref(false)
const showEmptyHint = ref(false)
const isSubmitting = ref(false)
const textareaRef = ref<HTMLTextAreaElement | null>(null)

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
  if (!hasTyped.value) hasTyped.value = true
  if (writtenText.value.trim().length > 0) showEmptyHint.value = false
  if (!hasTrackedStart.value) {
    hasTrackedStart.value = true
    track('doorway_started', { source: 'direct' })
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
  hasTyped.value = true
  if (!hasTrackedStart.value) {
    hasTrackedStart.value = true
    track('doorway_started', { source: 'direct' })
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
  track('doorway_submitted', { source: 'direct' })
  submitInput({ text: writtenText.value, situationCard: null, source: 'direct' })
}

onMounted(() => {
  reset()
})
</script>

<template>
  <section class="entry" aria-labelledby="entry-heading">

    <!-- Screen 0: calm canvas header — wordmark + slim progress hint -->
    <div class="entry__chrome">
      <WordmarkHGY variant="light" size="sm" />
      <ol
        v-if="hasTyped"
        class="entry__steps"
        aria-label="Steps in this experience"
      >
        <li class="entry__step entry__step--active" aria-current="step">
          <span class="entry__step-dot" aria-hidden="true" />
          <span class="entry__step-label">Your days</span>
        </li>
        <li class="entry__step">
          <span class="entry__step-dot" aria-hidden="true" />
          <span class="entry__step-label">Starting Point</span>
        </li>
        <li class="entry__step">
          <span class="entry__step-dot" aria-hidden="true" />
          <span class="entry__step-label">The practice</span>
        </li>
      </ol>
    </div>

    <!-- Screen 1: situation input -->
    <div class="entry__content">
      <h1 id="entry-heading" class="entry__heading">
        Let's start with your actual life.
      </h1>
      <p class="entry__subhead">
        Tell us a little about your days — the work, the people in them, what you carry, what you enjoy. A few sentences is plenty. We'll show you where meaningful moments may already be happening in your week, and a simple way to keep them.
      </p>

      <form class="entry__form" novalidate @submit.prevent="handleSubmit">
        <label class="sr-only" for="entry-input">Tell us about your days</label>
        <textarea
          id="entry-input"
          ref="textareaRef"
          v-model="writtenText"
          class="entry__textarea"
          placeholder="Start anywhere — a normal Tuesday is perfect."
          rows="4"
          aria-describedby="entry-reassurance"
          @input="onInput"
        />

        <p class="entry__cards-header">Or start here:</p>
        <div class="entry__cards" role="group" aria-label="Example starting points">
          <button
            v-for="card in EXAMPLE_CARDS"
            :key="card"
            type="button"
            class="entry__card"
            @click="handleCardClick(card)"
          >
            {{ card }}
          </button>
        </div>

        <button
          type="submit"
          class="entry__submit"
          :disabled="isSubmitting"
        >
          Show Me How MyHGY Could Help
        </button>
        <p v-if="showEmptyHint" class="entry__empty-hint" role="alert">
          Describe what's going on in your life — a few sentences is plenty.
        </p>
        <p id="entry-reassurance" class="entry__reassurance">
          No account needed to see this.
        </p>
      </form>
    </div>

  </section>
</template>

<style scoped>
/* ── Canvas (Screen 0) ───────────────────────────────────── */

.entry {
  min-height: calc(100svh - var(--header-height));
  display: flex;
  flex-direction: column;
  background: linear-gradient(170deg, var(--color-paper) 0%, var(--color-warm-paper) 100%);
  padding: var(--space-10) var(--space-6) var(--space-20);
}

/* ── Chrome bar: wordmark + progress hint ────────────────── */

.entry__chrome {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-16);
}

/* ── Progress steps ──────────────────────────────────────── */

.entry__steps {
  display: flex;
  align-items: center;
  list-style: none;
  animation: stepsFadeIn 0.3s ease;
}

@keyframes stepsFadeIn {
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
}

.entry__step {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

/* Connector line between steps */
.entry__step:not(:last-child)::after {
  content: '';
  display: block;
  width: 20px;
  height: 1.5px;
  background: rgba(17, 17, 17, 0.12);
  margin: 0 var(--space-3);
}

.entry__step-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(17, 17, 17, 0.15);
  flex-shrink: 0;
  transition: background var(--transition-fast);
}

.entry__step--active .entry__step-dot {
  background: var(--color-sun);
}

.entry__step-label {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  color: var(--color-muted-ink);
  white-space: nowrap;
}

.entry__step--active .entry__step-label {
  color: var(--color-ink);
  font-weight: var(--weight-semibold);
}

/* ── Form content (Screen 1) ─────────────────────────────── */

.entry__content {
  max-width: var(--container-md);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.entry__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
  max-width: 22ch;
}

.entry__subhead {
  font-size: var(--text-body-lg);
  color: var(--color-muted-ink);
  line-height: var(--lh-body);
  max-width: 58ch;
}

.entry__form {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: var(--container-md);
}

.entry__textarea {
  width: 100%;
  min-height: 7rem;
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

.entry__textarea::placeholder {
  color: var(--color-muted-ink);
  opacity: 0.7;
}

.entry__textarea:focus {
  outline: none;
  border-color: var(--color-ink);
  box-shadow: 0 0 0 3px rgba(17, 17, 17, 0.08), 0 2px 8px rgba(17, 17, 17, 0.04);
}

/* ── Example cards ──────────────────────────────────────── */

.entry__cards-header {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: var(--weight-semibold);
  color: var(--color-muted-ink);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-top: var(--space-3);
  margin-bottom: var(--space-3);
}

.entry__cards {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
}

.entry__card {
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

.entry__card:hover {
  border-color: rgba(17, 17, 17, 0.3);
}

.entry__card:focus-visible {
  outline: 3px solid var(--color-ink);
  outline-offset: 3px;
}

.entry__empty-hint {
  font-size: var(--text-small);
  color: var(--color-muted-ink);
  text-align: center;
}

/* ── Submit ─────────────────────────────────────────────── */

.entry__submit {
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

.entry__submit:hover:not(:disabled) { filter: brightness(0.94); }

.entry__submit:focus-visible {
  outline: 3px solid var(--color-ink);
  outline-offset: 3px;
}

.entry__submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.entry__reassurance {
  font-size: var(--text-small);
  color: var(--color-muted-ink);
  line-height: var(--lh-ui);
  text-align: center;
}

/* ── Mobile ──────────────────────────────────────────────── */

@media (max-width: 640px) {
  .entry {
    padding: var(--space-8) var(--space-5) var(--space-12);
  }

  .entry__chrome {
    margin-bottom: var(--space-10);
  }

  /* On mobile: dots only; show active label only */
  .entry__step-label { display: none; }
  .entry__step--active .entry__step-label { display: block; }

  .entry__step:not(:last-child)::after { width: 12px; margin: 0 var(--space-2); }

  .entry__form { max-width: 100%; }
}

/* ── Reduced motion ──────────────────────────────────────── */

@media (prefers-reduced-motion: reduce) {
  .entry__steps { animation: none; }
}
</style>
