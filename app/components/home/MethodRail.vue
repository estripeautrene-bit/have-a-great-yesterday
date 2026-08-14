<script setup lang="ts">
const steps = [
  { label: 'Pain',             n: 1 },
  { label: 'Reality',          n: 2 },
  { label: 'Agency',           n: 3 },
  { label: 'Goal',             n: 4 },
  { label: 'Action',           n: 5 },
  { label: 'Commitment',       n: 6 },
  { label: 'Evidence',         n: 7 },
  { label: 'Visible Progress', n: 8 },
]
</script>

<template>
  <section class="method section--lg bg-ink" aria-labelledby="method-heading">
    <div class="container">

      <div class="method__header">
        <p class="method__eyebrow">The sequence</p>
        <h2 id="method-heading" class="method__heading draft-copy">
          Blueprint §6 — method section heading. Introduces the 8-step sequence.
        </h2>
      </div>

      <ol class="method__rail" role="list">
        <li
          v-for="step in steps"
          :key="step.n"
          class="method__step"
        >
          <span class="method__step-n" aria-hidden="true">{{ String(step.n).padStart(2, '0') }}</span>
          <strong class="method__step-label">{{ step.label }}</strong>
          <p class="method__step-desc draft-copy">
            Blueprint §6 — role of {{ step.label }} in the sequence.
          </p>
        </li>
      </ol>

    </div>
  </section>
</template>

<style scoped>
.method {
  padding-block: var(--space-24);
}

.method__header {
  margin-bottom: var(--space-16);
  max-width: var(--container-md);
}

.method__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: var(--space-4);
}

.method__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: #ffffff;
  line-height: var(--lh-heading);
}

/* Rail — 4-col grid on desktop, 2-col tablet, 1-col mobile */
.method__rail {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-8) var(--space-6);
  list-style: none;
  margin: 0;
  padding: 0;
}

.method__step {
  padding-top: var(--space-5);
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.method__step-n {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-bold);
  color: var(--color-sun);
  letter-spacing: 0.08em;
}

.method__step-label {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: var(--weight-bold);
  color: #ffffff;
  line-height: var(--lh-heading);
}

.method__step-desc {
  font-size: var(--text-small);
  line-height: var(--lh-body);
  color: rgba(255, 255, 255, 0.5);
  margin-top: var(--space-2);
}

/* Override .draft-copy colors on dark background */
.method__step-desc.draft-copy {
  background: rgba(244, 197, 66, 0.08);
  border-color: rgba(244, 197, 66, 0.25);
  color: rgba(255, 255, 255, 0.45);
}

@media (max-width: 1024px) {
  .method__rail { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
  .method__rail { grid-template-columns: 1fr; }
}
</style>
