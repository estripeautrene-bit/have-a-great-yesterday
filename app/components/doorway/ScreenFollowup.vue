<script setup lang="ts">
import { ref } from 'vue'
import { useDoorwaySession } from '~/composables/useDoorwaySession'

const CHIPS = ['Work', 'The kids / family', 'Something for me', 'Someone else'] as const

const { submitFollowup, skipFollowup } = useDoorwaySession()
const selected = ref<string | null>(null)

function selectChip(chip: string) {
  selected.value = chip
  submitFollowup({ chip, freeText: '' })
}
</script>

<template>
  <section
    class="followup section--lg bg-warm-paper"
    aria-labelledby="followup-heading"
  >
    <div class="container container--md followup__inner">

      <h1 id="followup-heading" class="followup__heading">
        One quick question
      </h1>

      <p class="followup__body">
        To make this more useful for you, where do the better moments in your day usually come from?
      </p>

      <div
        class="followup__chips"
        role="group"
        aria-label="Where the better moments in your day usually come from"
      >
        <button
          v-for="chip in CHIPS"
          :key="chip"
          type="button"
          class="followup__chip"
          :class="{ 'followup__chip--selected': selected === chip }"
          :aria-pressed="selected === chip"
          @click="selectChip(chip)"
        >
          {{ chip }}
        </button>
      </div>

      <button type="button" class="followup__skip" @click="skipFollowup()">
        Skip this question
      </button>

    </div>
  </section>
</template>

<style scoped>
.followup__inner {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  max-width: var(--container-md);
}

.followup__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
  max-width: 22ch;
}

.followup__body {
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
  max-width: 48ch;
  margin-top: calc(var(--space-8) * -0.5);
}

/* ── Chips ───────────────────────────────────────────────── */

.followup__chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}

.followup__chip {
  display: inline-flex;
  align-items: center;
  padding: var(--space-4) var(--space-7);
  background: var(--color-paper);
  border: 1.5px solid rgba(17, 17, 17, 0.12);
  border-radius: var(--radius-full);
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  font-weight: var(--weight-medium);
  color: var(--color-ink);
  cursor: pointer;
  white-space: nowrap;
  box-shadow: 0 1px 4px rgba(17, 17, 17, 0.05);
  transition:
    background var(--transition-fast),
    border-color var(--transition-fast),
    box-shadow var(--transition-fast);
}

.followup__chip:hover:not(.followup__chip--selected) {
  border-color: rgba(17, 17, 17, 0.28);
  box-shadow: 0 2px 10px rgba(17, 17, 17, 0.08);
}

.followup__chip:focus-visible {
  outline: 3px solid var(--color-ink);
  outline-offset: 3px;
}

.followup__chip--selected {
  background: var(--color-sun);
  border-color: var(--color-sun);
  border-width: 2px;
  font-weight: var(--weight-semibold);
  box-shadow: 0 2px 10px rgba(244, 197, 66, 0.25);
}

/* ── Skip ────────────────────────────────────────────────── */

.followup__skip {
  background: none;
  border: none;
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: var(--color-muted-ink);
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
  padding: 0;
  align-self: flex-start;
  transition: color var(--transition-fast);
}

.followup__skip:hover { color: var(--color-ink); }

.followup__skip:focus-visible {
  outline: 3px solid var(--color-ink);
  outline-offset: 3px;
  border-radius: 2px;
}

/* ── Mobile ──────────────────────────────────────────────── */

@media (max-width: 640px) {
  .followup__chips { gap: var(--space-2); }
  .followup__chip  { padding: var(--space-3) var(--space-6); font-size: var(--text-body); }
}
</style>
