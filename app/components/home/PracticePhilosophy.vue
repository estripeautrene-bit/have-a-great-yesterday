<template>
  <section class="philosophy section--lg bg-warm-paper" aria-labelledby="philosophy-heading">
    <div class="container">

      <div class="philosophy__inner">

        <div class="philosophy__accent" aria-hidden="true" />

        <h2 id="philosophy-heading" class="philosophy__statement">
          Personal development deserves a practice.
        </h2>

        <div class="philosophy__body">
          <p class="philosophy__para draft-copy">
            Blueprint §6 — first body paragraph. Editorial voice. Why the analogy to practice
            (music, sport, medicine) applies to personal development. Tone: grounded, not motivational.
          </p>
          <p class="philosophy__para draft-copy">
            Blueprint §6 — second body paragraph. The cost of treating personal development as a
            series of one-off interventions vs. a daily practice. Specific, honest.
          </p>
          <p class="philosophy__para draft-copy">
            Blueprint §6 — third body paragraph or closing. Transition into what this practice
            specifically looks like.
          </p>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.philosophy__inner {
  max-width: var(--container-md);
  margin-inline: auto;
  position: relative;
  padding-left: var(--space-8);
}

.philosophy__accent {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--color-sun);
  border-radius: 2px;
}

.philosophy__statement {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
  margin-bottom: var(--space-10);
}

.philosophy__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.philosophy__para {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

@media (max-width: 640px) {
  .philosophy__inner { padding-left: var(--space-6); }
}
</style>
