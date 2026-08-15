<template>
  <section class="founder section bg-paper" aria-labelledby="founder-heading">
    <div class="container">

      <div class="founder__grid">

        <!-- Text column -->
        <div class="founder__text">
          <p class="founder__eyebrow">Our Story</p>
          <h2 id="founder-heading" class="founder__heading">
            Where this came from.
          </h2>
          <p class="founder__byline">By René Estripeaut</p>
          <p class="founder__body">
            For most of my life, I was convinced I had no structure.
          </p>
          <p class="founder__body">
            I was the person who starts things and does not finish. My mind was always faster than my follow-through — and faster than my willingness to put in consistent effort.
          </p>
          <p class="founder__body">
            Then the evidence began to change.
          </p>
          <p class="founder__body">
            A book called <em>The Power of Now</em> showed me that the present moment and the story my mind was telling about the present moment were not the same thing. That insight was real. Then it faded. I did not know how to keep it.
          </p>
          <p class="founder__body">
            Later, I began two daily practices: a morning gratitude notebook and a nightly Three Good Things record. The gratitude notebook oriented me at the start of each day. The Three Good Things notebook preserved what actually occurred — a confirmed deal, a real conversation, a moment with one of my daughters — so the day did not collapse into a single vague verdict by evening.
          </p>
          <p class="founder__body">
            Those practices changed things. But they left a gap.
          </p>
          <p class="founder__body">
            Smaller moments — unexpectedly running into someone I'd been thinking about, a conversation that went better than expected, a deadline I met when I wasn't sure I would, a fear I faced — were disappearing before I could get them into any notebook. By evening the feeling that something meaningful had happened was still there, but the living detail had leaked out.
          </p>
          <p class="founder__body">
            I started capturing those moments on my phone, close to when they happened. That changed the practice entirely. What began as a way to stop forgetting became something else: an accumulating body of evidence. Evidence that I was building, acting, connecting, recovering, and progressing — even on the days my mind was ready to call the whole thing ordinary or lost.
          </p>
          <p class="founder__body">
            That evidence began to matter in ways I had not expected.
          </p>
          <p class="founder__body">
            I ran a half marathon. I stopped drinking. I read twenty-seven books in eight months. I rode across Panama on a motorcycle — three days of demanding terrain that required me to stay fully present or fall over. I did not feel like a disciplined person during any of it. I felt like someone showing up, one kept promise at a time, with a record to prove it.
          </p>
          <p class="founder__body">
            While I was already building the tool to support that practice, I heard a podcast story about a father who believed his job was to help his children collect great days — and therefore great yesterdays. The story reinforced my conviction that consciously preserving the good in our lives can change how we experience the present and approach the future.
          </p>
          <p class="founder__body">
            That is what became MyHGY™.
          </p>
          <p class="founder__body">
            Not a gratitude journal. Not a positivity system. A methodology for returning to what is actually true, identifying what you can still do, acting on it, and keeping the evidence so that progress becomes visible — not only felt.
          </p>
          <p class="founder__body">
            I am still inside this practice. I am not teaching it from the other side.
          </p>
          <p class="founder__signature">— René Estripeaut, founder</p>
        </div>

        <!-- Photo placeholder -->
        <div class="founder__portrait" aria-label="Founder portrait — image coming">
          <div class="founder__portrait-placeholder">
            <span class="founder__portrait-label">Photo</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.founder__grid {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: var(--space-20);
  align-items: start;
}

.founder__text {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.founder__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
}

.founder__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.founder__byline {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: var(--weight-medium);
  color: var(--color-muted-ink);
  margin-top: calc(-1 * var(--space-2));
}

.founder__body {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

.founder__signature {
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: var(--weight-medium);
  color: var(--color-muted-ink);
  margin-top: var(--space-4);
}

/* Portrait placeholder */
.founder__portrait {
  position: sticky;
  top: calc(var(--header-height) + var(--space-8));
}

.founder__portrait-placeholder {
  aspect-ratio: 3 / 4;
  background: var(--color-stone);
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed rgba(0, 0, 0, 0.12);
}

.founder__portrait-label {
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: var(--color-muted-ink);
  font-style: italic;
}

@media (max-width: 900px) {
  .founder__grid {
    grid-template-columns: 1fr;
  }
  .founder__portrait {
    position: static;
    order: -1;
    max-width: 320px;
  }
}
</style>
