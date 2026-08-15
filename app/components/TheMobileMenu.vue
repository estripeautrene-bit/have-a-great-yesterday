<script setup lang="ts">
type NavItem = { label: string; href: string; external?: boolean }

const props = defineProps<{
  open: boolean
  navItems: NavItem[]
}>()

const emit = defineEmits<{ close: [] }>()

const menuRef = ref<HTMLElement | null>(null)
const closeBtn = ref<HTMLElement | null>(null)

/* ── Body scroll lock ─────────────────────────────────── */
watch(() => props.open, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
    nextTick(() => closeBtn.value?.focus())
  } else {
    document.body.style.overflow = ''
  }
})

onUnmounted(() => { document.body.style.overflow = '' })

/* ── Focus trap ───────────────────────────────────────── */
function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    emit('close')
    return
  }
  if (e.key !== 'Tab' || !menuRef.value) return

  const focusable = Array.from(
    menuRef.value.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  )
  const first = focusable[0]
  const last  = focusable[focusable.length - 1]

  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault()
    last.focus()
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault()
    first.focus()
  }
}
</script>

<template>
  <Teleport to="body">
    <Transition name="menu">
      <div
        v-if="open"
        ref="menuRef"
        class="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        @keydown="onKeydown"
      >
        <!-- Top row -->
        <div class="mobile-menu__top">
          <NuxtLink to="/" class="mobile-menu__logo" aria-label="HaveAGreatYesterday — home">
            <WordmarkHGY variant="dark" size="md" />
          </NuxtLink>
          <button
            ref="closeBtn"
            class="mobile-menu__close"
            aria-label="Close menu"
            @click="emit('close')"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              <line x1="16" y1="4" x2="4" y2="16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
          </button>
        </div>

        <!-- Nav links -->
        <nav class="mobile-menu__nav" aria-label="Mobile navigation">
          <ul role="list">
            <li v-for="item in navItems" :key="item.href">
              <a
                v-if="item.external"
                :href="item.href"
                class="mobile-menu__link"
                target="_blank"
                rel="noopener noreferrer"
              ><InlineMyDopa v-if="item.label === 'MyDopa'" /><template v-else>{{ item.label }}</template></a>
              <NuxtLink
                v-else
                :to="item.href"
                class="mobile-menu__link"
              >{{ item.label }}</NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Primary CTA — exact locked copy -->
        <div class="mobile-menu__footer">
          <NuxtLink to="/what-are-you-going-through" class="mobile-menu__cta">
            Show me what I can do from here.
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.mobile-menu {
  position: fixed;
  inset: 0;
  z-index: 300;
  background: var(--color-ink);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

/* ── Top row ──────────────────────────────────────────── */
.mobile-menu__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-height);
  padding-inline: var(--page-gutter);
  flex-shrink: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.mobile-menu__logo {
  text-decoration: none;
  display: flex;
  align-items: center;
}

.mobile-menu__close {
  background: none;
  border: none;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.7);
  padding: var(--space-2);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color var(--transition-fast);
}

.mobile-menu__close:hover,
.mobile-menu__close:focus-visible {
  color: #ffffff;
}

/* ── Nav links ────────────────────────────────────────── */
.mobile-menu__nav {
  flex: 1;
  padding: var(--space-10) var(--page-gutter) var(--space-6);
}

.mobile-menu__nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.mobile-menu__link {
  display: block;
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: var(--weight-bold);
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  padding-block: var(--space-4);
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  transition: color var(--transition-fast);
  line-height: var(--lh-heading);
}

.mobile-menu__link:hover,
.mobile-menu__link:focus-visible {
  color: #ffffff;
}

/* ── Footer / CTA ─────────────────────────────────────── */
.mobile-menu__footer {
  padding: var(--space-6) var(--page-gutter) var(--space-10);
  flex-shrink: 0;
}

.mobile-menu__cta {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: var(--color-sun);
  color: var(--color-ink);
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  font-weight: var(--weight-semibold);
  text-decoration: none;
  padding: var(--space-5) var(--space-6);
  border-radius: var(--radius-lg);
  text-align: center;
  line-height: var(--lh-ui);
  transition: opacity var(--transition-fast);
  min-height: 56px;
}

.mobile-menu__cta:hover,
.mobile-menu__cta:focus-visible {
  opacity: 0.88;
}

/* ── Transition ───────────────────────────────────────── */
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.22s ease, transform 0.22s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
