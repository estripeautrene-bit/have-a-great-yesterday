<script setup lang="ts">
const { hasChosen, accept, decline, hydrate } = useCookieConsent()

const acceptBtn = ref<HTMLButtonElement | null>(null)

onMounted(() => {
  hydrate()
  // If the visitor hasn't chosen yet, the banner will slide in.
  // We do NOT force-focus the banner on page load — disruptive to sighted
  // keyboard users arriving to read content. The banner is reachable by tab.
})

function onAccept() {
  accept()
}

function onDecline() {
  decline()
}
</script>

<template>
  <Transition name="cookie-slide">
    <div
      v-if="!hasChosen"
      class="cookie-banner"
      role="region"
      aria-label="Cookie consent"
    >
      <div class="cookie-banner__inner">
        <p class="cookie-banner__message">
          We use analytics (PostHog) to understand how people use this site — what content
          helps, what doesn't. No advertising, no data selling.
          <NuxtLink to="/cookie-policy" class="cookie-banner__policy-link">Cookie Policy</NuxtLink>
        </p>

        <div class="cookie-banner__actions" role="group" aria-label="Analytics consent options">
          <button
            ref="acceptBtn"
            class="cookie-banner__btn cookie-banner__btn--accept"
            type="button"
            @click="onAccept"
          >
            Accept
          </button>
          <button
            class="cookie-banner__btn cookie-banner__btn--decline"
            type="button"
            @click="onDecline"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* ── Banner shell ─────────────────────────────────────────────────────── */
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 300;
  background: var(--color-ink);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.cookie-banner__inner {
  max-width: var(--container-xl);
  margin-inline: auto;
  padding: var(--space-4) var(--page-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
  flex-wrap: wrap;
}

/* ── Message ──────────────────────────────────────────────────────────── */
.cookie-banner__message {
  font-family: var(--font-body);
  font-size: var(--text-small);
  line-height: var(--lh-ui);
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  max-width: 64ch;
}

.cookie-banner__policy-link {
  color: var(--color-sun);
  text-decoration: underline;
  text-underline-offset: 2px;
  text-decoration-color: rgba(244, 197, 66, 0.45);
  white-space: nowrap;
  transition: text-decoration-color var(--transition-fast);
}

.cookie-banner__policy-link:hover {
  text-decoration-color: var(--color-sun);
  color: var(--color-sun);
}

/* ── Action buttons ───────────────────────────────────────────────────── */
.cookie-banner__actions {
  display: flex;
  gap: var(--space-3);
  flex-shrink: 0;
  align-items: center;
}

.cookie-banner__btn {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: var(--weight-semibold);
  border: none;
  cursor: pointer;
  min-height: 44px;
  padding: var(--space-2) var(--space-5);
  border-radius: var(--radius-full);
  transition:
    background var(--transition-fast),
    color var(--transition-fast),
    opacity var(--transition-fast);
}

.cookie-banner__btn--accept {
  background: var(--color-sun);
  color: var(--color-ink);
}

.cookie-banner__btn--accept:hover {
  background: #ffffff;
}

.cookie-banner__btn--decline {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
}

.cookie-banner__btn--decline:hover {
  background: rgba(255, 255, 255, 0.16);
  color: rgba(255, 255, 255, 0.9);
}

/* ── Slide-up transition ──────────────────────────────────────────────── */
/* prefers-reduced-motion is handled globally in base.css:
   transition-duration is overridden to 0.01ms, so the banner just appears/disappears. */
.cookie-slide-enter-active {
  transition: transform var(--transition-slow);
}
.cookie-slide-leave-active {
  transition: transform var(--transition-fast);
}
.cookie-slide-enter-from,
.cookie-slide-leave-to {
  transform: translateY(100%);
}

/* ── Mobile ───────────────────────────────────────────────────────────── */
@media (max-width: 560px) {
  .cookie-banner__inner {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-4);
  }

  .cookie-banner__actions {
    width: 100%;
  }

  .cookie-banner__btn {
    flex: 1;
    text-align: center;
    padding: var(--space-3) var(--space-4);
  }
}
</style>
