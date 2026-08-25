<script setup lang="ts">
usePageSeo({
  title: 'For Organizations — HaveAGreatYesterday.com',
  description: 'The MyHGY™ Method gives learning investments a continuing practice — for transfer, repetition, and visible evidence of application and progress.',
  path: '/for-organizations',
})

const { public: { siteUrl } } = useRuntimeConfig()

const { $posthog } = useNuxtApp()

function trackPilotConversation() {
  if ($posthog.__loaded) {
    $posthog.capture('pilot_conversation_requested')
  }
}

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'For Organizations — HaveAGreatYesterday.com',
  url: `${siteUrl}/for-organizations`,
  description: 'The MyHGY™ Method gives learning investments a continuing practice — for transfer, repetition, and visible evidence of application and progress.',
})

const mechanisms = [
  {
    n: '01',
    label: 'Learning Transfer',
    desc: 'The method gives participants a structure to continue practicing after a program ends. What was understood once becomes something repeated in real work, over time.',
  },
  {
    n: '02',
    label: 'Repetition',
    desc: 'Insight is episodic. Life is continuous. The old pattern has repetition on its side. A workshop or program introduces understanding — then ordinary work resumes immediately. The continuing practice gives participants repeated chances to apply what they learned and generate new lived evidence from real situations.',
  },
  {
    n: '03',
    label: 'Application',
    desc: 'Participants identify specific actions they can take today, take them, and preserve a record of what happened. Intention is held alongside action.',
  },
  {
    n: '04',
    label: 'Preserved Evidence',
    desc: 'What people are actually doing is captured close to the moment it happens — while detail and feeling are still alive. Not reconstructed from memory weeks later.',
  },
  {
    n: '05',
    label: 'Reflection',
    desc: 'Evidence is revisited at natural intervals. Participants develop a clearer picture of how they are responding, progressing, and applying what they learned.',
  },
  {
    n: '06',
    label: 'Visible Evidence of Application and Progress',
    desc: 'Progress accumulates into a visible record. What participants are actually doing — applying, attempting, adjusting — becomes something they can see, not only something they believe is happening.',
  },
]
</script>

<template>
  <div class="fo-page">

    <!-- ═══ 1. HERO ════════════════════════════════════════════════════ -->
    <section class="foh section--lg bg-warm-paper" aria-labelledby="fo-heading">
      <div class="container">
        <div class="foh__inner">
          <p class="foh__eyebrow">For Organizations</p>
          <h1 id="fo-heading" class="foh__heading">
            The missing middle in every learning investment.
          </h1>
          <p class="foh__deck">
            Companies invest in training, workshops, leadership programs, coaching,
            and conferences. The intervention creates real insight. Then employees
            return to ordinary work. The value disappears in the middle.
          </p>
          <p class="foh__sub">
            The <InlineWordmark variant="light" /> Method addresses what happens between programs.
          </p>
        </div>
      </div>
    </section>

    <!-- ═══ 2. THE PROBLEM ════════════════════════════════════════════ -->
    <section class="fop section--lg bg-paper" aria-labelledby="fop-heading">
      <div class="container">
        <div class="fop__inner">

          <div class="fop__accent" aria-hidden="true" />

          <h2 id="fop-heading" class="fop__statement">
            Every organization is already investing.
          </h2>
          <p class="fop__deck">The gap is what comes after.</p>

          <div class="fop__body">
            <p>
              A workshop creates understanding. A coaching engagement builds
              self-awareness. A leadership program opens new perspectives. These
              investments are real, and the insight they produce is genuine.
            </p>
            <p>The problem is structural, not motivational.</p>
            <p>
              Employees return from a program to full schedules, immediate demands,
              and the patterns that were already in place. The insight doesn't
              disappear — it competes. It competes with everything that was already
              running: established habits, familiar ways of responding, the daily
              pressure to perform.
            </p>
            <p>
              Without a continuing practice between interventions, learning fades.
              Not because people are uncommitted. Because the structure for
              continuing was never part of the design.
            </p>
            <p>
              The missing middle in organizational learning is the same gap that
              exists in personal development — and it has the same solution.
            </p>
            <blockquote class="fop__pull-quote">
              <InlineWordmark variant="light" /> is not another source of insight.
              It is the continuity mechanism between insights.
            </blockquote>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══ 3. HOW IT WORKS ═══════════════════════════════════════════ -->
    <section class="fos section--lg bg-ink" aria-labelledby="fos-heading">
      <div class="container">

        <div class="fos__header">
          <p class="fos__eyebrow">The organizational application</p>
          <h2 id="fos-heading" class="fos__heading">
            The same practice. Applied to organizations.
          </h2>
          <p class="fos__sub">
            Learning transfer, repetition, application, preserved evidence,
            reflection, and visible evidence of application and progress — the <InlineWordmark variant="dark" />
            Method brings a continuing structure to what programs create.
          </p>
        </div>

        <div class="fos__grid">
          <div
            v-for="m in mechanisms"
            :key="m.n"
            class="fos__item"
          >
            <span class="fos__item-n" aria-hidden="true">{{ m.n }}</span>
            <h3 class="fos__item-label">{{ m.label }}</h3>
            <p class="fos__item-desc">{{ m.desc }}</p>
          </div>
        </div>

      </div>
    </section>

    <!-- ═══ 4. ONE METHODOLOGY ════════════════════════════════════════ -->
    <section class="fom section--lg bg-stone" aria-labelledby="fom-heading">
      <div class="container">
        <div class="fom__inner">

          <div class="fom__header">
            <p class="fom__eyebrow">One methodology</p>
            <h2 id="fom-heading" class="fom__heading">
              Individual and organizational applications of the same practice.
            </h2>
          </div>

          <div class="fom__cols">
            <div class="fom__col">
              <p class="fom__col-label">Individual</p>
              <p class="fom__col-body">
                People practice the <InlineWordmark variant="light" /> Method in their
                daily lives — for personal clarity, consistency, and confidence built
                from visible evidence of what they have actually done.
              </p>
            </div>
            <div class="fom__col">
              <p class="fom__col-label">Organizational</p>
              <p class="fom__col-body">
                Organizations embed the same methodology as the continuing structure
                between learning investments — for transfer, behavior change, and
                progress that becomes visible over time.
              </p>
            </div>
          </div>

          <p class="fom__note">
            <InlineWordmark variant="light" /> is not a separate product for L&amp;D.
            It is the same recurring practice, applied to the organizational context.
          </p>

        </div>
      </div>
    </section>

    <!-- ═══ 5. PILOT CTA ══════════════════════════════════════════════ -->
    <section class="foct section--lg bg-warm-paper" aria-labelledby="foct-heading">
      <div class="container">
        <div class="foct__inner">

          <p class="foct__eyebrow">Pilot conversations</p>
          <h2 id="foct-heading" class="foct__heading">
            We are exploring organizational applications.
          </h2>
          <p class="foct__body">
            We work with L&amp;D leaders, facilitators, coaches, and program designers
            who want to give their interventions a continuing practice. If that
            describes your work, we would like to hear about your context.
          </p>

          <a
            href="mailto:organizations@haveagreatyesterday.com"
            class="foct__cta"
            @click="trackPilotConversation"
          >
            Request a pilot conversation →
          </a>

          <p class="foct__note">
            A more formal intake process is in development.
          </p>

        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>

/* ══════════════════════════════════════════════════════════════════════
   1. HERO
   ══════════════════════════════════════════════════════════════════════ */

.foh__inner {
  max-width: var(--container-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.foh__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
}

.foh__eyebrow::after {
  content: '';
  display: block;
  width: 28px;
  height: 2px;
  background: var(--color-sun);
  margin-top: var(--space-2);
}

.foh__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.foh__deck {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
  max-width: 58ch;
}

.foh__sub {
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-style: italic;
  color: var(--color-muted-ink);
}


/* ══════════════════════════════════════════════════════════════════════
   2. THE PROBLEM
   ══════════════════════════════════════════════════════════════════════ */

.fop__inner {
  max-width: var(--container-md);
  margin-inline: auto;
  position: relative;
  padding-left: var(--space-8);
}

.fop__accent {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--color-sun);
  border-radius: 2px;
}

.fop__statement {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
  margin-bottom: var(--space-4);
}

.fop__deck {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-muted-ink);
  font-style: italic;
  margin-bottom: var(--space-10);
}

.fop__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.fop__body p {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

.fop__pull-quote {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: var(--weight-bold);
  font-style: italic;
  color: var(--color-ink);
  border-left: 4px solid var(--color-sun);
  padding-left: var(--space-6);
  margin-top: var(--space-4);
  line-height: var(--lh-heading);
}

@media (max-width: 640px) {
  .fop__inner { padding-left: var(--space-6); }
}


/* ══════════════════════════════════════════════════════════════════════
   3. HOW IT WORKS (dark)
   ══════════════════════════════════════════════════════════════════════ */

.fos__header {
  max-width: var(--container-md);
  margin-bottom: var(--space-16);
}

.fos__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: var(--space-4);
}

.fos__eyebrow::after {
  content: '';
  display: block;
  width: 28px;
  height: 2px;
  background: var(--color-sun);
  margin-top: var(--space-2);
}

.fos__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: #ffffff;
  line-height: var(--lh-heading);
  margin-bottom: var(--space-6);
}

.fos__sub {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: rgba(255, 255, 255, 0.7);
  max-width: 58ch;
}

.fos__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8) var(--space-6);
}

.fos__item {
  background: #FFF9E8;
  border-radius: 12px;
  border-top: 3px solid var(--color-sun);
  padding: var(--space-6);
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.14);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.fos__item-n {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-bold);
  color: var(--color-sun);
  letter-spacing: 0.08em;
}

.fos__item-label {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: var(--weight-bold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.fos__item-desc {
  font-size: var(--text-small);
  line-height: var(--lh-body);
  color: var(--color-muted-ink);
  margin-top: var(--space-2);
}

@media (max-width: 900px) {
  .fos__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
  .fos__grid { grid-template-columns: 1fr; }
}


/* ══════════════════════════════════════════════════════════════════════
   4. ONE METHODOLOGY
   ══════════════════════════════════════════════════════════════════════ */

.fom__inner {
  max-width: var(--container-lg);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
}

.fom__header {
  max-width: var(--container-md);
}

.fom__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
  margin-bottom: var(--space-4);
}

.fom__eyebrow::after {
  content: '';
  display: block;
  width: 28px;
  height: 2px;
  background: var(--color-sun);
  margin-top: var(--space-2);
}

.fom__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.fom__cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12);
}

.fom__col {
  background: var(--color-paper);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  border-top: 4px solid var(--color-sun);
}

.fom__col-label {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-bold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
  margin-bottom: var(--space-4);
}

.fom__col-body {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

.fom__note {
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-style: italic;
  color: var(--color-muted-ink);
  max-width: var(--container-md);
}

@media (max-width: 640px) {
  .fom__cols { grid-template-columns: 1fr; gap: var(--space-8); }
}


/* ══════════════════════════════════════════════════════════════════════
   5. PILOT CTA
   ══════════════════════════════════════════════════════════════════════ */

.foct {
  text-align: center;
}

.foct__inner {
  max-width: var(--container-md);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-8);
}

.foct__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
}

.foct__eyebrow::after {
  content: '';
  display: block;
  width: 28px;
  height: 2px;
  background: var(--color-sun);
  margin-top: var(--space-2);
}

.foct__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.foct__body {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
  max-width: 52ch;
  text-align: left;
}

.foct__cta {
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

.foct__cta:hover {
  background: var(--color-sun);
  color: var(--color-ink);
}

.foct__note {
  font-size: var(--text-small);
  color: var(--color-muted-ink);
  line-height: var(--lh-body);
}

@media (max-width: 640px) {
  .foct__cta { width: 100%; justify-content: center; }
}
</style>
