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
            For most of my life, I did not trust myself to create structure. I could begin with energy and ideas, but I was insecure about my ability to stay with a process and finish what I started.
          </p>
          <p class="founder__body">
            So I stopped trying to think my way forward and started doing. I built two small daily practices that became the bookends of my day. Each morning I wrote ten things I was grateful for. Each night I wrote down at least three good things that had actually happened: a confirmed deal, a real conversation, a moment with one of my daughters. The point was to preserve what actually occurred, so the day would not collapse into the mind's one-word verdict by evening.
          </p>
          <p class="founder__body">
            I didn't want to carry a notebook all day, and my phone was already in my hand. So I started capturing moments the instant they happened, while the words and the feeling were still alive. What began as a way to stop forgetting became something else: an accumulating body of evidence that I was building, acting, connecting, recovering, and progressing — even on the days my mind was ready to call the whole thing ordinary or lost.
          </p>
          <NuxtLink to="/our-story" class="founder__link">Read our story →</NuxtLink>
        </div>

        <!-- Founder portrait -->
        <div class="founder__portrait">
          <img
            src="/rene-founder.png"
            alt="René Estripeaut, founder of MyHGY"
            class="founder__portrait-img"
            loading="lazy"
            decoding="async"
          />
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

.founder__link {
  display: inline-block;
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: var(--weight-medium);
  color: var(--color-ink);
  text-decoration: underline;
  text-underline-offset: 3px;
  margin-top: var(--space-4);
}

.founder__link:hover {
  color: var(--color-sun);
}

.founder__portrait {
  position: sticky;
  top: calc(var(--header-height) + var(--space-8));
}

.founder__portrait-img {
  width: 100%;
  height: auto;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  object-position: center top;
  border-radius: var(--radius-xl);
  display: block;
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
