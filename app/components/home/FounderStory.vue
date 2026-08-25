<template>
  <section class="founder section bg-paper" aria-labelledby="founder-heading">
    <div class="container">

      <div class="founder__grid">

        <!-- Text column -->
        <div class="founder__text">
          <p class="founder__eyebrow">Our Story</p>
          <h2 id="founder-heading" class="founder__heading">
            I found the fuel in my own life. I just wasn't using it.
          </h2>
          <p class="founder__byline">By René Estripeaut</p>
          <p class="founder__body">
            For most of my life I told myself the same story: I was talented, but I had no structure. School had been hard. Structure felt unnatural to me. I started things and didn't finish them, and over the years, "I don't stick with things" became part of how I saw myself. I believed it, because I had years of proof to back it up.
          </p>
          <p class="founder__body">
            Then I learned something that changed everything: your mind doesn't check whether a belief is true. It just accepts whatever you repeat into it, over and over, until repetition alone makes it feel like fact. That's exactly how "I have no structure" became true for me. Not because it was — because I said it to myself for fifty years.
          </p>
          <p class="founder__body">
            So I started carrying a notebook every day and using the small instances of magic that happened in my life. My boss stopping me in the hallway to say I'd done great work. A client calling to say he wanted to bring me more business. One of my daughters looking me dead in the eyes and smiling at me for no reason at all. I became committed to finding at least three of them every single day and writing them down. The more I looked, the more I noticed how many good things were actually happening that I'd been disregarding. And the more I wrote them down, the more I could feel my subconscious handing me back a different, more positive reality.
          </p>
          <p class="founder__body">
            I stopped drinking. I trained for and finished a half marathon. I read 27 books in eight months, after fifty years of believing I couldn't sit still long enough to finish one. I rode a three-day off-road rally across Panama. And somewhere in the middle of doing all of it, I noticed something: I wasn't chasing these things out of desperation anymore. I was going after them with Clarity about where I stood, Accuracy about what was actually true, and Self-Confidence built from a growing pile of evidence I could see with my own eyes.
          </p>
          <p class="founder__body">
            That's what MyHGY is. I found the fuel that was already in my life every day. I built a practice around catching it. And I want to hand you the same practice.
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
