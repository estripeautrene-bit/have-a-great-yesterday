// analytics.client.ts — client-only; runs after hydration on every page load.
//
// PostHog analytics are consent-gated: tracking is only initialised for visitors
// who have accepted the cookie banner. Returning visitors (stored choice = 'accepted')
// are initialised immediately; new visitors are initialised when they click Accept.

import posthog from 'posthog-js'
import type { PostHog } from 'posthog-js'

declare module '#app' {
  interface NuxtApp {
    $initAnalytics: () => void
    $posthog: PostHog
  }
}

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const router = useRouter()

  function initAnalytics() {
    if (!config.public.posthogKey) {
      if (import.meta.dev) {
        console.warn(
          'NUXT_PUBLIC_POSTHOG_KEY variable required by PostHog is missing or un-configured, ' +
          'this causes events to be silently missed. ' +
          'This error stops appearing once NUXT_PUBLIC_POSTHOG_KEY is configured'
        )
      }
      return
    }

    if (posthog.__loaded) return // guard against double-init

    posthog.init(config.public.posthogKey as string, {
      api_host: config.public.posthogHost as string,
      capture_pageview: false, // Nuxt SPA: pageviews captured manually via router.afterEach
      capture_exceptions: true,
      person_profiles: 'identified_only',
    })

    // Capture the current pageview immediately after init
    posthog.capture('$pageview', { current_url: router.currentRoute.value.fullPath })

    // Capture a pageview on every SPA route change
    router.afterEach((to) => {
      posthog.capture('$pageview', { current_url: to.fullPath })
    })
  }

  // Returning visitors who previously accepted: initialise immediately
  const stored = localStorage.getItem('hgy-cookie-consent')
  if (stored === 'accepted') initAnalytics()

  return { provide: { initAnalytics, posthog } }
})
