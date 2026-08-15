<script setup lang="ts">
const features = [
  { n: '01', label: 'Return to present reality', desc: 'Separate what actually happened from the story your mind has built around it. What is known? What remains uncertain? What is actually true right now?' },
  { n: '02', label: 'Identify what remains available', desc: 'Something is still within your control or influence. Name it.' },
  { n: '03', label: 'Choose a direction', desc: 'A meaningful destination — even a modest one — gives consecutive actions somewhere to go.' },
  { n: '04', label: 'Take one constructive action', desc: 'Not a plan. Not a decision to decide later. One action, today.' },
  { n: '05', label: 'Notice what happened', desc: 'While life is happening, pause long enough to recognize meaningful moments: something handled well, a connection made, a fear faced, a promise kept. Evidence is the raw material of confidence.' },
  { n: '06', label: 'Preserve it', desc: 'Write it down close enough to the moment that the detail and the feeling are still alive. Do not rely on memory at the end of the day.' },
  { n: '07', label: 'Reflect and return', desc: 'At the end of the day, compare what you preserved against the mind\'s verdict. And when the practice breaks — as it will — the only rule is to return.' },
]
</script>

<template>
  <section class="practice section bg-paper" aria-labelledby="practice-heading">
    <div class="container">

      <div class="practice__header">
        <p class="practice__eyebrow">What the practice looks like</p>
        <h2 id="practice-heading" class="practice__heading">
          The practice is something you can begin today.
        </h2>
        <p class="practice__sub">
          The <InlineWordmark variant="light" /> Method is not an app. It is a repeatable structure for the ordinary days — one you can begin manually, with whatever you have at hand.
        </p>
      </div>

      <div class="practice__grid">
        <div
          v-for="f in features"
          :key="f.n"
          class="practice__feature"
        >
          <span class="practice__feature-n">{{ f.n }}</span>
          <h3 class="practice__feature-label">{{ f.label }}</h3>
          <p class="practice__feature-desc">{{ f.desc }}</p>
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
