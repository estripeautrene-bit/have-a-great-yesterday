<script setup lang="ts">
useSeoMeta({
  title: 'What Are You Going Through? — HaveAGreatYesterday.com',
  description: 'The MyHGY™ Method guided experience is coming. Find your footing from exactly where you are.',
  robots: 'noindex',
})
</script>

<template>
  <div class="wayg">

    <!-- Page hero -->
    <section class="wayg-hero section--lg bg-warm-paper" aria-labelledby="wayg-heading">
      <div class="container">
        <div class="wayg-hero__inner">
          <p class="wayg-hero__eyebrow">You're in the right place</p>
          <h1 id="wayg-heading" class="wayg-hero__heading">
            The guided experience<br>is on its way.
          </h1>
          <p class="wayg-hero__body">
            We're building a step-by-step experience that meets you exactly where you are —
            whatever you're going through. It will help you find your footing using the
            <InlineWordmark variant="light" /> Method, without requiring you to have a plan first.
          </p>
          <p class="wayg-hero__body">
            Until it's ready, everything you need to understand the Method is already on the site.
          </p>
        </div>
      </div>
    </section>

    <!-- Coming-soon preview (clearly marked non-functional) -->
    <section class="wayg-preview section bg-stone" aria-labelledby="preview-heading" aria-label="Non-functional visual preview of the coming guided experience">
      <div class="container">

        <div class="wayg-preview__label" aria-hidden="true">
          <span class="wayg-preview__badge">Preview — not yet active</span>
        </div>

        <h2 id="preview-heading" class="wayg-preview__heading">
          Here's what the experience will look like
        </h2>

        <p class="wayg-preview__sub">
          The panels below are visual placeholders only. Nothing here collects data or submits anything.
        </p>

        <div class="wayg-steps" role="list" aria-label="Visual preview of upcoming guided steps">

          <div class="wayg-step" role="listitem">
            <div class="wayg-step__number" aria-hidden="true">1</div>
            <div class="wayg-step__content">
              <p class="wayg-step__title">Tell us what you're going through</p>
              <p class="wayg-step__desc">You'll choose your situation from a set of honest, recognised categories — job disruption, health uncertainty, starting over, and more.</p>
              <!-- Non-functional visual mock of the choice cards -->
              <div class="wayg-step__mock" aria-hidden="true">
                <div class="wayg-mock-card">Job or career disruption</div>
                <div class="wayg-mock-card">Divorce or breakup</div>
                <div class="wayg-mock-card">Health uncertainty</div>
                <div class="wayg-mock-card wayg-mock-card--more">+ 4 more</div>
              </div>
              <p class="wayg-step__placeholder-note">Visual placeholder — not interactive</p>
            </div>
          </div>

          <div class="wayg-step" role="listitem">
            <div class="wayg-step__number" aria-hidden="true">2</div>
            <div class="wayg-step__content">
              <p class="wayg-step__title">See what the Method says about where you are</p>
              <p class="wayg-step__desc">The <InlineWordmark variant="light" /> Method maps your situation to specific steps — not generic advice. You'll see which phase applies to you and why.</p>
            </div>
          </div>

          <div class="wayg-step" role="listitem">
            <div class="wayg-step__number" aria-hidden="true">3</div>
            <div class="wayg-step__content">
              <p class="wayg-step__title">Get a starting point, not a finished plan</p>
              <p class="wayg-step__desc">You'll leave with one clear, concrete next action drawn from your situation — something you can do from exactly where you are right now.</p>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- In the meantime -->
    <section class="wayg-meanwhile section bg-paper" aria-labelledby="meanwhile-heading">
      <div class="container">

        <div class="wayg-meanwhile__inner">
          <h2 id="meanwhile-heading" class="wayg-meanwhile__heading">In the meantime</h2>
          <p class="wayg-meanwhile__body">
            The Method is already documented in full. You can read it, understand how it works,
            and begin applying it — no guided flow required.
          </p>

          <div class="wayg-meanwhile__links">
            <NuxtLink to="/method" class="wayg-meanwhile__link wayg-meanwhile__link--primary">
              Read the <InlineWordmark variant="light" /> Method →
            </NuxtLink>
            <NuxtLink to="/ideas" class="wayg-meanwhile__link">
              Browse ideas and practice notes →
            </NuxtLink>
            <NuxtLink to="/" class="wayg-meanwhile__link">
              Back to the home page →
            </NuxtLink>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<style scoped>
/* Hero */
.wayg-hero__inner {
  max-width: var(--container-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.wayg-hero__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
}

.wayg-hero__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.wayg-hero__body {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
  max-width: 60ch;
}

/* Preview section */
.wayg-preview__label {
  margin-bottom: var(--space-6);
}

.wayg-preview__badge {
  display: inline-block;
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
  background: var(--color-paper);
  border: 1.5px solid rgba(0, 0, 0, 0.12);
  border-radius: var(--radius-full);
  padding: var(--space-1) var(--space-4);
}

.wayg-preview__heading {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
  margin-bottom: var(--space-3);
  max-width: var(--container-md);
}

.wayg-preview__sub {
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: var(--color-muted-ink);
  margin-bottom: var(--space-10);
  max-width: 60ch;
}

/* Step list */
.wayg-steps {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  max-width: var(--container-md);
}

.wayg-step {
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: var(--space-6);
  padding: var(--space-6);
  background: var(--color-paper);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(0, 0, 0, 0.07);
}

.wayg-step__number {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  background: var(--color-sun);
  color: var(--color-ink);
  font-family: var(--font-display);
  font-size: var(--text-body);
  font-weight: var(--weight-bold);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}

.wayg-step__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.wayg-step__title {
  font-family: var(--font-display);
  font-size: var(--text-body-lg);
  font-weight: var(--weight-bold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.wayg-step__desc {
  font-family: var(--font-body);
  font-size: var(--text-body);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

/* Mock card strip inside step 1 */
.wayg-step__mock {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-2);
  pointer-events: none;
  user-select: none;
}

.wayg-mock-card {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: var(--weight-medium);
  color: var(--color-muted-ink);
  background: var(--color-stone);
  border: 1.5px dashed rgba(0, 0, 0, 0.15);
  border-radius: var(--radius-lg);
  padding: var(--space-2) var(--space-4);
  cursor: default;
  opacity: 0.7;
}

.wayg-mock-card--more {
  opacity: 0.45;
}

.wayg-step__placeholder-note {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: var(--color-muted-ink);
  font-style: italic;
  opacity: 0.6;
}

/* Meanwhile */
.wayg-meanwhile__inner {
  max-width: var(--container-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.wayg-meanwhile__heading {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.wayg-meanwhile__body {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
  max-width: 60ch;
}

.wayg-meanwhile__links {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-top: var(--space-2);
}

.wayg-meanwhile__link {
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: var(--weight-semibold);
  color: var(--color-ink);
  text-decoration: none;
  text-underline-offset: 3px;
}

.wayg-meanwhile__link:hover {
  text-decoration: underline;
}

.wayg-meanwhile__link--primary {
  display: inline-flex;
  align-items: center;
  background: var(--color-ink);
  color: var(--color-paper);
  padding: var(--space-4) var(--space-8);
  border-radius: var(--radius-full);
  font-weight: var(--weight-semibold);
  text-decoration: none;
  align-self: flex-start;
  transition: background var(--transition-fast), color var(--transition-fast);
  margin-bottom: var(--space-2);
}

.wayg-meanwhile__link--primary:hover {
  background: var(--color-sun);
  color: var(--color-ink);
  text-decoration: none;
}

@media (max-width: 640px) {
  .wayg-step {
    grid-template-columns: 36px 1fr;
    gap: var(--space-4);
  }

  .wayg-meanwhile__link--primary {
    width: 100%;
    justify-content: center;
  }
}
</style>
