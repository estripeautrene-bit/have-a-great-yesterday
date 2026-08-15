<script setup lang="ts">
const pillars = [
  { name: 'Clarity', number: '01', desc: 'Understand where you actually are, what still matters, and where you can go from here.' },
  { name: 'Accuracy', number: '02', desc: 'See your situation through present facts and lived evidence — not through unlimited prediction or an old story about yourself.' },
  { name: 'Self-Confidence', number: '03', desc: 'Build belief from visible evidence of your own action, capability, recovery, and progress — not from encouragement that has nothing underneath it.' },
]
</script>

<template>
  <section class="triad section bg-paper" aria-labelledby="triad-heading">
    <div class="container">

      <div class="triad__header">
        <h2 id="triad-heading" class="triad__heading">
          This is where the work leads.
        </h2>
        <p class="triad__sub">
          Success starts with awareness and focus, requires commitment, and is visible when it becomes consistent.
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
  padding-top: var(--space-6);
  border-top: 3px solid var(--color-sun);
}

.triad__number {
  display: block;
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-bold);
  letter-spacing: 0.1em;
  color: var(--color-muted-ink);
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
