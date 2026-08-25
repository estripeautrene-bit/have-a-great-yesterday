<script setup lang="ts">
usePageSeo({
  title: 'Our Story — HaveAGreatYesterday.com',
  description: 'How René Estripeaut built the MyHGY™ Method — a personal practice of evidence, continuity, and visible progress that became a methodology.',
  path: '/our-story',
})

const { public: { siteUrl } } = useRuntimeConfig()
useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Our Story — HaveAGreatYesterday.com',
  url: `${siteUrl}/our-story`,
  description: 'How René Estripeaut built the MyHGY™ Method — a personal practice of evidence, continuity, and visible progress that became a methodology.',
  author: {
    '@type': 'Person',
    name: 'René Estripeaut',
  },
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
            I thought I had a discipline problem for most of my life.
          </h1>
          <p class="osh__deck">
            Then I started keeping track of what I was actually doing, and the story I'd told myself for decades began to fall apart. That experience became MyHGY.
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
              I knew how I saw myself. I had a simple explanation for a lot of my life. I was creative. I was good at spotting opportunities. I was good at getting excited. Structure was harder. Consistency was harder. Following a plan was harder. I had enough history to make that story believable, so I believed it.
            </p>
            <p class="osn__body">
              The problem with a story you've told yourself for years is that you stop checking whether it's still true.
            </p>
            <p class="osn__body">
              Somewhere in that process, I learned something that changed everything: your subconscious doesn't evaluate whether a belief is true. It accepts whatever gets repeated into it, over and over, until repetition alone makes it feel like fact.
            </p>
            <p class="osn__body">
              That's exactly how "I have no structure" became true for me. Not because it was — because I said it to myself, one way or another, for fifty years. Nobody sat me down and installed that belief. I installed it myself, by accident, through pure repetition.
            </p>
            <p class="osn__body">
              Once I saw that, I saw the opening. If repetition builds a belief by accident, it can build one on purpose.
            </p>
            <p class="osn__body">
              I started carrying a notebook every day. I began committed to finding at least three real instances of good every single day, and writing them down. My boss stopping me in the hallway to say I'd done great work. A client calling to say he wanted to bring me more business. One of my daughters looking me dead in the eyes and smiling at me for no reason at all.
            </p>
            <p class="osn__body">
              The more I looked, the more I noticed how many good things were actually happening. The more I wrote them down, the more I could feel my subconscious handing me back a different, more positive reality.
            </p>
            <p class="osn__body">
              My behavior started changing before my self-image did. I stopped drinking. That took repetition. I trained for a half marathon. That took repetition. I read 27 books in eight months, after fifty years of believing I couldn't sit still long enough to finish one. I rode a three-day off-road rally across Panama — preparation, follow-through, repetition.
            </p>
            <p class="osn__body">
              And somewhere in the middle of doing all of it, I noticed something: I wasn't chasing these things out of desperation. I was going after them with Clarity about where I stood, Accuracy about what was actually true, and Self-Confidence built from a growing pile of evidence I could see with my own eyes.
            </p>
            <p class="osn__body">
              Confidence comes from evidence. The more evidence I had, the less I needed to give myself a speech.
            </p>
            <p class="osn__body">
              I became my own turnaround case. I don't mean I reached some perfect, finished version of myself. I mean the evidence changed enough that I could no longer describe myself the way I had for decades. That mattered to me — and I wanted to understand why.
            </p>
            <p class="osn__body">
              MyHGY is the system that came out of that search. We're documenting the ideas that shaped it, the research on the parts we can study, and the practices that helped — including the tool we're building to make it easier: MyDopa.
            </p>
            <p class="osn__body">
              You can try the practice yourself. You don't need to believe my story. Build your own evidence.
            </p>

            <p class="osn__signature">— René Estripeaut, founder</p>
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
