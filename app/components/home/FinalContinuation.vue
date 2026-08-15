<template>
  <section class="final section--lg bg-warm-paper" aria-labelledby="final-heading">
    <div class="container">

      <div class="final__inner">

        <p class="final__eyebrow">Ready when you are</p>

        <h2 id="final-heading" class="final__statement">
          Whatever you are carrying right now —
        </h2>

        <p class="final__body">
          You do not need to have this figured out before you begin.
        </p>

        <p class="final__body">
          The practice starts where you actually are. Tell us what you're going through. <InlineWordmark variant="light" /> will help you understand what is real, what remains available to you, and what you can do from here. The response is free, specific to your situation, and takes less than five minutes to begin.
        </p>

        <NuxtLink to="/what-are-you-going-through" class="final__cta">
          Show me what I can do from here.
        </NuxtLink>

        <p class="final__secondary">
          Or <NuxtLink to="/newsletter" class="final__secondary-link">join the MyHGY™ email relationship</NuxtLink> — the founder's own practice, useful ideas about the method, and continued help without pressure and without a product pitch until you're ready.
        </p>

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

.final__body {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
  max-width: 52ch;
  text-align: left;
}

.final__secondary {
  font-size: var(--text-small);
  line-height: var(--lh-body);
  color: var(--color-muted-ink);
  max-width: 52ch;
  text-align: left;
}

.final__secondary-link {
  color: var(--color-ink);
  font-weight: var(--weight-medium);
  text-underline-offset: 3px;
}

.final__secondary-link:hover {
  color: var(--color-ink);
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
