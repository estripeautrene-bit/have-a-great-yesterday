<script setup lang="ts">
const pillars = [
  { name: 'Clarity', number: '01', desc: 'Knowing exactly where you stand, right now, without the fog.' },
  { name: 'Accuracy', number: '02', desc: 'Reading your own life through what\'s actually true — through your own record — instead of a mood, a fear, or an old story about who you are.' },
  { name: 'Self-Confidence', number: '03', desc: 'Finally trusting the version of you that the evidence has been proving, one entry at a time.' },
]
</script>

<template>
  <section class="triad section bg-paper" aria-labelledby="triad-heading">
    <div class="container">

      <div class="triad__header">
        <h2 id="triad-heading" class="triad__heading">
          Clarity, Accuracy, and Self-Confidence — and going after what you actually want.
        </h2>
        <p class="triad__sub">
          There's a difference between a wish and a goal, and most people never close the gap. CAS is what closes it.
        </p>
      </div>

      <div class="triad__grid">
        <div
          v-for="pillar in pillars"
          :key="pillar.name"
          class="triad__item"
        >
          <span class="triad__number" aria-hidden="true">{{ pillar.number }}</span>
          <h3 class="triad__name">{{ pillar.name }}</h3>
          <p class="triad__desc">{{ pillar.desc }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.triad__header {
  max-width: var(--container-md);
  margin-bottom: var(--space-16);
}


.triad__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
  margin-bottom: var(--space-5);
}

.triad__sub {
  font-size: var(--text-body-lg);
  color: var(--color-ink);
  line-height: var(--lh-body);
}

.triad__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.triad__item {
  padding: var(--space-6);
  border-top: 4px solid var(--color-sun);
  background: var(--color-warm-paper);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(17, 17, 17, 0.06);
}

.triad__number {
  display: block;
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-bold);
  letter-spacing: 0.1em;
  color: var(--color-sun);
  margin-bottom: var(--space-3);
}

.triad__name {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: var(--weight-bold);
  color: var(--color-ink);
  margin-bottom: var(--space-4);
  line-height: var(--lh-heading);
}

.triad__desc {
  font-size: var(--text-body);
  line-height: var(--lh-body);
}

@media (max-width: 768px) {
  .triad__grid { grid-template-columns: 1fr; gap: var(--space-10); }
}
</style>
