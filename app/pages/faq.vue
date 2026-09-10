<script setup lang="ts">
const { public: { siteUrl } } = useRuntimeConfig()

usePageSeo({
  title: 'Daily Personal Development FAQs | MyHGY™',
  description: 'Answers to common questions about daily personal development, the MyHGY™ Method, noticing meaningful experiences, preserving evidence, and making personal progress visible.',
  path: '/faq',
})

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Daily Personal Development FAQs | MyHGY™',
  url: `${siteUrl}/faq`,
  description: 'Answers to common questions about daily personal development, the MyHGY™ Method, noticing meaningful experiences, preserving evidence, and making personal progress visible.',
})
</script>

<template>
  <article class="faq bg-warm-paper" aria-labelledby="faq-heading">

    <!-- ── Hero ───────────────────────────────────────────── -->
    <section class="faq__hero">
      <div class="container container--md faq__hero-inner">
        <h1 id="faq-heading" class="faq__h1">
          Frequently Asked Questions About Daily Personal Development
        </h1>
        <div class="faq__intro">
          <p>Personal development gives us ideas, insights, and new ways of seeing ourselves. But understanding something once is different from practicing it every day.</p>
          <p>MyHGY™ is built around a simple idea: <strong>personal development deserves a practice.</strong></p>
          <p>These questions explain how that practice works, why noticing and preserving lived experience matters, and how a growing record of real life can make personal progress easier to see.</p>
        </div>
      </div>
    </section>

    <!-- ── FAQ body ───────────────────────────────────────── -->
    <div class="faq__body">
      <div class="container container--md">

        <!-- SECTION 1 -->
        <section class="faq__section" aria-labelledby="section-practice">
          <h2 id="section-practice" class="faq__section-heading">Personal Development as a Daily Practice</h2>

          <div class="faq__entry">
            <h3 class="faq__question">1. How do I practice personal development every day?</h3>
            <p class="faq__answer">A simple way to practice personal development every day is to notice at least three good things while they are happening, write each one down, and repeat the process every day. This is the core of the MyHGY™ Method. Instead of only learning about personal development, you create a daily practice from your own lived experience.</p>
          </div>

          <div class="faq__entry">
            <h3 class="faq__question">2. What is a simple daily personal development practice?</h3>
            <p class="faq__answer">The MyHGY™ Method is a simple daily personal-development practice: notice at least three good things while they are happening, write each one down close to the moment, and do it every day. The moments can be accomplishments, conversations, experiences, decisions, observations, or small things you simply enjoyed.</p>
          </div>

          <div class="faq__entry">
            <h3 class="faq__question">3. How can I make personal development something I actually practice?</h3>
            <p class="faq__answer">Move personal development out of books, podcasts, and ideas and into something you do during your actual day. The MyHGY™ Method asks you to notice meaningful positive moments as they happen and preserve them in writing. Personal development becomes a practice when it becomes something you repeatedly do, not only something you understand.</p>
          </div>

          <div class="faq__entry">
            <h3 class="faq__question">4. What should I write down every day for personal growth?</h3>
            <p class="faq__answer">Write down at least three good things that actually happened during the day. They can include something you accomplished, a difficult situation you handled, an enjoyable experience, a meaningful conversation, a compliment, a decision you feel good about, or a small moment you want to remember.</p>
          </div>

          <div class="faq__entry">
            <h3 class="faq__question">5. How can I become more aware of the good things happening in my life?</h3>
            <p class="faq__answer">Start looking for them while your day is still happening. When you notice something good, stop briefly and write it down instead of trusting yourself to remember it later. Repeating this every day gives your attention a reason to keep noticing experiences that might otherwise pass without being preserved.</p>
          </div>

          <div class="faq__entry">
            <h3 class="faq__question">6. How do I stop good moments from disappearing from memory?</h3>
            <p class="faq__answer">Capture them when they happen. A good conversation, a small accomplishment, a laugh with someone you love, or a moment of pride can become difficult to remember once the day moves on. Writing the moment down gives you a record that still exists after the feeling has passed.</p>
          </div>

          <div class="faq__entry">
            <h3 class="faq__question">7. How can I remember more of the good things that happen to me?</h3>
            <p class="faq__answer">Keep a simple way to capture moments available throughout your day and record good experiences close to when they happen. Do not depend entirely on remembering everything later. The MyHGY™ Method makes capturing the experience part of paying attention to the experience.</p>
          </div>

          <div class="faq__entry">
            <h3 class="faq__question">8. Why do I forget so many of the good things that happen to me?</h3>
            <p class="faq__answer">Many ordinary positive experiences are brief and receive very little deliberate attention. Unless something causes you to stop, notice, and preserve them, they can quickly blend into the rest of the day. MyHGY creates a simple interruption: notice it, capture it, and preserve it.</p>
          </div>

          <div class="faq__entry">
            <h3 class="faq__question">9. How can I train myself to notice what is going well?</h3>
            <p class="faq__answer">Give yourself a daily minimum: find and capture at least three good things every day. The purpose is not to pretend everything is good. It is to become more deliberate about noticing positive evidence that is already present in your life.</p>
          </div>
        </section>

        <!-- SECTION 2 -->
        <section class="faq__section" aria-labelledby="section-different">
          <h2 id="section-different" class="faq__section-heading">How the MyHGY™ Method Is Different</h2>

          <div class="faq__entry">
            <h3 class="faq__question">10. What is an alternative to keeping a gratitude journal?</h3>
            <p class="faq__answer">The MyHGY™ Method is an alternative for people who want a more real-time personal-development practice. Instead of waiting until later and trying to generate things to feel grateful for, you notice good experiences while they are actually happening and preserve them. The emphasis is on capturing lived evidence from the day.</p>
          </div>

          <div class="faq__entry">
            <h3 class="faq__question">11. Is MyHGY a gratitude practice?</h3>
            <p class="faq__answer">No. Gratitude can certainly appear in MyHGY, but the practice is broader. You might capture something you accomplished, something funny that happened, a difficult conversation you handled well, a great meal, an unexpected compliment, a decision, a beautiful moment, or something involving someone you love.</p>
          </div>

          <div class="faq__entry">
            <h3 class="faq__question">12. What is the MyHGY Method?</h3>
            <p class="faq__answer">The MyHGY™ Method is a daily personal-development practice built around repeatedly returning to reality, identifying what remains within your control, choosing a direction, taking constructive action, and preserving meaningful evidence from your life as it happens. A central daily practice is noticing and writing down at least three good things every day.</p>
            <p class="faq__link-line">
              <NuxtLink to="/method" class="faq__inline-link">Explore the full MyHGY™ Method →</NuxtLink>
            </p>
          </div>

          <div class="faq__entry">
            <h3 class="faq__question">13. What does "Have a Great Yesterday" mean?</h3>
            <p class="faq__answer">"Have a Great Yesterday" shifts attention toward what actually happened rather than only toward what you hope will happen next. The idea is simple: live today in a way that gives you real experiences worth noticing and preserving, so tomorrow you have evidence of a yesterday worth remembering.</p>
          </div>

          <div class="faq__entry">
            <h3 class="faq__question">14. Why should I write good things down while they are happening?</h3>
            <p class="faq__answer">Because capturing is part of the practice. Writing something down close to the moment makes you stop long enough to notice the experience deliberately. Waiting until much later changes the exercise from paying attention to your day into trying to reconstruct your day from memory.</p>
          </div>

          <div class="faq__entry">
            <h3 class="faq__question">15. Do I have to capture the moments in real time?</h3>
            <p class="faq__answer">Real-time or near-real-time capture is an important part of the MyHGY™ practice. Notice the experience while it is happening or close enough afterward that the detail is still alive. The objective is to practice noticing, not simply to produce an end-of-day list.</p>
          </div>

          <div class="faq__entry">
            <h3 class="faq__question">16. How many good things should I write down each day?</h3>
            <p class="faq__answer">The MyHGY™ Method uses a minimum of three good things every day. Three is the floor, not the ceiling. Some days you may capture many more, but the daily minimum keeps the practice simple enough to repeat consistently.</p>
          </div>

          <div class="faq__entry">
            <h3 class="faq__question">17. What counts as a "good thing"?</h3>
            <p class="faq__answer">Anything from your lived experience that you genuinely consider positive can count. It might be an accomplishment, a connection, an enjoyable experience, progress on something important, a kind gesture, a great conversation, an insight, a laugh, a beautiful view, or something as simple as an excellent cup of coffee.</p>
          </div>

          <div class="faq__entry">
            <h3 class="faq__question">18. Do small positive moments count?</h3>
            <p class="faq__answer">Absolutely. Small moments are important because they are also among the easiest experiences to lose. A hug, finishing something you had been avoiding, hearing a favorite song, getting good news, enjoying a meal, or laughing with someone can all be worth capturing.</p>
          </div>

          <div class="faq__entry">
            <h3 class="faq__question">19. Do accomplishments and personal wins count?</h3>
            <p class="faq__answer">Yes. Accomplishments, decisions, follow-through, difficult things you handled, and moments when you recognize personal progress all belong in the practice. MyHGY is not limited to pleasant experiences; it also helps preserve evidence of things you made happen.</p>
          </div>

          <div class="faq__entry">
            <h3 class="faq__question">20. What should I do on a bad day?</h3>
            <p class="faq__answer">Do not pretend the day was good. Look for three things within the real day that were genuinely worth preserving. A difficult day can still contain a helpful conversation, something you handled well, someone who showed up for you, a small pleasure, or a moment that mattered.</p>
          </div>

          <div class="faq__entry">
            <h3 class="faq__question">21. Does MyHGY mean I should ignore negative experiences?</h3>
            <p class="faq__answer">No. MyHGY does not ask you to deny problems or reinterpret negative experiences as positive ones. The Method begins with reality. It creates a deliberate practice of also noticing meaningful positive evidence that can otherwise receive too little attention.</p>
          </div>
        </section>

        <!-- SECTION 3 -->
        <section class="faq__section" aria-labelledby="section-evidence">
          <h2 id="section-evidence" class="faq__section-heading">Consistency, Reflection, and Evidence</h2>

          <div class="faq__entry">
            <h3 class="faq__question">22. How long should I practice MyHGY?</h3>
            <p class="faq__answer">Think of MyHGY as an ongoing personal-development practice rather than a short challenge with a finish line. The value comes from repetition. Every day adds lived experiences to the record and gives you another opportunity to practice noticing.</p>
          </div>

          <div class="faq__entry">
            <h3 class="faq__question">23. How can I stay consistent with a daily personal development practice?</h3>
            <p class="faq__answer">Keep the practice simple and keep your capture method close to you. Your basic daily commitment is to notice and record at least three good things. The simplicity makes the practice easier to return to even during busy or difficult periods.</p>
          </div>

          <div class="faq__entry">
            <h3 class="faq__question">24. When should I review the things I have written down?</h3>
            <p class="faq__answer">Revisit your captures periodically to see experiences, accomplishments, people, and patterns that are easy to miss when looking at life one day at a time. Reading older entries can turn isolated moments into a larger picture of what has actually been happening in your life.</p>
          </div>

          <div class="faq__entry">
            <h3 class="faq__question">25. How can I see evidence that I am making progress as a person?</h3>
            <p class="faq__answer">Start preserving evidence from your actual life. Record accomplishments, decisions, difficult situations you handled, moments of follow-through, meaningful experiences, and other signs of movement as they happen. Over time, individual moments can become a visible record of progress that memory alone may not preserve.</p>
            <p class="faq__link-line">
              <NuxtLink to="/mydopa" class="faq__inline-link">MyDopa™ is a companion tool designed to make that visible record easier to build and review →</NuxtLink>
            </p>
          </div>

          <div class="faq__entry">
            <h3 class="faq__question">26. How can I stop feeling like my personal growth is invisible?</h3>
            <p class="faq__answer">Make more of it visible. Personal growth often happens through small decisions, conversations, experiences, and moments of follow-through rather than one dramatic transformation. Capturing those moments gives you something concrete to return to instead of relying only on how you feel about your progress today.</p>
          </div>

          <div class="faq__entry">
            <h3 class="faq__question">27. How can I build confidence from evidence instead of positive thinking?</h3>
            <p class="faq__answer">Keep evidence of what you have actually done, handled, experienced, and learned. Confidence does not have to depend only on telling yourself something positive. A growing record of real experiences gives you something from your own life to point to.</p>
          </div>

          <div class="faq__entry">
            <h3 class="faq__question">28. How do I know whether all the work I am doing on myself is adding up?</h3>
            <p class="faq__answer">Look beyond individual days and individual activities. The book you finished, conversation you handled, decision you made, promise you kept, experience you appreciated, and challenge you worked through may seem unrelated in the moment. Preserving them creates a record from which a larger pattern can become visible.</p>
          </div>

          <div class="faq__entry">
            <h3 class="faq__question">29. How can I reflect on yesterday without dwelling on the past?</h3>
            <p class="faq__answer">Use yesterday as evidence, not as a place to live. Look back at what actually happened, notice what was meaningful, and carry that awareness into today. The purpose of reviewing yesterday is to gain a clearer view of your life and then continue moving forward.</p>
          </div>
        </section>

        <!-- SECTION 4 -->
        <section class="faq__section" aria-labelledby="section-start">
          <h2 id="section-start" class="faq__section-heading">Starting the Practice</h2>

          <div class="faq__entry faq__entry--last">
            <h3 class="faq__question">30. What is the easiest way to start the MyHGY Method today?</h3>
            <p class="faq__answer">Choose a simple way to capture your experiences. During the rest of your day, notice at least three good things while they are happening and write each one down close to the moment. Tomorrow, do it again. That is enough to begin.</p>

            <div class="faq__cta-block">
              <p class="faq__cta-prompt">Ready to see where MyHGY fits your actual life?</p>
              <NuxtLink to="/what-are-you-going-through" class="faq__cta">
                Show me what I can do from here.
              </NuxtLink>
            </div>
          </div>
        </section>

      </div>
    </div>

  </article>
</template>

<style scoped>
/* ── Page wrapper ─────────────────────────────────────── */
.faq {
  min-height: 100vh;
}

/* ── Hero ─────────────────────────────────────────────── */
.faq__hero {
  padding-block: var(--space-16) var(--space-12);
  border-bottom: 1px solid rgba(17, 17, 17, 0.07);
}

.faq__hero-inner {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.faq__h1 {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  line-height: var(--lh-heading);
  color: var(--color-ink);
  max-width: 24ch;
}

.faq__intro {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  max-width: 60ch;
}

.faq__intro p {
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

.faq__intro strong {
  font-weight: var(--weight-semibold);
}

/* ── Body ─────────────────────────────────────────────── */
.faq__body {
  padding-block: var(--space-12) var(--space-20);
}

/* ── Sections ─────────────────────────────────────────── */
.faq__section {
  margin-bottom: var(--space-16);
}

.faq__section:last-child {
  margin-bottom: 0;
}

.faq__section-heading {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: var(--weight-bold);
  line-height: var(--lh-heading);
  color: var(--color-ink);
  padding-top: var(--space-8);
  border-top: 2px solid var(--color-sun);
  margin-bottom: var(--space-10);
  max-width: 44ch;
}

/* ── Q&A entries ──────────────────────────────────────── */
.faq__entry {
  padding-bottom: var(--space-8);
  margin-bottom: var(--space-8);
  border-bottom: 1px solid rgba(17, 17, 17, 0.07);
}

.faq__entry--last {
  border-bottom: none;
  margin-bottom: 0;
}

.faq__question {
  font-family: var(--font-display);
  font-size: var(--text-body-lg);
  font-weight: var(--weight-bold);
  line-height: var(--lh-heading);
  color: var(--color-ink);
  margin-bottom: var(--space-4);
}

.faq__answer {
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
  max-width: 68ch;
}

/* ── Inline links after specific answers ──────────────── */
.faq__link-line {
  margin-top: var(--space-4);
}

.faq__inline-link {
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: var(--weight-medium);
  color: var(--color-ink);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: var(--color-sun);
  text-decoration-thickness: 2px;
  transition: color var(--transition-fast);
}

.faq__inline-link:hover {
  color: var(--color-muted-ink);
}

/* ── Q30 CTA block ────────────────────────────────────── */
.faq__cta-block {
  margin-top: var(--space-8);
  padding: var(--space-8);
  background: var(--color-paper);
  border: 1px solid rgba(17, 17, 17, 0.08);
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  align-items: flex-start;
  max-width: var(--container-sm);
}

.faq__cta-prompt {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: var(--weight-bold);
  line-height: var(--lh-heading);
  color: var(--color-ink);
  max-width: 28ch;
}

.faq__cta {
  display: inline-flex;
  align-items: center;
  background: var(--color-ink);
  color: var(--color-paper);
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: var(--weight-semibold);
  text-decoration: none;
  padding: var(--space-4) var(--space-8);
  border-radius: var(--radius-full);
  min-height: 48px;
  transition: background var(--transition-fast), color var(--transition-fast);
}

.faq__cta:hover {
  background: var(--color-sun);
  color: var(--color-ink);
}

/* ── Mobile ───────────────────────────────────────────── */
@media (max-width: 640px) {
  .faq__hero {
    padding-block: var(--space-10) var(--space-8);
  }

  .faq__body {
    padding-block: var(--space-8) var(--space-16);
  }

  .faq__entry {
    padding-bottom: var(--space-6);
    margin-bottom: var(--space-6);
  }

  .faq__cta-block {
    padding: var(--space-6);
  }
}
</style>
