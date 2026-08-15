<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'light' | 'dark'
  showTm?: boolean
}>(), {
  variant: 'light',
  showTm: true,
})
</script>

<template>
  <span class="imark" :class="`imark--${variant}`"><span class="imark__my">My</span><span class="imark__hgy">HGY</span><sup v-if="showTm" class="imark__tm">™</sup></span>
</template>

<style scoped>
.imark {
  font-family: 'Playfair Display', Georgia, serif;
  white-space: nowrap;
  display: inline;
  letter-spacing: -0.01em;
}

/* "My" is always Sun yellow, weight 900 */
.imark__my { color: #F4C542; font-weight: 900; }

/* "HGY" weight 600; ink on light, white on dark */
.imark__hgy { font-weight: 600; }
.imark--light .imark__hgy { color: #111111; }
.imark--dark  .imark__hgy { color: #ffffff; }

/* ™ superscript */
.imark__tm {
  font-size: 0.36em;
  font-weight: 700;
  vertical-align: super;
  line-height: 1;
  margin-left: 0.04em;
}
.imark--light .imark__tm { color: #111111; opacity: 0.55; }
.imark--dark  .imark__tm { color: #ffffff; opacity: 0.75; }
</style>
