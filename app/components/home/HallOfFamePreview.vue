<script setup lang="ts">
// Placeholder profiles — replace with real entries from Blueprint / content layer
const profiles = [
  { initials: 'A·B', situation: 'Job or career disruption' },
  { initials: 'C·D', situation: 'Starting over' },
  { initials: 'E·F', situation: 'Health uncertainty' },
]
</script>

<template>
  <section class="hof section bg-stone" aria-labelledby="hof-heading">
    <div class="container">

      <div class="hof__header">
        <p class="hof__eyebrow">Hall of Fame</p>
        <h2 id="hof-heading" class="hof__heading draft-copy">
          Blueprint §6 — Hall of Fame section heading. Credibility / social proof.
        </h2>
        <p class="hof__sub draft-copy">
          Blueprint §6 — 1 sentence framing who is in the Hall of Fame and why it matters.
        </p>
      </div>

      <div class="hof__grid">
        <article
          v-for="p in profiles"
          :key="p.initials"
          class="hof__card"
          aria-label="Placeholder Hall of Fame entry"
        >
          <div class="hof__avatar" aria-hidden="true">{{ p.initials }}</div>
          <div class="hof__content">
            <p class="hof__name draft-copy">Blueprint §6 — name or handle</p>
            <p class="hof__situation">{{ p.situation }}</p>
            <p class="hof__quote draft-copy">
              Blueprint §6 — 1–2 sentence quote or testimonial from this person's experience with the method.
            </p>
          </div>
        </article>
      </div>

      <div class="hof__footer">
        <NuxtLink to="/hall-of-fame" class="hof__link">
          See the full Hall of Fame →
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

<style scoped>
.hof__header {
  max-width: var(--container-md);
  margin-bottom: var(--space-12);
}

.hof__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
  margin-bottom: var(--space-4);
}

.hof__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
  margin-bottom: var(--space-4);
}

.hof__sub {
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
}

.hof__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
  margin-bottom: var(--space-10);
}

.hof__card {
  background: var(--color-paper);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.hof__avatar {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-full);
  background: var(--color-stone);
  border: 2px solid var(--color-sun);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-bold);
  color: var(--color-muted-ink);
  flex-shrink: 0;
}

.hof__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.hof__name {
  font-family: var(--font-display);
  font-size: var(--text-body);
  font-weight: var(--weight-bold);
  color: var(--color-ink);
}

.hof__situation {
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  color: var(--color-muted-ink);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.hof__quote {
  font-size: var(--text-small);
  line-height: var(--lh-body);
  color: var(--color-ink);
  margin-top: var(--space-2);
}

.hof__footer {
  text-align: center;
  padding-top: var(--space-6);
  border-top: 1px solid rgba(0, 0, 0, 0.07);
}

.hof__link {
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: var(--weight-semibold);
  color: var(--color-ink);
  text-decoration: none;
  text-underline-offset: 3px;
}

.hof__link:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .hof__grid { grid-template-columns: 1fr; }
}
</style>
