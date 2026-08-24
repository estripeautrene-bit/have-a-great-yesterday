<script setup lang="ts">
usePageSeo({
  title: 'HaveAGreatYesterday.com — The MyHGY™ Method',
  description: 'The editorial home of the MyHGY™ Method — a daily practice for returning to what is true, finding what remains available, and building visible progress.',
  path: '/',
})

const { public: { siteUrl } } = useRuntimeConfig()
useJsonLd([
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'HaveAGreatYesterday.com',
    url: siteUrl,
    description: 'The editorial home of the MyHGY™ Method — a daily practice for returning to what is true, finding what remains available, and building visible progress.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'HaveAGreatYesterday.com',
    url: siteUrl,
    founder: {
      '@type': 'Person',
      name: 'René Estripeaut',
    },
  },
])
</script>

<template>
  <HomeHero />
  <HomePainChoices />
  <HomeInvisibleProgress />
  <HomeDestinationTriad />
  <HomeMethodRail />
  <HomePracticePhilosophy />
  <HomePracticePreview />
  <HomeHallOfFamePreview />
  <HomeFounderStory />
  <HomeMyDopaBridge />
  <HomeFinalContinuation />
</template>
