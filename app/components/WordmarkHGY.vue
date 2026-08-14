<script setup lang="ts">
defineProps<{
  /**
   * 'dark'  — white "My" + Sun-yellow "HGY™" on dark backgrounds
   * 'light' — Ink-black "My" + Ink-black "HGY™" with Sun-yellow underline accent
   */
  variant?: 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
}>()
</script>

<template>
  <span
    class="wordmark"
    :class="[`wordmark--${variant ?? 'light'}`, `wordmark--${size ?? 'md'}`]"
    aria-label="MyHGY"
  >
    <span class="wordmark__my">My</span><span class="wordmark__hgy">HGY</span><sup class="wordmark__tm">™</sup>
  </span>
</template>

<style scoped>
/*
  Playfair Display — same typeface, same weight split as the MyDopa wordmark
  (My = 900, HGY = 600). Two brands feel like a deliberate family.
  Palette is MyHGY-only: Sun yellow + Ink. No purple, no MyDopa colors.
  Manrope and Inter are untouched — wordmark font is isolated here.
*/
.wordmark {
  font-family: 'Playfair Display', Georgia, serif;
  letter-spacing: -0.01em;
  white-space: nowrap;
  display: inline-flex;
  align-items: baseline;
}

/* Sizes — md (2rem / 32px) matches MyDopa nav logo */
.wordmark--sm { font-size: 1.25rem; }
.wordmark--md { font-size: 2rem; }
.wordmark--lg { font-size: 3rem; }

/* "My" — weight 900, matching MyDopa's heavy first part */
.wordmark__my {
  font-weight: 900;
}

/* "HGY" — weight 600, matching MyDopa's lighter second part */
.wordmark__hgy {
  font-weight: 600;
}

/* ™ superscript */
.wordmark__tm {
  font-size: 0.36em;
  font-weight: 700;
  vertical-align: super;
  margin-left: 0.04em;
  line-height: 1;
}

/* ── DARK VARIANT (on Ink / black backgrounds) ───────────── */
.wordmark--dark .wordmark__my  { color: #ffffff; }
.wordmark--dark .wordmark__hgy { color: var(--color-sun); }
.wordmark--dark .wordmark__tm  { color: var(--color-sun); opacity: 0.8; }

/* ── LIGHT VARIANT (on Paper / Warm-Paper backgrounds) ─────
   Yellow text on white fails WCAG contrast (~1.8:1).
   "HGY" stays Ink; a Sun-yellow underline bar carries the accent.
   Contrast of Ink (#111) on white: 19.6:1 — passes AAA. */
.wordmark--light .wordmark__my {
  color: var(--color-ink);
}

.wordmark--light .wordmark__hgy {
  color: var(--color-ink);
  position: relative;
  padding-bottom: 0.06em;
}

.wordmark--light .wordmark__hgy::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -0.08em;
  height: 0.1em;
  background-color: var(--color-sun);
  border-radius: 2px;
}

.wordmark--light .wordmark__tm {
  color: var(--color-ink);
  opacity: 0.55;
}
</style>
