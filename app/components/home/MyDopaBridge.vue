<template>
  <section class="bridge section bg-ink" aria-labelledby="bridge-heading">
    <div class="container">

      <div class="bridge__inner">

        <div class="bridge__brand">
          <a href="https://mydopa.app" target="_blank" rel="noopener noreferrer" aria-label="MyDopa — opens in new tab">
            <WordmarkHGY variant="dark" size="md" />
          </a>
        </div>

        <h2 id="bridge-heading" class="bridge__heading">
          A manual practice can work. And it has natural limits.
        </h2>

        <p class="bridge__body">
          Everything in the <InlineWordmark variant="dark" /> Method can be practiced without software. That independence is intentional. If the practice only works after purchasing a product, it is not a methodology — it is marketing.
        </p>

        <p class="bridge__body">
          But a manual practice runs into real friction over time. Memory scatters. Captured moments accumulate in places you cannot easily find. The context that made a particular day meaningful is difficult to reconstruct weeks later. Patterns that are forming across months are nearly impossible to see without a way to look at the whole. And when continuity breaks — as it will — there is no system that remembers where you were or helps you return.
        </p>

        <p class="bridge__body bridge__product">
          MyDopa is the purpose-built equipment for the practice. <strong>MyToday</strong> captures meaningful moments while life is happening. <strong>MyYesterday</strong> helps you understand what the accumulated evidence means. <strong>MyProgress</strong> makes continuity and accumulation visible — so that confidence is built on what you have actually lived, not on a feeling that changes with every difficult morning.
        </p>

        <p class="bridge__body">
          MyDopa does not replace the practice. It removes the friction that causes the practice to break.
        </p>

        <p class="bridge__supporting">
          <em>MyDopa is transformation through visible and continuous progress.</em>
        </p>

        <a
          href="https://mydopa.app"
          class="bridge__cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Request a MyDopa invitation →
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

.bridge__body {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: rgba(255, 255, 255, 0.75);
}

.bridge__supporting {
  font-family: var(--font-body);
  font-size: var(--text-body);
  color: rgba(255, 255, 255, 0.55);
  line-height: var(--lh-body);
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
