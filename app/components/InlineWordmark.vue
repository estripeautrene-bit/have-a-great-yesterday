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
  white-space: nowrap;
  display: inline;
}

/* "My" is always Sun yellow */
.imark__my { color: #F4C542; }

/* "HGY": ink on light, white on dark */
.imark--light .imark__hgy { color: #111111; }
.imark--dark  .imark__hgy { color: #ffffff; }

/* ™ superscript */
.imark__tm {
  font-size: 0.6em;
  vertical-align: super;
  line-height: 1;
  margin-left: 0.02em;
}
.imark--light .imark__tm { color: #111111; opacity: 0.55; }
.imark--dark  .imark__tm { color: #ffffff; opacity: 0.75; }
</style>
