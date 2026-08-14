<template>
  <section class="hero bg-warm-paper" aria-labelledby="hero-headline">
    <div class="hero__inner container">

      <span class="hero__eyebrow">MyHGY™ Method</span>

      <h1 id="hero-headline" class="hero__headline draft-copy">
        Blueprint §6 — hero display headline. Pain-led, first-person, destination-forward.
      </h1>

      <p class="hero__sub draft-copy">
        Blueprint §6 — hero sub-headline. 1–2 sentences. Acknowledges pain, bridges to possibility. Method introduced after recognition.
      </p>

      <NuxtLink to="/what-are-you-going-through" class="hero__cta">
        Show me what I can do from here.
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

@media (max-width: 640px) {
  .hero { min-height: 80vh; padding-block: var(--space-20) var(--space-16); }
  .hero__cta { width: 100%; justify-content: center; }
}
</style>
