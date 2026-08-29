<script setup lang="ts">
const route = useRoute()
const { articles, findArticle } = useIdeasArticles()

const slug = route.params.slug as string
const article = findArticle(slug)

if (!article) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found' })
}

usePageSeo({
  title: `${article.title} — Ideas — HaveAGreatYesterday.com`,
  description: article.excerpt,
  path: route.path,
})

const { public: { siteUrl } } = useRuntimeConfig()
useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.excerpt,
  url: `${siteUrl}${route.path}`,
  datePublished: '2026-08-25',
  author: {
    '@type': 'Person',
    name: 'René Estripeaut',
  },
  publisher: {
    '@type': 'Organization',
    name: 'HaveAGreatYesterday.com',
  },
})

const currentIndex = articles.findIndex(a => a.slug === slug)
const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null
const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null
</script>

<template>
  <div class="idart-page">

    <!-- ═══ HERO ════════════════════════════════════════════════════════ -->
    <section class="idart__hero section--lg bg-warm-paper" aria-labelledby="idart-heading">
      <div class="container">
        <div class="idart__hero-inner">

          <NuxtLink to="/ideas" class="idart__breadcrumb">
            <span aria-hidden="true">←</span> Ideas
          </NuxtLink>

          <p class="idart__eyebrow">Ideas · Method</p>

          <h1 id="idart-heading" class="idart__heading">{{ article.title }}</h1>

          <p class="idart__byline">By René Estripeaut · {{ article.date }} · {{ article.readTime }}</p>

        </div>
      </div>
    </section>

    <!-- ═══ BODY ════════════════════════════════════════════════════════ -->
    <section class="idart__body section--lg bg-paper" aria-label="Article body">
      <div class="container">
        <div class="idart__body-inner">

          <!-- Flexible block format (new articles) -->
          <template v-if="article.body">
            <template v-for="(block, i) in article.body" :key="i">
              <p v-if="block.type === 'lead'" class="idart__lead" v-html="block.text" />
              <h2 v-else-if="block.type === 'h2'" class="idart__h2">{{ block.text }}</h2>
              <p v-else class="idart__p" v-html="block.text" />
            </template>
          </template>

          <!-- Legacy format (existing articles) -->
          <template v-else>
            <p
              v-for="(p, i) in article.intro"
              :key="`intro-${i}`"
              class="idart__p"
            >{{ p }}</p>

            <div class="idart__callout">
              <p class="idart__callout-text">{{ article.callout }}</p>
            </div>

            <p
              v-for="(p, i) in article.outro"
              :key="`outro-${i}`"
              class="idart__p"
            >{{ p }}</p>
          </template>

        </div>
      </div>
    </section>

    <!-- ═══ FOOTER ═══════════════════════════════════════════════════════ -->
    <section class="idart__foot section--lg bg-warm-paper">
      <div class="container">
        <div class="idart__foot-inner">

          <NuxtLink :to="article.closingPath" class="idart__closing">
            {{ article.closingLine }}
          </NuxtLink>

          <p class="idart__sig">— René Estripeaut</p>

          <nav class="idart__nav" aria-label="Other Ideas articles">
            <NuxtLink
              v-if="prevArticle"
              :to="`/ideas/${prevArticle.slug}`"
              class="idart__nav-link idart__nav-link--prev"
            >
              <span class="idart__nav-arrow" aria-hidden="true">←</span>
              <span>{{ prevArticle.title }}</span>
            </NuxtLink>
            <div v-else class="idart__nav-spacer" aria-hidden="true" />

            <NuxtLink to="/ideas" class="idart__nav-index">
              All ideas
            </NuxtLink>

            <NuxtLink
              v-if="nextArticle"
              :to="`/ideas/${nextArticle.slug}`"
              class="idart__nav-link idart__nav-link--next"
            >
              <span>{{ nextArticle.title }}</span>
              <span class="idart__nav-arrow" aria-hidden="true">→</span>
            </NuxtLink>
            <div v-else class="idart__nav-spacer" aria-hidden="true" />
          </nav>

        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>

/* ══════════════════════════════════════════════════════════════════════
   HERO
   ══════════════════════════════════════════════════════════════════════ */

.idart__hero-inner {
  max-width: var(--container-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.idart__breadcrumb {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: var(--weight-medium);
  color: var(--color-muted-ink);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  transition: color var(--transition-fast);
  margin-bottom: var(--space-2);
}

.idart__breadcrumb:hover {
  color: var(--color-ink);
}

.idart__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
}

.idart__eyebrow::after {
  content: '';
  display: block;
  width: 28px;
  height: 2px;
  background: var(--color-sun);
  margin-top: var(--space-2);
}

.idart__heading {
  font-family: var(--font-display);
  font-size: var(--text-display);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-display);
}

.idart__byline {
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: var(--color-muted-ink);
}

/* ══════════════════════════════════════════════════════════════════════
   BODY
   ══════════════════════════════════════════════════════════════════════ */

.idart__body-inner {
  max-width: var(--container-md);
}

.idart__lead {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
  font-weight: var(--weight-semibold);
  margin-bottom: var(--space-8);
}

.idart__h2 {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
  margin-top: var(--space-12);
  margin-bottom: var(--space-6);
}

.idart__p {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
  margin-bottom: var(--space-5);
}

.idart__callout {
  border-left: 4px solid var(--color-sun);
  background: rgba(244, 197, 66, 0.08);
  border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
  padding: var(--space-6) var(--space-8);
  margin-block: var(--space-10);
}

.idart__callout-text {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
  font-weight: var(--weight-medium);
}

/* ══════════════════════════════════════════════════════════════════════
   FOOTER
   ══════════════════════════════════════════════════════════════════════ */

.idart__foot-inner {
  max-width: var(--container-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.idart__closing {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  font-weight: var(--weight-semibold);
  color: var(--color-ink);
  text-decoration: none;
  border-bottom: 2px solid var(--color-sun);
  padding-bottom: var(--space-1);
  align-self: flex-start;
  transition: color var(--transition-fast);
}

.idart__closing:hover {
  color: var(--color-muted-ink);
}

.idart__sig {
  font-family: var(--font-display);
  font-size: var(--text-body-lg);
  font-weight: var(--weight-bold);
  font-style: italic;
  color: var(--color-ink);
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-stone);
}

.idart__nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
  padding-top: var(--space-8);
  border-top: 1px solid var(--color-stone);
  margin-top: var(--space-2);
}

.idart__nav-link {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: var(--weight-medium);
  color: var(--color-muted-ink);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  max-width: 200px;
  transition: color var(--transition-fast);
}

.idart__nav-link:hover {
  color: var(--color-ink);
}

.idart__nav-arrow {
  color: var(--color-sun);
  flex-shrink: 0;
}

.idart__nav-index {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.idart__nav-index:hover {
  color: var(--color-ink);
}

.idart__nav-spacer {
  max-width: 200px;
  flex: 1;
}

@media (max-width: 640px) {
  .idart__heading { font-size: var(--text-h1); }

  .idart__callout { padding: var(--space-5) var(--space-5); }

  .idart__nav {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-4);
  }

  .idart__nav-spacer { display: none; }

  .idart__nav-link { max-width: 100%; }
}
</style>
