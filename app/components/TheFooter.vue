<script setup lang="ts">
const navLinks = [
  { label: 'The Method', href: '/the-method' },
  { label: "What you're going through", href: '/what-are-you-going-through' },
]

const legalLinks = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
]

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer" aria-label="Site footer">
    <div class="footer__inner container">

      <!-- Top: brand + nav -->
      <div class="footer__top">
        <div class="footer__brand">
          <NuxtLink to="/" aria-label="HaveAGreatYesterday — home">
            <WordmarkHGY variant="dark" size="md" />
          </NuxtLink>
          <p class="footer__tagline">The home of the MyHGY™ Method.</p>
        </div>

        <nav aria-label="Footer navigation">
          <ul class="footer__nav" role="list">
            <li v-for="link in navLinks" :key="link.href">
              <NuxtLink :to="link.href" class="footer__link">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Bottom bar -->
      <div class="footer__bottom">
        <p class="footer__copy">© {{ year }} HaveAGreatYesterday.com</p>
        <ul class="footer__legal" role="list">
          <li v-for="link in legalLinks" :key="link.href">
            <NuxtLink :to="link.href" class="footer__link footer__link--muted">{{ link.label }}</NuxtLink>
          </li>
        </ul>
      </div>

    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-ink);
  color: var(--color-paper);
}

.footer__inner {
  padding-block: var(--space-16) var(--space-10);
}

/* ── Top section ──────────────────────────────────────── */
.footer__top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--space-12);
  padding-bottom: var(--space-10);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  flex-wrap: wrap;
}

.footer__brand {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.footer__tagline {
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: rgba(255, 255, 255, 0.45);
  line-height: var(--lh-body);
  max-width: 28ch;
}

.footer__nav {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: right;
}

/* ── Bottom bar ───────────────────────────────────────── */
.footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-4);
  padding-top: var(--space-6);
}

.footer__copy {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: rgba(255, 255, 255, 0.3);
  line-height: 1;
}

.footer__legal {
  display: flex;
  gap: var(--space-5);
  list-style: none;
  margin: 0;
  padding: 0;
}

/* ── Links ────────────────────────────────────────────── */
.footer__link {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: var(--weight-medium);
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer__link:hover,
.footer__link:focus-visible {
  color: #ffffff;
}

.footer__link--muted {
  font-size: var(--text-xs);
  color: rgba(255, 255, 255, 0.3);
}

.footer__link--muted:hover {
  color: rgba(255, 255, 255, 0.6);
}

/* ── Mobile ───────────────────────────────────────────── */
@media (max-width: 640px) {
  .footer__top { flex-direction: column; gap: var(--space-8); }
  .footer__nav { text-align: left; }
  .footer__bottom { flex-direction: column; align-items: flex-start; gap: var(--space-3); }
}
</style>
