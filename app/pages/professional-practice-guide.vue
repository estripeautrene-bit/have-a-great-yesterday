<script setup lang="ts">
usePageSeo({
  title: 'MyHGY Professional Practice Guide',
  description: 'A simple MyHGY practice for noticing and preserving meaningful lived evidence between important conversations.',
  path: '/professional-practice-guide',
  robots: 'noindex, follow',
})

const { public: { siteUrl } } = useRuntimeConfig()

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'MyHGY Professional Practice Guide',
  url: `${siteUrl}/professional-practice-guide`,
  description: 'A simple MyHGY practice for noticing and preserving meaningful lived evidence between important conversations.',
})
</script>

<template>
  <div class="pgd-page">

    <!-- HEADER -->
    <section class="pgd-lead bg-warm-paper" aria-labelledby="pgd-heading">
      <div class="container">
        <div class="pgd__col">
          <p class="pgd__eyebrow">MyHGY™ Professional Practice Guide</p>
          <h1 id="pgd-heading" class="pgd__h1">
            The conversation ends. Life continues.
          </h1>
          <div class="pgd__intro">
            <p>A useful conversation can create clarity.</p>
            <p>Then ordinary life resumes.</p>
            <p>MyHGY is a simple practice designed to help someone notice and preserve meaningful positive evidence while life is actually happening.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- BODY -->
    <div class="pgd-body bg-paper">
      <div class="container">
        <div class="pgd__col">

          <section class="pgd__section" aria-labelledby="pgd-practice">
            <h2 id="pgd-practice" class="pgd__h2">The practice</h2>
            <div class="pgd__content">
              <p>Carry a small notebook and pen.</p>
              <p>During the day:</p>
              <blockquote class="pgd__statement">
                Notice at least three good things while they are happening. Write each one down immediately or as soon as reasonably possible.
              </blockquote>
              <p>Repeat the practice every day.</p>
              <p>Three is a practical minimum, not a magical number.</p>
              <p>The moments can be small.</p>
              <p>A useful conversation. A task completed. A moment of calm. A promise kept. A laugh. A difficult choice handled well. A good meal. A walk. Asking for support. Returning after distraction.</p>
              <p>The point is not to produce positive thinking.</p>
              <p>The point is to preserve real moments that might otherwise disappear.</p>
            </div>
          </section>

          <section class="pgd__section" aria-labelledby="pgd-write">
            <h2 id="pgd-write" class="pgd__h2">What to write</h2>
            <div class="pgd__content">
              <p>Keep it simple.</p>
              <p>What happened? What did I experience, choose, or do? Why did this moment matter?</p>
              <p>A few words are enough.</p>
            </div>
          </section>

          <section class="pgd__section" aria-labelledby="pgd-why">
            <h2 id="pgd-why" class="pgd__h2">Why write it down?</h2>
            <div class="pgd__content">
              <p>Noticing makes the moment conscious.</p>
              <p>Writing makes it persistent.</p>
              <p>A meaningful experience that lasts only a few seconds can easily be replaced by the next task, emotion, or problem.</p>
              <p>Writing gives that moment a place in the record.</p>
              <p>Over time, the person may begin to see more evidence of connection, capability, courage, contribution, learning, recovery, enjoyment, and progress.</p>
            </div>
          </section>

          <section class="pgd__section" aria-labelledby="pgd-stop">
            <h2 id="pgd-stop" class="pgd__h2">If the practice stops</h2>
            <div class="pgd__content">
              <p>Begin again with the next available moment.</p>
              <p>Returning is part of the practice.</p>
              <p>A missed day does not erase what came before.</p>
            </div>
          </section>

          <section class="pgd__section" aria-labelledby="pgd-what">
            <h2 id="pgd-what" class="pgd__h2">What MyHGY is</h2>
            <div class="pgd__content">
              <p>MyHGY is a personal-development practice.</p>
              <p>It is designed to help people notice more of what is actually happening in their lives, preserve meaningful lived evidence, and continue doing so over time.</p>
              <p>It is not therapy, diagnosis, medical treatment, or crisis care.</p>
              <p>If someone needs professional or urgent support, MyHGY should sit alongside appropriate care, not replace it.</p>
            </div>
          </section>

        </div>
      </div>
    </div>

    <!-- CLOSE -->
    <section class="pgd-close bg-warm-paper" aria-label="Closing">
      <div class="container">
        <div class="pgd__col pgd__close-inner">
          <p class="pgd__close-line">Personal development deserves a practice.</p>
          <p class="pgd__close-link">
            <NuxtLink to="/" class="pgd__home-link">HaveAGreatYesterday.com</NuxtLink>
          </p>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>

.pgd__col {
  max-width: var(--container-sm);
  margin-inline: auto;
}

/* ── Lead ──────────────────────────────────────────────── */

.pgd-lead {
  padding-block: var(--space-16) var(--space-12);
}

.pgd__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
  margin-bottom: var(--space-6);
}

.pgd__eyebrow::after {
  content: '';
  display: block;
  width: 28px;
  height: 2px;
  background: var(--color-sun);
  margin-top: var(--space-2);
}

.pgd__h1 {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
  margin-bottom: var(--space-8);
}

.pgd__intro {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.pgd__intro p {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

/* ── Body ──────────────────────────────────────────────── */

.pgd-body {
  padding-block: var(--space-16);
}

.pgd__section {
  padding-block: var(--space-10);
  border-top: 1px solid rgba(17, 17, 17, 0.08);
}

.pgd__section:first-child {
  border-top: none;
  padding-top: 0;
}

.pgd__h2 {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: var(--weight-bold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
  margin-bottom: var(--space-6);
}

.pgd__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.pgd__content p {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

.pgd__statement {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: var(--weight-bold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
  border-left: 4px solid var(--color-sun);
  padding: var(--space-4) var(--space-6);
  margin: 0;
}

/* ── Close ──────────────────────────────────────────────── */

.pgd-close {
  padding-block: var(--space-16);
}

.pgd__close-inner {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.pgd__close-line {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: var(--weight-bold);
  font-style: italic;
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.pgd__close-link {
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: var(--color-muted-ink);
}

.pgd__home-link {
  color: var(--color-muted-ink);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.pgd__home-link:hover {
  color: var(--color-ink);
}
</style>
