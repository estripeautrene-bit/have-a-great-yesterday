<script setup lang="ts">
const choices = usePainChoices()
</script>

<template>
  <section class="pain-section section bg-stone" aria-labelledby="pain-prompt">

    <div class="container">

      <h2 id="pain-prompt" class="pain-prompt">Tell us what you're going through.</h2>

      <p class="pain-note">
        The <InlineWordmark variant="light" /> Method is built for where you actually are.
        These situations are the starting point — not a label.
      </p>

      <ul class="pain-grid" role="list" aria-label="Pain choice categories — visual preview">
        <li
          v-for="(choice, index) in choices"
          :key="choice"
          class="pain-card"
        >
          <span class="pain-card__number" aria-hidden="true">
            {{ String(index + 1).padStart(2, '0') }}
          </span>
          <span class="pain-card__label">{{ choice }}</span>
        </li>
      </ul>

      <p class="pain-coming-soon">
        The guided experience for each situation is coming.
        <NuxtLink to="/what-are-you-going-through" class="pain-coming-soon__link">Learn what to expect →</NuxtLink>
      </p>

    </div>
  </section>
</template>

<style scoped>
.pain-prompt {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
  max-width: 18ch;
  margin-bottom: var(--space-4);
}

.pain-note {
  font-size: var(--text-body);
  color: var(--color-muted-ink);
  line-height: var(--lh-body);
  max-width: 52ch;
  margin-bottom: var(--space-12);
}

/* Cards grid — visual only, not interactive */
.pain-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--space-4);
  list-style: none;
  margin: 0 0 var(--space-8) 0;
  padding: 0;
}

.pain-card {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  background: var(--color-paper);
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-left: 3px solid var(--color-sun);
  border-radius: var(--radius-lg);
  padding: var(--space-5) var(--space-6);
  box-shadow: 0 2px 10px rgba(17, 17, 17, 0.06);
  transition: box-shadow 0.15s ease;
  cursor: default;
  user-select: none;
}

.pain-card:hover {
  box-shadow: 0 4px 18px rgba(17, 17, 17, 0.10);
}

.pain-card__number {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--color-warm-paper);
  font-family: var(--font-display);
  font-size: var(--text-xs);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  letter-spacing: 0.02em;
  line-height: 1;
}

.pain-card__label {
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: var(--weight-medium);
  color: var(--color-ink);
  line-height: var(--lh-ui);
}

.pain-coming-soon {
  font-size: var(--text-small);
  color: var(--color-muted-ink);
}

.pain-coming-soon__link {
  color: var(--color-ink);
  font-weight: var(--weight-medium);
  text-underline-offset: 3px;
  margin-left: var(--space-2);
}

.pain-coming-soon__link:hover {
  color: var(--color-ink);
}

@media (max-width: 640px) {
  .pain-grid { grid-template-columns: 1fr; }
}
</style>
