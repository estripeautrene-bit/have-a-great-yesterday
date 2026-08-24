<script setup lang="ts">
usePageSeo({
  title: 'The History of "Have a Great Yesterday" — HaveAGreatYesterday.com',
  description: 'Where the phrase "Have a Great Yesterday" comes from, how Dan Sullivan and Lior Weinstein are connected to it, and how the MyHGY™ Method relates to that history.',
  path: '/history',
})

const { public: { siteUrl } } = useRuntimeConfig()
useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'Article',
  name: 'The History of "Have a Great Yesterday"',
  url: `${siteUrl}/history`,
  description: 'Where the phrase "Have a Great Yesterday" comes from, how Dan Sullivan and Lior Weinstein are connected to it, and how the MyHGY™ Method relates to that history.',
  author: {
    '@type': 'Person',
    name: 'René Estripeaut',
  },
})
</script>

<template>
  <div class="hist-page">

    <!-- ═══ HERO ═══════════════════════════════════════════════════════════ -->
    <section class="hist__hero section--lg bg-warm-paper" aria-labelledby="hist-heading">
      <div class="container">
        <div class="hist__hero-inner">
          <p class="hist__eyebrow">Provenance</p>
          <h1 id="hist-heading" class="hist__heading">
            The history of<br>"Have a Great Yesterday."
          </h1>
          <p class="hist__deck">
            A phrase, who originated it, how it developed, and where the MyHGY™ Method
            begins — which is a different story.
          </p>
        </div>
      </div>
    </section>

    <!-- ═══ BODY ═══════════════════════════════════════════════════════════ -->
    <section class="hist__body section--lg bg-paper" aria-label="History and provenance">
      <div class="container">
        <div class="hist__content">

          <!-- ─── 1. THE PHRASE ────────────────────────────────────────── -->
          <h2>Where the phrase comes from</h2>
          <p>
            "Have a Great Yesterday" is a phrase that Dan Sullivan — founder of
            <a
              href="https://www.strategiccoach.com"
              target="_blank"
              rel="noopener noreferrer"
              class="hist__link"
            >Strategic Coach</a> — has credited publicly to <strong>Lior Weinstein</strong>,
            an entrepreneur and coach. Sullivan has shared the story in his coaching work
            and in interviews: Weinstein offered the phrase as a parting comment.
          </p>
          <p>
            Sullivan recognized something precise and useful in that inversion and developed
            it into part of his coaching practice. It became associated with his broader
            framework on measuring from where you started rather than against where you
            haven't yet arrived — the Gain vs. Gap distinction.
          </p>

          <!-- ─── 2. WEINSTEIN ─────────────────────────────────────────── -->
          <h2>Lior Weinstein and the original insight</h2>
          <p>
            Dan Sullivan has publicly credited Lior Weinstein with the original
            "Have a Great Yesterday" insight. Sullivan subsequently developed and shared
            that idea through his own work. MyHGY™ has a separate development history,
            described below.
          </p>

          <!-- ─── 3. SULLIVAN'S DEVELOPMENT ────────────────────────────── -->
          <h2>How Sullivan developed the idea</h2>
          <p>
            Sullivan incorporated the phrase and the underlying logic into his work with
            entrepreneurs through Strategic Coach. The idea fed into his Gap and Gain
            framework — the distinction between measuring your progress against an ideal
            (the Gap) versus measuring it from where you started (the Gain).
          </p>
          <p>
            Three podcast conversations document both Sullivan's attribution to Weinstein
            and his own experimentation with the practice.
          </p>

          <!-- ─── SOURCE 1 ──────────────────────────────────────────────── -->
          <div class="hist__cite">
            <p class="hist__cite-show">Inside Strategic Coach · Dan Sullivan and Shannon Waller</p>
            <p class="hist__cite-meta">
              <a
                href="https://www.strategiccoach.com/resources/podcasts/inside-strategic-coach/153757843"
                target="_blank"
                rel="noopener noreferrer"
                class="hist__link"
              >This One Small Change Makes Every Day A Win</a>
              <span class="hist__cite-date">· March 24, 2026</span>
            </p>
            <blockquote class="hist__cite-quote">
              "I have to give credit for the idea to Lior Weinstein..."
            </blockquote>
            <p class="hist__cite-body">
              — Dan Sullivan. Sullivan explains that Weinstein arrived at this insight
              through parenting: not knowing what future his children would have, he
              focused on making sure they had "a great past." Sullivan recognized
              something precise and useful in that framing and began developing it in
              his own work.
            </p>
          </div>

          <!-- ─── SOURCE 2 ──────────────────────────────────────────────── -->
          <div class="hist__cite">
            <p class="hist__cite-show">Welcome to Cloudlandia · Dan Sullivan and Dean Jackson</p>
            <p class="hist__cite-meta">
              <a
                href="https://www.welcometocloudlandia.com/166"
                target="_blank"
                rel="noopener noreferrer"
                class="hist__link"
              >Ep166: The Great Yesterdays</a>
              <span class="hist__cite-date">· February 18, 2026</span>
            </p>
            <blockquote class="hist__cite-quote">
              "...it actually comes from Lior Weinstein."
            </blockquote>
            <p class="hist__cite-body">
              — Dan Sullivan. Sullivan describes the idea staying with him for roughly
              a year and a half before he began his own experiment — using each day
              to create a great yesterday. At the time of the recording he was on day 70.
              He describes the effects: stronger focus on the present, greater productivity,
              and less distraction from imagined futures.
            </p>
          </div>

          <!-- ─── SOURCE 3 ──────────────────────────────────────────────── -->
          <div class="hist__cite">
            <p class="hist__cite-show">Free Zone Frontier · Dan Sullivan and Steve Krein</p>
            <p class="hist__cite-meta">
              <a
                href="https://www.strategiccoach.com/resources/podcasts/free-zone-frontier/153825589"
                target="_blank"
                rel="noopener noreferrer"
                class="hist__link"
              >Make Every Day A Great Yesterday</a>
              <span class="hist__cite-date">· April 21, 2026</span>
            </p>
            <blockquote class="hist__cite-quote">
              "it wasn't something that I just suddenly thought up."
            </blockquote>
            <p class="hist__cite-body">
              — Dan Sullivan. Sullivan again credits Lior Weinstein and explains that
              his daily goal is that tomorrow morning, today will have become "a great
              yesterday." He connects this to staying present and reducing distraction
              from the future — the same present-focus that runs through his broader
              Gap and Gain framework.
            </p>
          </div>

          <!-- ─── 4. THE GAP AND THE GAIN ──────────────────────────────── -->
          <h2>The Gap and the Gain</h2>
          <p>
            Sullivan's most systematic treatment of measuring-backward thinking appears in
            <em>The Gap and the Gain</em> — a 2021 book he co-authored with Dr. Benjamin
            Hardy. The book distinguishes between two modes of measuring progress: against
            an ideal that keeps moving (the Gap) and from where you actually started
            (the Gain).
          </p>
          <p>
            The Gap and the Gain is Sullivan and Hardy's work. For the full argument and
            framework, read the book directly.
          </p>

          <div class="hist__source-box">
            <p class="hist__source-label">Go to the source</p>
            <p class="hist__source-body">
              <em>The Gap and the Gain</em> by Dan Sullivan and Dr. Benjamin Hardy (2021)
              is available from major booksellers. HaveAGreatYesterday.com is not affiliated
              with the authors, Strategic Coach, or the publisher. This is not a sponsored
              or affiliate link.
            </p>
          </div>

          <!-- ─── 5. RENÉ'S INDEPENDENT CHRONOLOGY ─────────────────────── -->
          <h2>René Estripeaut's independent practice</h2>
          <p>
            The MyHGY™ Method was developed through René Estripeaut's own practice over
            several years — before the connection to Sullivan's "Have a Great Yesterday"
            framing was made.
          </p>
          <p>
            René's practice began with gratitude exercises, Three Good Things work
            (as documented in Martin Seligman's positive psychology research), and
            structured daily reflection. Over time this became a habit of real-time capture:
            writing down, during and at the end of the day, what actually happened — what
            was done, what was handled, what was noticed. That habit of capture and
            preservation was already the core of what would become MyDopa™.
          </p>
          <p>
            René encountered Dan Sullivan's work — and the "Have a Great Yesterday" story —
            while this practice was already in development. The phrase named something the
            practice was already doing. The name fit. The practice was already there.
          </p>

          <!-- ─── 6. WHERE MYHGY™ BEGINS ────────────────────────────────── -->
          <h2>Where MyHGY™ begins — and how it differs</h2>
          <p>
            The MyHGY™ Method shares territory with Sullivan's framework but was developed
            independently and differs in several important ways.
          </p>
          <p>
            Sullivan's Gap and Gain is a mindset framework — a way of thinking about
            progress. The MyHGY™ Method is a continuing personal-development practice
            designed to be used in ordinary life — helping people return to what is real,
            act on what remains available, preserve lived evidence, and make progress
            visible over time.
          </p>
          <p>
            The method begins from where you actually are: not from a goal, not from an
            ideal, but from the present day. It asks what you did, what you handled, what
            you noticed, what was there alongside what was hard. It preserves that in a
            form you can return to. Done consistently, it builds a visible record of your
            own action, capability, and progress — evidence that the mind would otherwise
            lose.
          </p>
          <p>
            MyHGY™ is not a licensed version of Sullivan's framework. It is not affiliated
            with Strategic Coach, Dan Sullivan, Lior Weinstein, Dr. Benjamin Hardy, or any
            of their organizations. The conceptual overlap is real — the development is
            independent.
          </p>

          <!-- ─── 7. ACKNOWLEDGMENTS ────────────────────────────────────── -->
          <h2>Acknowledgments</h2>
          <p>
            Dan Sullivan and Lior Weinstein are acknowledged on this site for their roles
            in the history of the idea. The Hall of Fame entry for
            <NuxtLink to="/hall-of-fame/dan-sullivan" class="hist__link">Dan Sullivan</NuxtLink>
            covers his contributions and their relationship to the method in more detail.
          </p>
          <p>
            René Estripeaut's independent development is documented in the
            <NuxtLink to="/our-story" class="hist__link">Our Story</NuxtLink> section of
            this site.
          </p>

        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* ══════════════════════════════════════════════════════════════════════
   HERO
   ══════════════════════════════════════════════════════════════════════ */

.hist__hero-inner {
  max-width: var(--container-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.hist__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
}

.hist__eyebrow::after {
  content: '';
  display: block;
  width: 28px;
  height: 2px;
  background: var(--color-sun);
  margin-top: var(--space-2);
}

.hist__heading {
  font-family: var(--font-display);
  font-size: var(--text-display);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-display);
}

.hist__deck {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-muted-ink);
  max-width: 56ch;
}

/* ══════════════════════════════════════════════════════════════════════
   BODY CONTENT
   ══════════════════════════════════════════════════════════════════════ */

.hist__content {
  max-width: var(--container-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.hist__content h2 {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: var(--weight-bold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
  padding-top: var(--space-6);
  border-top: 1px solid var(--color-stone);
  margin-top: var(--space-4);
}

.hist__content p {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

.hist__link {
  color: var(--color-ink);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: var(--color-sun);
  transition: color var(--transition-fast);
}

.hist__link:hover {
  color: var(--color-muted-ink);
}

/* ── Citation blocks ────────────────────────────────────────────────── */

.hist__cite {
  border-left: 4px solid var(--color-sun);
  background: var(--color-warm-paper);
  border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.hist__cite-show {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
}

.hist__cite-quote {
  font-family: var(--font-display);
  font-size: var(--text-body-lg);
  font-weight: var(--weight-bold);
  font-style: italic;
  color: var(--color-ink);
  line-height: var(--lh-heading);
  margin: 0;
  padding: 0;
}

.hist__cite-meta {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: var(--space-1);
}

.hist__cite-date {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: var(--color-muted-ink);
}

.hist__cite-body {
  font-family: var(--font-body);
  font-size: var(--text-body) !important;
  line-height: var(--lh-body);
  color: var(--color-ink) !important;
}

/* ── Source box ─────────────────────────────────────────────────────── */

.hist__source-box {
  background: var(--color-stone);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.hist__source-label {
  font-family: var(--font-body);
  font-size: var(--text-xs) !important;
  font-weight: var(--weight-semibold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-muted-ink) !important;
}

.hist__source-body {
  font-family: var(--font-body);
  font-size: var(--text-small) !important;
  line-height: var(--lh-body);
  color: var(--color-ink) !important;
}
</style>
