<script setup lang="ts">
usePageSeo({
  title: 'Hall of Fame — HaveAGreatYesterday.com',
  description: 'Thinkers whose work shaped the MyHGY™ Method — on self-image, agency, meaning, and what it means to remain a capable person through difficulty.',
  path: '/hall-of-fame',
})

const { public: { siteUrl } } = useRuntimeConfig()
useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Hall of Fame — HaveAGreatYesterday.com',
  url: `${siteUrl}/hall-of-fame`,
  description: 'Thinkers whose work shaped the MyHGY™ Method — on self-image, agency, meaning, and what it means to remain a capable person through difficulty.',
})

const { entries } = useHallOfFame()
</script>

<template>
  <div class="hofp-page">

    <!-- ═══ HERO + GRID ══════════════════════════════════════════════════ -->
    <section class="hofp__main section--lg bg-stone" aria-labelledby="hofp-heading">
      <div class="container">

        <div class="hofp__header">
          <p class="hofp__eyebrow">Hall of Fame</p>
          <h1 id="hofp-heading" class="hofp__heading">
            This territory has a history.
          </h1>
          <p class="hofp__intro">
            The ideas behind the <InlineWordmark variant="light" /> Method grew from a long tradition of serious thinking about attention, self-image, agency, evidence, and what it means to remain a capable person in the face of difficulty. The figures recognized here each contributed something precise and durable to this territory through their published work.
          </p>
          <p class="hofp__sub">
            These are intellectual lineages, not affiliations. None of the individuals listed here are affiliated with or endorse HaveAGreatYesterday.com or the <InlineWordmark variant="light" :show-tm="false" /> Method.
          </p>
        </div>

        <div class="hofp__grid" role="list">
          <article
            v-for="entry in entries"
            :key="entry.slug"
            class="hofp__card"
            role="listitem"
          >
            <h2 class="hofp__name">{{ entry.name }}</h2>
            <p class="hofp__role">{{ entry.role }}</p>
            <p class="hofp__desc">{{ entry.previewDesc }}</p>
            <NuxtLink
              :to="`/hall-of-fame/${entry.slug}`"
              class="hofp__entry-link"
            >
              Read the full entry <span class="hofp__arrow" aria-hidden="true">→</span>
            </NuxtLink>
          </article>
        </div>

        <p class="hofp__attribution">
          <InlineWordmark variant="light" /> is not affiliated with, sponsored by, endorsed by, or partnered with any of the individuals listed here. Each is recognized solely for the contribution their published work has made to this field.
        </p>

      </div>
    </section>

    <!-- ═══ FOOTER CTA ════════════════════════════════════════════════════ -->
    <section class="hofp__cta-section section--lg bg-warm-paper">
      <div class="container">
        <div class="hofp__cta-inner">
          <p class="hofp__cta-label">The method itself</p>
          <p class="hofp__cta-body">
            The <InlineWordmark variant="light" /> Method is a structured daily practice for returning to what is actually true about your day — what you did, what you handled, what you brought to it, what was there alongside whatever was hard. Done consistently, it builds a visible record of action, capability, and progress that the mind would otherwise lose. Read about how it works.
          </p>
          <NuxtLink to="/method" class="hofp__cta-link">
            Learn about the MyHGY™ Method →
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* ══════════════════════════════════════════════════════════════════════
   HERO HEADER
   ══════════════════════════════════════════════════════════════════════ */

.hofp__header {
  max-width: var(--container-md);
  margin-bottom: var(--space-12);
}

.hofp__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
  margin-bottom: var(--space-4);
}

.hofp__eyebrow::after {
  content: '';
  display: block;
  width: 28px;
  height: 2px;
  background: var(--color-sun);
  margin-top: var(--space-2);
}

.hofp__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
  margin-bottom: var(--space-6);
}

.hofp__intro {
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
  margin-bottom: var(--space-4);
}

.hofp__sub {
  font-size: var(--text-small);
  line-height: var(--lh-body);
  color: var(--color-muted-ink);
  font-style: italic;
}

/* ══════════════════════════════════════════════════════════════════════
   GRID
   ══════════════════════════════════════════════════════════════════════ */

.hofp__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
  margin-bottom: var(--space-8);
}

.hofp__card {
  background: var(--color-paper);
  border-radius: var(--radius-lg);
  border-top: 3px solid var(--color-sun);
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.hofp__name {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.hofp__role {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
}

.hofp__desc {
  font-size: var(--text-small);
  line-height: var(--lh-body);
  color: var(--color-ink);
  flex: 1;
}

.hofp__entry-link {
  font-size: var(--text-small);
  font-weight: var(--weight-medium);
  color: var(--color-muted-ink);
  text-decoration: none;
  text-underline-offset: 3px;
  margin-top: var(--space-2);
  transition: color var(--transition-fast);
}

.hofp__arrow {
  color: var(--color-sun);
}

.hofp__entry-link:hover {
  color: var(--color-ink);
  text-decoration: underline;
}

/* ══════════════════════════════════════════════════════════════════════
   ATTRIBUTION
   ══════════════════════════════════════════════════════════════════════ */

.hofp__attribution {
  font-size: var(--text-xs);
  color: var(--color-muted-ink);
  line-height: var(--lh-body);
  max-width: var(--container-md);
  font-style: italic;
}

/* ══════════════════════════════════════════════════════════════════════
   FOOTER CTA
   ══════════════════════════════════════════════════════════════════════ */

.hofp__cta-inner {
  max-width: var(--container-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.hofp__cta-label {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
}

.hofp__cta-label::after {
  content: '';
  display: block;
  width: 28px;
  height: 2px;
  background: var(--color-sun);
  margin-top: var(--space-2);
}

.hofp__cta-body {
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

.hofp__cta-link {
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: var(--weight-semibold);
  color: var(--color-ink);
  text-decoration: none;
  text-underline-offset: 3px;
  transition: color var(--transition-fast);
  align-self: flex-start;
}

.hofp__cta-link:hover {
  color: var(--color-muted-ink);
  text-decoration: underline;
}

/* ══════════════════════════════════════════════════════════════════════
   RESPONSIVE
   ══════════════════════════════════════════════════════════════════════ */

@media (max-width: 1024px) {
  .hofp__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .hofp__grid { grid-template-columns: 1fr; }
}
</style>
