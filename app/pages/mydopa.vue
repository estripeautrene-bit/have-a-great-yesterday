<script setup lang="ts">
usePageSeo({
  title: 'MyDopa™ — HaveAGreatYesterday.com',
  description: 'MyDopa is the purpose-built tool for the MyHGY™ practice — visibility and continuity for your personal development, always with you.',
  path: '/mydopa',
})

const { public: { siteUrl } } = useRuntimeConfig()

const { $posthog } = useNuxtApp()

function trackInvitation(source: string) {
  if ($posthog.__loaded) {
    $posthog.capture('mydopa_invitation_clicked', { source })
  }
}

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'MyDopa™ — HaveAGreatYesterday.com',
  url: `${siteUrl}/mydopa`,
  description: 'MyDopa is the purpose-built tool for the MyHGY™ practice — visibility and continuity for your personal development, always with you.',
})
</script>

<template>
  <div class="mydopa-page">

    <!-- ═══ 1. HERO ════════════════════════════════════════════════════ -->
    <section class="mydh section--lg bg-warm-paper" aria-labelledby="mydopa-heading">
      <div class="container">
        <div class="mydh__inner">
          <p class="mydh__eyebrow">MyDopa™</p>
          <h1 id="mydopa-heading" class="mydh__heading">
            The notebook is where it starts.
          </h1>
          <p class="mydh__deck">
            <InlineMyDopa /> is where it keeps going.
          </p>
          <a
            href="https://mydopa.app"
            class="mydh__cta"
            target="_blank"
            rel="noopener noreferrer"
            @click="trackInvitation('hero')"
          >
            Request an invitation →
          </a>
        </div>
      </div>
    </section>

    <!-- ═══ 2. THE MANUAL LIMIT ════════════════════════════════════════ -->
    <section class="mydlim section--lg bg-paper" aria-labelledby="mydlim-heading">
      <div class="container">
        <div class="mydlim__inner">

          <div class="mydlim__accent" aria-hidden="true" />

          <h2 id="mydlim-heading" class="mydlim__heading">
            A notebook works. <InlineMyDopa /> makes it effortless.
          </h2>

          <div class="mydlim__body">
            <p>The practice is simple: at least three real instances a day, written down, every day, no exceptions. A notebook does the job.</p>
            <p><InlineMyDopa /> does more. Your phone is already in your hand, so catching a win takes seconds, wherever you are. Say it out loud and <InlineMyDopa /> writes it down for you. And because everything lives in one place, <InlineMyDopa /> reflects your progress back to you — patterns, momentum, the shape of what you're actually building — the way Strava shows a runner the miles they've put in.</p>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══ 3. WHAT MYDOPA DOES ════════════════════════════════════════ -->
    <section class="mydfeat section--lg bg-ink" aria-labelledby="mydfeat-heading">
      <div class="container">
        <div class="mydfeat__inner">

          <h2 id="mydfeat-heading" class="mydfeat__heading">
            <InlineMyDopa /> provides visibility and continuity to your progress.
          </h2>

          <p class="mydfeat__body">
            <InlineMyDopa /> turns the notebook into a digital, AI-powered experience on your phone — your practice, always with you.
          </p>

          <p class="mydfeat__body">
            <InlineMyDopa /> carries the practice forward, giving you the same visibility Strava gives a runner — but for your mindset and your personal development. Discoveries bring you private audio lessons made for the curious, built to move you further toward CAS. And a like-minded cohort lets you share the climb with others growing alongside you.
          </p>

          <p class="mydfeat__tagline">
            MyHGY teaches the practice. <InlineMyDopa /> provides the equipment.
          </p>

        </div>
      </div>
    </section>

    <!-- ═══ 4. CONFIDENCE FROM EVIDENCE ═══════════════════════════════ -->
    <section class="mydev section--lg bg-warm-paper" aria-labelledby="mydev-heading">
      <div class="container">
        <div class="mydev__inner">

          <h2 id="mydev-heading" class="mydev__heading">
            The more you can see, the more you believe.
          </h2>

          <p class="mydev__body">
            One entry is a moment. A record is proof — but only if you can actually see the record. <InlineMyDopa /> makes months of evidence visible at once, so Clarity, Accuracy, and Self-Confidence build on the whole pattern, not just what you can remember off the top of your head.
          </p>

        </div>
      </div>
    </section>

    <!-- ═══ 5. EARNED ANTICIPATION ════════════════════════════════════ -->
    <section class="mydanticip section--lg bg-stone" aria-labelledby="mydanticip-heading">
      <div class="container">
        <div class="mydanticip__inner">

          <h2 id="mydanticip-heading" class="mydanticip__heading">
            The feeling before you already know.
          </h2>

          <p class="mydanticip__body">
            There's a specific feeling that comes before a result you already know is good — because you did the work. The moment before the scale. The smell of bread you know came out right. Seeing a name on your phone and already knowing it's good news.
          </p>

          <p class="mydanticip__body">
            That feeling isn't luck. It's earned anticipation. <InlineMyDopa /> is where the evidence you've built shows up — and where you start recognizing that feeling for what it is: proof, arriving early.
          </p>

          <a
            href="https://mydopa.app"
            class="mydanticip__cta"
            target="_blank"
            rel="noopener noreferrer"
            @click="trackInvitation('earned_anticipation')"
          >
            Request an invitation →
          </a>

          <p class="mydanticip__note">
            <InlineMyDopa /> is a separate product. No affiliation or endorsement of this site is implied.
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

.mydh__inner {
  max-width: var(--container-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.mydh__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
}

.mydh__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.mydh__deck {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

.mydh__cta {
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

.mydh__cta:hover {
  background: var(--color-sun);
  color: var(--color-ink);
}

@media (max-width: 640px) {
  .mydh__cta { width: 100%; justify-content: center; }
}


/* ══════════════════════════════════════════════════════════════════════
   2. THE MANUAL LIMIT
   ══════════════════════════════════════════════════════════════════════ */

.mydlim__inner {
  max-width: var(--container-md);
  margin-inline: auto;
  position: relative;
  padding-left: var(--space-8);
}

.mydlim__accent {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--color-sun);
  border-radius: 2px;
}

.mydlim__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
  margin-bottom: var(--space-10);
}

.mydlim__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.mydlim__body p {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

@media (max-width: 640px) {
  .mydlim__inner { padding-left: var(--space-6); }
}


/* ══════════════════════════════════════════════════════════════════════
   3. WHAT MYDOPA DOES
   ══════════════════════════════════════════════════════════════════════ */

.mydfeat__inner {
  max-width: var(--container-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.mydfeat__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: #ffffff;
  line-height: var(--lh-heading);
}

.mydfeat__body {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: rgba(255, 255, 255, 0.75);
}

.mydfeat__tagline {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  font-weight: var(--weight-semibold);
  color: rgba(255, 255, 255, 0.90);
  line-height: var(--lh-body);
}


/* ══════════════════════════════════════════════════════════════════════
   4. CONFIDENCE FROM EVIDENCE
   ══════════════════════════════════════════════════════════════════════ */

.mydev__inner {
  max-width: var(--container-md);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.mydev__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.mydev__body {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
}


/* ══════════════════════════════════════════════════════════════════════
   5. EARNED ANTICIPATION
   ══════════════════════════════════════════════════════════════════════ */

.mydanticip__inner {
  max-width: var(--container-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.mydanticip__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.mydanticip__body {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

.mydanticip__cta {
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

.mydanticip__cta:hover {
  background: var(--color-sun);
  color: var(--color-ink);
}

.mydanticip__note {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: var(--color-muted-ink);
  line-height: var(--lh-body);
}

@media (max-width: 640px) {
  .mydanticip__cta { width: 100%; justify-content: center; }
}
</style>
