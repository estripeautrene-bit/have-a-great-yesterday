const STORAGE_KEY = 'hgy-cookie-consent'

export type ConsentChoice = 'accepted' | 'declined' | null

export function useCookieConsent() {
  // useState gives SSR-safe global state shared across components
  const choice = useState<ConsentChoice>('cookieConsent', () => null)
  const hasChosen = computed(() => choice.value !== null)

  // Call once on client mount to pull the stored value into reactive state
  function hydrate() {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'accepted' || stored === 'declined') {
      choice.value = stored as ConsentChoice
    }
  }

  function accept() {
    choice.value = 'accepted'
    localStorage.setItem(STORAGE_KEY, 'accepted')
    // Triggers PostHog init via the analytics plugin (no-ops while key is empty)
    const app = useNuxtApp()
    app.$initAnalytics()
    // Capture consent event now that PostHog is initialised
    if (app.$posthog.__loaded) {
      app.$posthog.capture('cookie_consent_accepted')
    }
  }

  function decline() {
    choice.value = 'declined'
    localStorage.setItem(STORAGE_KEY, 'declined')
  }

  return { choice, hasChosen, accept, decline, hydrate }
}
