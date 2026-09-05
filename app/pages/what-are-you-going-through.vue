<script setup lang="ts">
import { FIXED_PRACTICE_LINE } from '~/composables/useDoorwaySession'

usePageSeo({
  title: 'What Are You Going Through? — HaveAGreatYesterday.com',
  description: 'Tell us a little about your actual life. We\'ll show you where meaningful moments may already be happening in your week, and a simple way to keep them.',
  path: '/what-are-you-going-through',
  robots: 'noindex',
})

const {
  state,
  response,
  skipFollowup,
  retryGeneration,
} = useDoorwaySession()
</script>

<template>
  <div class="wayg">

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
      class="wayg-screen section--lg bg-warm-paper"
      aria-labelledby="confirm-heading"
    >
      <div class="container container--md wayg-screen__inner">
        <h1 id="confirm-heading" class="wayg-screen__heading">
          You're set. Now go catch your first one.
        </h1>
        <p class="wayg-screen__body">
          Your Starting Point is on its way to your inbox. For now, keep a notebook and pen within
          reach — when the next good moment appears in one of these parts of your day, write it
          down before the day moves on. That's the practice, and you've begun it.
        </p>
        <NuxtLink to="/" class="wayg-screen__cta">Back to the home page</NuxtLink>
      </div>
    </section>

    <!-- Screen 7 — decline path -->
    <section
      v-else-if="state === 'EMAIL_DECLINED'"
      class="wayg-screen section--lg bg-warm-paper"
      aria-labelledby="confirm-heading"
    >
      <div class="container container--md wayg-screen__inner">
        <h1 id="confirm-heading" class="wayg-screen__heading">
          Good. You've got everything you need.
        </h1>
        <p class="wayg-screen__body">
          Keep a notebook and pen within reach. When the next good moment appears in one of these
          parts of your day, write it down. At least three a day, caught while they happen.
          The door's open whenever you'd like a hand.
        </p>
        <NuxtLink to="/" class="wayg-screen__cta">Back to the home page</NuxtLink>
      </div>
    </section>

    <!-- GENERATION_FAILED -->
    <section
      v-else-if="state === 'GENERATION_FAILED'"
      class="wayg-screen section--lg bg-warm-paper"
      aria-labelledby="fallback-heading"
    >
      <div class="container container--md wayg-screen__inner">
        <h1 id="fallback-heading" class="wayg-screen__heading">
          Something went wrong on our end.
        </h1>
        <p class="wayg-screen__practice">{{ FIXED_PRACTICE_LINE }}</p>
        <p class="wayg-screen__body">
          Take a moment and name three places in your own day where a good moment could happen.
          Write each one down when it does.
        </p>
        <button type="button" class="wayg-screen__cta wayg-screen__cta--sun" @click="retryGeneration()">
          Try again
        </button>
      </div>
    </section>

    <!-- SAFETY_INTERRUPTED -->
    <section
      v-else-if="state === 'SAFETY_INTERRUPTED'"
      class="wayg-screen section--lg bg-warm-paper"
      aria-labelledby="safety-heading"
    >
      <div class="container container--md wayg-screen__inner">
        <h1 id="safety-heading" class="wayg-screen__heading">
          You don't have to carry this alone.
        </h1>
        <p class="wayg-screen__body">
          If you're in crisis or need to talk to someone right now, please reach out.
        </p>
        <ul class="wayg-screen__resources">
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

    <!-- FOLLOWUP — full chip component in Item 3 -->
    <section
      v-else-if="state === 'FOLLOWUP'"
      class="wayg-screen section--lg bg-warm-paper"
      aria-labelledby="followup-heading"
    >
      <div class="container container--md wayg-screen__inner">
        <p id="followup-heading" class="wayg-screen__prompt">
          One thing before we show you this: when a day does go a little right — a small one
          counts — where does it usually come from?
        </p>
        <button type="button" class="wayg-screen__skip" @click="skipFollowup()">
          Skip — show me what you found
        </button>
      </div>
    </section>

    <!-- ENTRY / INPUT_SUBMITTED — Screen 0 + Screen 1 -->
    <DoorwayScreenEntry v-else />

  </div>
</template>

<style scoped>
.wayg-screen__inner {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  max-width: var(--container-md);
}

.wayg-screen__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
  max-width: 26ch;
}

.wayg-screen__prompt {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: var(--weight-bold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
  max-width: 40ch;
}

.wayg-screen__body {
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
  max-width: 58ch;
}

.wayg-screen__practice {
  padding-left: var(--space-5);
  border-left: 3px solid var(--color-sun);
  font-size: var(--text-body-lg);
  line-height: 1.65;
  color: var(--color-ink);
  max-width: 60ch;
}

.wayg-screen__resources {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-left: var(--space-5);
  font-size: var(--text-body);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

.wayg-screen__cta {
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
  align-self: flex-start;
  transition: filter var(--transition-fast), opacity var(--transition-fast);
}

.wayg-screen__cta--sun {
  background: var(--color-sun);
  color: var(--color-ink);
}

.wayg-screen__cta--sun:hover:not(:disabled) { filter: brightness(0.94); }
.wayg-screen__cta--sun:disabled { opacity: 0.38; cursor: not-allowed; }

.wayg-screen__skip {
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

.wayg-screen__skip:hover { border-color: var(--color-ink); color: var(--color-ink); }
</style>
