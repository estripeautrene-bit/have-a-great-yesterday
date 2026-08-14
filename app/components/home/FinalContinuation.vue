<template>
  <section class="final section--lg bg-warm-paper" aria-labelledby="final-heading">
    <div class="container">

      <div class="final__inner">

        <p class="final__eyebrow">Ready when you are</p>

        <h2 id="final-heading" class="final__statement draft-copy">
          Blueprint §6 — final continuation heading. Closing statement. Invites the reader
          to take the first step. Pain-aware, destination-forward.
        </h2>

        <NuxtLink to="/what-are-you-going-through" class="final__cta">
          Show me what I can do from here.
        </NuxtLink>

      </div>

    </div>
  </section>
</template>

<style scoped>
.final {
  text-align: center;
}

.final__inner {
  max-width: var(--container-md);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-8);
}

.final__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
}

.final__statement {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.final__cta {
  display: inline-flex;
  align-items: center;
  background: var(--color-ink);
  color: var(--color-paper);
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: var(--weight-semibold);
  text-decoration: none;
  padding: var(--space-4) var(--space-8);
  border-radius: var(--radius-full);
  transition: background var(--transition-fast), color var(--transition-fast);
}

.final__cta:hover {
  background: var(--color-sun);
  color: var(--color-ink);
}

@media (max-width: 640px) {
  .final__cta { width: 100%; justify-content: center; }
}
</style>
