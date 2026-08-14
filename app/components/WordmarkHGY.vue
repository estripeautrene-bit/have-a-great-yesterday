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
  Typographic construction mirrors the MyDopa wordmark logic:
  two-part name, two weights, accent color for the second part.
  MyDopa uses Playfair Display + purple. We use Manrope + Sun yellow.
*/
.wordmark {
  font-family: var(--font-display);
  letter-spacing: -0.02em;
  white-space: nowrap;
  display: inline-flex;
  align-items: baseline;
}

/* Sizes */
.wordmark--sm { font-size: 1.25rem; }
.wordmark--md { font-size: 2rem; }
.wordmark--lg { font-size: 3rem; }

/* "My" — heavier weight, primary color */
.wordmark__my {
  font-weight: 800;
}

/* "HGY" — slightly lighter, accent treatment */
.wordmark__hgy {
  font-weight: 600;
}

/* ™ superscript */
.wordmark__tm {
  font-size: 0.38em;
  font-weight: 700;
  vertical-align: super;
  margin-left: 0.05em;
  line-height: 1;
}

/* ── DARK VARIANT (on Ink/black background) ──────────────── */
.wordmark--dark .wordmark__my {
  color: #ffffff;
}

.wordmark--dark .wordmark__hgy {
  color: var(--color-sun);
}

.wordmark--dark .wordmark__tm {
  color: var(--color-sun);
  opacity: 0.8;
}

/* ── LIGHT VARIANT (on Paper/Warm-Paper background) ─────── */
/*
  Yellow text on white fails WCAG contrast.
  Solution: Ink-black text throughout, Sun-yellow underline accent on "HGY".
  This preserves the two-color logic without sacrificing legibility.
*/
.wordmark--light .wordmark__my {
  color: var(--color-ink);
}

.wordmark--light .wordmark__hgy {
  color: var(--color-ink);
  position: relative;
  padding-bottom: 0.05em;
}

.wordmark--light .wordmark__hgy::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -0.1em;
  height: 0.12em;
  background-color: var(--color-sun);
  border-radius: 2px;
}

.wordmark--light .wordmark__tm {
  color: var(--color-ink);
  opacity: 0.6;
}
</style>
