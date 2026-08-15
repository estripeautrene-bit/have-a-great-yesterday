// analytics.client.ts — client-only; runs after hydration on every page load.
//
// PostHog is not yet live. Wiring is complete so that when posthogKey is
// set in nuxt.config runtimeConfig and posthog-js is installed, analytics
// will initialise only for visitors who have accepted consent.
//
// To activate:
//   1. npm install posthog-js
//   2. Set posthogKey in runtimeConfig.public (or via NUXT_PUBLIC_POSTHOG_KEY env var)
//   3. Uncomment the posthog.init block below

declare module '#app' {
  interface NuxtApp {
    $initAnalytics: () => void
  }
}

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  function initAnalytics() {
    if (!config.public.posthogKey) return

    // Uncomment when posthog-js is installed and the key is configured:
    // import('posthog-js').then(({ default: posthog }) => {
    //   if (posthog.__loaded) return // guard against double-init
    //   posthog.init(config.public.posthogKey as string, {
    //     api_host: config.public.posthogHost as string,
    //     person_profiles: 'identified_only',
    //   })
    // })
  }

  // Returning visitors who previously accepted: initialise immediately
  const stored = localStorage.getItem('hgy-cookie-consent')
  if (stored === 'accepted') initAnalytics()

  return { provide: { initAnalytics } }
})
