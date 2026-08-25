<script setup lang="ts">
usePageSeo({
  title: 'Why Have a Great Yesterday — HaveAGreatYesterday.com',
  description: 'A great yesterday is something you build while today is still happening — through the actions you take, the moments you notice, and the things you keep.',
  path: '/history',
})

const { public: { siteUrl } } = useRuntimeConfig()
useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Why Have a Great Yesterday — HaveAGreatYesterday.com',
  url: `${siteUrl}/history`,
  description: 'A great yesterday is something you build while today is still happening — through the actions you take, the moments you notice, and the things you keep.',
})
</script>

<template>
  <div class="hist-page">

    <!-- ═══ HERO ═══════════════════════════════════════════════════════════ -->
    <section class="hist__hero section--lg bg-warm-paper" aria-labelledby="hist-heading">
      <div class="container">
        <div class="hist__hero-inner">
          <h1 id="hist-heading" class="hist__heading">
            Tomorrow's yesterday is today.
          </h1>
          <p class="hist__deck">
            A great yesterday is something you build while today is still happening — through the actions you take, the moments you notice, and the things you keep.
          </p>
        </div>
      </div>
    </section>

    <!-- ═══ BODY ═══════════════════════════════════════════════════════════ -->
    <section class="hist__body section--lg bg-paper" aria-label="History and provenance">
      <div class="container">
        <div class="hist__content">

          <!-- ─── 1. WHY YESTERDAY MATTERS ───────────────────────────────── -->
          <h2>Your mind writes the story. Give it better material.</h2>
          <p>
            At the end of a day, your mind creates a story about what happened. Sometimes that story is fair. Sometimes real progress gets buried because the best parts of the day already slipped past unnoticed. MyHGY™ asks you to give your memory some help. Notice what matters while it's happening. Write it down. Then look back with a real record to work from — one that argues for you, not against you.
          </p>

          <!-- ─── 2. HOW SULLIVAN DEVELOPED THE IDEA ───────────────────── -->
          <h2>How Sullivan developed the idea</h2>
          <p>
            Dan Sullivan has publicly credited the "Have a Great Yesterday" idea to Lior Weinstein, a Strategic Coach client. Weinstein raised it during a couples conference in Africa, telling other parents that he couldn't control his children's future — but he could make sure they had a great past.
          </p>

          <div class="hist__cite">
            <p class="hist__cite-show">Inside Strategic Coach · Dan Sullivan and Shannon Waller</p>
            <p class="hist__cite-meta">
              <a
                href="https://www.strategiccoach.com/resources/podcasts/inside-strategic-coach/153757843"
                target="_blank"
                rel="noopener noreferrer"
                class="hist__link"
              >This One Small Change Makes Every Day A Win</a>
              <span class="hist__cite-date">· March 24, 2026</span>
            </p>
            <blockquote class="hist__cite-quote">
              "I have to give credit for the idea to Lior Weinstein."
            </blockquote>
            <p class="hist__cite-body">
              — Dan Sullivan. Sullivan explains that Weinstein arrived at the insight through parenting — not knowing what future his children would have, he focused on making sure they had a great past.
            </p>
          </div>

          <div class="hist__cite">
            <p class="hist__cite-show">Free Zone Frontier · Dan Sullivan and Steve Krein</p>
            <p class="hist__cite-meta">
              <a
                href="https://www.strategiccoach.com/resources/podcasts/free-zone-frontier/153825589"
                target="_blank"
                rel="noopener noreferrer"
                class="hist__link"
              >Make Every Day A Great Yesterday</a>
              <span class="hist__cite-date">· April 21, 2026</span>
            </p>
            <blockquote class="hist__cite-quote">
              "My job is to make sure that my children have a great past."
            </blockquote>
            <p class="hist__cite-body">
              — Dan Sullivan. Sullivan describes running his own experiment with the idea — starting each morning with the goal that tomorrow he'll look back and call today a great yesterday. He notes concrete effects: sharper focus on the present, more attention on the day at hand, less pull toward the future.
            </p>
          </div>

          <!-- ─── 3. WHERE MYHGY™ BEGINS ────────────────────────────────── -->
          <h2>Where MyHGY™ begins</h2>
          <p>
            MyHGY™ was developed independently by René Estripeaut, and is not affiliated with Strategic Coach, Dan Sullivan, Lior Weinstein, or their organizations. The conceptual overlap is real and openly credited — the development is independent.
          </p>

        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* ══════════════════════════════════════════════════════════════════════
   HERO
   ══════════════════════════════════════════════════════════════════════ */

.hist__hero-inner {
  max-width: var(--container-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.hist__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
}

.hist__eyebrow::after {
  content: '';
  display: block;
  width: 28px;
  height: 2px;
  background: var(--color-sun);
  margin-top: var(--space-2);
}

.hist__heading {
  font-family: var(--font-display);
  font-size: var(--text-display);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-display);
}

.hist__deck {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-muted-ink);
  max-width: 56ch;
}

/* ══════════════════════════════════════════════════════════════════════
   BODY CONTENT
   ══════════════════════════════════════════════════════════════════════ */

.hist__content {
  max-width: var(--container-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.hist__content h2 {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: var(--weight-bold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
  padding-top: var(--space-6);
  border-top: 1px solid var(--color-stone);
  margin-top: var(--space-4);
}

.hist__content p {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

.hist__link {
  color: var(--color-ink);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: var(--color-sun);
  transition: color var(--transition-fast);
}

.hist__link:hover {
  color: var(--color-muted-ink);
}

/* ── Citation blocks ────────────────────────────────────────────────── */

.hist__cite {
  border-left: 4px solid var(--color-sun);
  background: var(--color-warm-paper);
  border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.hist__cite-show {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
}

.hist__cite-quote {
  font-family: var(--font-display);
  font-size: var(--text-body-lg);
  font-weight: var(--weight-bold);
  font-style: italic;
  color: var(--color-ink);
  line-height: var(--lh-heading);
  margin: 0;
  padding: 0;
}

.hist__cite-meta {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: var(--space-1);
}

.hist__cite-date {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: var(--color-muted-ink);
}

.hist__cite-body {
  font-family: var(--font-body);
  font-size: var(--text-body) !important;
  line-height: var(--lh-body);
  color: var(--color-ink) !important;
}

/* ── Source box ─────────────────────────────────────────────────────── */

.hist__source-box {
  background: var(--color-stone);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.hist__source-label {
  font-family: var(--font-body);
  font-size: var(--text-xs) !important;
  font-weight: var(--weight-semibold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-muted-ink) !important;
}

.hist__source-body {
  font-family: var(--font-body);
  font-size: var(--text-small) !important;
  line-height: var(--lh-body);
  color: var(--color-ink) !important;
}
</style>
