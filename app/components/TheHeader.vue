<script setup lang="ts">
const isMenuOpen = ref(false)
const isScrolled = ref(false)

const navItems = [
  { label: 'The Method', href: '/the-method' },
  { label: "What you're going through", href: '/what-are-you-going-through' },
]

const route = useRoute()
watch(() => route.path, () => { isMenuOpen.value = false })

const onScroll = () => { isScrolled.value = window.scrollY > 4 }
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="header" :class="{ 'header--scrolled': isScrolled }">
    <div class="header__inner">

      <!-- Logo -->
      <NuxtLink to="/" class="header__logo" aria-label="HaveAGreatYesterday — home">
        <WordmarkHGY variant="light" size="md" />
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="header__nav" aria-label="Main navigation">
        <ul class="nav__list" role="list">
          <li v-for="item in navItems" :key="item.href">
            <NuxtLink
              :to="item.href"
              class="nav__link"
              :class="{ 'nav__link--active': route.path === item.href }"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>

        <NuxtLink to="/what-are-you-going-through" class="header__cta">
          Start here
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

  <!-- Mobile menu — teleports to <body> via TheMobileMenu -->
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
    border-color var(--transition-base),
    box-shadow var(--transition-base);
}

.header--scrolled {
  border-bottom-color: var(--color-stone);
  box-shadow: 0 1px 16px rgba(0, 0, 0, 0.06);
}

.header__inner {
  max-width: var(--container-xl);
  margin-inline: auto;
  padding-inline: var(--page-gutter);
  height: 100%;
  display: flex;
  align-items: center;
  gap: var(--space-8);
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
  gap: var(--space-8);
  margin-left: auto;
}

.nav__list {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav__link {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: var(--weight-medium);
  color: var(--color-muted-ink);
  text-decoration: none;
  letter-spacing: 0.01em;
  transition: color var(--transition-fast);
  white-space: nowrap;
}

.nav__link:hover,
.nav__link--active {
  color: var(--color-ink);
}

/* Header CTA */
.header__cta {
  display: inline-flex;
  align-items: center;
  background: var(--color-ink);
  color: var(--color-paper);
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: var(--weight-semibold);
  text-decoration: none;
  padding: var(--space-2) var(--space-5);
  border-radius: var(--radius-full);
  letter-spacing: 0.01em;
  white-space: nowrap;
  transition: opacity var(--transition-fast), background var(--transition-fast);
}

.header__cta:hover {
  background: var(--color-sun);
  color: var(--color-ink);
}

/* Hamburger — mobile only */
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
  transition: opacity var(--transition-fast);
}

@media (max-width: 768px) {
  .header__nav       { display: none; }
  .header__hamburger { display: flex; }
}
</style>
