<template>
  <section class="bridge section bg-ink" aria-labelledby="bridge-heading">
    <div class="container">

      <div class="bridge__inner">

        <div class="bridge__brand">
          <a href="https://mydopa.app" target="_blank" rel="noopener noreferrer" aria-label="MyDopa — opens in new tab">
            <WordmarkHGY variant="dark" size="md" />
          </a>
        </div>

        <h2 id="bridge-heading" class="bridge__heading draft-copy">
          Blueprint §6 — MyDopa bridge heading. Connects the editorial site / Method to the MyDopa app.
        </h2>

        <p class="bridge__body draft-copy">
          Blueprint §6 — bridge paragraph. Explains the relationship between practising the MyHGY™ Method
          and using MyDopa as the companion tool. Does not imply they are the same product.
        </p>

        <p class="bridge__body draft-copy">
          Blueprint §6 — second bridge paragraph or supporting detail. Ecosystem distinction.
        </p>

        <a
          href="https://mydopa.app"
          class="bridge__cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore MyDopa →
        </a>

        <p class="bridge__note">
          MyDopa is a separate product. No affiliation or endorsement of this site is implied.
        </p>

      </div>

    </div>
  </section>
</template>

<style scoped>
.bridge__inner {
  max-width: var(--container-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.bridge__brand {
  margin-bottom: var(--space-4);
}

.bridge__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: #ffffff;
  line-height: var(--lh-heading);
}

/* Override draft-copy on dark bg */
.bridge__heading.draft-copy,
.bridge__body.draft-copy {
  background: rgba(244, 197, 66, 0.08);
  border-color: rgba(244, 197, 66, 0.2);
  color: rgba(255, 255, 255, 0.5);
}

.bridge__body {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: rgba(255, 255, 255, 0.75);
}

.bridge__cta {
  display: inline-flex;
  align-items: center;
  background: var(--color-sun);
  color: var(--color-ink);
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: var(--weight-semibold);
  text-decoration: none;
  padding: var(--space-4) var(--space-8);
  border-radius: var(--radius-full);
  align-self: flex-start;
  transition: opacity var(--transition-fast);
}

.bridge__cta:hover {
  opacity: 0.88;
}

.bridge__note {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: rgba(255, 255, 255, 0.25);
  line-height: var(--lh-body);
  margin-top: calc(-1 * var(--space-4));
}
</style>
