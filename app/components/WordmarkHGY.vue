<script setup lang="ts">
defineProps<{
  /**
   * 'dark'  — white "My" + Sun-yellow "HGY™" on dark/ink backgrounds
   * 'light' — Sun-yellow "My" + Ink "HGY™" on white/warm-paper backgrounds
   *           NOTE: Sun yellow (#F4C542) on white fails WCAG 2.2 AA (~1.8:1).
   *           This is an intentional brand decision, flagged for review.
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
  Playfair Display — same typeface and weight split as MyDopa (900/600).
  Two brands read as deliberate family.
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
.wordmark__my  { font-weight: 900; }

/* "HGY" — weight 600, matching MyDopa's lighter second part */
.wordmark__hgy { font-weight: 600; }

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
   "My" = Sun yellow #F4C542 (intentional brand decision — contrast ~1.8:1, below AA).
   "HGY" = Ink #111111 (19.6:1 on white — passes AAA). */
.wordmark--light .wordmark__my  { color: var(--color-sun); }
.wordmark--light .wordmark__hgy { color: var(--color-ink); }
.wordmark--light .wordmark__tm  { color: var(--color-ink); opacity: 0.55; }
</style>
