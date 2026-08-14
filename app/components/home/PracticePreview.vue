<script setup lang="ts">
const features = [
  { n: '01', label: 'Blueprint §6 — feature label 1', desc: 'Blueprint §6 — description of what this feature of the practice involves.' },
  { n: '02', label: 'Blueprint §6 — feature label 2', desc: 'Blueprint §6 — description of what this feature of the practice involves.' },
  { n: '03', label: 'Blueprint §6 — feature label 3', desc: 'Blueprint §6 — description of what this feature of the practice involves.' },
  { n: '04', label: 'Blueprint §6 — feature label 4', desc: 'Blueprint §6 — description of what this feature of the practice involves.' },
]
</script>

<template>
  <section class="practice section bg-paper" aria-labelledby="practice-heading">
    <div class="container">

      <div class="practice__header">
        <p class="practice__eyebrow">What the practice looks like</p>
        <h2 id="practice-heading" class="practice__heading draft-copy">
          Blueprint §6 — section heading for the practice preview.
        </h2>
        <p class="practice__sub draft-copy">
          Blueprint §6 — 1–2 sentences. Grounds the practice in time, frequency, and format.
        </p>
      </div>

      <div class="practice__grid">
        <div
          v-for="f in features"
          :key="f.n"
          class="practice__feature"
        >
          <span class="practice__feature-n">{{ f.n }}</span>
          <h3 class="practice__feature-label draft-copy">{{ f.label }}</h3>
          <p class="practice__feature-desc draft-copy">{{ f.desc }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.practice__header {
  max-width: var(--container-md);
  margin-bottom: var(--space-16);
}

.practice__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
  margin-bottom: var(--space-4);
}

.practice__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
  margin-bottom: var(--space-5);
}

.practice__sub {
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
}

.practice__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-10) var(--space-12);
}

.practice__feature {
  padding-top: var(--space-5);
  border-top: 1px solid var(--color-stone);
}

.practice__feature-n {
  display: block;
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-bold);
  letter-spacing: 0.08em;
  color: var(--color-muted-ink);
  margin-bottom: var(--space-3);
}

.practice__feature-label {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: var(--weight-bold);
  color: var(--color-ink);
  margin-bottom: var(--space-3);
  line-height: var(--lh-heading);
}

.practice__feature-desc {
  font-size: var(--text-body);
  line-height: var(--lh-body);
}

@media (max-width: 640px) {
  .practice__grid { grid-template-columns: 1fr; }
}
</style>
