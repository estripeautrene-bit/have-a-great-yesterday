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

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/have_a_great_yesterday/',
    // instagram: rounded square + lens circle + dot
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
  },
  {
    label: 'Pinterest',
    href: 'https://www.pinterest.com/re4787/',
    // pinterest: circle-P wordmark
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>`,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/myhgy/',
    // linkedin: "in" square mark
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  },
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
          <div class="footer__social" aria-label="Follow us on social media">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.href"
              class="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.label"
              v-html="social.svg"
            />
          </div>
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
        with the original insight, and Sullivan has developed and shared the phrase through his
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

/* ── Social icons ─────────────────────────────────────── */
.footer__social {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-top: var(--space-2);
}

.footer__social-link {
  display: inline-flex;
  color: rgba(255, 255, 255, 0.45);
  transition: color var(--transition-fast);
  border-radius: var(--radius-sm);
}

.footer__social-link:hover {
  color: rgba(255, 255, 255, 0.9);
}

.footer__social-link:focus-visible {
  color: rgba(255, 255, 255, 0.9);
  outline: 2px solid var(--color-sun);
  outline-offset: 3px;
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
