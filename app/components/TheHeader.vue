<script setup lang="ts">
type NavItem = { label: string; href: string; external?: boolean }

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const isDark = ref(false)
let darkObserver: IntersectionObserver | null = null

const navItems: NavItem[] = [
  { label: 'Method',                   href: '/method' },
  { label: "What You're Going Through", href: '/what-are-you-going-through' },
  { label: 'Ideas',                    href: '/ideas' },
  { label: 'Hall of Fame',             href: '/hall-of-fame' },
  { label: 'Our Story',                href: '/our-story' },
  { label: 'For Organizations',        href: '/for-organizations' },
  { label: 'MyDopa',                   href: 'https://mydopa.app', external: true },
]

const route = useRoute()
watch(() => route.path, () => { isMenuOpen.value = false })

const onScroll = () => { isScrolled.value = window.scrollY > 4 }

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })

  const darkSections = document.querySelectorAll('.bg-ink')
  if (darkSections.length) {
    const headerHeight = (document.querySelector<HTMLElement>('.header')?.offsetHeight ?? 64)
    darkObserver = new IntersectionObserver(
      (entries) => { isDark.value = entries.some(e => e.isIntersecting) },
      { rootMargin: `0px 0px -${window.innerHeight - headerHeight}px 0px`, threshold: 0 }
    )
    darkSections.forEach(s => darkObserver!.observe(s))
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  darkObserver?.disconnect()
})
</script>

<template>
  <header class="header" :class="{ 'header--scrolled': isScrolled, 'header--dark': isDark }">
    <div class="header__inner">

      <!-- Logo -->
      <NuxtLink to="/" class="header__logo" aria-label="HaveAGreatYesterday — home">
        <WordmarkHGY :variant="isDark ? 'dark' : 'light'" size="md" />
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="header__nav" aria-label="Main navigation">
        <ul class="nav__list" role="list">
          <li v-for="item in navItems" :key="item.href">
            <!-- External link (MyDopa) -->
            <a
              v-if="item.external"
              :href="item.href"
              class="nav__link"
              target="_blank"
              rel="noopener noreferrer"
            ><InlineMyDopa v-if="item.label === 'MyDopa'" /><template v-else>{{ item.label }}</template></a>
            <!-- Internal link -->
            <NuxtLink
              v-else
              :to="item.href"
              class="nav__link"
              :class="{ 'nav__link--active': route.path === item.href }"
            >{{ item.label }}</NuxtLink>
          </li>
        </ul>

        <NuxtLink to="/what-are-you-going-through" class="header__cta">
          Show me what I can do from here.
        </NuxtLink>
      </nav>

      <!-- Mobile hamburger -->
      <button
        class="header__hamburger"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-menu"
        :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
        @click="isMenuOpen = true"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
    </div>
  </header>

  <TheMobileMenu
    id="mobile-menu"
    :open="isMenuOpen"
    :nav-items="navItems"
    @close="isMenuOpen = false"
  />
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
  height: var(--header-height);
  background: var(--color-paper);
  border-bottom: 1px solid transparent;
  transition:
    background var(--transition-base),
    border-color var(--transition-base),
    box-shadow var(--transition-base);
}

.header--scrolled {
  border-bottom-color: var(--color-stone);
  box-shadow: 0 1px 16px rgba(0, 0, 0, 0.06);
}

.header--dark {
  background: var(--color-ink);
  border-bottom-color: rgba(255, 255, 255, 0.08);
}

.header--dark .nav__link {
  color: #ffffff;
}

.header--dark .nav__link:hover,
.header--dark .nav__link--active {
  color: #F4C542;
}

.header--dark .header__cta {
  background: var(--color-sun);
  color: var(--color-ink);
}

.header--dark .header__cta:hover {
  background: #ffffff;
  color: var(--color-ink);
}

.header--dark .header__hamburger {
  color: #ffffff;
}

.header__inner {
  max-width: var(--container-xl);
  margin-inline: auto;
  padding-inline: var(--page-gutter);
  height: 100%;
  display: flex;
  align-items: center;
  gap: var(--space-6);
}

/* Logo */
.header__logo {
  text-decoration: none;
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

/* Desktop nav */
.header__nav {
  display: flex;
  align-items: center;
  gap: var(--space-5);
  margin-left: auto;
}

.nav__list {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav__link {
  font-family: var(--font-body);
  font-size: 0.8125rem; /* 13px — compact to fit 6 items + long CTA */
  font-weight: var(--weight-medium);
  color: var(--color-muted-ink);
  text-decoration: none;
  letter-spacing: 0.01em;
  white-space: nowrap;
  padding-block: var(--space-2);
  transition: color var(--transition-fast);
}

.nav__link:hover,
.nav__link--active {
  color: var(--color-ink);
}

/* Header CTA — exact locked copy, kept to one line at 13px */
.header__cta {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  background: var(--color-ink);
  color: var(--color-paper);
  font-family: var(--font-body);
  font-size: 0.8125rem; /* 13px */
  font-weight: var(--weight-semibold);
  text-decoration: none;
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-full);
  white-space: nowrap;
  transition: background var(--transition-fast), color var(--transition-fast);
}

.header__cta:hover {
  background: var(--color-sun);
  color: var(--color-ink);
}

/* Hamburger — shown below 1100px where 6 items + long CTA get crowded */
.header__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-2);
  margin-left: auto;
  color: var(--color-ink);
  border-radius: var(--radius-sm);
}

.header__hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: currentColor;
  border-radius: 2px;
}

@media (max-width: 1100px) {
  .header__nav       { display: none; }
  .header__hamburger { display: flex; }
}
</style>
