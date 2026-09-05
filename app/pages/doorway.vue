<script setup lang="ts">
import { FIXED_PRACTICE_LINE } from '~/composables/useDoorwaySession'

// Testing shell for Item 2. Exercises all state-machine transitions end-to-end.
// /what-are-you-going-through retains its existing placeholder — untouched.
// When Screen 0/1 components land in Item 3, this shell gets replaced.
usePageSeo({
  title: 'Your Starting Point — HaveAGreatYesterday.com',
  description: 'A personalized Starting Point for your days.',
  path: '/doorway',
  robots: 'noindex',
})

const {
  state,
  response,
  reset,
  submitInput,
  skipFollowup,
  retryGeneration,
} = useDoorwaySession()

// Standalone/direct entry: minimal form — Screen 0/1 components replace this in Item 3.
const directText = ref('')
const directCanSubmit = computed(() => directText.value.trim().length > 0)

function directSubmit() {
  if (!directCanSubmit.value) return
  submitInput({ text: directText.value, situationCard: null, source: 'direct' })
}
</script>

<template>
  <div class="doorway-shell">

    <!-- Screen 4 — GENERATING -->
    <DoorwayScreenGenerating v-if="state === 'GENERATING'" />

    <!-- Screens 5 + 6 — RESPONSE_READY / EMAIL_INVITED / EMAIL_SUBMITTING / EMAIL_FAILED -->
    <DoorwayScreenResponse
      v-else-if="response && ['RESPONSE_READY', 'EMAIL_INVITED', 'EMAIL_SUBMITTING', 'EMAIL_FAILED'].includes(state)"
      :response="response"
    />

    <!-- Screen 7 — email path -->
    <section
      v-else-if="state === 'EMAIL_SUBMITTED'"
      class="shell-screen section--lg bg-warm-paper"
      aria-labelledby="confirm-heading"
    >
      <div class="container container--md shell-screen__inner">
        <h1 id="confirm-heading" class="shell-screen__heading">
          You're set. Now go catch your first one.
        </h1>
        <p class="shell-screen__body">
          Your Starting Point is on its way to your inbox. For now, keep a notebook and pen within
          reach — when the next good moment appears in one of these parts of your day, write it
          down before the day moves on. That's the practice, and you've begun it.
        </p>
        <NuxtLink to="/" class="shell-screen__cta">Back to the home page</NuxtLink>
      </div>
    </section>

    <!-- Screen 7 — decline path -->
    <section
      v-else-if="state === 'EMAIL_DECLINED'"
      class="shell-screen section--lg bg-warm-paper"
      aria-labelledby="confirm-heading"
    >
      <div class="container container--md shell-screen__inner">
        <h1 id="confirm-heading" class="shell-screen__heading">
          Good. You've got everything you need.
        </h1>
        <p class="shell-screen__body">
          Keep a notebook and pen within reach. When the next good moment appears in one of these
          parts of your day, write it down. At least three a day, caught while they happen.
          The door's open whenever you'd like a hand.
        </p>
        <NuxtLink to="/" class="shell-screen__cta">Back to the home page</NuxtLink>
      </div>
    </section>

    <!-- §5.5 fallback — GENERATION_FAILED -->
    <section
      v-else-if="state === 'GENERATION_FAILED'"
      class="shell-screen section--lg bg-warm-paper"
      aria-labelledby="fallback-heading"
    >
      <div class="container container--md shell-screen__inner">
        <h1 id="fallback-heading" class="shell-screen__heading">
          Something went wrong on our end.
        </h1>
        <p class="shell-screen__practice">{{ FIXED_PRACTICE_LINE }}</p>
        <p class="shell-screen__body">
          Take a moment and name three places in your own day where a good moment could happen.
          Write each one down when it does.
        </p>
        <button type="button" class="shell-screen__cta shell-screen__cta--sun" @click="retryGeneration()">
          Try again
        </button>
      </div>
    </section>

    <!-- §5.4 safety interruption — SAFETY_INTERRUPTED -->
    <section
      v-else-if="state === 'SAFETY_INTERRUPTED'"
      class="shell-screen section--lg bg-warm-paper"
      aria-labelledby="safety-heading"
    >
      <div class="container container--md shell-screen__inner">
        <h1 id="safety-heading" class="shell-screen__heading">
          You don't have to carry this alone.
        </h1>
        <p class="shell-screen__body">
          If you're in crisis or need to talk to someone right now, please reach out.
        </p>
        <ul class="shell-screen__resources">
          <li><strong>988 Suicide &amp; Crisis Lifeline:</strong> call or text <strong>988</strong></li>
          <li><strong>Crisis Text Line:</strong> text HOME to <strong>741741</strong></li>
          <li>
            <strong>International Association for Suicide Prevention:</strong>
            <a href="https://www.iasp.info/resources/Crisis_Centres/" target="_blank" rel="noopener noreferrer">
              find a crisis centre near you
            </a>
          </li>
        </ul>
      </div>
    </section>

    <!-- Screen 3 placeholder — FOLLOWUP (full component in Item 3) -->
    <section
      v-else-if="state === 'FOLLOWUP'"
      class="shell-screen section--lg bg-warm-paper"
      aria-labelledby="followup-heading"
    >
      <div class="container container--md shell-screen__inner">
        <p id="followup-heading" class="shell-screen__prompt">
          One thing before we show you this: when a day does go a little right — a small one
          counts — where does it usually come from?
        </p>
        <p class="shell-screen__note">
          Full Screen 3 chip component added in Item 3.
        </p>
        <button type="button" class="shell-screen__skip" @click="skipFollowup()">
          Skip — show me what you found
        </button>
      </div>
    </section>

    <!-- ENTRY / INPUT_SUBMITTED — minimal direct-URL input (Screen 0/1 in Item 3) -->
    <section
      v-else
      class="shell-screen section--lg bg-warm-paper"
      aria-labelledby="entry-heading"
    >
      <div class="container container--md shell-screen__inner">
        <h1 id="entry-heading" class="shell-screen__heading">
          Let's start with your actual life.
        </h1>
        <p class="shell-screen__body">
          Tell us a little about your days — the work, the people in them, what you carry, what
          you enjoy. A few sentences is plenty.
          <em>(Screen 0/1 polish comes in Item 3.)</em>
        </p>
        <form novalidate @submit.prevent="directSubmit">
          <label class="sr-only" for="direct-input">Tell us about your days</label>
          <textarea
            id="direct-input"
            v-model="directText"
            class="shell-screen__textarea"
            placeholder="Start anywhere — a normal Tuesday is perfect."
            rows="4"
          />
          <button
            type="submit"
            class="shell-screen__cta shell-screen__cta--sun"
            :disabled="!directCanSubmit"
          >
            Show me
          </button>
        </form>
        <p class="shell-screen__reassurance">No account needed.</p>
      </div>
    </section>

  </div>
</template>

<style scoped>
.shell-screen__inner {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  max-width: var(--container-md);
}

.shell-screen__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
  max-width: 26ch;
}

.shell-screen__prompt {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: var(--weight-bold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
  max-width: 40ch;
}

.shell-screen__body {
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
  max-width: 58ch;
}

.shell-screen__note {
  font-size: var(--text-small);
  color: var(--color-muted-ink);
}

.shell-screen__practice {
  padding-left: var(--space-5);
  border-left: 3px solid var(--color-sun);
  font-size: var(--text-body-lg);
  line-height: 1.65;
  color: var(--color-ink);
  max-width: 60ch;
}

.shell-screen__resources {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-left: var(--space-5);
  font-size: var(--text-body);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

.shell-screen__textarea {
  display: block;
  width: 100%;
  min-height: 6rem;
  padding: var(--space-5) var(--space-6);
  background: var(--color-paper);
  border: 1.5px solid rgba(17, 17, 17, 0.15);
  border-radius: var(--radius-lg);
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
  resize: vertical;
  margin-bottom: var(--space-4);
}

.shell-screen__textarea:focus {
  outline: none;
  border-color: var(--color-ink);
}

.shell-screen__cta {
  display: inline-flex;
  align-items: center;
  background: var(--color-ink);
  color: var(--color-paper);
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: var(--weight-semibold);
  border: none;
  border-radius: var(--radius-full);
  padding: var(--space-4) var(--space-8);
  cursor: pointer;
  text-decoration: none;
  min-height: 48px;
  transition: background var(--transition-fast), color var(--transition-fast), filter var(--transition-fast), opacity var(--transition-fast);
}

.shell-screen__cta--sun {
  background: var(--color-sun);
  color: var(--color-ink);
}

.shell-screen__cta--sun:hover:not(:disabled) { filter: brightness(0.94); }
.shell-screen__cta--sun:disabled { opacity: 0.38; cursor: not-allowed; }

.shell-screen__skip {
  background: none;
  border: 1.5px solid rgba(17, 17, 17, 0.2);
  border-radius: var(--radius-full);
  font-family: var(--font-body);
  font-size: var(--text-body);
  color: var(--color-muted-ink);
  padding: var(--space-3) var(--space-6);
  cursor: pointer;
  align-self: flex-start;
  transition: border-color var(--transition-fast), color var(--transition-fast);
}

.shell-screen__skip:hover { border-color: var(--color-ink); color: var(--color-ink); }

.shell-screen__reassurance {
  font-size: var(--text-small);
  color: var(--color-muted-ink);
}
</style>
