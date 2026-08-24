<template>
  <section class="invprog section bg-warm-paper" aria-labelledby="invprog-heading">
    <div class="container">
      <div class="invprog__inner">

        <div class="invprog__text">
          <p class="invprog__eyebrow">A different starting point</p>
          <h2 id="invprog-heading" class="invprog__heading">
            You're doing things.<br>You may actually be progressing.<br>But you can't see it.
          </h2>
          <p class="invprog__body">
            Most personal-development tools are built for people who aren't moving yet.
            The <InlineWordmark variant="light" /> Method is also for people already in
            motion — whose mind has lost track of what they've done, what they've handled,
            and what they've built.
          </p>
          <p class="invprog__body">
            The problem isn't effort. The problem is that effort without a visible record
            disappears. The mind defaults to what it can still see — and when progress
            isn't visible, it's as if it didn't happen.
          </p>
          <NuxtLink to="/method" class="invprog__link">
            See how the method makes progress visible →
          </NuxtLink>
        </div>

        <blockquote class="invprog__pull">
          <p class="invprog__pull-text">
            "I am doing things. I may actually be progressing. But I cannot see or feel
            my progress."
          </p>
        </blockquote>

      </div>
    </div>
  </section>
</template>

<style scoped>
.invprog__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: center;
}

.invprog__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
  margin-bottom: var(--space-4);
}

.invprog__eyebrow::after {
  content: '';
  display: block;
  width: 28px;
  height: 2px;
  background: var(--color-sun);
  margin-top: var(--space-2);
}

.invprog__heading {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
  margin-bottom: var(--space-6);
}

.invprog__body {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
  margin-bottom: var(--space-5);
}

.invprog__link {
  display: inline-block;
  margin-top: var(--space-2);
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: var(--weight-semibold);
  color: var(--color-ink);
  text-decoration: none;
  text-underline-offset: 3px;
  transition: color var(--transition-fast);
}

.invprog__link:hover {
  color: var(--color-muted-ink);
  text-decoration: underline;
}

/* Pull quote panel */
.invprog__pull {
  background: var(--color-ink);
  border-radius: var(--radius-lg);
  padding: var(--space-10) var(--space-8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.invprog__pull-text {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: var(--weight-bold);
  color: var(--color-paper);
  line-height: var(--lh-heading);
  font-style: italic;
}

@media (max-width: 900px) {
  .invprog__inner {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }

  .invprog__pull {
    order: -1;
  }
}
</style>
