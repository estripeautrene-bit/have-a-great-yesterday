<script setup lang="ts">
useSeoMeta({
  title: 'Terms of Service — HaveAGreatYesterday.com',
  description: 'Terms governing your use of HaveAGreatYesterday.com.',
})
</script>

<template>
  <div class="legal-page">

    <section class="legal-hero section--sm bg-warm-paper" aria-labelledby="terms-heading">
      <div class="container container--md">
        <p class="legal-eyebrow">Legal</p>
        <h1 id="terms-heading" class="legal-heading">Terms of Service</h1>
        <p class="legal-meta">Effective date: <strong>[To be confirmed before launch]</strong></p>
      </div>
    </section>

    <section class="legal-body section bg-paper">
      <div class="container container--md">

        <p class="draft-copy">
          DRAFT — These terms have not been reviewed by René or legal counsel.
          Do not publish until reviewed and approved before launch.
        </p>

        <div class="legal-content">

          <p>
            By using HaveAGreatYesterday.com ("the site"), you agree to these terms. If you
            do not agree, please do not use the site. These terms govern your access to and
            use of all content, features, and services available on the site.
          </p>

          <h2>What the site is</h2>
          <p>
            HaveAGreatYesterday.com is an editorial website. It publishes content about the
            MyHGY™ Method — a personal-development methodology — and related ideas. It is not
            a therapy service, medical provider, mental health platform, or licensed counseling
            service of any kind.
          </p>

          <h2>Not professional advice</h2>
          <p>
            Nothing on this site constitutes medical, psychological, therapeutic, legal,
            financial, or professional advice of any kind. Content is provided for
            informational and educational purposes only. If you are experiencing a mental
            health crisis or medical emergency, please contact a qualified professional or
            call emergency services in your area.
          </p>
          <p>
            Use of the site does not create a professional relationship of any kind between
            you and HaveAGreatYesterday.com or its founder.
          </p>

          <h2>Intellectual property</h2>
          <p>
            All written content, design, and original materials on this site are owned by
            HaveAGreatYesterday.com and its founder unless otherwise noted. "MyHGY™" and
            "MyHGY™ Method" are trademarks. You may not reproduce, republish, or redistribute
            site content without written permission.
          </p>
          <p>
            Short quotations with clear attribution and a link back to the original page are
            permitted for editorial, educational, or journalistic use.
          </p>

          <h2>Hall of Fame and third-party references</h2>
          <p>
            This site references the published work of various thinkers, authors, and public
            figures in its Hall of Fame and elsewhere. HaveAGreatYesterday.com is not
            affiliated with, sponsored by, endorsed by, or partnered with any individual or
            organization mentioned on the site. References are to publicly available published
            works only.
          </p>

          <h2>External links</h2>
          <p>
            The site may link to third-party websites, including MyDopa™ (a separate product).
            We are not responsible for the content or practices of any external site. A link
            does not constitute an endorsement.
          </p>

          <h2>Email list</h2>
          <p>
            Joining the email list is voluntary. You may unsubscribe at any time using the
            link in any email. See our <NuxtLink to="/privacy" class="legal-link">Privacy Policy</NuxtLink>
            for details on how we handle email addresses.
          </p>

          <h2>Disclaimer of warranties</h2>
          <p>
            The site is provided "as is" without warranties of any kind, express or implied.
            We do not warrant that the site will be error-free, uninterrupted, or free of
            harmful components. We make no guarantee that content is accurate, complete, or
            current.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the maximum extent permitted by applicable law, HaveAGreatYesterday.com and
            its founder are not liable for any indirect, incidental, or consequential damages
            arising from your use of, or inability to use, the site or its content.
          </p>

          <h2>Changes to these terms</h2>
          <p>
            We may update these terms from time to time. The effective date at the top of this
            page will reflect the most recent revision. Continued use of the site after changes
            constitutes your acceptance of the updated terms.
          </p>

          <h2>Governing law</h2>
          <p>
            These terms are governed by the laws of
            <strong>[Jurisdiction — confirm before launch]</strong>,
            without regard to conflict-of-law principles.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms can be sent to
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

.legal-link {
  color: var(--color-ink);
  font-weight: var(--weight-medium);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: var(--color-sun);
}

.legal-link:hover {
  color: var(--color-ink);
}
</style>
