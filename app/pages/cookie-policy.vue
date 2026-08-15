<script setup lang="ts">
useSeoMeta({
  title: 'Cookie Policy — HaveAGreatYesterday.com',
  description: 'How HaveAGreatYesterday.com uses cookies and analytics.',
})
</script>

<template>
  <div class="legal-page">

    <section class="legal-hero section--sm bg-warm-paper" aria-labelledby="cookie-heading">
      <div class="container container--md">
        <p class="legal-eyebrow">Legal</p>
        <h1 id="cookie-heading" class="legal-heading">Cookie Policy</h1>
        <p class="legal-meta">Effective date: <strong>[To be confirmed before launch]</strong></p>
      </div>
    </section>

    <section class="legal-body section bg-paper">
      <div class="container container--md">

        <p class="draft-copy">
          DRAFT — This policy has not been reviewed by René or legal counsel.
          Do not publish until reviewed and approved before launch.
        </p>

        <div class="legal-content">

          <p>
            This Cookie Policy explains how HaveAGreatYesterday.com uses cookies and similar
            technologies when you visit the site. We keep our data footprint small by design —
            we use one analytics tool and nothing else.
          </p>

          <h2>The short version</h2>
          <p>
            We use <strong>PostHog</strong> to understand how visitors use the site — which
            pages they read, how far they scroll, and whether they sign up for the email list.
            PostHog sets a cookie that gives your browser an anonymous ID. We do not use
            advertising cookies. You can opt out at any time.
          </p>

          <h2>What is PostHog?</h2>
          <p>
            PostHog is an open-source product analytics platform. We use it to count page
            views, measure time spent on articles, and understand which content resonates. The
            data helps us improve the site — nothing else. PostHog does not sell data to
            advertisers.
          </p>
          <p>
            PostHog, Inc. operates the service and processes data in the United States. You
            can review PostHog's own privacy policy at posthog.com/privacy.
          </p>

          <h2>What PostHog collects</h2>
          <p>When you visit the site, PostHog may automatically record:</p>
          <ul>
            <li>Pages you visit and how long you spend on each.</li>
            <li>Links and buttons you click.</li>
            <li>Whether you signed up for the email list.</li>
            <li>Your approximate country or region (derived from your IP address — the full IP is not stored).</li>
            <li>Browser type, operating system, and screen size.</li>
            <li>The website or link that brought you here.</li>
          </ul>
          <p>
            PostHog does not collect your name, email address, or any content you type into
            forms. If you join the email list, that address goes to our email provider
            separately and is not linked to your PostHog analytics record.
          </p>

          <h2>Cookies and storage PostHog uses</h2>
          <p>
            PostHog sets a first-party cookie named <strong>ph_*</strong> (where * is a
            project identifier). This cookie stores an anonymous visitor ID so PostHog can
            count unique visits and follow a session without identifying you personally. It
            expires after one year.
          </p>
          <p>
            PostHog also uses browser localStorage to store your session state and, if you opt
            out, your opt-out preference. LocalStorage persists until you clear it.
          </p>

          <h2>How to opt out</h2>
          <p>
            You can stop PostHog from collecting data about your visit in any of these ways:
          </p>
          <ul>
            <li>
              <strong>Browser settings:</strong> Block or delete cookies and clear localStorage
              in your browser settings. Your browser's help section explains how.
            </li>
            <li>
              <strong>Do Not Track:</strong> PostHog respects the browser
              Do Not Track signal. [<em>Confirm this is enabled in the PostHog configuration
              before launch.</em>]
            </li>
            <li>
              <strong>Browser console:</strong> If PostHog is loaded, you can call
              <code>posthog.opt_out_capturing()</code> in your browser's developer console to
              opt out for that browser.
            </li>
          </ul>
          <p>
            Opting out does not affect your ability to read the site or sign up for the email
            list.
          </p>

          <h2>How long we keep analytics data</h2>
          <p>
            We retain PostHog analytics data for up to 12 months. [<em>Confirm retention
            period in PostHog project settings before launch.</em>]
          </p>

          <h2>Advertising cookies</h2>
          <p>
            We do not use advertising cookies, retargeting pixels, or any technology that
            tracks you across other websites for advertising. No advertising network receives
            data from your visit.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We will update this policy before launch to reflect the final analytics
            configuration. The effective date at the top of the page will be updated whenever
            the policy changes.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy can be sent to
            <strong>[contact email — confirm before launch]</strong>.
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
  background: rgba(0, 0, 0, 0.06);
  padding: 1px 5px;
  border-radius: 3px;
}
</style>
