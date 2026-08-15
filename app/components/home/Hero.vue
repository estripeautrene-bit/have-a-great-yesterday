<template>
  <section class="hero bg-warm-paper" aria-labelledby="hero-headline">
    <div class="hero__inner container">

      <span class="hero__eyebrow"><InlineWordmark variant="light" /> Method</span>

      <h1 id="hero-headline" class="hero__headline">
        Something happened.<br>It does not have to become the whole story.
      </h1>

      <p class="hero__sub">
        Your mind can take one difficult event and make it feel like the only thing that is true about your life. It is not.
      </p>

      <p class="hero__sub">
        Tell us what you're going through. <InlineWordmark variant="light" /> will help you separate what actually happened from what it now feels like it means — and find what you can do from here.
      </p>

      <NuxtLink to="/what-are-you-going-through" class="hero__cta">
        Show me what I can do from here.
      </NuxtLink>

      <NuxtLink to="/method" class="hero__secondary">
        What is the <InlineWordmark variant="light" /> Method? →
      </NuxtLink>

    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 92vh;
  display: flex;
  align-items: center;
  padding-block: var(--space-32) var(--space-20);
}

.hero__inner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-8);
  max-width: var(--container-md);
}

.hero__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
}

.hero__headline {
  font-family: var(--font-display);
  font-size: var(--text-display);
  font-weight: var(--weight-extrabold);
  line-height: var(--lh-display);
  color: var(--color-ink);
}

.hero__sub {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
  max-width: 52ch;
}

.hero__cta {
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
  margin-top: var(--space-4);
  transition: background var(--transition-fast), color var(--transition-fast);
}

.hero__cta:hover {
  background: var(--color-sun);
  color: var(--color-ink);
}

.hero__secondary {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: var(--weight-medium);
  color: var(--color-muted-ink);
  text-decoration: none;
  text-underline-offset: 3px;
}

.hero__secondary:hover {
  color: var(--color-ink);
  text-decoration: underline;
}

@media (max-width: 640px) {
  .hero { min-height: 80vh; padding-block: var(--space-20) var(--space-16); }
  .hero__cta { width: 100%; justify-content: center; }
}
</style>
