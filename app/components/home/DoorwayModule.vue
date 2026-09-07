<script setup lang="ts">
const { reset, submitInput } = useDoorwaySession()

const writtenText = ref('')
const hasTrackedStart = ref(false)
const sectionRef = ref<HTMLElement | null>(null)
let viewObserver: IntersectionObserver | null = null

const canSubmit = computed(() => writtenText.value.trim().length > 0)

const { $posthog } = useNuxtApp()
function track(name: string, props: Record<string, unknown> = {}) {
  if ($posthog.__loaded) $posthog.capture(name, props)
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
  track('doorway_homepage_submitted', { source: 'homepage' })
  submitInput({ text: writtenText.value, situationCard: null, source: 'homepage' })
  navigateTo('/doorway')
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
          v-model="writtenText"
          class="doorway__textarea"
          placeholder="Tell us a little about your life…"
          rows="3"
          aria-describedby="doorway-reassurance"
          @input="onInput"
        />
        <button
          type="submit"
          class="doorway__submit"
          :disabled="!canSubmit"
        >
          Show Me How MyHGY Could Help
        </button>
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
