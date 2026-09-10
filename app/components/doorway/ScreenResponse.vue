<script setup lang="ts">
import type { DoorwayResponse } from '~/composables/useDoorwaySession'

const props = defineProps<{ response: DoorwayResponse }>()

const mechanismParagraphs = computed(() =>
  props.response.mechanism
    .split(/\n\n+/)
    .map(p => p.trim())
    .filter(p => p.length > 0),
)

type FormState = 'idle' | 'submitting' | 'success' | 'error'
const formState = ref<FormState>('idle')
const firstName = ref('')
const email = ref('')

const formValid = computed(
  () =>
    firstName.value.trim().length > 0
    && /\S+@\S+/.test(email.value),
)

const { apiBase } = useRuntimeConfig().public
const { $posthog } = useNuxtApp()
function track(name: string, extras: Record<string, unknown> = {}) {
  if ($posthog.__loaded) $posthog.capture(name, extras)
}

async function submitForm() {
  if (!formValid.value || formState.value === 'submitting') return
  formState.value = 'submitting'
  try {
    const res = await fetch(`${apiBase}/api/capture-email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: firstName.value.trim(),
        email: email.value.trim(),
        consent: true,
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

        <div class="response__mechanism-body">
          <p
            v-for="(para, idx) in mechanismParagraphs"
            :key="idx"
            class="response__mechanism-para"
          >{{ para }}</p>
        </div>

        <p class="response__pull-quote">{{ response.continuationBridge }}</p>

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

        <!-- Founder continuation — replaces email form until MyHGY Starting Point is built -->
        <!-- To re-enable the email form: remove this section and restore response__form-section below -->
        <section class="response__continuation">
          <h2 class="response__continuation-heading">Begin with today.</h2>
          <p class="response__continuation-body">Carry a small notebook and pen. When one of these moments happens, write it down while it is still alive. Aim for at least three today, then do it again tomorrow. Over time, those pages become visible evidence of what is still happening, what you are doing, and where you are moving.</p>
        </section>

        <section class="response__banner" aria-labelledby="banner-heading">
          <div v-if="formState === 'success'" class="response__banner-success" role="status">
            <p>Done — check your inbox for the MyHGY Starting Point PDF. You'll also receive one MyHGY email each Thursday.</p>
          </div>

          <template v-else>
            <div class="response__banner-copy">
              <h2 id="banner-heading" class="response__banner-heading">
                Get Your <span class="banner__wordmark"><span class="banner__my">My</span><span class="banner__hgy">HGY</span><sup class="banner__tm">™</sup></span> Starting Point Tool
              </h2>
              <p class="response__banner-sub">And one useful insight every week on our newsletter.</p>
            </div>

            <form class="response__banner-form" novalidate @submit.prevent="submitForm">
              <div class="response__banner-row">
                <input
                  id="banner-firstname"
                  v-model="firstName"
                  class="response__banner-input"
                  type="text"
                  placeholder="First name"
                  autocomplete="given-name"
                  aria-label="First name"
                  required
                />
                <input
                  id="banner-email"
                  v-model="email"
                  class="response__banner-input"
                  type="email"
                  placeholder="Email"
                  autocomplete="email"
                  aria-label="Email"
                  required
                />
                <button
                  type="submit"
                  class="response__banner-submit"
                  :disabled="!formValid || formState === 'submitting'"
                >
                  {{ formState === 'submitting' ? 'Sending…' : 'Submit' }}
                </button>
              </div>

              <p v-if="formState === 'error'" class="response__banner-error" role="alert">
                Something went wrong — please try again.
              </p>

              <p class="response__banner-fine">Unsubscribe anytime.</p>
            </form>
          </template>
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
.response__mechanism-para {
  font-size: var(--text-body-lg);
  line-height: 1.65;
  color: var(--color-ink);
  max-width: 66ch;
}

.response__mechanism-body {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  max-width: 66ch;
}

/* Editorial pull-quote treatment for the continuationBridge */
.response__pull-quote {
  margin: 0;
  padding: var(--space-8) 0;
  border-top: 2px solid var(--color-sun);
  font-family: var(--font-display);
  font-size: clamp(1.25rem, 2.5vw, 1.625rem);
  font-weight: var(--weight-medium);
  line-height: 1.5;
  color: var(--color-ink);
  max-width: 52ch;
  font-style: normal;
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

/* ── Founder continuation section ───────────────────────── */

.response__continuation {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-8);
  background: var(--color-paper);
  border: 1px solid rgba(17, 17, 17, 0.08);
  border-radius: var(--radius-lg);
  max-width: var(--container-sm);
}

.response__continuation-heading {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.response__continuation-body {
  font-size: var(--text-body-lg);
  line-height: 1.65;
  color: var(--color-ink);
  max-width: 56ch;
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

/* ── Signup banner ────────────────────────────────────────── */

.response__banner {
  background: var(--color-ink);
  border-radius: var(--radius-xl);
  /* Break out of container padding so the banner spans the full 768px container width */
  margin-inline: calc(-1 * var(--page-gutter));
  padding: var(--space-6) var(--space-10);
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: var(--space-8);
  align-items: center;
}

.response__banner-copy {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.response__banner-heading {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: var(--weight-extrabold);
  color: var(--color-paper);
  line-height: var(--lh-heading);
}

/* Inline wordmark treatment — matches WordmarkHGY light/dark split */
.banner__wordmark {
  font-family: 'Playfair Display', Georgia, serif;
  letter-spacing: -0.01em;
}

.banner__my {
  font-weight: 900;
  color: var(--color-sun);
}

.banner__hgy {
  font-weight: 600;
  color: var(--color-paper);
}

.banner__tm {
  font-size: 0.36em;
  font-weight: 700;
  vertical-align: super;
  margin-left: 0.04em;
  line-height: 1;
  color: var(--color-paper);
  opacity: 0.55;
}

.response__banner-sub {
  font-size: var(--text-body);
  color: var(--color-paper);
  opacity: 0.8;
}

.response__banner-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.response__banner-row {
  display: flex;
  gap: var(--space-2);
  align-items: stretch;
}

.response__banner-input {
  flex: 1;
  min-width: 0;
  padding: var(--space-4) var(--space-5);
  background: var(--color-paper);
  border: none;
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-size: var(--text-body);
  color: var(--color-ink);
  transition: box-shadow var(--transition-fast);
}

.response__banner-input::placeholder {
  color: var(--color-muted-ink);
}

.response__banner-input:focus {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-sun);
}

.response__banner-submit {
  flex-shrink: 0;
  padding: var(--space-4) var(--space-6);
  background: var(--color-sun);
  color: var(--color-ink);
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: var(--weight-semibold);
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  white-space: nowrap;
  transition: opacity var(--transition-fast);
}

.response__banner-submit:hover:not(:disabled) { opacity: 0.85; }
.response__banner-submit:disabled { opacity: 0.38; cursor: not-allowed; }
.response__banner-submit:focus-visible {
  outline: 3px solid var(--color-paper);
  outline-offset: 3px;
}

.response__banner-fine {
  font-size: var(--text-xs);
  color: var(--color-paper);
  opacity: 0.5;
}

.response__banner-error {
  font-size: var(--text-small);
  color: #fca5a5;
  font-weight: var(--weight-medium);
}

.response__banner-success {
  grid-column: 1 / -1;
  font-size: var(--text-body);
  color: var(--color-paper);
}

@media (max-width: 768px) {
  .response__banner {
    margin-inline: 0;
    grid-template-columns: 1fr;
    padding: var(--space-6);
  }

  .response__banner-row {
    flex-direction: column;
  }
}
</style>
