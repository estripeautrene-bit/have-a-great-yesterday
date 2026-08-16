<script setup lang="ts">
useSeoMeta({
  title: 'Our Story — HaveAGreatYesterday.com',
  description: 'How René Estripeaut built the MyHGY™ Method — a personal practice of evidence, continuity, and visible progress that became a methodology.',
})
</script>

<template>
  <div class="os-page">

    <!-- ═══ 1. HERO ═════════════════════════════════════════════════════ -->
    <section class="osh section--lg bg-warm-paper" aria-labelledby="os-heading">
      <div class="container">
        <div class="osh__inner">
          <p class="osh__eyebrow">Our Story</p>
          <h1 id="os-heading" class="osh__heading">
            Where this came from.
          </h1>
          <p class="osh__deck">
            A practice drawn from time-tested ideas and developed through firsthand experience.
          </p>
        </div>
      </div>
    </section>

    <!-- ═══ 2. FOUNDER NARRATIVE ════════════════════════════════════════ -->
    <section class="osn section--lg bg-paper" aria-label="Founder narrative">
      <div class="container">
        <div class="osn__grid">

          <!-- Text column -->
          <div class="osn__text">

            <p class="osn__byline">By René Estripeaut</p>

            <p class="osn__body">
              Years ago, <em>The Power of Now</em> helped me see the difference between what is happening in the present and the story my mind creates about it. Later, Quantum Growth—a nine-month mindset course led by Lue Araujo through Boost Your Mind and based on the Bob Proctor and Sandra Gallagher framework—helped me understand how repetition influences the subconscious and the frequency from which we think, feel, and act.
            </p>
            <p class="osn__body">
              I started putting those ideas into practice in two simple ways. Every morning, while having coffee, I wrote ten things I was grateful for. Every night, I recorded at least three good things that had happened.
            </p>
            <p class="osn__body">
              The morning practice helped me begin with gratitude. The nighttime practice helped me close the day on a positive note.
            </p>
            <p class="osn__body">
              They became the bookends of my day.
            </p>
            <p class="osn__body">
              <strong>What was missing was the middle.</strong>
            </p>
            <p class="osn__body">
              Good things were happening throughout the day: an unexpected hug, a smile from one of my daughters, a lead calling back, a productive conversation, a moment when I handled something well. Each one could elevate my frequency right then, while I was living my life.
            </p>
            <p class="osn__body">
              Most of them disappeared before nighttime.
            </p>
            <p class="osn__body">
              I realized that these moments could do much more if I captured them in real time, while they were still alive. A more accurate picture of my life would require making this a consistent practice: notice the good, capture it, and allow it to register.
            </p>
            <p class="osn__body">
              This was going to be the key to imprinting upon my subconscious all the goodness that was really happening. Anchoring the good through consistent conscious effort was the practice I had been missing.
            </p>
            <p class="osn__body">
              As artificial intelligence began changing the world of work, I took an AI course to learn how it could support my finance business. That experience gave me the confidence to approach Claude Code with an idea.
            </p>
            <p class="osn__body">
              I built the MVP of MyDopa to make one essential personal-development practice possible throughout the day: capture each good thing as it happens so that a steady stream of positive reality is consciously imprinted into the subconscious. This continuous imprint elevates your frequency, and that is the missing middle.
            </p>
            <p class="osn__body">
              MyDopa turns those captures into something more useful than disconnected notes in a notebook. As they accumulate, AI can organize the evidence and develop a clearer understanding of how we are living, responding, and progressing.
            </p>
            <p class="osn__body">
              MyProgress makes that evidence visible. We already use scorecards to understand our money, health, sleep, and exercise. Strava shows us that one run belongs to a larger journey. A banking app turns hundreds of transactions into a clear financial picture. MyProgress does something similar for personal development: it turns everyday actions and moments into a visible record of our progress as people.
            </p>
            <p class="osn__body">
              After I had built the first MVP of MyDopa and had been using it for a while, I went to the gym and heard Dan Sullivan describe an idea from his coach, Lior Weinstein. Lior believed his responsibility was to help his children have great todays so they could have great yesterdays—because a great past is a powerful predictor of the future.
            </p>
            <p class="osn__body">
              I immediately recognized the connection. Someone else understood the value of collecting what is good today, carrying it forward, and using a stronger past to approach the future.
            </p>
            <p class="osn__body">
              MyDopa became the tool for practicing the missing middle. The complete practice beneath it became the <InlineWordmark variant="light" /> Method.
            </p>
            <p class="osn__body">
              In my own life, these practices have helped me feel calmer, sleep better, strengthen my relationships, work more productively, follow through more consistently, and get more meaningful things done. Consistent practice replaces a distorted story with visible evidence of what is actually happening and what we are capable of doing.
            </p>
            <p class="osn__body">
              That is the deeper return: greater accuracy about our lives, greater clarity about what to do next, and greater self-confidence built from evidence we can see.
            </p>
            <p class="osn__body">
              Personal development becomes sustainable when it moves from something we occasionally understand to something we consistently practice.
            </p>
            <p class="osn__body">
              <strong>I am still inside this practice.</strong>
            </p>

            <p class="osn__signature"><strong>— René Estripeaut, founder</strong></p>
          </div>

          <!-- Founder portrait -->
          <div class="osn__portrait-col">
            <img
              src="/rene-founder.png"
              alt="René Estripeaut, founder of MyHGY"
              class="osn__portrait"
              loading="eager"
              decoding="async"
            />
          </div>

        </div>
      </div>
    </section>

    <!-- ═══ 3. FINAL CTA ═════════════════════════════════════════════════ -->
    <section class="osfinal section--lg bg-stone" aria-labelledby="osfinal-heading">
      <div class="container">
        <div class="osfinal__inner">

          <p class="osfinal__eyebrow">Start where you are</p>
          <h2 id="osfinal-heading" class="osfinal__statement">
            Whatever you are carrying right now —
          </h2>
          <p class="osfinal__body">
            The practice starts where you actually are. Tell us what you're going through.
            <InlineWordmark variant="light" /> will help you understand what is real,
            what remains available to you, and what you can do from here.
          </p>

          <NuxtLink to="/what-are-you-going-through" class="osfinal__cta">
            Show me what I can do from here.
          </NuxtLink>

          <p class="osfinal__secondary">
            Or <NuxtLink to="/method" class="osfinal__secondary-link">read the full <InlineWordmark variant="light" /> Method →</NuxtLink>
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

.osh__inner {
  max-width: var(--container-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.osh__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
}

.osh__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.osh__deck {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-muted-ink);
  font-style: italic;
}


/* ══════════════════════════════════════════════════════════════════════
   2. FOUNDER NARRATIVE
   ══════════════════════════════════════════════════════════════════════ */

.osn__grid {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: var(--space-20);
  align-items: start;
}

.osn__text {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.osn__byline {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: var(--weight-medium);
  color: var(--color-muted-ink);
}

.osn__body {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

.osn__signature {
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: var(--weight-medium);
  color: var(--color-muted-ink);
  margin-top: var(--space-4);
}

.osn__portrait-col {
  position: sticky;
  top: calc(var(--header-height) + var(--space-8));
}

.osn__portrait {
  width: 100%;
  height: auto;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  object-position: center top;
  border-radius: var(--radius-xl);
  display: block;
}

@media (max-width: 900px) {
  .osn__grid {
    grid-template-columns: 1fr;
  }
  .osn__portrait-col {
    position: static;
    order: -1;
    max-width: 320px;
  }
}


/* ══════════════════════════════════════════════════════════════════════
   3. FINAL CTA
   ══════════════════════════════════════════════════════════════════════ */

.osfinal {
  text-align: center;
}

.osfinal__inner {
  max-width: var(--container-md);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-8);
}

.osfinal__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
}

.osfinal__statement {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.osfinal__body {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
  max-width: 52ch;
  text-align: left;
}

.osfinal__cta {
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

.osfinal__cta:hover {
  background: var(--color-sun);
  color: var(--color-ink);
}

.osfinal__secondary {
  font-size: var(--text-small);
  line-height: var(--lh-body);
  color: var(--color-muted-ink);
  text-align: left;
}

.osfinal__secondary-link {
  color: var(--color-ink);
  font-weight: var(--weight-medium);
  text-underline-offset: 3px;
}

.osfinal__secondary-link:hover {
  color: var(--color-ink);
}

@media (max-width: 640px) {
  .osfinal__cta { width: 100%; justify-content: center; }
}
</style>
