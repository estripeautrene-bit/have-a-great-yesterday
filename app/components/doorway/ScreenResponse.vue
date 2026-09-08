<script setup lang="ts">
import type { DoorwayResponse } from '~/composables/useDoorwaySession'

const props = defineProps<{ response: DoorwayResponse }>()

type FormState = 'idle' | 'submitting' | 'success' | 'error'
const formState = ref<FormState>('idle')
const firstName = ref('')
const email = ref('')
const consent = ref(false)

const formValid = computed(
  () =>
    firstName.value.trim().length > 0
    && /\S+@\S+/.test(email.value)
    && consent.value === true,
)

const { $posthog } = useNuxtApp()
function track(name: string, extras: Record<string, unknown> = {}) {
  if ($posthog.__loaded) $posthog.capture(name, extras)
}

async function submitForm() {
  if (!formValid.value || formState.value === 'submitting') return
  formState.value = 'submitting'
  try {
    const res = await fetch('/api/capture-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: firstName.value.trim(),
        email: email.value.trim(),
        consent: consent.value,
      }),
    })
    if (!res.ok) throw new Error(`capture_error:${res.status}`)
    formState.value = 'success'
    track('doorway_email_captured', { source: props.response.kind })
  }
  catch {
    formState.value = 'error'
  }
}

onMounted(() => {
  track('doorway_response_delivered', { kind: props.response.kind })
  track('doorway_email_form_viewed', { source: props.response.kind })
})
</script>

<template>
  <article
    class="response bg-warm-paper"
    :class="{ 'response--safety': response.kind === 'safety' }"
    aria-labelledby="response-heading"
  >
    <div class="container container--md response__inner">

      <!-- Safety branch: no form -->
      <template v-if="response.kind === 'safety'">
        <h1 id="response-heading" class="response__heading">
          {{ response.headline }}
        </h1>
        <p class="response__opening">{{ response.opening }}</p>
        <p class="response__mechanism">{{ response.mechanism }}</p>
      </template>

      <!-- Guidance branch: full content + inline form -->
      <template v-else>
        <h1 id="response-heading" class="response__heading">
          {{ response.headline }}
        </h1>

        <p class="response__opening">{{ response.opening }}</p>

        <p class="response__mechanism">{{ response.mechanism }}</p>

        <div class="response__moments" aria-label="Three places to notice">
          <div
            v-for="(moment, i) in response.moments"
            :key="`${i}-${moment.title}`"
            class="moment-item"
          >
            <h2 class="moment-item__heading">
              <span class="moment-item__marker" aria-hidden="true">{{ i + 1 }}.</span>
              {{ moment.title }}
            </h2>
            <p class="moment-item__example">{{ moment.example }}</p>
            <p class="moment-item__meaning">{{ moment.meaning }}</p>
          </div>
        </div>

        <p class="response__practice">{{ response.practice }}</p>

        <p class="response__bridge">{{ response.continuationBridge }}</p>

        <!-- Inline form — always visible below result -->
        <section class="response__form-section" aria-labelledby="form-heading">
          <h2 id="form-heading" class="response__form-heading">
            Continue with MyHGY
          </h2>

          <div v-if="formState === 'success'" class="response__form-success" role="status">
            <p>You're set. Check your inbox — your Starting Point is on its way.</p>
          </div>

          <form
            v-else
            class="response__form"
            novalidate
            @submit.prevent="submitForm"
          >
            <div class="response__field">
              <label class="response__label" for="form-firstname">First name</label>
              <input
                id="form-firstname"
                v-model="firstName"
                class="response__input"
                type="text"
                autocomplete="given-name"
                required
              />
            </div>

            <div class="response__field">
              <label class="response__label" for="form-email">Email</label>
              <input
                id="form-email"
                v-model="email"
                class="response__input"
                type="email"
                autocomplete="email"
                required
              />
            </div>

            <label class="response__consent">
              <input
                v-model="consent"
                class="response__checkbox"
                type="checkbox"
                required
              />
              <span class="response__consent-text">
                I agree to receive my MyHGY Starting Point and guidance for continuing the practice.
              </span>
            </label>

            <p v-if="formState === 'error'" class="response__form-error" role="alert">
              Something went wrong — please try again.
            </p>

            <button
              type="submit"
              class="response__form-submit"
              :disabled="!formValid || formState === 'submitting'"
            >
              {{ formState === 'submitting' ? 'Sending…' : 'Start My 7-Day Practice' }}
            </button>
          </form>
        </section>
      </template>

    </div>
  </article>
</template>

<style scoped>
/* ── Article layout ─────────────────────────────────────── */

.response__inner {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  padding-block: var(--space-16) var(--space-20);
}

.response__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  line-height: var(--lh-heading);
  color: var(--color-ink);
  max-width: 26ch;
}

.response__opening,
.response__mechanism,
.response__bridge {
  font-size: var(--text-body-lg);
  line-height: 1.65;
  color: var(--color-ink);
  max-width: 66ch;
}

/* Practice line: thin Sun left-rule for emphasis */
.response__practice {
  padding-left: var(--space-5);
  border-left: 3px solid var(--color-sun);
  font-size: var(--text-body-lg);
  line-height: 1.65;
  color: var(--color-ink);
  max-width: 64ch;
}

/* ── Moments ────────────────────────────────────────────── */

.response__moments {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  background: var(--color-stone);
  border: 1px solid rgba(17, 17, 17, 0.08);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
}

.moment-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-block: var(--space-5);
  border-bottom: 1px solid rgba(17, 17, 17, 0.07);
}

.moment-item:first-child { padding-top: 0; }
.moment-item:last-child  { padding-bottom: 0; border-bottom: none; }

.moment-item__heading {
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
  font-family: var(--font-display);
  font-size: var(--text-body-lg);
  font-weight: var(--weight-bold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.moment-item__marker {
  color: var(--color-sun);
  font-weight: var(--weight-extrabold);
  flex-shrink: 0;
}

.moment-item__example {
  font-size: var(--text-body);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

.moment-item__meaning {
  font-size: var(--text-small);
  line-height: var(--lh-body);
  color: var(--color-muted-ink);
  font-style: italic;
}

/* ── Inline form section ────────────────────────────────── */

.response__form-section {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  background: var(--color-paper);
  border: 1px solid rgba(17, 17, 17, 0.08);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  max-width: var(--container-sm);
}

.response__form-heading {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.response__form {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.response__field {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.response__label {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: var(--weight-semibold);
  color: var(--color-ink);
  letter-spacing: 0.02em;
}

.response__input {
  width: 100%;
  padding: var(--space-4) var(--space-5);
  background: var(--color-paper);
  border: 1.5px solid rgba(17, 17, 17, 0.15);
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-size: var(--text-body);
  color: var(--color-ink);
  transition: border-color var(--transition-fast);
}

.response__input:focus {
  outline: none;
  border-color: var(--color-ink);
}

.response__consent {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  cursor: pointer;
}

.response__checkbox {
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  margin-top: 2px;
  accent-color: var(--color-ink);
  cursor: pointer;
}

.response__consent-text {
  font-size: var(--text-small);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

.response__form-error {
  font-size: var(--text-small);
  color: #b91c1c;
  font-weight: var(--weight-medium);
}

.response__form-success {
  padding: var(--space-4) var(--space-5);
  background: var(--color-warm-paper);
  border-left: 3px solid var(--color-evidence-green, #4a9d5c);
  font-size: var(--text-body);
  color: var(--color-ink);
}

.response__form-submit {
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

.response__form-submit:hover:not(:disabled) { filter: brightness(0.94); }
.response__form-submit:disabled { opacity: 0.38; cursor: not-allowed; }
.response__form-submit:focus-visible {
  outline: 3px solid var(--color-ink);
  outline-offset: 3px;
}
</style>
