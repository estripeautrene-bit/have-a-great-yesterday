<script setup lang="ts">
const route = useRoute()
const { entries, findEntry } = useHallOfFame()

const slug = route.params.slug as string
const entry = findEntry(slug)

if (!entry) {
  throw createError({ statusCode: 404, statusMessage: 'Hall of Fame entry not found' })
}

usePageSeo({
  title: `${entry.name} — Hall of Fame — HaveAGreatYesterday.com`,
  description: entry.metaDesc ?? entry.previewDesc,
  path: route.path,
})

const { public: { siteUrl } } = useRuntimeConfig()
useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  name: `${entry.name} — Hall of Fame — HaveAGreatYesterday.com`,
  url: `${siteUrl}${route.path}`,
  description: entry.metaDesc ?? entry.previewDesc,
  mainEntity: {
    '@type': 'Person',
    name: entry.name,
    jobTitle: entry.role,
    description: entry.metaDesc ?? entry.previewDesc,
  },
})

const currentIndex = entries.findIndex(e => e.slug === slug)
const prevEntry = currentIndex > 0 ? entries[currentIndex - 1] : null
const nextEntry = currentIndex < entries.length - 1 ? entries[currentIndex + 1] : null
</script>

<template>
  <div class="hofe-page">

    <!-- ═══ HERO ═══════════════════════════════════════════════════════ -->
    <section class="hofe__hero section--lg bg-warm-paper" aria-labelledby="hofe-name">
      <div class="container">
        <div class="hofe__hero-inner">

          <NuxtLink to="/hall-of-fame" class="hofe__breadcrumb">
            <span aria-hidden="true">←</span> Hall of Fame
          </NuxtLink>

          <p class="hofe__eyebrow">Hall of Fame</p>

          <h1 id="hofe-name" class="hofe__name">{{ entry.name }}</h1>

          <p class="hofe__role">{{ entry.role }}</p>

          <p class="hofe__key-work">{{ entry.keyWork }}</p>

        </div>
      </div>
    </section>

    <!-- ═══ BODY ════════════════════════════════════════════════════════ -->
    <section class="hofe__body section--lg bg-paper" aria-label="About this figure">
      <div class="container">
        <div class="hofe__body-inner">

          <p
            v-for="(p, i) in entry.intro"
            :key="`intro-${i}`"
            class="hofe__p"
          >{{ p }}</p>

          <div
            v-for="section in entry.sections"
            :key="section.heading"
            class="hofe__section"
          >
            <h2 class="hofe__section-heading">{{ section.heading }}</h2>
            <p
              v-for="(p, i) in section.paragraphs"
              :key="`${section.heading}-${i}`"
              class="hofe__p"
            >{{ p }}</p>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══ CONNECTION ══════════════════════════════════════════════════ -->
    <section class="hofe__conn section--lg bg-stone" aria-labelledby="hofe-conn-heading">
      <div class="container">
        <div class="hofe__conn-inner">

          <p class="hofe__conn-eyebrow">Intellectual lineage</p>
          <h2 id="hofe-conn-heading" class="hofe__conn-heading">
            How this connects to the <InlineWordmark variant="light" /> Method
          </h2>
          <p
            v-for="(p, i) in entry.connection"
            :key="`conn-${i}`"
            class="hofe__conn-p"
          >{{ p }}</p>

          <NuxtLink
            v-if="entry.seeAlso"
            :to="entry.seeAlso.path"
            class="hofe__conn-see-also"
          >
            {{ entry.seeAlso.label }} →
          </NuxtLink>

        </div>
      </div>
    </section>

    <!-- ═══ FOOTER ══════════════════════════════════════════════════════ -->
    <section class="hofe__foot section--lg bg-paper">
      <div class="container">
        <div class="hofe__foot-inner">

          <p class="hofe__disclaimer">
            {{ entry.disclaimer ?? `${entry.name} is cited here solely for their published intellectual contributions. HaveAGreatYesterday.com and the MyHGY™ Method are not affiliated with, sponsored by, or endorsed by ${entry.name}. This recognition does not imply any relationship, collaboration, or endorsement.` }}
          </p>

          <nav class="hofe__nav" aria-label="Other Hall of Fame entries">
            <NuxtLink
              v-if="prevEntry"
              :to="`/hall-of-fame/${prevEntry.slug}`"
              class="hofe__nav-link hofe__nav-link--prev"
            >
              <span class="hofe__nav-arrow" aria-hidden="true">←</span>
              <span>{{ prevEntry.name }}</span>
            </NuxtLink>
            <div v-else class="hofe__nav-spacer" aria-hidden="true" />

            <NuxtLink to="/hall-of-fame" class="hofe__nav-index">
              All entries
            </NuxtLink>

            <NuxtLink
              v-if="nextEntry"
              :to="`/hall-of-fame/${nextEntry.slug}`"
              class="hofe__nav-link hofe__nav-link--next"
            >
              <span>{{ nextEntry.name }}</span>
              <span class="hofe__nav-arrow" aria-hidden="true">→</span>
            </NuxtLink>
            <div v-else class="hofe__nav-spacer" aria-hidden="true" />
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

.hofe__hero-inner {
  max-width: var(--container-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.hofe__breadcrumb {
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

.hofe__breadcrumb:hover {
  color: var(--color-ink);
}

.hofe__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
}

.hofe__eyebrow::after {
  content: '';
  display: block;
  width: 28px;
  height: 2px;
  background: var(--color-sun);
  margin-top: var(--space-2);
}

.hofe__name {
  font-family: var(--font-display);
  font-size: var(--text-display);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-display);
}

.hofe__role {
  font-family: var(--font-body);
  font-size: var(--text-body);
  color: var(--color-muted-ink);
}

.hofe__key-work {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: var(--weight-medium);
  font-style: italic;
  color: var(--color-muted-ink);
  padding: var(--space-3) var(--space-5);
  background: rgba(244, 197, 66, 0.12);
  border-left: 3px solid var(--color-sun);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  line-height: var(--lh-body);
  align-self: flex-start;
}

/* ══════════════════════════════════════════════════════════════════════
   BODY
   ══════════════════════════════════════════════════════════════════════ */

.hofe__body-inner {
  max-width: var(--container-md);
}

.hofe__p {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
  margin-bottom: var(--space-5);
}

.hofe__section {
  margin-top: var(--space-12);
}

.hofe__section-heading {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: var(--weight-bold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
  margin-bottom: var(--space-6);
  padding-bottom: var(--space-4);
  border-bottom: 2px solid var(--color-stone);
}

/* ══════════════════════════════════════════════════════════════════════
   CONNECTION
   ══════════════════════════════════════════════════════════════════════ */

.hofe__conn-inner {
  max-width: var(--container-md);
}

.hofe__conn-eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
  margin-bottom: var(--space-4);
}

.hofe__conn-eyebrow::after {
  content: '';
  display: block;
  width: 28px;
  height: 2px;
  background: var(--color-sun);
  margin-top: var(--space-2);
}

.hofe__conn-heading {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
  margin-bottom: var(--space-8);
}

.hofe__conn-p {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
  margin-bottom: var(--space-5);
}

.hofe__conn-p:last-child {
  margin-bottom: 0;
}

.hofe__conn-see-also {
  display: inline-block;
  margin-top: var(--space-6);
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: var(--weight-medium);
  color: var(--color-muted-ink);
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color var(--transition-fast);
}

.hofe__conn-see-also:hover {
  color: var(--color-ink);
}

/* ══════════════════════════════════════════════════════════════════════
   FOOTER
   ══════════════════════════════════════════════════════════════════════ */

.hofe__foot-inner {
  max-width: var(--container-md);
}

.hofe__disclaimer {
  font-family: var(--font-body);
  font-size: var(--text-small);
  line-height: var(--lh-body);
  color: var(--color-muted-ink);
  font-style: italic;
  margin-bottom: var(--space-10);
  padding-bottom: var(--space-10);
  border-bottom: 1px solid var(--color-stone);
}

.hofe__nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
}

.hofe__nav-link {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: var(--weight-medium);
  color: var(--color-muted-ink);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  transition: color var(--transition-fast);
}

.hofe__nav-link:hover {
  color: var(--color-ink);
}

.hofe__nav-arrow {
  color: var(--color-sun);
}

.hofe__nav-index {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.hofe__nav-index:hover {
  color: var(--color-ink);
}

.hofe__nav-spacer {
  flex: 1;
}

@media (max-width: 640px) {
  .hofe__nav {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-4);
  }

  .hofe__nav-spacer { display: none; }
}
</style>
