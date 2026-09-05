<script setup lang="ts">
import { FIXED_PRACTICE_LINE, type DoorwayResponse } from '~/composables/useDoorwaySession'

const props = defineProps<{ response: DoorwayResponse }>()

const { state, showEmailGate, declineEmail, submitEmail } = useDoorwaySession()

const terrainCountWord = computed(() =>
  props.response.terrains.length === 3 ? 'Three' : 'Two'
)

// ── Email gate form (Screen 6 — minimal for Item 2, full component in Item 3) ──
const emailFields = reactive({ firstName: '', email: '', consent: false })

const emailValid = computed(() =>
  emailFields.firstName.trim().length > 0
  && /\S+@\S+/.test(emailFields.email)
  && emailFields.consent
)

function onEmailSubmit() {
  if (!emailValid.value) return
  submitEmail({
    firstName: emailFields.firstName.trim(),
    email: emailFields.email.trim(),
    consent: emailFields.consent,
  })
}
</script>

<template>
  <div class="response-wrap">

    <!-- ── Screen 5 ────────────────────────────────────────── -->
    <article class="response bg-warm-paper" aria-labelledby="response-heading">
      <div class="container container--md response__inner">

        <h1 id="response-heading" class="response__heading">
          {{ terrainCountWord }} places in your day worth noticing.
        </h1>

        <p class="response__opening">{{ response.opening }}</p>

        <p class="response__practice">{{ FIXED_PRACTICE_LINE }}</p>

        <div class="response__sp" aria-label="Your MyHGY Starting Point">
          <p class="response__sp-divider" aria-hidden="true">⸻ Your MyHGY Starting Point ⸻</p>

          <div class="response__sp-card">
            <div
              v-for="(terrain, i) in response.terrains"
              :key="terrain.title"
              class="sp-item"
            >
              <h2 class="sp-item__heading">
                <span class="sp-item__marker" aria-hidden="true">{{ i + 1 }} ·</span>
                {{ terrain.title }}
              </h2>
              <p class="sp-item__moment">{{ terrain.kind_of_moment }}</p>
              <p v-if="terrain.privacy_note" class="sp-item__privacy">{{ terrain.privacy_note }}</p>
              <p class="sp-item__ready">{{ terrain.be_ready }}</p>
            </div>
          </div>
        </div>

        <p class="response__closing">{{ response.closing }}</p>

        <!-- Teaser — explicit tap only, visible in RESPONSE_READY only -->
        <div v-if="state === 'RESPONSE_READY'" class="response__teaser">
          <button
            type="button"
            class="response__teaser-btn"
            @click="showEmailGate()"
          >
            Get your Starting Point by email
          </button>
        </div>

      </div>
    </article>

    <!-- ── Screen 6 — appears only after explicit tap above ─ -->
    <!-- Full styled component in Item 3; functional minimal form here. -->
    <section
      v-if="['EMAIL_INVITED', 'EMAIL_SUBMITTING', 'EMAIL_FAILED'].includes(state)"
      id="email-gate"
      class="email-gate section bg-stone"
      aria-labelledby="email-gate-heading"
    >
      <div class="container container--md">

        <h2 id="email-gate-heading" class="email-gate__heading">
          Want your Starting Point in your inbox?
        </h2>

        <p class="email-gate__body">
          You've got the practice, and your Starting Point is right here — free, yours, nothing
          hidden. If you'd like, leave your first name and email and we'll send you a copy of it,
          then follow with a few short notes to help you begin and continue the practice.
        </p>

        <form
          class="email-gate__form"
          novalidate
          @submit.prevent="onEmailSubmit"
        >
          <div class="email-gate__field">
            <label class="email-gate__label" for="gate-firstname">First name</label>
            <input
              id="gate-firstname"
              v-model="emailFields.firstName"
              class="email-gate__input"
              type="text"
              autocomplete="given-name"
              required
            />
          </div>

          <div class="email-gate__field">
            <label class="email-gate__label" for="gate-email">Email</label>
            <input
              id="gate-email"
              v-model="emailFields.email"
              class="email-gate__input"
              type="email"
              autocomplete="email"
              required
            />
          </div>

          <label class="email-gate__consent">
            <input
              v-model="emailFields.consent"
              class="email-gate__checkbox"
              type="checkbox"
              required
            />
            <span class="email-gate__consent-text">
              I agree to receive these emails and to the
              <NuxtLink to="/privacy">Privacy Policy</NuxtLink> and
              <NuxtLink to="/terms">Terms of Service</NuxtLink>.
            </span>
          </label>

          <p v-if="state === 'EMAIL_FAILED'" class="email-gate__error" role="alert">
            We couldn't send it just now — try again.
          </p>

          <button
            type="submit"
            class="email-gate__submit"
            :disabled="!emailValid || state === 'EMAIL_SUBMITTING'"
          >
            {{ state === 'EMAIL_SUBMITTING' ? 'Sending…' : 'Email my Starting Point' }}
          </button>

          <p class="email-gate__microcopy">
            One helpful note at a time. Leave whenever you like.
          </p>

          <button
            type="button"
            class="email-gate__decline"
            @click="declineEmail()"
          >
            I've got what I need for now.
          </button>
        </form>

      </div>
    </section>

  </div>
</template>

<style scoped>
/* ── Screen 5 ─────────────────────────────────────────────── */

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

.response__opening {
  font-size: var(--text-body-lg);
  line-height: 1.65;
  color: var(--color-ink);
  max-width: 66ch;
}

/* Fixed practice line — thin Sun left-rule to set it apart */
.response__practice {
  padding-left: var(--space-5);
  border-left: 3px solid var(--color-sun);
  font-size: var(--text-body-lg);
  line-height: 1.65;
  color: var(--color-ink);
  max-width: 64ch;
}

/* ── Starting Point card ────────────────────────────────── */

.response__sp-divider {
  font-family: var(--font-display);
  font-size: var(--text-small);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.06em;
  color: var(--color-muted-ink);
  text-align: center;
  margin-bottom: var(--space-6);
}

.response__sp-card {
  background: var(--color-stone);
  border: 1px solid rgba(17, 17, 17, 0.08);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  gap: 0;
}

.sp-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-block: var(--space-6);
  border-bottom: 1px solid rgba(17, 17, 17, 0.07);
}

.sp-item:first-child { padding-top: 0; }
.sp-item:last-child  { padding-bottom: 0; border-bottom: none; }

.sp-item__heading {
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
  font-family: var(--font-display);
  font-size: var(--text-body-lg);
  font-weight: var(--weight-bold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.sp-item__marker {
  color: var(--color-sun);
  font-weight: var(--weight-extrabold);
  flex-shrink: 0;
}

.sp-item__moment {
  font-size: var(--text-body);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

.sp-item__privacy {
  font-size: var(--text-small);
  line-height: var(--lh-body);
  color: var(--color-muted-ink);
  font-style: italic;
}

.sp-item__ready {
  font-size: var(--text-body);
  line-height: var(--lh-body);
  color: var(--color-ink);
  font-weight: var(--weight-medium);
}

.response__closing {
  font-size: var(--text-body-lg);
  line-height: 1.65;
  color: var(--color-ink);
  max-width: 60ch;
}

/* ── Teaser button (Screen 5 → Screen 6) ───────────────── */

.response__teaser {
  display: flex;
  justify-content: center;
  padding-top: var(--space-4);
}

.response__teaser-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--color-sun);
  color: var(--color-ink);
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: var(--weight-semibold);
  border: none;
  border-radius: var(--radius-full);
  padding: var(--space-4) var(--space-8);
  cursor: pointer;
  min-height: 52px;
  transition: filter var(--transition-fast);
}

.response__teaser-btn:hover       { filter: brightness(0.94); }
.response__teaser-btn:focus-visible {
  outline: 3px solid var(--color-ink);
  outline-offset: 3px;
}

/* ── Screen 6 — minimal for Item 2 ─────────────────────── */

.email-gate__heading {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
  margin-bottom: var(--space-4);
  max-width: 28ch;
}

.email-gate__body {
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
  max-width: 60ch;
  margin-bottom: var(--space-8);
}

.email-gate__form {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  max-width: var(--container-sm);
}

.email-gate__field {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.email-gate__label {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: var(--weight-semibold);
  color: var(--color-ink);
  letter-spacing: 0.02em;
}

.email-gate__input {
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

.email-gate__input:focus {
  outline: none;
  border-color: var(--color-ink);
}

.email-gate__consent {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  cursor: pointer;
}

.email-gate__checkbox {
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  margin-top: 2px;
  accent-color: var(--color-ink);
  cursor: pointer;
}

.email-gate__consent-text {
  font-size: var(--text-small);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

.email-gate__error {
  font-size: var(--text-small);
  color: #b91c1c;
  font-weight: var(--weight-medium);
}

.email-gate__submit {
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

.email-gate__submit:hover:not(:disabled) { filter: brightness(0.94); }
.email-gate__submit:disabled { opacity: 0.38; cursor: not-allowed; }
.email-gate__submit:focus-visible {
  outline: 3px solid var(--color-ink);
  outline-offset: 3px;
}

.email-gate__microcopy {
  font-size: var(--text-small);
  color: var(--color-muted-ink);
  text-align: center;
}

.email-gate__decline {
  background: none;
  border: none;
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: var(--color-muted-ink);
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
  padding: 0;
  text-align: center;
  align-self: center;
  transition: color var(--transition-fast);
}

.email-gate__decline:hover { color: var(--color-ink); }
</style>
