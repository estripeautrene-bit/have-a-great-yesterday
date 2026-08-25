<template>
  <section class="philosophy section--lg bg-warm-paper" aria-labelledby="philosophy-heading">
    <div class="container">

      <div class="philosophy__inner">

        <div class="philosophy__accent" aria-hidden="true" />

        <h2 id="philosophy-heading" class="philosophy__statement">
          Personal development works like everything else you've ever gotten good at... PRACTICE
        </h2>

        <div class="philosophy__body">
          <p class="philosophy__para">
            Athletes train. Musicians rehearse. Students study. Pilots run checklists before every flight. Teams practice before the game.
          </p>
          <p class="philosophy__para">
            You already know this is true in your own life, in the simplest ways. To become leaner, you take up an exercise routine. To become healthier, you start to eat better. To enhance your career, you get more prepared and certified. To become a better parent, you pay more attention and become more present.
          </p>
          <p class="philosophy__para">
            Personal development works the same way. One lesson, one book, one great conversation can show you something true — but it only becomes part of you through a proven system, built by doing it again. And again — until it's no longer something you're choosing. It's something your subconscious has already accepted as true.
          </p>
          <p class="philosophy__para">
            Here's the practice. Every day, life hands you real fuel — a win at work, a hard moment you got through, a look from someone who loves you. Carry a notebook, or use your phone. Every single day, find at least three real instances and write them down. Writing them down is what gets them into your subconscious. Do this without exception, and a record builds — one you can trust, because you wrote it while it was happening, not after your memory reshaped it.
          </p>
          <p class="philosophy__para philosophy__closing">
            That record is where Clarity, Accuracy, and Self-Confidence come from.
          </p>
          <blockquote class="philosophy__pull-quote">
            Personal development deserves a practice — the same way anything worth becoming great at deserves one.
          </blockquote>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.philosophy__inner {
  max-width: var(--container-md);
  margin-inline: auto;
  position: relative;
  padding-left: var(--space-8);
}

.philosophy__accent {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--color-sun);
  border-radius: 2px;
}

.philosophy__statement {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
  margin-bottom: var(--space-10);
}

.philosophy__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.philosophy__para {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

.philosophy__closing {
  font-weight: var(--weight-semibold);
}

.philosophy__pull-quote {
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
  .philosophy__inner { padding-left: var(--space-6); }
}
</style>
