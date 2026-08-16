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
              For most of my life, I was convinced I had no structure.
            </p>
            <p class="osn__body">
              I was the person who starts things and does not finish. My mind was always
              faster than my follow-through — and faster than my willingness to put in
              consistent effort.
            </p>
            <p class="osn__body">
              Then the evidence began to change.
            </p>
            <p class="osn__body">
              A book called <em>The Power of Now</em> showed me that the present moment
              and the story my mind was telling about the present moment were not the same
              thing. That insight was real. Then it faded. I did not know how to keep it.
            </p>
            <p class="osn__body">
              Later, I began two daily practices: a morning gratitude notebook and a
              nightly Three Good Things record. The gratitude notebook oriented me at the
              start of each day. The Three Good Things notebook preserved what actually
              occurred — a confirmed deal, a real conversation, a moment with one of my
              daughters — so the day did not collapse into a single vague verdict by evening.
            </p>
            <p class="osn__body">
              Those practices changed things. But they left a gap.
            </p>
            <p class="osn__body">
              Smaller moments — unexpectedly running into someone I'd been thinking about,
              a conversation that went better than expected, a deadline I met when I wasn't
              sure I would, a fear I faced — were disappearing before I could get them into
              any notebook. By evening the feeling that something meaningful had happened
              was still there, but the living detail had leaked out.
            </p>
            <p class="osn__body">
              I started capturing those moments on my phone, close to when they happened.
              That changed the practice entirely. What began as a way to stop forgetting
              became something else: an accumulating body of evidence. Evidence that I was
              building, acting, connecting, recovering, and progressing — even on the days
              my mind was ready to call the whole thing ordinary or lost.
            </p>
            <p class="osn__body">
              That evidence began to matter in ways I had not expected.
            </p>
            <p class="osn__body">
              I ran a half marathon. I stopped drinking. I read twenty-seven books in eight
              months. I rode across Panama on a motorcycle — three days of demanding terrain
              that required me to stay fully present or fall over. I did not feel like a
              disciplined person during any of it. I felt like someone showing up, one kept
              promise at a time, with a record to prove it.
            </p>
            <p class="osn__body">
              While I was already building the tool to support that practice, I heard a
              podcast story about a father who believed his job was to help his children
              collect great days — and therefore great yesterdays. The story reinforced my
              conviction that consciously preserving the good in our lives can change how we
              experience the present and approach the future.
            </p>
            <p class="osn__body">
              That is what became <InlineWordmark variant="light" />.
            </p>
            <p class="osn__body">
              Not a gratitude journal. Not a positivity system. A methodology for returning
              to what is actually true, identifying what you can still do, acting on it, and
              keeping the evidence so that progress becomes visible — not only felt.
            </p>
            <p class="osn__body">
              I am still inside this practice. I am not teaching it from the other side.
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
