<script setup lang="ts">
useSeoMeta({
  title: 'Privacy Policy — HaveAGreatYesterday.com',
  description: 'How HaveAGreatYesterday.com handles your information.',
})
</script>

<template>
  <div class="legal-page">

    <section class="legal-hero section--sm bg-warm-paper" aria-labelledby="privacy-heading">
      <div class="container container--md">
        <p class="legal-eyebrow">Legal</p>
        <h1 id="privacy-heading" class="legal-heading">Privacy Policy</h1>
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
            This privacy policy explains how HaveAGreatYesterday.com ("we," "us," "the site")
            handles information about visitors and email subscribers. We operate an editorial
            website. We are not a SaaS product, marketplace, or app. Our data footprint is small
            by design.
          </p>

          <h2>What we collect</h2>

          <h3>Email address</h3>
          <p>
            If you choose to join the email list, we collect your email address. Signing up is
            entirely voluntary. We do not require an account to read the site.
          </p>

          <h3>Usage data</h3>
          <p>
            We use PostHog for analytics. PostHog may collect your IP address, browser type,
            pages visited, and time spent on pages to help us understand how the site is used.
            This data is aggregated and is not used to identify you personally. You can review
            PostHog's own privacy policy at posthog.com.
          </p>

          <h3>What we do not collect</h3>
          <p>
            We do not collect names, phone numbers, payment information, health data, or any
            sensitive personal information. We do not run advertising networks or sell data.
          </p>

          <h2>How we use your email address</h2>
          <p>
            We use email addresses solely to send editorial content: the founder's practice
            notes, method updates, and ideas related to the MyHGY™ Method. We do not send
            promotional email on behalf of third parties.
          </p>

          <h2>Third-party services</h2>
          <p>
            We use the following third-party services that may process data on our behalf:
          </p>
          <ul>
            <li><strong>Email service provider</strong> — [provider name to be confirmed before launch] stores and delivers emails to subscribers.</li>
            <li><strong>PostHog</strong> — analytics and product analytics. Data is processed per PostHog's data processing agreement.</li>
            <li><strong>Cloudflare Pages</strong> — our hosting provider. Cloudflare may log standard HTTP request metadata (IP, request path, timestamp) for security and performance purposes.</li>
          </ul>
          <p>
            We do not share your email address with any other third party.
          </p>

          <h2>Data retention</h2>
          <p>
            We retain email addresses for as long as you remain subscribed. If you unsubscribe,
            your address is removed from active lists. Residual data in backup systems is
            purged on the schedule of our email provider.
          </p>

          <h2>Your rights</h2>
          <p>
            You may at any time:
          </p>
          <ul>
            <li>Unsubscribe from the email list using the link at the bottom of any email.</li>
            <li>Request a copy of any personal data we hold about you.</li>
            <li>Request deletion of your data.</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at
            <strong>[contact email — confirm before launch]</strong>.
            We will respond within 30 days.
          </p>

          <h2>Children</h2>
          <p>
            This site is not directed at children under 13. We do not knowingly collect
            information from anyone under 13. If you believe a child has provided us with
            an email address, please contact us and we will delete it promptly.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            If we make material changes to this policy, we will update the effective date at
            the top of this page. Continued use of the site after changes constitutes
            acceptance of the updated policy.
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
</style>
