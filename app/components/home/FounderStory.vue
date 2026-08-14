<template>
  <section class="founder section bg-paper" aria-labelledby="founder-heading">
    <div class="container">

      <div class="founder__grid">

        <!-- Text column -->
        <div class="founder__text">
          <p class="founder__eyebrow">Our Story</p>
          <h2 id="founder-heading" class="founder__heading draft-copy">
            Blueprint §6 — founder story headline. Personal, honest.
          </h2>
          <p class="founder__byline">By René Estripeaut</p>
          <p class="founder__body draft-copy">
            Blueprint §6 — first paragraph of founder story. Why this method was created.
            What pain prompted it. Honest, first-person.
          </p>
          <p class="founder__body draft-copy">
            Blueprint §6 — second paragraph. What the creator discovered or built.
            How it led to HaveAGreatYesterday.com.
          </p>
          <p class="founder__body draft-copy">
            Blueprint §6 — closing paragraph. What this site exists to do.
            Invitation to the reader.
          </p>
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
