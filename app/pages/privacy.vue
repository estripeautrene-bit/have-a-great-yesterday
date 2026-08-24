<script setup lang="ts">
usePageSeo({
  title: 'Privacy Policy — HaveAGreatYesterday.com',
  description: 'How HaveAGreatYesterday.com handles information about visitors.',
  path: '/privacy',
  robots: 'noindex',
})
</script>

<template>
  <div class="legal-page">

    <section class="legal-hero section--sm bg-warm-paper" aria-labelledby="privacy-heading">
      <div class="container container--md">
        <p class="legal-eyebrow">Legal</p>
        <h1 id="privacy-heading" class="legal-heading">Privacy Policy</h1>
        <p class="legal-meta">Effective date: <strong>August 24, 2026</strong></p>
      </div>
    </section>

    <section class="legal-body section bg-paper">
      <div class="container container--md">

        <div class="legal-content">

          <p>
            HaveAGreatYesterday.com ("we," "us," "the site") is an editorial website about the
            MyHGY™ Method. We do not run a store, a subscription product, or a user-account
            system. Our data footprint today is small by design — we do not collect personal
            information from visitors through any form or sign-up flow on this site.
          </p>

          <!-- ─── SECTION 1: What we collect today ──────────────────────── -->
          <h2>What we collect today</h2>

          <h3>Hosting logs — Cloudflare Pages</h3>
          <p>
            The site is hosted on Cloudflare Pages. Cloudflare automatically logs standard
            HTTP request metadata — including IP address, request path, HTTP method, timestamp,
            and browser user-agent string — for network security and CDN performance. This
            processing is governed by Cloudflare's own privacy policy. We do not have real-time
            access to raw Cloudflare request logs under the standard Cloudflare Pages plan.
          </p>

          <h3>Fonts</h3>
          <p>
            Typefaces (Manrope, Inter, Playfair Display) are served directly from this site.
            No font requests are made to Google or any external service.
          </p>

          <h3>Consent preference — browser localStorage</h3>
          <p>
            When you make a choice on the analytics consent banner, we store that choice
            (<code>accepted</code> or <code>declined</code>) in your browser's localStorage
            under the key <code>hgy-cookie-consent</code>. This value stays on your device;
            it is not transmitted to our servers. Clearing your browser's localStorage
            removes it.
          </p>

          <!-- ─── SECTION 2: Analytics (PostHog) ────────────────────────── -->
          <h2>Analytics — PostHog</h2>

          <p>
            We plan to use <strong>PostHog</strong> for product analytics — to understand which
            content helps, how visitors move through the site, and what doesn't land. The
            consent infrastructure is already in place: a banner appears on first visit asking
            whether you accept or decline analytics. Your choice is stored locally as described
            above.
          </p>

          <p>
            PostHog is not currently active. The PostHog SDK is not installed and no API key
            is configured. No analytics data is collected at this time. When PostHog is enabled,
            this section will be updated to describe exactly what it collects and how your
            consent preference controls its behavior.
          </p>

          <p>
            When PostHog is enabled, it will collect data only from visitors who have accepted
            analytics. Visitors who decline will not be tracked. PostHog, Inc. operates the
            service. You can review PostHog's privacy policy at posthog.com/privacy.
          </p>

          <!-- ─── SECTION 3: What we do not collect ─────────────────────── -->
          <h2>What we do not collect</h2>
          <p>We do not collect:</p>
          <ul>
            <li>Email addresses — there is no sign-up form on the site today.</li>
            <li>Names, phone numbers, or postal addresses.</li>
            <li>Payment information.</li>
            <li>Health data or sensitive personal information.</li>
            <li>Personally identifiable information through cookies or tracking pixels.</li>
          </ul>
          <p>
            We do not run advertising networks. We do not sell, rent, or share visitor data
            with third parties for commercial purposes.
          </p>

          <!-- ─── SECTION 4: [RESERVED] Email capture ───────────────────── -->
          <h2>Email list</h2>

          <p>
            This site does not currently collect email addresses. There is no sign-up form or
            email capture flow active on this site. If that changes, this section will be updated
            to describe what we collect, how we use it, which provider delivers messages, how
            you can unsubscribe, and how long we retain your address.
          </p>

          <!-- ─── SECTION 5: [RESERVED] Personalized responses, Supabase, Resend ── -->
          <h2>Personalized responses</h2>

          <p>
            This site does not currently offer personalized written responses. No personal
            information is submitted or stored through this feature at this time. If this
            changes, this section will be updated to describe what information is submitted,
            how it is processed, how long it is stored, and which providers handle it.
          </p>

          <!-- ─── SECTION 6: Third-party services currently in use ─────── -->
          <h2>Third-party services currently in use</h2>
          <ul>
            <li>
              <strong>Cloudflare Pages</strong> — hosting and CDN. Processes standard HTTP
              request metadata for security and performance.
            </li>
          </ul>
          <p>
            No other third-party services receive visitor data at this time.
          </p>

          <!-- ─── SECTION 7: Children ────────────────────────────────────── -->
          <h2>Children</h2>
          <p>
            This site is not directed at children under 13. We do not knowingly collect any
            information from anyone under 13. If you believe a child has submitted personal
            information to us, please contact us and we will delete it promptly.
          </p>

          <!-- ─── SECTION 8: Your rights ────────────────────────────────── -->
          <h2>Your rights</h2>
          <p>
            Because we do not collect personal information from visitors today, there is
            currently no personal data held by us to access, correct, or delete. If that
            changes when future features go live, this section will be updated with specific
            instructions for exercising your rights.
          </p>
          <p>
            You can remove your consent preference at any time by clearing localStorage in
            your browser.
          </p>

          <!-- ─── SECTION 9: Changes ─────────────────────────────────────── -->
          <h2>Changes to this policy</h2>
          <p>
            When we add new features — such as email capture, PostHog analytics, or
            personalized responses — we will update this policy to reflect what data is
            collected and how it is handled. Material changes will be reflected in an updated
            effective date at the top of this page.
          </p>

          <!-- ─── SECTION 10: Contact ────────────────────────────────────── -->
          <h2>Contact</h2>
          <p>
            Questions about this policy can be directed to
            <strong>contact@myhgy.com</strong>.
            We will respond within 30 days.
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

.legal-content code {
  font-family: monospace;
  font-size: 0.875em;
  background: var(--color-stone);
  border-radius: 3px;
  padding: 1px 5px;
}

.legal-content ul {
  padding-left: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

</style>
