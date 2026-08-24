<script setup lang="ts">
usePageSeo({
  title: 'Cookie Policy — HaveAGreatYesterday.com',
  description: 'How HaveAGreatYesterday.com uses cookies and similar browser storage.',
  path: '/cookie-policy',
  robots: 'noindex',
})
</script>

<template>
  <div class="legal-page">

    <section class="legal-hero section--sm bg-warm-paper" aria-labelledby="cookie-heading">
      <div class="container container--md">
        <p class="legal-eyebrow">Legal</p>
        <h1 id="cookie-heading" class="legal-heading">Cookie Policy</h1>
        <p class="legal-meta">Effective date: <strong>August 24, 2026</strong></p>
      </div>
    </section>

    <section class="legal-body section bg-paper">
      <div class="container container--md">

        <div class="legal-content">

          <p>
            This Cookie Policy explains what cookies and similar browser storage
            HaveAGreatYesterday.com sets when you visit. We keep our data footprint small by
            design.
          </p>

          <!-- ─── SECTION 1: The short version ──────────────────────────── -->
          <h2>The short version</h2>
          <p>
            Today, this site does not set any first-party cookies. The only thing stored in
            your browser by our site code is a single localStorage entry that records your
            response to the analytics consent banner. No analytics, advertising, or tracking
            cookies are currently active.
          </p>

          <!-- ─── SECTION 2: What we store today ────────────────────────── -->
          <h2>What we store today</h2>

          <h3>Consent preference — <code>hgy-cookie-consent</code> (localStorage)</h3>
          <p>
            When you respond to the consent banner, we write your choice —
            <code>accepted</code> or <code>declined</code> — to your browser's localStorage
            under the key <code>hgy-cookie-consent</code>.
          </p>
          <ul>
            <li>This is a localStorage entry, not a cookie. It is not sent with HTTP requests.</li>
            <li>It stays on your device and is not transmitted to our servers or any third party.</li>
            <li>It persists until you clear your browser's localStorage for this site.</li>
            <li>It controls whether analytics (PostHog, when activated) initialises on your visits.</li>
          </ul>

          <!-- ─── SECTION 3: Third-party network behavior ────────────────── -->
          <h2>Third-party network behavior</h2>

          <h3>Cloudflare Pages (hosting and CDN)</h3>
          <p>
            The site is served through Cloudflare's network. Cloudflare may set its own
            technical cookies — such as <code>__cf_bm</code> (bot management) — as part of
            its CDN and security services. These cookies are set by Cloudflare, not by our
            site code, and are governed by
            <a
              href="https://www.cloudflare.com/privacypolicy/"
              target="_blank"
              rel="noopener noreferrer"
              class="legal-link"
            >Cloudflare's privacy policy</a>.
            We do not read or process Cloudflare's cookies.
          </p>

          <!-- ─── SECTION 4: PostHog ────────────────────────────────────── -->
          <h2>Analytics cookies — PostHog</h2>

          <p>
            PostHog is not currently active. The PostHog SDK is not installed and no API key
            is configured. PostHog sets no cookies and collects no data at this time.
          </p>

          <p>
            When PostHog is activated, it will only run for visitors who have chosen
            <strong>Accept</strong> on the consent banner. It will not run for visitors who
            have chosen <strong>Decline</strong> or who have not yet made a choice.
          </p>
          <p>
            When active, PostHog will set a first-party cookie (named <code>ph_*</code>, where
            <code>*</code> is a project identifier) to assign your browser an anonymous
            visitor ID. It will also use localStorage to store your session state. This
            section will be updated with full details when PostHog goes live.
          </p>

          <!-- ─── SECTION 5: Advertising cookies ───────────────────────── -->
          <h2>Advertising cookies</h2>
          <p>
            We do not use advertising cookies, retargeting pixels, or any technology designed
            to track you across other websites for advertising purposes. No advertising network
            receives data from your visit.
          </p>

          <!-- ─── SECTION 6: Marketing and email tracking ─────────────────── -->
          <h2>Marketing and email tracking</h2>
          <p>
            This site does not currently use marketing or email tracking. No email capture
            or delivery system is active, and no tracking pixels are set. If email delivery
            goes live, any associated tracking behavior will be documented here before activation.
          </p>

          <!-- ─── SECTION 7: How to manage your preferences ────────────── -->
          <h2>How to manage your preferences</h2>
          <p>
            To remove the consent preference stored by this site, clear your browser's
            localStorage for <strong>haveagreatyesterday.com</strong>. In most browsers:
          </p>
          <ul>
            <li>Open Developer Tools (F12 or right-click → Inspect).</li>
            <li>Go to the Application (Chrome/Edge) or Storage (Firefox) tab.</li>
            <li>Select Local Storage → your site URL → delete the <code>hgy-cookie-consent</code> entry.</li>
          </ul>
          <p>
            After clearing, the consent banner will reappear on your next visit and you can
            make a fresh choice.
          </p>
          <p>
            You can also block or delete Cloudflare technical cookies through your browser's
            standard cookie controls. This does not affect your ability to read the site.
          </p>

          <!-- ─── SECTION 8: Changes ────────────────────────────────────── -->
          <h2>Changes to this policy</h2>
          <p>
            This policy will be updated when PostHog is activated, when email tracking is
            introduced, or whenever we add new storage mechanisms. Material changes will be
            reflected in an updated effective date at the top of this page.
          </p>

          <!-- ─── SECTION 9: Contact ────────────────────────────────────── -->
          <h2>Contact</h2>
          <p>
            Questions about this policy can be sent to
            <strong>contact@myhgy.com</strong>.
          </p>

        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.legal-hero .container {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.legal-eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
}

.legal-heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.legal-meta {
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: var(--color-muted-ink);
}

/* Content column */
.legal-content {
  margin-top: var(--space-10);
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.legal-content h2 {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: var(--weight-bold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
  padding-top: var(--space-6);
  border-top: 1px solid var(--color-stone);
  margin-top: var(--space-4);
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex-wrap: wrap;
}

.legal-content h3 {
  font-family: var(--font-display);
  font-size: var(--text-body-lg);
  font-weight: var(--weight-bold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.legal-content p,
.legal-content li {
  font-family: var(--font-body);
  font-size: var(--text-body);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

.legal-content ul {
  padding-left: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.legal-content code {
  font-family: ui-monospace, monospace;
  font-size: 0.875em;
  background: var(--color-stone);
  padding: 1px 5px;
  border-radius: 3px;
}

.legal-link {
  color: var(--color-ink);
  text-underline-offset: 2px;
}

.legal-link:hover {
  color: var(--color-muted-ink);
}

</style>
