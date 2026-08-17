<script setup lang="ts">
useSeoMeta({
  title: 'Ideas — HaveAGreatYesterday.com',
  description: 'Articles, essays, and applied thinking about the MyHGY™ Method — written for people navigating difficult days and building visible progress on ordinary ones.',
})

type Lane = 'green' | 'sun' | 'muted'

interface Article {
  lane: string
  color: Lane
  title: string
  excerpt: string
}

const articles: Article[] = [
  {
    lane: 'Pain-Led Help',
    color: 'green',
    title: "When the story you’re telling yourself is harder than the situation",
    excerpt: 'The mind builds a narrative around what happened — and that narrative often arrives faster and hits harder than the event itself. Here is how to tell the two apart.',
  },
  {
    lane: 'Pain-Led Help',
    color: 'green',
    title: "What to do when you can't find your footing",
    excerpt: 'A step-by-step walk through three practical moves drawn from the MyHGY™ Method — written for the days when starting feels impossible.',
  },
  {
    lane: 'Method',
    color: 'sun',
    title: 'Why the practice works on ordinary days, not just hard ones',
    excerpt: 'Most people reach for a practice when things get difficult. The MyHGY™ Method is built for the ordinary day — because that is where most of life actually happens.',
  },
  {
    lane: 'Founder Essay',
    color: 'muted',
    title: 'The moments your mind forgets: why I started preserving evidence from ordinary days',
    excerpt: 'René Estripeaut on discovering that meaningful evidence from ordinary days — action, capability, courage, connection, contribution, learning, recovery, enjoyment, progress — disappears unless it is deliberately noticed and preserved.',
  },
]
</script>

<template>
  <div class="ideas-page">

    <!-- ═══ 1. HERO ════════════════════════════════════════════════════ -->
    <section class="idh section--lg bg-warm-paper" aria-labelledby="ideas-heading">
      <div class="container">
        <div class="idh__inner">
          <p class="idh__eyebrow">Ideas</p>
          <h1 id="ideas-heading" class="idh__heading">
            Ideas worth carrying.
          </h1>
          <p class="idh__deck">
            Articles, essays, and applied thinking about the <InlineWordmark variant="light" /> Method —
            written for people navigating difficult days and building visible progress on ordinary ones.
          </p>
        </div>
      </div>
    </section>

    <!-- ═══ 2. ARTICLE GRID ═══════════════════════════════════════════ -->
    <section class="idg section--lg bg-stone" aria-label="Article index">
      <div class="container">

        <p class="idg__notice">
          This library is being built. The articles below are confirmed topics currently in progress.
        </p>

        <div class="idg__grid">
          <article
            v-for="(article, i) in articles"
            :key="i"
            class="idcard"
            :class="`idcard--${article.color}`"
          >
            <div class="idcard__meta">
              <span class="idcard__lane">{{ article.lane }}</span>
              <span class="idcard__status">Coming soon</span>
            </div>
            <h2 class="idcard__title">{{ article.title }}</h2>
            <p class="idcard__excerpt">{{ article.excerpt }}</p>
            <span class="idcard__placeholder" aria-hidden="true">Article in progress →</span>
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

.idg__notice {
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: var(--color-muted-ink);
  font-style: italic;
  margin-bottom: var(--space-10);
}

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

.idcard__status {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  color: var(--color-muted-ink);
  background: transparent;
  border: 1px solid var(--color-stone);
  border-radius: var(--radius-full);
  padding: var(--space-1) var(--space-3);
  white-space: nowrap;
  letter-spacing: 0.04em;
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

.idcard__placeholder {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: var(--weight-medium);
  color: var(--color-muted-ink);
  opacity: 0.5;
  margin-top: var(--space-2);
  cursor: default;
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
