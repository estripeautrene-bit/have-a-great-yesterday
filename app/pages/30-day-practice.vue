<script setup lang="ts">
// TODO: Replace with Stan checkout URL before publishing
const STAN_CHECKOUT_URL = 'https://stan.store/haveagreatyesterday/p/myhgy-30day-practice-kit'

usePageSeo({
  title: 'MyHGY™ 30-Day Practice Kit — HaveAGreatYesterday.com',
  description: '30 days. At least 90 real moments preserved. The MyHGY™ Method structured into a simple daily practice for noticing good things while they are happening, writing them down immediately, and continuing every day. $9.99.',
  path: '/30-day-practice',
})

const { public: { siteUrl } } = useRuntimeConfig()

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'MyHGY™ 30-Day Practice Kit',
  description: 'The MyHGY™ Method structured into a 30-day guided practice. One page per day. At least three real moments captured before memory reshapes them.',
  url: `${siteUrl}/30-day-practice`,
  brand: { '@type': 'Brand', name: 'HaveAGreatYesterday.com' },
  offers: {
    '@type': 'Offer',
    price: '9.99',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
})

const { $posthog } = useNuxtApp()

function trackKitCta(source: string) {
  if ($posthog.__loaded) {
    $posthog.capture('kit_cta_clicked', { source })
  }
}

const deliverables = [
  {
    n: '01',
    label: 'Thirty daily practice pages',
    desc: 'One page per day, formatted for at least three real moments. Written close to the moment, when detail and feeling are still alive.',
  },
  {
    n: '02',
    label: 'The MyHGY™ Method reference',
    desc: 'The full 8-step sequence condensed to a format you return to every day — not a checklist to complete once, but a practice to return to.',
  },
  {
    n: '03',
    label: 'The return rule',
    desc: 'Clear guidance on what to do when you miss a day. The streak is not the practice. The return is.',
  },
]
</script>

<template>
  <div class="kit-page">

    <!-- ═══ 1. HERO ════════════════════════════════════════════════════ -->
    <section class="kh section--lg bg-warm-paper" aria-labelledby="kit-heading">
      <div class="container">
        <div class="kh__inner">

          <div class="kh__content">
            <p class="kh__eyebrow">MyHGY™ 30-Day Practice Kit</p>
            <h1 id="kit-heading" class="kh__heading">
              30 days.<br>At least 90 real moments preserved.
            </h1>
            <p class="kh__deck">
              The <InlineWordmark variant="light" /> Method, structured into a 30-day guided practice.
              One page per day. At least three real moments captured — written before memory
              rewrites the day into a single verdict.
            </p>
            <p class="kh__price-hint">$9.99 &middot; One-time &middot; Instant access</p>
            <a
              :href="STAN_CHECKOUT_URL || '#'"
              class="kh__cta"
              @click="trackKitCta('hero')"
            >Start the 30-Day Practice</a>
          </div>

          <div class="kh__cover-wrap">
            <img
              src="/30-day-kit-cover.png"
              alt="MyHGY™ 30-Day Practice Kit cover"
              class="kh__cover"
              width="927"
              height="1200"
            />
          </div>

        </div>
      </div>
    </section>

    <!-- ═══ 2. THE PRACTICE ═══════════════════════════════════════════ -->
    <section class="kp section--lg bg-paper" aria-labelledby="practice-heading">
      <div class="container">
        <div class="kp__inner">

          <div class="kp__accent" aria-hidden="true" />

          <h2 id="practice-heading" class="kp__heading">
            Every day, life hands you real fuel.
          </h2>

          <div class="kp__body">
            <p>A win at work. A hard moment you got through. A look from someone who loves you. A fear you faced even when it was inconvenient. These things happened — and then memory collapsed them into whatever the mind decided the day was.</p>
            <p>The practice is simple: find at least three real things each day. Write them down before memory reshapes them. Do this without exception, and a record builds — one you can trust, because you wrote it while it was happening.</p>
            <p>The 30-Day Practice Kit gives this a structure. One page per day, a format you return to, a record that compounds on itself. By day 30 you will have at least 90 real moments preserved — evidence of what you actually lived, not what your mind decided about it afterward.</p>

            <blockquote class="kp__pull-quote">
              That record is where Clarity, Accuracy, and Self-Confidence come from.
            </blockquote>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══ 3. WHAT YOU GET ═══════════════════════════════════════════ -->
    <section class="kg section--lg bg-stone" aria-labelledby="deliverables-heading">
      <div class="container">

        <div class="kg__header">
          <p class="kg__eyebrow">What's included</p>
          <h2 id="deliverables-heading" class="kg__heading">What you get</h2>
        </div>

        <div class="kg__grid">
          <div
            v-for="d in deliverables"
            :key="d.n"
            class="kg__card"
          >
            <span class="kg__card-n" aria-hidden="true">{{ d.n }}</span>
            <h3 class="kg__card-label">{{ d.label }}</h3>
            <p class="kg__card-desc">{{ d.desc }}</p>
          </div>
        </div>

      </div>
    </section>

    <!-- ═══ 4. PRICE + CTA ════════════════════════════════════════════ -->
    <section class="kbuy section--lg bg-ink" aria-labelledby="buy-heading">
      <div class="container">
        <div class="kbuy__inner">

          <div class="kbuy__price-block">
            <p class="kbuy__eyebrow">Get the kit</p>
            <p id="buy-heading" class="kbuy__price">$9.99</p>
            <p class="kbuy__terms">One-time payment. Instant digital access.</p>
          </div>

          <a
            :href="STAN_CHECKOUT_URL || '#'"
            class="kbuy__cta"
            @click="trackKitCta('price')"
          >Start the 30-Day Practice</a>

          <p class="kbuy__note">
            The practice works with nothing more than a notebook.
            This kit gives it a structure — so the record builds from day one.
          </p>

        </div>
      </div>
    </section>

    <!-- ═══ 5. CLOSING ════════════════════════════════════════════════ -->
    <section class="kclose section--lg bg-warm-paper" aria-label="Final call to action">
      <div class="container">
        <div class="kclose__inner">

          <p class="kclose__eyebrow">Ready when you are</p>

          <h2 class="kclose__statement">
            Thirty days from now, you will have a record.
          </h2>

          <p class="kclose__body">
            Not a streak to protect. Not a system to master. A record of what actually happened —
            written while it was happening, before memory made its decision.
          </p>

          <p class="kclose__body">
            That is what the practice builds. The kit is where you start.
          </p>

          <a
            :href="STAN_CHECKOUT_URL || '#'"
            class="kclose__cta"
            @click="trackKitCta('closing')"
          >Start the 30-Day Practice</a>

        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>

/* ══════════════════════════════════════════════════════════════════════
   1. HERO
   ══════════════════════════════════════════════════════════════════════ */

.kh__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: center;
}

.kh__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.kh__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
}

.kh__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.kh__deck {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
  max-width: 52ch;
}

.kh__price-hint {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: var(--weight-medium);
  color: var(--color-muted-ink);
}

.kh__cta {
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
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

.kh__cta:hover {
  background: var(--color-sun);
  color: var(--color-ink);
}

.kh__cover-wrap {
  display: flex;
  justify-content: center;
}

.kh__cover {
  max-width: 400px;
  width: 100%;
  height: auto;
  border-radius: var(--radius-lg);
  box-shadow: 0 8px 40px rgba(17, 17, 17, 0.14);
}

@media (max-width: 900px) {
  .kh__inner      { grid-template-columns: 1fr; gap: var(--space-10); }
  .kh__cover-wrap { order: -1; }
  .kh__cover      { max-width: 280px; }
  .kh__cta        { align-self: stretch; justify-content: center; }
}


/* ══════════════════════════════════════════════════════════════════════
   2. THE PRACTICE
   ══════════════════════════════════════════════════════════════════════ */

.kp__inner {
  max-width: var(--container-md);
  margin-inline: auto;
  position: relative;
  padding-left: var(--space-8);
}

.kp__accent {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--color-sun);
  border-radius: 2px;
}

.kp__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
  margin-bottom: var(--space-10);
}

.kp__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.kp__body p {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

.kp__pull-quote {
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
  .kp__inner { padding-left: var(--space-6); }
}


/* ══════════════════════════════════════════════════════════════════════
   3. WHAT YOU GET
   ══════════════════════════════════════════════════════════════════════ */

.kg__header {
  max-width: var(--container-md);
  margin-bottom: var(--space-12);
}

.kg__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
  margin-bottom: var(--space-4);
}

.kg__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.kg__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.kg__card {
  padding: var(--space-6);
  border-top: 4px solid var(--color-sun);
  background: var(--color-paper);
  border-radius: var(--radius-lg);
  box-shadow: 0 2px 8px rgba(17, 17, 17, 0.06);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.kg__card-n {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-bold);
  letter-spacing: 0.08em;
  color: var(--color-sun);
}

.kg__card-label {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: var(--weight-bold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.kg__card-desc {
  font-size: var(--text-body);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

@media (max-width: 900px) {
  .kg__grid { grid-template-columns: 1fr; gap: var(--space-6); }
}


/* ══════════════════════════════════════════════════════════════════════
   4. PRICE + CTA
   ══════════════════════════════════════════════════════════════════════ */

.kbuy__inner {
  max-width: var(--container-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.kbuy__price-block {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.kbuy__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
}

.kbuy__price {
  font-family: var(--font-display);
  font-size: var(--text-display);
  font-weight: var(--weight-extrabold);
  color: #ffffff;
  line-height: 1;
}

.kbuy__terms {
  font-family: var(--font-body);
  font-size: var(--text-body);
  color: rgba(255, 255, 255, 0.55);
}

.kbuy__cta {
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  background: var(--color-sun);
  color: var(--color-ink);
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  font-weight: var(--weight-semibold);
  text-decoration: none;
  padding: var(--space-5) var(--space-10);
  border-radius: var(--radius-full);
  transition: opacity var(--transition-fast);
}

.kbuy__cta:hover {
  opacity: 0.88;
}

.kbuy__note {
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: rgba(255, 255, 255, 0.35);
  line-height: var(--lh-body);
  max-width: 48ch;
}

@media (max-width: 640px) {
  .kbuy__cta { align-self: stretch; justify-content: center; }
}


/* ══════════════════════════════════════════════════════════════════════
   5. CLOSING
   ══════════════════════════════════════════════════════════════════════ */

.kclose {
  text-align: center;
}

.kclose__inner {
  max-width: var(--container-md);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-8);
}

.kclose__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
}

.kclose__statement {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.kclose__body {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
  max-width: 52ch;
  text-align: left;
}

.kclose__cta {
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

.kclose__cta:hover {
  background: var(--color-sun);
  color: var(--color-ink);
}

@media (max-width: 640px) {
  .kclose__cta { width: 100%; justify-content: center; }
}
</style>
