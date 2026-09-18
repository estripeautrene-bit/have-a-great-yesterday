<template>
  <section class="kit-cta section--sm bg-warm-paper" aria-label="MyHGY™ 30-Day Practice Kit">
    <div class="container">
      <div class="kit-cta__inner">

        <div class="kit-cta__text">
          <p class="kit-cta__eyebrow">MyHGY™ 30-Day Practice Kit</p>
          <p class="kit-cta__body">
            The practice, structured for 30 days. At least 90 real moments preserved.
          </p>
        </div>

        <NuxtLink to="/30-day-practice" class="kit-cta__link">
          Try the 30-Day Practice →
        </NuxtLink>

      </div>
    </div>
  </section>
</template>

<style scoped>
.kit-cta__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-8);
  flex-wrap: wrap;
}

.kit-cta__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
  margin-bottom: var(--space-2);
}

.kit-cta__body {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  font-weight: var(--weight-medium);
  color: var(--color-ink);
  line-height: var(--lh-ui);
}

.kit-cta__link {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  background: var(--color-ink);
  color: var(--color-paper);
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: var(--weight-semibold);
  text-decoration: none;
  padding: var(--space-4) var(--space-8);
  border-radius: var(--radius-full);
  white-space: nowrap;
  transition: background var(--transition-fast), color var(--transition-fast);
}

.kit-cta__link:hover {
  background: var(--color-sun);
  color: var(--color-ink);
}

@media (max-width: 640px) {
  .kit-cta__inner { flex-direction: column; align-items: flex-start; }
  .kit-cta__link  { width: 100%; justify-content: center; }
}
</style>
