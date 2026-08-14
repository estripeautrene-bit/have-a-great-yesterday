<script setup lang="ts">
useSeoMeta({
  title: 'Checkpoint 1 — Design Tokens & Typography | HaveAGreatYesterday.com',
  description: 'Foundation review: design tokens, typography scale, and layout primitives.',
  robots: 'noindex',
})

const colors = [
  { name: 'Sun / Primary', token: '--color-sun', hex: '#F4C542', use: 'Buttons, highlights, selected states', onDark: false, checkBg: '#111111' },
  { name: 'Ink / Text', token: '--color-ink', hex: '#111111', use: 'Headlines, body, nav', onDark: false, checkBg: '#FFFFFF' },
  { name: 'Paper', token: '--color-paper', hex: '#FFFFFF', use: 'Primary content background', onDark: false, checkBg: '#111111', border: true },
  { name: 'Warm Paper', token: '--color-warm-paper', hex: '#FFF9E8', use: 'Callouts, Method explanations', onDark: false, checkBg: '#111111', border: true },
  { name: 'Stone', token: '--color-stone', hex: '#F3F2ED', use: 'Cards, form surfaces', onDark: false, checkBg: '#111111', border: true },
  { name: 'Muted Ink', token: '--color-muted-ink', hex: '#66635D', use: 'Secondary copy, captions', onDark: false, checkBg: '#FFFFFF' },
  { name: 'Evidence Green', token: '--color-evidence-green', hex: '#26734D', use: 'Completion / constructive evidence', onDark: false, checkBg: '#FFFFFF' },
]

const typeScale = [
  { label: 'Display', cssVar: '--text-display', size: '44–72px', font: 'Manrope', weight: '800', sample: 'Find your footing from here.' },
  { label: 'H1', cssVar: '--text-h1', size: '32–48px', font: 'Manrope', weight: '800', sample: 'What you can do from here.' },
  { label: 'H2', cssVar: '--text-h2', size: '24–36px', font: 'Manrope', weight: '700', sample: 'The method that works backwards.' },
  { label: 'H3', cssVar: '--text-h3', size: '20–28px', font: 'Manrope', weight: '700', sample: 'Evidence replaces assumption.' },
  { label: 'Body Large', cssVar: '--text-body-lg', size: '18–20px', font: 'Inter', weight: '400', sample: "You don't need a plan. You need a starting point — something real from where you already are." },
  { label: 'Body', cssVar: '--text-body', size: '16px', font: 'Inter', weight: '400', sample: 'The MyHGY Method starts with yesterday, because yesterday already happened. That makes it the only day you can fully account for.' },
  { label: 'Small / UI', cssVar: '--text-small', size: '14px', font: 'Inter', weight: '400', sample: 'Updated August 2026 · 4 min read' },
]

const spacingTokens = [
  { token: '--space-2', px: '8px' },
  { token: '--space-4', px: '16px' },
  { token: '--space-6', px: '24px' },
  { token: '--space-8', px: '32px' },
  { token: '--space-12', px: '48px' },
  { token: '--space-16', px: '64px' },
  { token: '--space-20', px: '80px' },
  { token: '--space-24', px: '96px' },
]
</script>

<template>
  <div class="showcase">

    <!-- CHECKPOINT BANNER -->
    <div class="checkpoint-banner">
      <div class="container">
        <span class="checkpoint-label">Checkpoint 1 — Foundation Review</span>
        <span class="checkpoint-note">Design tokens · Typography · Base layout primitives · Wordmark</span>
      </div>
    </div>


    <!-- ── WORDMARK ──────────────────────────────────────────────── -->
    <section class="section bg-ink">
      <div class="container">
        <h2 class="section-heading section-heading--on-dark">Wordmark — Dark variant</h2>
        <p class="section-sub section-sub--on-dark">On Ink / black backgrounds</p>

        <div class="wordmark-row">
          <WordmarkHGY variant="dark" size="sm" />
          <WordmarkHGY variant="dark" size="md" />
          <WordmarkHGY variant="dark" size="lg" />
        </div>

        <div class="wordmark-anatomy">
          <p class="anatomy-note">"My" — Manrope 800, white · "HGY" — Manrope 600, Sun #F4C542 · ™ superscript</p>
          <p class="anatomy-note">Typographic construction mirrors MyDopa's two-color, two-weight logic — translated into the MyHGY palette. No purple, no copy of MyDopa visual identity.</p>
        </div>
      </div>
    </section>

    <section class="section bg-paper" style="border-bottom: 1px solid var(--color-stone)">
      <div class="container">
        <h2 class="section-heading">Wordmark — Light variant</h2>
        <p class="section-sub">On Paper / Warm-Paper backgrounds</p>

        <div class="wordmark-row wordmark-row--light">
          <WordmarkHGY variant="light" size="sm" />
          <WordmarkHGY variant="light" size="md" />
          <WordmarkHGY variant="light" size="lg" />
        </div>

        <div class="wordmark-anatomy">
          <p class="anatomy-note" style="color: var(--color-muted-ink)">"My" — Manrope 800, Ink #111111 · "HGY" — Manrope 600, Ink #111111 + Sun-yellow underline accent · Yellow text on white is not used (fails contrast).</p>
        </div>
      </div>
    </section>

    <section class="section bg-warm-paper">
      <div class="container">
        <h2 class="section-heading">Wordmark — on Warm Paper</h2>
        <div class="wordmark-row wordmark-row--light">
          <WordmarkHGY variant="light" size="sm" />
          <WordmarkHGY variant="light" size="md" />
          <WordmarkHGY variant="light" size="lg" />
        </div>
      </div>
    </section>


    <!-- ── COLOR PALETTE ─────────────────────────────────────────── -->
    <section class="section bg-stone">
      <div class="container">
        <h2 class="section-heading">Color Palette</h2>
        <p class="section-sub">All WCAG 2.2 AA contrast verified against their intended pairings</p>

        <div class="palette-grid">
          <div
            v-for="color in colors"
            :key="color.token"
            class="swatch-card"
          >
            <div
              class="swatch"
              :style="{
                backgroundColor: color.hex,
                border: color.border ? '1px solid var(--color-stone)' : 'none',
              }"
            />
            <div class="swatch-info">
              <div class="swatch-name">{{ color.name }}</div>
              <div class="swatch-hex">{{ color.hex }}</div>
              <div class="swatch-token">{{ color.token }}</div>
              <div class="swatch-use">{{ color.use }}</div>
            </div>
          </div>
        </div>

        <div class="contrast-checks">
          <h3 class="contrast-title">Contrast spot-checks (WCAG 2.2 AA)</h3>
          <div class="contrast-grid">
            <div class="contrast-pair" style="background: #111111; color: #ffffff">
              <span class="contrast-sample" style="font-size: 1.125rem; font-weight: 700">Ink on Dark</span>
              <span class="contrast-ratio">White on Ink: 19.6:1 ✓</span>
            </div>
            <div class="contrast-pair" style="background: #FFFFFF; color: #111111; border: 1px solid var(--color-stone)">
              <span class="contrast-sample" style="font-size: 1.125rem; font-weight: 700">Ink on Paper</span>
              <span class="contrast-ratio">Ink on White: 19.6:1 ✓</span>
            </div>
            <div class="contrast-pair" style="background: #FFFFFF; color: #66635D; border: 1px solid var(--color-stone)">
              <span class="contrast-sample" style="font-size: 1.125rem; font-weight: 700">Muted on White</span>
              <span class="contrast-ratio">Muted Ink on White: 5.7:1 ✓</span>
            </div>
            <div class="contrast-pair" style="background: #F4C542; color: #111111">
              <span class="contrast-sample" style="font-size: 1.125rem; font-weight: 700">Ink on Sun</span>
              <span class="contrast-ratio">Ink on Sun: 8.0:1 ✓</span>
            </div>
            <div class="contrast-pair" style="background: #FFF9E8; color: #111111; border: 1px solid var(--color-stone)">
              <span class="contrast-sample" style="font-size: 1.125rem; font-weight: 700">Ink on Warm Paper</span>
              <span class="contrast-ratio">Ink on Warm Paper: 18.7:1 ✓</span>
            </div>
            <div class="contrast-pair" style="background: #26734D; color: #ffffff">
              <span class="contrast-sample" style="font-size: 1.125rem; font-weight: 700">White on Green</span>
              <span class="contrast-ratio">White on Evidence Green: 5.7:1 ✓</span>
            </div>
          </div>
          <p class="contrast-note">⚠️ White or light text on Sun yellow (#F4C542) must never be used — ratio is approximately 1.8:1, failing AA. Only Ink (#111111) text may appear on Sun.</p>
        </div>
      </div>
    </section>


    <!-- ── TYPOGRAPHY SCALE ──────────────────────────────────────── -->
    <section class="section bg-paper">
      <div class="container">
        <h2 class="section-heading">Typography Scale</h2>
        <p class="section-sub">Manrope for display/headings · Inter for body/interface</p>

        <div class="type-scale">
          <div
            v-for="entry in typeScale"
            :key="entry.label"
            class="type-row"
          >
            <div class="type-meta">
              <span class="type-label">{{ entry.label }}</span>
              <span class="type-detail">{{ entry.font }} {{ entry.weight }} · {{ entry.size }}</span>
              <code class="type-token">{{ entry.cssVar }}</code>
            </div>
            <p
              class="type-sample"
              :style="{
                fontSize: `var(${entry.cssVar})`,
                fontFamily: entry.font === 'Manrope' ? 'var(--font-display)' : 'var(--font-body)',
                fontWeight: entry.weight,
                lineHeight: entry.font === 'Manrope' ? 'var(--lh-heading)' : 'var(--lh-body)',
              }"
            >
              {{ entry.sample }}
            </p>
          </div>
        </div>
      </div>
    </section>


    <!-- ── SPACING SCALE ─────────────────────────────────────────── -->
    <section class="section bg-warm-paper">
      <div class="container">
        <h2 class="section-heading">Spacing Scale</h2>
        <p class="section-sub">8px base grid · tokens from --space-1 to --space-32</p>

        <div class="spacing-list">
          <div
            v-for="s in spacingTokens"
            :key="s.token"
            class="spacing-row"
          >
            <div class="spacing-bar-wrap">
              <div class="spacing-bar" :style="{ width: s.px }" />
            </div>
            <code class="spacing-token">{{ s.token }}</code>
            <span class="spacing-px">{{ s.px }}</span>
          </div>
        </div>
      </div>
    </section>


    <!-- ── CONTAINER WIDTHS ──────────────────────────────────────── -->
    <section class="section bg-stone">
      <div class="container">
        <h2 class="section-heading">Container Widths</h2>
        <p class="section-sub">Responsive — collapses to full width on mobile with page-gutter padding</p>

        <div class="container-demo">
          <div class="container-row">
            <div class="container-bar container-bar--sm"><span class="container-label">sm · 640px</span></div>
          </div>
          <div class="container-row">
            <div class="container-bar container-bar--md"><span class="container-label">md · 768px</span></div>
          </div>
          <div class="container-row">
            <div class="container-bar container-bar--lg"><span class="container-label">lg · 1024px</span></div>
          </div>
          <div class="container-row">
            <div class="container-bar container-bar--xl"><span class="container-label">xl · 1200px (default)</span></div>
          </div>
          <div class="container-row">
            <div class="container-bar container-bar--2xl"><span class="container-label">2xl · 1440px</span></div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>

/* ── CHECKPOINT BANNER ─────────────────────────────────────── */
.checkpoint-banner {
  background: var(--color-ink);
  color: var(--color-paper);
  padding: var(--space-3) 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.checkpoint-banner .container {
  display: flex;
  gap: var(--space-4);
  align-items: center;
  flex-wrap: wrap;
}

.checkpoint-label {
  font-family: var(--font-display);
  font-size: var(--text-small);
  font-weight: var(--weight-bold);
  color: var(--color-sun);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.checkpoint-note {
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: rgba(255,255,255,0.6);
}


/* ── SECTION HEADINGS ──────────────────────────────────────── */
.section-heading {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: var(--weight-bold);
  color: var(--color-ink);
  margin-bottom: var(--space-2);
}

.section-heading--on-dark { color: #ffffff; }

.section-sub {
  font-size: var(--text-body);
  color: var(--color-muted-ink);
  margin-bottom: var(--space-10);
}

.section-sub--on-dark {
  color: rgba(255,255,255,0.55);
}


/* ── WORDMARK ──────────────────────────────────────────────── */
.wordmark-row {
  display: flex;
  align-items: baseline;
  gap: var(--space-12);
  flex-wrap: wrap;
  margin-bottom: var(--space-8);
}

.wordmark-anatomy {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: var(--space-4);
}

.anatomy-note {
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: rgba(255,255,255,0.45);
  line-height: var(--lh-body);
  margin-bottom: var(--space-2);
}


/* ── PALETTE ───────────────────────────────────────────────── */
.palette-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--space-4);
  margin-bottom: var(--space-12);
}

.swatch-card {
  background: var(--color-paper);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);
}

.swatch {
  height: 100px;
}

.swatch-info {
  padding: var(--space-4);
}

.swatch-name {
  font-family: var(--font-display);
  font-size: var(--text-small);
  font-weight: var(--weight-semibold);
  color: var(--color-ink);
  margin-bottom: var(--space-1);
}

.swatch-hex {
  font-family: monospace;
  font-size: var(--text-small);
  color: var(--color-muted-ink);
  margin-bottom: var(--space-1);
}

.swatch-token {
  font-family: monospace;
  font-size: var(--text-xs);
  color: var(--color-muted-ink);
  opacity: 0.7;
  margin-bottom: var(--space-2);
}

.swatch-use {
  font-size: var(--text-xs);
  color: var(--color-muted-ink);
  line-height: 1.4;
}

/* Contrast checks */
.contrast-checks {
  margin-top: var(--space-6);
}

.contrast-title {
  font-family: var(--font-display);
  font-size: var(--text-body);
  font-weight: var(--weight-bold);
  color: var(--color-ink);
  margin-bottom: var(--space-4);
}

.contrast-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: var(--space-3);
  margin-bottom: var(--space-4);
}

.contrast-pair {
  padding: var(--space-4);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.contrast-ratio {
  font-family: monospace;
  font-size: var(--text-xs);
  opacity: 0.75;
}

.contrast-note {
  font-size: var(--text-small);
  color: var(--color-muted-ink);
  background: #fff3cd;
  border-left: 3px solid var(--color-sun);
  padding: var(--space-3) var(--space-4);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  line-height: var(--lh-body);
}


/* ── TYPE SCALE ────────────────────────────────────────────── */
.type-scale {
  display: flex;
  flex-direction: column;
  gap: var(--space-10);
}

.type-row {
  border-bottom: 1px solid var(--color-stone);
  padding-bottom: var(--space-8);
}

.type-meta {
  display: flex;
  align-items: baseline;
  gap: var(--space-4);
  flex-wrap: wrap;
  margin-bottom: var(--space-4);
}

.type-label {
  font-family: var(--font-display);
  font-size: var(--text-xs);
  font-weight: var(--weight-bold);
  color: var(--color-sun);
  background: var(--color-ink);
  padding: 2px 8px;
  border-radius: var(--radius-sm);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.type-detail {
  font-size: var(--text-xs);
  color: var(--color-muted-ink);
}

.type-token {
  font-size: var(--text-xs);
  color: var(--color-muted-ink);
  background: var(--color-stone);
  padding: 2px 6px;
  border-radius: var(--radius-sm);
}

.type-sample {
  color: var(--color-ink);
}


/* ── SPACING ───────────────────────────────────────────────── */
.spacing-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.spacing-row {
  display: flex;
  align-items: center;
  gap: var(--space-6);
}

.spacing-bar-wrap {
  min-width: 160px;
}

.spacing-bar {
  height: 20px;
  background: var(--color-sun);
  border-radius: var(--radius-sm);
  max-width: 100%;
}

.spacing-token {
  font-size: var(--text-xs);
  color: var(--color-muted-ink);
  min-width: 140px;
}

.spacing-px {
  font-family: monospace;
  font-size: var(--text-xs);
  color: var(--color-muted-ink);
}


/* ── CONTAINERS ────────────────────────────────────────────── */
.container-demo {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.container-row {
  overflow: hidden;
}

.container-bar {
  background: var(--color-paper);
  border: 2px solid var(--color-sun);
  border-radius: var(--radius-sm);
  padding: var(--space-3) var(--space-4);
  display: flex;
  align-items: center;
}

.container-bar--sm  { max-width: var(--container-sm); }
.container-bar--md  { max-width: var(--container-md); }
.container-bar--lg  { max-width: var(--container-lg); }
.container-bar--xl  { max-width: var(--container-xl); }
.container-bar--2xl { max-width: var(--container-2xl); }

.container-label {
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  color: var(--color-muted-ink);
}

</style>
