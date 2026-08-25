<script setup lang="ts">
usePageSeo({
  title: 'About René Estripeaut — HaveAGreatYesterday.com',
  description: 'René Estripeaut is the founder of MyHGY™ — a practice he built because he needed it himself. Three careers, one throughline, and a working practice.',
  path: '/about',
})

const { public: { siteUrl } } = useRuntimeConfig()

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About René Estripeaut — HaveAGreatYesterday.com',
  url: `${siteUrl}/about`,
  description: 'René Estripeaut is the founder of MyHGY™ — a practice he built because he needed it himself. Three careers, one throughline, and a working practice.',
  about: {
    '@type': 'Person',
    name: 'René Estripeaut',
  },
})
</script>

<template>
  <div class="ar-page">

    <!-- ═══ 1. HERO ════════════════════════════════════════════════════ -->
    <section class="arh section--lg bg-warm-paper" aria-labelledby="ar-heading">
      <div class="container">
        <div class="arh__grid">

          <div class="arh__text">
            <p class="arh__eyebrow">About René</p>
            <h1 id="ar-heading" class="arh__heading">
              I built MyHGY because I needed it myself.
            </h1>
            <p class="arh__deck">
              I'm René Estripeaut — a founder in Panama, a father, and the first person this practice was ever tested on.
            </p>
          </div>

          <div class="arh__portrait-col">
            <img
              src="/rene-founder.png"
              alt="René Estripeaut, founder of MyHGY"
              class="arh__portrait"
              loading="eager"
              decoding="async"
            />
          </div>

        </div>
      </div>
    </section>

    <!-- ═══ 2. WHO I AM ════════════════════════════════════════════════ -->
    <section class="arwho section--lg bg-paper" aria-labelledby="arwho-heading">
      <div class="container">
        <div class="arwho__inner">

          <h2 id="arwho-heading" class="arwho__heading">
            Three careers, one throughline.
          </h2>

          <p class="arwho__body">
            I spent about eleven years in wealth management, then about eleven years running the Panama office of a global luxury lifestyle-management company. Since 2017, I've run the Connecting Group — placing private capital, brokering off-market real estate, and representing family offices across Latin America.
          </p>

          <p class="arwho__body">
            I'm married to Michelle. We have three daughters. For most of that time, I generated real value in my work without anyone seeing it — and I didn't yet understand how much that same invisible-progress problem was shaping the rest of my life too.
          </p>

        </div>
      </div>
    </section>

    <!-- ═══ 3. WHY I BUILT THIS ════════════════════════════════════════ -->
    <section class="arbuild section--lg bg-warm-paper" aria-labelledby="arbuild-heading">
      <div class="container">
        <div class="arbuild__inner">

          <div class="arbuild__accent" aria-hidden="true" />

          <h2 id="arbuild-heading" class="arbuild__heading">
            I spent years learning. The change came when I started practicing.
          </h2>

          <div class="arbuild__body">
            <p>I'd carried the same story about myself for fifty years: talented, but no structure. I had the history to prove it — things I'd started and never finished, plans that fell apart, a version of discipline that never stuck.</p>
            <p>Then I learned that my mind doesn't check whether a belief is true. It just accepts whatever gets repeated into it. That belief wasn't a fair verdict on me. It was fifty years of unaudited repetition.</p>
            <p>So I started repeating something else, on purpose. A notebook. At least three real instances of good, every single day, written down. Not because it felt good — because writing it down is what gets it into the subconscious.</p>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══ 4. WHAT IT BUILT ═══════════════════════════════════════════ -->
    <section class="arbuilt section--lg bg-paper" aria-labelledby="arbuilt-heading">
      <div class="container">
        <div class="arbuilt__inner">

          <h2 id="arbuilt-heading" class="arbuilt__heading">
            I became my own turnaround case.
          </h2>

          <p class="arbuilt__body">
            I stopped drinking. I trained for and finished a half marathon. I read 27 books in eight months, after fifty years of believing I couldn't sit still that long. I rode a three-day off-road rally across Panama.
          </p>

          <p class="arbuilt__body">
            None of that is the point. The point is what came after all of it: Clarity, Accuracy, and Self-Confidence — built one entry at a time, until I could no longer describe myself the way I had for decades.
          </p>

          <p class="arbuilt__callout">
            Confidence comes from evidence.
          </p>

          <p class="arbuilt__body">
            Along the way, I learned how to build with AI. That let me build <InlineMyDopa /> — the evolution of my notebook, giving me visibility and continuity to my personal progress every single day. I invite you to try it out.
          </p>

        </div>
      </div>
    </section>

    <!-- ═══ 5. WHY I'M DOING THIS PUBLICLY ════════════════════════════ -->
    <section class="arpublic section--lg bg-stone" aria-labelledby="arpublic-heading">
      <div class="container">
        <div class="arpublic__inner">

          <h2 id="arpublic-heading" class="arpublic__heading">
            I don't have a finished theory. I have a working practice.
          </h2>

          <p class="arpublic__body">
            I'm not asking anyone to take my word for it. I'm showing my work — the founder story, the practical system, the people whose ideas shaped it, and the research behind the parts we can actually study. As we learn more, we'll update what we teach.
          </p>

          <p class="arpublic__body">
            The standard is simple: useful enough to practice, honest enough to examine.
          </p>

          <NuxtLink to="/what-are-you-going-through" class="arpublic__cta">
            Try the practice →
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

.arh__grid {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: var(--space-20);
  align-items: start;
}

.arh__text {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  padding-top: var(--space-8);
}

.arh__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
}

.arh__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.arh__deck {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-muted-ink);
  font-style: italic;
}

.arh__portrait-col {
  position: sticky;
  top: calc(var(--header-height) + var(--space-8));
}

.arh__portrait {
  width: 100%;
  height: auto;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  object-position: center top;
  border-radius: var(--radius-xl);
  display: block;
}

@media (max-width: 900px) {
  .arh__grid {
    grid-template-columns: 1fr;
  }
  .arh__portrait-col {
    position: static;
    order: -1;
    max-width: 320px;
  }
}


/* ══════════════════════════════════════════════════════════════════════
   2. WHO I AM
   ══════════════════════════════════════════════════════════════════════ */

.arwho__inner {
  max-width: var(--container-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.arwho__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.arwho__body {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
}


/* ══════════════════════════════════════════════════════════════════════
   3. WHY I BUILT THIS
   ══════════════════════════════════════════════════════════════════════ */

.arbuild__inner {
  max-width: var(--container-md);
  margin-inline: auto;
  position: relative;
  padding-left: var(--space-8);
}

.arbuild__accent {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--color-sun);
  border-radius: 2px;
}

.arbuild__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
  margin-bottom: var(--space-10);
}

.arbuild__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.arbuild__body p {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

@media (max-width: 640px) {
  .arbuild__inner { padding-left: var(--space-6); }
}


/* ══════════════════════════════════════════════════════════════════════
   4. WHAT IT BUILT
   ══════════════════════════════════════════════════════════════════════ */

.arbuilt__inner {
  max-width: var(--container-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.arbuilt__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.arbuilt__body {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

.arbuilt__callout {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: var(--weight-bold);
  font-style: italic;
  color: var(--color-ink);
  border-left: 4px solid var(--color-sun);
  padding-left: var(--space-6);
  line-height: var(--lh-heading);
}


/* ══════════════════════════════════════════════════════════════════════
   5. WHY I'M DOING THIS PUBLICLY
   ══════════════════════════════════════════════════════════════════════ */

.arpublic__inner {
  max-width: var(--container-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.arpublic__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.arpublic__body {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

.arpublic__cta {
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

.arpublic__cta:hover {
  background: var(--color-sun);
  color: var(--color-ink);
}

@media (max-width: 640px) {
  .arpublic__cta { width: 100%; justify-content: center; }
}
</style>
