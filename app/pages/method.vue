<script setup lang="ts">
usePageSeo({
  title: 'The MyHGY™ Method — HaveAGreatYesterday.com',
  description: 'A recurring practice for returning to what is true, finding what you can still do, acting on it, and building visible evidence of progress over time.',
  path: '/method',
})

const { public: { siteUrl } } = useRuntimeConfig()

const { $posthog } = useNuxtApp()

function trackMethodCta(cta: string) {
  if ($posthog.__loaded) {
    $posthog.capture('method_cta_clicked', { cta })
  }
}

function trackMyDopaInvitation() {
  if ($posthog.__loaded) {
    $posthog.capture('mydopa_invitation_clicked', { source: 'method_page' })
  }
}
useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'The MyHGY™ Method — HaveAGreatYesterday.com',
  url: `${siteUrl}/method`,
  description: 'A recurring practice for returning to what is true, finding what you can still do, acting on it, and building visible evidence of progress over time.',
})

const steps = [
  { label: 'Pain',             n: 1, desc: 'Something has happened that is real, and it deserves to be named clearly.' },
  { label: 'Reality',          n: 2, desc: 'Separate the event itself from the conclusions that have formed around it — and the feared futures that have not yet arrived.' },
  { label: 'Agency',           n: 3, desc: 'Identify what remains within your control or influence today, even if it is smaller than you wish.' },
  { label: 'Goal',             n: 4, desc: 'Choose a meaningful destination proportional to where you are — not where you imagined you would be.' },
  { label: 'Action',           n: 5, desc: 'Take one concrete next step rather than continuing to analyze the situation.' },
  { label: 'Commitment',       n: 6, desc: 'Decide to keep going — not because every day will be good, but because returning after difficulty is what progress actually looks like.' },
  { label: 'Evidence',         n: 7, desc: 'Notice and preserve meaningful moments while life is happening, before memory collapses the day into a single verdict.' },
  { label: 'Visible Progress', n: 8, desc: 'Allow the accumulated evidence to show you what is actually changing — so that confidence is built on what you have lived, not on what someone told you to believe.' },
]

const practiceSteps = [
  { n: '01', label: 'Return to present reality',        desc: 'Separate what actually happened from the story your mind has built around it. What is known? What remains uncertain? What is actually true right now?' },
  { n: '02', label: 'Identify what remains available',  desc: 'Something is still within your control or influence. Name it.' },
  { n: '03', label: 'Choose a direction',               desc: 'A meaningful destination — even a modest one — gives consecutive actions somewhere to go.' },
  { n: '04', label: 'Take one constructive action',     desc: 'Not a plan. Not a decision to decide later. One action, today.' },
  { n: '05', label: 'Notice what happened',             desc: 'While life is happening, pause long enough to recognize meaningful moments: something handled well, a connection made, a fear faced, a promise kept. Evidence is the raw material of confidence.' },
  { n: '06', label: 'Preserve it',                     desc: 'Write it down close enough to the moment that the detail and the feeling are still alive. Do not rely on memory at the end of the day.' },
  { n: '07', label: 'Reflect and return',               desc: 'At the end of the day, compare what you preserved against the mind\'s verdict. And when the practice breaks — as it will — the only rule is to return.' },
]

const pillars = [
  { name: 'Clarity',         number: '01', desc: 'You know exactly where you stand, without the fog.' },
  { name: 'Accuracy',        number: '02', desc: 'You\'re reading your life through what\'s actually true, not a mood or an old story.' },
  { name: 'Self-Confidence', number: '03', desc: 'You believe the version of you the evidence has been building this whole time.' },
]
</script>

<template>
  <div class="method-page">

    <!-- ═══ 1. HERO ════════════════════════════════════════════════════ -->
    <section class="mph section--lg bg-warm-paper" aria-labelledby="method-page-heading">
      <div class="container">
        <div class="mph__inner">
          <p class="mph__eyebrow">The Method</p>
          <h1 id="method-page-heading" class="mph__heading">
            Knowing what to do is only the beginning.
          </h1>
          <p class="mph__deck">
            The hard part is remembering it, using it, and doing it enough for it to become part of your life. That is the job of the MyHGY™ Method. It turns personal development into something you can practice.
          </p>
          <p class="mph__sub">
            Not a checklist to complete once. A practice to return to.
          </p>
          <NuxtLink to="/what-are-you-going-through" class="mph__cta" @click="trackMethodCta('begin_where_you_are')">
            Try the Method →
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ═══ 2. THE THESIS — personal development deserves a practice ══ -->
    <section class="mth section--lg bg-paper" aria-labelledby="thesis-heading">
      <div class="container">
        <div class="mth__inner">

          <div class="mth__accent" aria-hidden="true" />

          <h2 id="thesis-heading" class="mth__statement">
            Insight fades the moment you stop repeating it.
          </h2>

          <div class="mth__body">
            <p>A book can hand you a real breakthrough. A coach can show you exactly what you're doing wrong. A podcast can hand you the one idea you needed. For a moment, it's real. Then life keeps moving, and if nothing repeats that insight into place, it's gone — absorbed for a day, then lost.</p>
            <p>That's the actual gap. Not that the idea was wrong. That nothing turned it into a practice.</p>
            <blockquote class="mth__pull-quote">
              The only way to have a great yesterday is to be here today.
            </blockquote>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══ 3. THE EIGHT-STEP SEQUENCE ════════════════════════════════ -->
    <section class="mseq section--lg bg-ink" aria-labelledby="sequence-heading">
      <div class="container">

        <div class="mseq__header">
          <p class="mseq__eyebrow">The sequence</p>
          <h2 id="sequence-heading" class="mseq__heading">
            The <InlineWordmark variant="dark" /> Method follows a recurring sequence —
            not a checklist to complete once, but a practice to return to.
          </h2>
        </div>

        <ol class="mseq__rail" role="list">
          <li
            v-for="step in steps"
            :key="step.n"
            class="mseq__step"
          >
            <span class="mseq__step-n" aria-hidden="true">{{ String(step.n).padStart(2, '0') }}</span>
            <strong class="mseq__step-label">{{ step.label }}</strong>
            <p class="mseq__step-desc">{{ step.desc }}</p>
          </li>
        </ol>

      </div>
    </section>

    <!-- ═══ 4. MANUAL PRACTICE ════════════════════════════════════════ -->
    <section class="mprac section--lg bg-paper" aria-labelledby="practice-heading">
      <div class="container">

        <div class="mprac__header">
          <p class="mprac__eyebrow">What the practice looks like</p>
          <h2 id="practice-heading" class="mprac__heading">
            Buy one notebook. Use it every day.
          </h2>
          <p class="mprac__sub">
            Carry it with you, or use your phone. Every single day, find at least three real instances — things you did, things that happened to you, wins you'd normally let slide — and write them down.
          </p>
        </div>

        <div class="mprac__grid">
          <div
            v-for="step in practiceSteps"
            :key="step.n"
            class="mprac__item"
          >
            <span class="mprac__item-n">{{ step.n }}</span>
            <h3 class="mprac__item-label">{{ step.label }}</h3>
            <p class="mprac__item-desc">{{ step.desc }}</p>
          </div>
        </div>

        <blockquote class="mprac__pull-quote">
          Missed a day? Come back and pick it up today. There's no streak to protect. The return is part of the practice.
        </blockquote>

      </div>
    </section>

    <!-- ═══ 5. THE DESTINATION ════════════════════════════════════════ -->
    <section class="mdest section--lg bg-warm-paper" aria-labelledby="destination-heading">
      <div class="container">

        <div class="mdest__header">
          <p class="mdest__eyebrow">Where the work leads</p>
          <h2 id="destination-heading" class="mdest__heading">
            Clarity, Accuracy, and Self-Confidence.
          </h2>
          <p class="mdest__sub">
            CAS is what turns a wish into a goal, and a goal into a target. Without it, you're only dreaming. With it, you go looking for what's next.
          </p>
        </div>

        <div class="mdest__grid">
          <div
            v-for="pillar in pillars"
            :key="pillar.name"
            class="mdest__item"
          >
            <span class="mdest__number" aria-hidden="true">{{ pillar.number }}</span>
            <h3 class="mdest__name">{{ pillar.name }}</h3>
            <p class="mdest__desc">{{ pillar.desc }}</p>
          </div>
        </div>

      </div>
    </section>

    <!-- ═══ 6. MYDOPA ROLE ════════════════════════════════════════════ -->
    <section class="mbridge section--lg bg-ink" aria-labelledby="bridge-heading">
      <div class="container">
        <div class="mbridge__inner">

          <h2 id="bridge-heading" class="mbridge__heading">
            The notebook is where it starts.
          </h2>

          <p class="mbridge__body">
            The practice works with nothing more than a notebook. That part never changes.
          </p>

          <p class="mbridge__body">
            As it grows, so does the record — and <InlineMyDopa /> provides visibility and continuity to your process, so what you've built keeps getting easier to see.
          </p>

          <p class="mbridge__body mbridge__product">
            Confidence comes from evidence.
          </p>

          <p class="mbridge__body">
            MyHGY teaches the practice. <InlineMyDopa /> provides the equipment.
          </p>

          <p class="mbridge__supporting">
            <em><InlineMyDopa /> is transformation through visible and continuous progress.</em>
          </p>

          <a
            href="https://mydopa.app"
            class="mbridge__cta"
            target="_blank"
            rel="noopener noreferrer"
            @click="trackMyDopaInvitation"
          >
            Meet MyDopa →
          </a>

          <p class="mbridge__note">
            <InlineMyDopa /> is a separate product. No affiliation or endorsement of this site is implied.
          </p>

        </div>
      </div>
    </section>

    <!-- ═══ 7. FINAL CTA ══════════════════════════════════════════════ -->
    <section class="mfinal section--lg bg-warm-paper" aria-labelledby="final-heading">
      <div class="container">
        <div class="mfinal__inner">

          <p class="mfinal__eyebrow">Ready when you are</p>

          <h2 id="final-heading" class="mfinal__statement">
            Whatever you are carrying right now —
          </h2>

          <p class="mfinal__body">
            You do not need to have this figured out before you begin.
          </p>

          <p class="mfinal__body">
            The practice starts where you actually are. Tell us what you're going through.
            <InlineWordmark variant="light" /> will help you understand what is real,
            what remains available to you, and what you can do from here.
          </p>

          <NuxtLink to="/what-are-you-going-through" class="mfinal__cta" @click="trackMethodCta('show_me_what_i_can_do')">
            Show me what I can do from here.
          </NuxtLink>


        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>

/* ══════════════════════════════════════════════════════════════════════
   1. HERO
   ══════════════════════════════════════════════════════════════════════ */

.mph__inner {
  max-width: var(--container-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.mph__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
}

.mph__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.mph__deck {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
  max-width: 58ch;
}

.mph__sub {
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-style: italic;
  color: var(--color-muted-ink);
}

.mph__cta {
  display: inline-flex;
  align-items: center;
  background: var(--color-ink);
  color: var(--color-paper);
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: var(--weight-semibold);
  text-decoration: none;
  padding: var(--space-4) var(--space-8);
  border-radius: var(--radius-full);
  align-self: flex-start;
  transition: background var(--transition-fast), color var(--transition-fast);
}

.mph__cta:hover {
  background: var(--color-sun);
  color: var(--color-ink);
}


/* ══════════════════════════════════════════════════════════════════════
   2. THESIS
   ══════════════════════════════════════════════════════════════════════ */

.mth__inner {
  max-width: var(--container-md);
  margin-inline: auto;
  position: relative;
  padding-left: var(--space-8);
}

.mth__accent {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--color-sun);
  border-radius: 2px;
}

.mth__statement {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
  margin-bottom: var(--space-10);
}

.mth__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.mth__body p {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

.mth__closing {
  font-weight: var(--weight-semibold);
}

.mth__pull-quote {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: var(--weight-bold);
  font-style: italic;
  color: var(--color-ink);
  border-left: 4px solid var(--color-sun);
  padding-left: var(--space-6);
  margin: var(--space-8) 0 0;
  line-height: var(--lh-heading);
}

@media (max-width: 640px) {
  .mth__inner { padding-left: var(--space-6); }
}


/* ══════════════════════════════════════════════════════════════════════
   3. EIGHT-STEP SEQUENCE
   ══════════════════════════════════════════════════════════════════════ */

.mseq__header {
  margin-bottom: var(--space-16);
  max-width: var(--container-md);
}

.mseq__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: var(--space-4);
}

.mseq__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: #ffffff;
  line-height: var(--lh-heading);
}

.mseq__rail {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-8) var(--space-6);
  list-style: none;
  margin: 0;
  padding: 0;
}

.mseq__step {
  padding-top: var(--space-5);
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.mseq__step-n {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-bold);
  color: var(--color-sun);
  letter-spacing: 0.08em;
}

.mseq__step-label {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: var(--weight-bold);
  color: #ffffff;
  line-height: var(--lh-heading);
}

.mseq__step-desc {
  font-size: var(--text-small);
  line-height: var(--lh-body);
  color: #F5F3EE;
  margin-top: var(--space-2);
}

@media (max-width: 1024px) {
  .mseq__rail { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
  .mseq__rail { grid-template-columns: 1fr; }
}


/* ══════════════════════════════════════════════════════════════════════
   4. MANUAL PRACTICE
   ══════════════════════════════════════════════════════════════════════ */

.mprac__header {
  max-width: var(--container-md);
  margin-bottom: var(--space-16);
}

.mprac__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
  margin-bottom: var(--space-4);
}

.mprac__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
  margin-bottom: var(--space-5);
}

.mprac__sub {
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

.mprac__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-10) var(--space-12);
}

.mprac__item {
  padding-top: var(--space-5);
  border-top: 1px solid var(--color-stone);
}

.mprac__item-n {
  display: block;
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-bold);
  letter-spacing: 0.08em;
  color: var(--color-sun);
  margin-bottom: var(--space-3);
}

.mprac__item-label {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: var(--weight-bold);
  color: var(--color-ink);
  margin-bottom: var(--space-3);
  line-height: var(--lh-heading);
}

.mprac__item-desc {
  font-size: var(--text-body);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

.mprac__pull-quote {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: var(--weight-bold);
  font-style: italic;
  color: var(--color-ink);
  border-left: 4px solid var(--color-sun);
  padding-left: var(--space-6);
  margin-top: var(--space-16);
  line-height: var(--lh-heading);
  max-width: var(--container-md);
}

@media (max-width: 640px) {
  .mprac__grid { grid-template-columns: 1fr; }
}


/* ══════════════════════════════════════════════════════════════════════
   5. DESTINATION
   ══════════════════════════════════════════════════════════════════════ */

.mdest__header {
  max-width: var(--container-md);
  margin-bottom: var(--space-16);
}

.mdest__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
  margin-bottom: var(--space-4);
}

.mdest__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
  margin-bottom: var(--space-5);
}

.mdest__sub {
  font-size: var(--text-body-lg);
  color: var(--color-ink);
  line-height: var(--lh-body);
}

.mdest__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.mdest__item {
  padding: var(--space-6);
  border-top: 4px solid var(--color-sun);
  background: var(--color-paper);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(17, 17, 17, 0.06);
}

.mdest__number {
  display: block;
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-bold);
  letter-spacing: 0.1em;
  color: var(--color-sun);
  margin-bottom: var(--space-3);
}

.mdest__name {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: var(--weight-bold);
  color: var(--color-ink);
  margin-bottom: var(--space-4);
  line-height: var(--lh-heading);
}

.mdest__desc {
  font-size: var(--text-body);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

@media (max-width: 768px) {
  .mdest__grid { grid-template-columns: 1fr; gap: var(--space-6); }
}


/* ══════════════════════════════════════════════════════════════════════
   6. MYDOPA ROLE
   ══════════════════════════════════════════════════════════════════════ */

.mbridge__inner {
  max-width: var(--container-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.mbridge__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: #ffffff;
  line-height: var(--lh-heading);
}

.mbridge__body {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: rgba(255, 255, 255, 0.75);
}

.mbridge__product strong {
  color: rgba(255, 255, 255, 0.95);
  font-weight: var(--weight-semibold);
}

.mbridge__supporting {
  font-family: var(--font-body);
  font-size: var(--text-body);
  color: rgba(255, 255, 255, 0.55);
  line-height: var(--lh-body);
}

.mbridge__cta {
  display: inline-flex;
  align-items: center;
  background: var(--color-sun);
  color: var(--color-ink);
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: var(--weight-semibold);
  text-decoration: none;
  padding: var(--space-4) var(--space-8);
  border-radius: var(--radius-full);
  align-self: flex-start;
  transition: opacity var(--transition-fast);
}

.mbridge__cta:hover {
  opacity: 0.88;
}

.mbridge__note {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: rgba(255, 255, 255, 0.25);
  line-height: var(--lh-body);
  margin-top: calc(-1 * var(--space-4));
}


/* ══════════════════════════════════════════════════════════════════════
   7. FINAL CTA
   ══════════════════════════════════════════════════════════════════════ */

.mfinal {
  text-align: center;
}

.mfinal__inner {
  max-width: var(--container-md);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-8);
}

.mfinal__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
}

.mfinal__statement {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.mfinal__body {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
  max-width: 52ch;
  text-align: left;
}

.mfinal__cta {
  display: inline-flex;
  align-items: center;
  background: var(--color-ink);
  color: var(--color-paper);
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: var(--weight-semibold);
  text-decoration: none;
  padding: var(--space-4) var(--space-8);
  border-radius: var(--radius-full);
  transition: background var(--transition-fast), color var(--transition-fast);
}

.mfinal__cta:hover {
  background: var(--color-sun);
  color: var(--color-ink);
}

.mfinal__secondary {
  font-size: var(--text-small);
  line-height: var(--lh-body);
  color: var(--color-muted-ink);
  max-width: 52ch;
  text-align: left;
}

.mfinal__secondary-link {
  color: var(--color-ink);
  font-weight: var(--weight-medium);
  text-underline-offset: 3px;
}

.mfinal__secondary-link:hover {
  color: var(--color-ink);
}

@media (max-width: 640px) {
  .mph__cta  { width: 100%; justify-content: center; }
  .mfinal__cta { width: 100%; justify-content: center; }
}
</style>
