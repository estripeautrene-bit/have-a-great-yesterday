<script setup lang="ts">
const navLinks = [
  { label: 'Method',                    href: '/method' },
  { label: "What You're Going Through", href: '/what-are-you-going-through' },
  { label: 'Ideas',                     href: '/ideas' },
  { label: 'Hall of Fame',              href: '/hall-of-fame' },
  { label: 'Our Story',                 href: '/our-story' },
  { label: 'Where the phrase comes from', href: '/history' },
]

const legalLinks = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms',   href: '/terms' },
  { label: 'Cookies', href: '/cookie-policy' },
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
          <p class="footer__tagline">Personal development deserves a practice.</p>
        </div>

        <nav aria-label="Footer navigation">
          <ul class="footer__nav" role="list">
            <li v-for="link in navLinks" :key="link.href">
              <NuxtLink :to="link.href" class="footer__link">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Ecosystem chain -->
      <div class="footer__ecosystem">
        <div class="ecosystem__item">
          <span class="ecosystem__name">HaveAGreatYesterday.com</span>
          <span class="ecosystem__desc">Editorial home</span>
        </div>
        <span class="ecosystem__arrow" aria-hidden="true">→</span>
        <div class="ecosystem__item">
          <span class="ecosystem__name"><InlineWordmark variant="dark" /> Method</span>
          <span class="ecosystem__desc">The practice</span>
        </div>
        <span class="ecosystem__arrow" aria-hidden="true">→</span>
        <div class="ecosystem__item">
          <a
            href="https://mydopa.app"
            class="ecosystem__name ecosystem__name--link"
            target="_blank"
            rel="noopener noreferrer"
          ><InlineMyDopa /></a>
          <span class="ecosystem__desc">The companion app</span>
        </div>
      </div>

      <p class="footer__attribution">
        <strong>Dan Sullivan</strong> has publicly credited <strong>Lior Weinstein</strong>
        with the original insight, and Sullivan has developed and shared the idea through his
        own work. Their contributions are acknowledged on this site. <InlineWordmark variant="dark" />™
        is an independently developed methodology and is not affiliated with or endorsed by either
        individual. <NuxtLink to="/history" class="footer__link footer__link--muted">Where the phrase "Have a Great Yesterday" comes from →</NuxtLink>
      </p>

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
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
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
  color: rgba(255, 255, 255, 0.4);
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

/* ── Ecosystem chain ──────────────────────────────────── */
.footer__ecosystem {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-4);
  padding-block: var(--space-8);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.ecosystem__item {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.ecosystem__name {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: var(--weight-semibold);
  color: rgba(255, 255, 255, 0.75);
}

.ecosystem__name--link {
  text-decoration: none;
  transition: color var(--transition-fast);
}

.ecosystem__name--link:hover {
  color: var(--color-sun);
}

.ecosystem__desc {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: rgba(255, 255, 255, 0.3);
  letter-spacing: 0.02em;
}

.ecosystem__arrow {
  font-size: var(--text-body);
  color: rgba(255, 255, 255, 0.2);
  flex-shrink: 0;
}

/* ── Attribution ──────────────────────────────────────── */
.footer__attribution {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: rgba(255, 255, 255, 0.3);
  line-height: var(--lh-body);
  padding-block: var(--space-6);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  max-width: 68ch;
}

.footer__attribution strong {
  font-weight: var(--weight-medium);
  color: rgba(255, 255, 255, 0.45);
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
  color: rgba(255, 255, 255, 0.25);
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
  color: rgba(255, 255, 255, 0.55);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer__link:hover,
.footer__link:focus-visible {
  color: #ffffff;
}

.footer__link--muted {
  font-size: var(--text-xs);
  color: rgba(255, 255, 255, 0.25);
}

.footer__link--muted:hover {
  color: rgba(255, 255, 255, 0.55);
}

/* ── Mobile ───────────────────────────────────────────── */
@media (max-width: 640px) {
  .footer__top       { flex-direction: column; gap: var(--space-8); }
  .footer__nav       { text-align: left; }
  .footer__ecosystem { gap: var(--space-3); }
  .footer__bottom    { flex-direction: column; align-items: flex-start; gap: var(--space-3); }
}
</style>
