<script setup lang="ts">
const { $posthog } = useNuxtApp()

function trackHeroCta() {
  if ($posthog.__loaded) {
    $posthog.capture('primary_cta_clicked', { source: 'hero' })
  }
}
</script>

<template>
  <section class="hero bg-warm-paper" aria-labelledby="hero-headline">
    <div class="hero__inner container">

      <span class="hero__eyebrow"><InlineWordmark variant="light" /> Method</span>

      <h1 id="hero-headline" class="hero__headline">
        Something happened.<br>It does not have to become the whole story.
      </h1>

      <p class="hero__sub">
        Maybe you lost a job, or a relationship. Maybe the news was bad, or the year has been hard, or you just woke up feeling behind and unlike yourself.
      </p>

      <p class="hero__sub">
        Whatever brought you here, start where you actually are.
      </p>

      <p class="hero__sub">
        MyHGY™ helps you separate what happened from what your mind is now telling you it means — and shows you one real thing you can do from here.
      </p>

      <NuxtLink to="/what-are-you-going-through" class="hero__cta" @click="trackHeroCta">
        Show me what I can do from here.
      </NuxtLink>

      <NuxtLink to="/method" class="hero__secondary">
        What is the MyHGY™ Method? →
      </NuxtLink>

    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 85vh;
  display: flex;
  align-items: flex-start;
  padding-block: var(--space-16) var(--space-20);
}

.hero__inner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-5);
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
  .hero { min-height: 80vh; padding-block: var(--space-12) var(--space-12); }
  .hero__cta { width: 100%; justify-content: center; }
}
</style>
