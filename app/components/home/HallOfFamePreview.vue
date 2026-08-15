<template>
  <section class="hof section bg-stone" aria-labelledby="hof-heading">
    <div class="container">

      <div class="hof__header">
        <p class="hof__eyebrow">Hall of Fame</p>
        <h2 id="hof-heading" class="hof__heading">
          This territory has a history.
        </h2>
        <p class="hof__sub">
          The ideas behind <InlineWordmark variant="light" /> grew from a long tradition of serious thinking about attention, self-image, agency, evidence, and what it means to remain a capable person in the face of difficulty.
        </p>
      </div>

      <div class="hof__grid">
        <article class="hof__card">
          <h3 class="hof__name">Dan Sullivan</h3>
          <p class="hof__desc">Founder of Strategic Coach and one of the most influential figures in entrepreneurial coaching. Sullivan has discussed the "great yesterday" concept publicly for years, developing his own thinking around how consciously collecting good days shapes identity and future capability. His work brought this territory to a wide audience.</p>
          <NuxtLink to="/hall-of-fame" class="hof__entry-link">Read the full entry <span class="hof__arrow" aria-hidden="true">→</span></NuxtLink>
        </article>

        <article class="hof__card">
          <h3 class="hof__name">Eckhart Tolle</h3>
          <p class="hof__desc">Author of The Power of Now. Tolle gave readers an adversary they could observe directly: compulsive thought and identification with mental commentary about the past and future. His central distinction — between present lived reality and the mind's uncontrolled construction of what happened and what might happen — is foundational to <InlineWordmark variant="light" :show-tm="false" />'s insistence that a painful event and the story the mind builds around it are not the same thing.</p>
          <NuxtLink to="/hall-of-fame" class="hof__entry-link">Read the full entry <span class="hof__arrow" aria-hidden="true">→</span></NuxtLink>
        </article>

        <article class="hof__card">
          <h3 class="hof__name">Maxwell Maltz</h3>
          <p class="hof__desc">Author of Psycho-Cybernetics. Maltz identified self-image as the governing mechanism of behavior and proposed that the mind operates like a goal-seeking system — one that needs a clear target, feedback, and course correction. Within that model, mistakes become correction information rather than permanent verdicts about identity, and preserved evidence of past capability becomes usable material for future confidence.</p>
          <NuxtLink to="/hall-of-fame" class="hof__entry-link">Read the full entry <span class="hof__arrow" aria-hidden="true">→</span></NuxtLink>
        </article>

        <article class="hof__card">
          <h3 class="hof__name">Viktor Frankl</h3>
          <p class="hof__desc">Author of Man's Search for Meaning. Frankl's work on agency, meaning, and the possibility of a constructive response even when circumstances cannot be changed is central to <InlineWordmark variant="light" :show-tm="false" />'s position on what remains available to a person after a painful event.</p>
          <NuxtLink to="/hall-of-fame" class="hof__entry-link">Read the full entry <span class="hof__arrow" aria-hidden="true">→</span></NuxtLink>
        </article>

        <article class="hof__card">
          <h3 class="hof__name">Martin Seligman</h3>
          <p class="hof__desc">Seligman's positive psychology research — particularly the Three Good Things practice and the body of work on wellbeing and attention — provides adjacent scientific support for the deliberate notice of meaningful experience that underpins <InlineWordmark variant="light" :show-tm="false" />'s evidence practice.</p>
          <NuxtLink to="/hall-of-fame" class="hof__entry-link">Read the full entry <span class="hof__arrow" aria-hidden="true">→</span></NuxtLink>
        </article>
      </div>

      <p class="hof__attribution">
        <InlineWordmark variant="light" /> is not affiliated with, sponsored by, endorsed by, or partnered with any of the individuals listed here. Each is recognized solely for the contribution their published work has made to this field.
      </p>

      <div class="hof__footer">
        <NuxtLink to="/hall-of-fame" class="hof__link">
          See the full Hall of Fame →
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

<style scoped>
.hof__header {
  max-width: var(--container-md);
  margin-bottom: var(--space-12);
}

.hof__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
  margin-bottom: var(--space-4);
}

.hof__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
  margin-bottom: var(--space-4);
}

.hof__sub {
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
}

.hof__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
  margin-bottom: var(--space-8);
}

.hof__card {
  background: var(--color-paper);
  border-radius: var(--radius-lg);
  border-top: 3px solid var(--color-sun);
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.hof__name {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.hof__desc {
  font-size: var(--text-small);
  line-height: var(--lh-body);
  color: var(--color-ink);
  flex: 1;
}

.hof__entry-link {
  font-size: var(--text-small);
  font-weight: var(--weight-medium);
  color: var(--color-muted-ink);
  text-decoration: none;
  text-underline-offset: 3px;
  margin-top: var(--space-2);
}


.hof__arrow {
  color: var(--color-sun);
}

.hof__entry-link:hover {
  color: var(--color-ink);
  text-decoration: underline;
}

.hof__attribution {
  font-size: var(--text-xs);
  color: var(--color-muted-ink);
  line-height: var(--lh-body);
  max-width: var(--container-md);
  margin-bottom: var(--space-8);
  font-style: italic;
}

.hof__footer {
  text-align: center;
  padding-top: var(--space-6);
  border-top: 1px solid rgba(0, 0, 0, 0.07);
}

.hof__link {
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: var(--weight-semibold);
  color: var(--color-ink);
  text-decoration: none;
  text-underline-offset: 3px;
}

.hof__link:hover {
  text-decoration: underline;
}

@media (max-width: 1024px) {
  .hof__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .hof__grid { grid-template-columns: 1fr; }
}
</style>
