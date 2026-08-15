<template>
  <section class="philosophy section--lg bg-warm-paper" aria-labelledby="philosophy-heading">
    <div class="container">

      <div class="philosophy__inner">

        <div class="philosophy__accent" aria-hidden="true" />

        <h2 id="philosophy-heading" class="philosophy__statement">
          Personal development deserves a practice.
        </h2>

        <div class="philosophy__body">
          <p class="philosophy__para">
            The problem is not that people lack insight.
          </p>
          <p class="philosophy__para">
            Most people who are trying to grow have already encountered something useful. They have read a book that landed. Heard an idea that changed how they saw something. Finished a course, a session, a seminar, a conversation — and understood, at least for a while, exactly how they wanted to live.
          </p>
          <p class="philosophy__para">
            The problem is that insight is episodic, while life is continuous.
          </p>
          <p class="philosophy__para">
            A book ends. A podcast finishes. A seminar sends everyone home. A coaching session concludes. Then ordinary life resumes — the commute, the difficult conversation, the distraction, the moment when the idea would have mattered but had already faded back into the background.
          </p>
          <p class="philosophy__para">
            Athletes do not show up for competition without having practiced. Musicians do not perform without having rehearsed. A language is not learned by listening to one podcast. In every domain where meaningful change is expected, improvement comes through repeated practice — not through a single episode of understanding, however powerful.
          </p>
          <p class="philosophy__para">
            Personal development is frequently delivered differently. It is delivered in episodes. The insight may be real. The question is what happens in the middle: between the book and the next book, the session and the next session, the moment of understanding and the moment it is most needed.
          </p>
          <p class="philosophy__para">
            That middle is where most personal development is either kept or lost.
          </p>
          <p class="philosophy__para philosophy__closing">
            <InlineWordmark variant="light" /> is not another source of insight.<br>
            It is the continuity mechanism between insights.
          </p>
          <blockquote class="philosophy__pull-quote">
            The only way to have a great yesterday is to be here today.
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
