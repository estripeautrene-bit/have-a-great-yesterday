<script setup lang="ts">
usePageSeo({
  title: 'Ideas — HaveAGreatYesterday.com',
  description: 'Articles and applied thinking on the MyHGY™ Method — written for people navigating difficult days and building visible progress on ordinary ones.',
  path: '/ideas',
})

const { public: { siteUrl } } = useRuntimeConfig()
useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Ideas — HaveAGreatYesterday.com',
  url: `${siteUrl}/ideas`,
  description: 'Articles and applied thinking on the MyHGY™ Method — written for people navigating difficult days and building visible progress on ordinary ones.',
})

const { articles } = useIdeasArticles()
</script>

<template>
  <div class="ideas-page">

    <!-- ═══ 1. HERO ════════════════════════════════════════════════════ -->
    <section class="idh section--lg bg-warm-paper" aria-labelledby="ideas-heading">
      <div class="container">
        <div class="idh__inner">
          <p class="idh__eyebrow">Ideas</p>
          <h1 id="ideas-heading" class="idh__heading">
            What helps personal development survive real life?
          </h1>
          <p class="idh__deck">
            That question has taken us into psychology, behavior, memory, self-image, progress, attention, goals, and practice. This is where we share what we're learning.
          </p>
        </div>
      </div>
    </section>

    <!-- ═══ 2. ARTICLE GRID ═══════════════════════════════════════════ -->
    <section class="idg section--lg bg-stone" aria-label="Article index">
      <div class="container">

        <div class="idg__grid">
          <article
            v-for="article in articles"
            :key="article.slug"
            class="idcard"
            :class="`idcard--${article.color}`"
          >
            <div class="idcard__meta">
              <span class="idcard__lane">{{ article.lane }}</span>
              <span class="idcard__read-time">{{ article.readTime }}</span>
            </div>
            <h2 class="idcard__title">{{ article.title }}</h2>
            <p class="idcard__excerpt">{{ article.excerpt }}</p>
            <NuxtLink :to="`/ideas/${article.slug}`" class="idcard__link">
              Read article →
            </NuxtLink>
          </article>
        </div>

      </div>
    </section>

    <!-- ═══ 3. CLOSING BAND ══════════════════════════════════════════ -->
    <section class="idc section bg-warm-paper" aria-label="Stay updated">
      <div class="container">
        <div class="idc__inner">
          <p class="idc__line">
            New articles are added regularly. Ideas that belong here come from the practice itself.
          </p>
          <p class="idc__notify-label">Get notified when new ideas are published</p>
          <div class="idc__row" role="presentation">
            <span class="idc__field-mock" aria-hidden="true">Your email address</span>
            <span class="idc__btn-mock" aria-hidden="true">Notify me</span>
          </div>
          <p class="idc__disclaimer">Notification signup is not yet active.</p>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>

/* ══════════════════════════════════════════════════════════════════════
   1. HERO
   ══════════════════════════════════════════════════════════════════════ */

.idh__inner {
  max-width: var(--container-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.idh__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
}

.idh__eyebrow::after {
  content: '';
  display: block;
  width: 28px;
  height: 2px;
  background: var(--color-sun);
  margin-top: var(--space-2);
}

.idh__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.idh__deck {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
  max-width: 58ch;
}


/* ══════════════════════════════════════════════════════════════════════
   2. ARTICLE GRID
   ══════════════════════════════════════════════════════════════════════ */

.idg__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
}

.idcard {
  background: var(--color-paper);
  border-radius: var(--radius-lg);
  border-top: 4px solid var(--color-muted-ink);
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  box-shadow: 0 2px 8px rgba(17, 17, 17, 0.06);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.idcard:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(17, 17, 17, 0.10);
}

/* Lane color variants — border + lane label */
.idcard--green { border-top-color: var(--color-evidence-green); }
.idcard--sun   { border-top-color: var(--color-sun); }
.idcard--muted { border-top-color: var(--color-muted-ink); }

.idcard__meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
}

.idcard__lane {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.idcard--green .idcard__lane { color: var(--color-evidence-green); }
.idcard--sun   .idcard__lane { color: var(--color-ink); }
.idcard--muted .idcard__lane { color: var(--color-muted-ink); }

.idcard__read-time {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: var(--color-muted-ink);
  white-space: nowrap;
}

.idcard__title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
  flex: 1;
}

.idcard__excerpt {
  font-family: var(--font-body);
  font-size: var(--text-small);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

.idcard__link {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: var(--weight-semibold);
  color: var(--color-ink);
  text-decoration: none;
  border-bottom: 1px solid var(--color-sun);
  padding-bottom: 1px;
  align-self: flex-start;
  margin-top: var(--space-2);
  transition: color var(--transition-fast);
}

.idcard__link:hover {
  color: var(--color-muted-ink);
}

/* ══════════════════════════════════════════════════════════════════════
   3. CLOSING BAND
   ══════════════════════════════════════════════════════════════════════ */

.idc__inner {
  max-width: var(--container-sm);
  margin-inline: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-5);
}

.idc__line {
  font-family: var(--font-body);
  font-size: var(--text-body);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

.idc__notify-label {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: var(--weight-bold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.idc__row {
  display: flex;
  gap: var(--space-3);
  align-items: center;
  opacity: 0.45;
  pointer-events: none;
  user-select: none;
}

.idc__field-mock {
  font-family: var(--font-body);
  font-size: var(--text-body);
  color: var(--color-muted-ink);
  border: 1px solid var(--color-stone);
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-5);
  min-width: 220px;
}

.idc__btn-mock {
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: var(--weight-semibold);
  color: var(--color-ink);
  background: var(--color-sun);
  border-radius: var(--radius-full);
  padding: var(--space-3) var(--space-6);
  white-space: nowrap;
}

.idc__disclaimer {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: var(--color-muted-ink);
  font-style: italic;
  margin-top: calc(-1 * var(--space-2));
}


/* ══════════════════════════════════════════════════════════════════════
   RESPONSIVE
   ══════════════════════════════════════════════════════════════════════ */

@media (max-width: 768px) {
  .idg__grid { grid-template-columns: 1fr; }
  .idc__row  { flex-direction: column; width: 100%; }
  .idc__field-mock { min-width: unset; width: 100%; text-align: center; }
  .idc__btn-mock   { width: 100%; text-align: center; }
}
</style>
