<script setup lang="ts">
usePageSeo({
  title: 'MyHGY for Therapists, Coaches & Helping Professionals',
  description: 'MyHGY is a simple personal-development practice professionals can share with people they support between meaningful conversations. Explore the practice, evidence, and professional resources.',
  path: '/for-professionals',
})

const { public: { siteUrl, apiBase } } = useRuntimeConfig()
const { $posthog } = useNuxtApp()

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'MyHGY for Therapists, Coaches & Helping Professionals',
  url: `${siteUrl}/for-professionals`,
  description: 'MyHGY is a simple personal-development practice professionals can share with people they support between meaningful conversations.',
})

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const formState = ref<FormState>('idle')
const form = reactive({
  firstName: '',
  email: '',
  role: '',
  specialty: '',
  audience: '',
  feedback: '',
  consent: false,
})

const isValid = computed(() =>
  form.firstName.trim().length > 0
  && form.email.trim().length > 0
  && form.email.includes('@')
  && form.role.length > 0
  && form.consent,
)

async function submit() {
  if (formState.value === 'submitting' || !isValid.value) return
  formState.value = 'submitting'

  try {
    const res = await fetch(`${apiBase}/api/capture-professional`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: form.firstName.trim(),
        email: form.email.trim(),
        role: form.role,
        specialty: form.specialty.trim(),
        audience: form.audience,
        feedback: form.feedback.trim(),
        consent: form.consent,
      }),
    })

    if (!res.ok) throw new Error(`capture_failed: ${res.status}`)

    if ($posthog.__loaded) {
      $posthog.capture('professional_community_joined')
    }

    formState.value = 'success'
  }
  catch {
    formState.value = 'error'
  }
}

function retry() {
  formState.value = 'idle'
}

function trackGuideAccess() {
  if ($posthog.__loaded) {
    $posthog.capture('professional_guide_accessed')
  }
}
</script>

<template>
  <div class="fp-page">

    <!-- ═══ 1. HERO ════════════════════════════════════════════════════ -->
    <section class="fph section--lg bg-warm-paper" aria-labelledby="fp-heading">
      <div class="container">
        <div class="fph__inner">
          <p class="fph__eyebrow">For therapists, psychologists, coaches, and professionals helping people grow.</p>
          <h1 id="fp-heading" class="fph__heading">
            The conversation ends. Life continues.
          </h1>
          <div class="fph__body">
            <p>A therapy session ends. A coaching conversation finishes. A workshop concludes. A useful insight lands.</p>
            <p>Then the person returns to ordinary life.</p>
            <p>MyHGY™ is a simple personal-development practice for what happens next.</p>
            <p>It helps people notice meaningful moments while they are happening, preserve them before they disappear, and build a fuller record of their own life and progress over time.</p>
          </div>
          <p class="fph__emphasis">Personal development deserves a practice.</p>
        </div>
      </div>
    </section>

    <!-- ═══ 2. THE PRACTICE ══════════════════════════════════════════ -->
    <section class="fpp section--lg bg-paper" aria-labelledby="fpp-heading">
      <div class="container">
        <div class="fpp__inner">
          <h2 id="fpp-heading" class="fpp__heading">Simple enough to begin today.</h2>

          <div class="fpp__body">
            <p>The MyHGY practice is:</p>
          </div>

          <blockquote class="fpp__statement">
            "Notice at least three good things while they are happening. Write each one down immediately. Repeat the practice every day."
          </blockquote>

          <div class="fpp__body">
            <p>A good thing can be small.</p>
            <p>A difficult conversation handled well. A useful decision. A task completed. A moment of connection. A clear morning. Asking for help. Returning after a difficult day. A laugh with someone they love.</p>
            <p>The purpose is not to manufacture positivity.</p>
            <p>It is to preserve meaningful lived evidence that might otherwise disappear.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ 3. GUIDE PREVIEW ══════════════════════════════════════════ -->
    <section class="fpgp section--lg bg-stone" aria-labelledby="fpgp-heading">
      <div class="container">
        <div class="fpgp__inner">
          <h2 id="fpgp-heading" class="fpgp__heading">Something you can share today.</h2>
          <p class="fpgp__intro">
            We created the MyHGY Professional Practice Guide as a simple resource you can share with someone you support.
          </p>

          <div class="fpgp__preview">
            <p class="fpgp__preview-label">Inside the guide</p>
            <ul class="fpgp__list" role="list">
              <li class="fpgp__item">
                <p class="fpgp__item-title">Why the practice exists</p>
                <p class="fpgp__item-desc">Important conversations can create insight, but ordinary life continues afterward.</p>
              </li>
              <li class="fpgp__item">
                <p class="fpgp__item-title">What to do</p>
                <p class="fpgp__item-desc">Notice at least three real good things while they are happening and write them down immediately.</p>
              </li>
              <li class="fpgp__item">
                <p class="fpgp__item-title">What counts</p>
                <p class="fpgp__item-desc">Connection, capability, courage, progress, enjoyment, recovery, contribution, learning, or another meaningful positive signal from ordinary life.</p>
              </li>
              <li class="fpgp__item">
                <p class="fpgp__item-title">What happens after a missed day</p>
                <p class="fpgp__item-desc">Begin again with the next available moment. Returning is part of the practice.</p>
              </li>
              <li class="fpgp__item">
                <p class="fpgp__item-title">What this is</p>
                <p class="fpgp__item-desc">A personal-development practice designed to help people notice and preserve more of what is actually happening in their lives.</p>
              </li>
            </ul>
          </div>

          <p class="fpgp__access-note">Register below to receive the complete guide.</p>
        </div>
      </div>
    </section>

    <!-- ═══ 4. WHY THIS MAY MATTER ════════════════════════════════════ -->
    <section class="fpwm section--lg bg-paper" aria-labelledby="fpwm-heading">
      <div class="container">
        <div class="fpwm__inner">
          <h2 id="fpwm-heading" class="fpwm__heading">A fuller record of what happens in between.</h2>
          <div class="fpwm__body">
            <p>Human attention and memory do not preserve every meaningful moment equally.</p>
            <p>Small signs of capability, connection, progress, courage, recovery, and follow-through can happen during the week and disappear before the next important conversation.</p>
            <p>Writing helps preserve those moments.</p>
            <p>Over time, accumulated lived evidence can give a person a more representative record of what they have experienced, chosen, handled, and moved through.</p>
            <p>MyHGY does not replace the professional conversation.</p>
            <p>It gives the person something useful to practice between conversations.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ 5. EVIDENCE & BOUNDARIES ════════════════════════════════ -->
    <section class="fpe section--lg bg-warm-paper" aria-labelledby="fpe-heading">
      <div class="container">
        <div class="fpe__inner">
          <h2 id="fpe-heading" class="fpe__heading">Built around established ideas. Not presented as clinical treatment.</h2>

          <div class="fpe__body">
            <p>MyHGY draws on established research and ideas around deliberate attention, written recording, small wins, progress monitoring, savoring, self-efficacy, continuity, and visible evidence.</p>
            <div class="fpe__citation">
              <p>A meta-analysis by Harkin and colleagues covering 138 studies and 19,951 participants found that interventions designed to increase progress monitoring improved goal attainment, with stronger effects when progress was physically recorded. MyHGY is not a goal-monitoring intervention, but the finding supports the broader principle that deliberately recording information can make it persistent and usable across time.</p>
              <a href="https://doi.org/10.1037/bul0000025" class="fpe__source" target="_blank" rel="noopener noreferrer">Harkin et al., Psychological Bulletin (2016) ↗</a>
            </div>
            <div class="fpe__citation">
              <p>Teresa Amabile and Steven Kramer's research on progress in meaningful work found that even small signs of progress can meaningfully affect people's experience of their workday and that these small wins are often overlooked. MyHGY applies a broader version of that insight to ordinary lived evidence.</p>
              <a href="https://hbr.org/2011/05/the-power-of-small-wins" class="fpe__source" target="_blank" rel="noopener noreferrer">Amabile &amp; Kramer, Harvard Business Review (2011) ↗</a>
            </div>
          </div>

          <div class="fpe__claims-boundary">
            <p>These studies support components of the MyHGY mechanism. They do not constitute clinical validation of the MyHGY Method itself.</p>
          </div>

          <div class="fpe__professional-boundary">
            <p>MyHGY is a personal-development practice. It is not therapy, diagnosis, medical treatment, crisis care, or a replacement for qualified professional support.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ 6. PROFESSIONAL COMMUNITY ════════════════════════════════ -->
    <section class="fpcm section--lg bg-stone" aria-labelledby="fpcm-heading">
      <div class="container">
        <div class="fpcm__inner">
          <h2 id="fpcm-heading" class="fpcm__heading">Help us make this more useful.</h2>

          <div class="fpcm__intro">
            <p>We want MyHGY and MyDopa™ to learn from the people already helping others grow.</p>
            <p>If this work is relevant to what you do, join our professional community.</p>
          </div>

          <div class="fpcm__receives">
            <p class="fpcm__receives-label">What you receive</p>
            <ul class="fpcm__tiers" role="list">
              <li class="fpcm__tier">
                <span class="fpcm__tier-when">Now</span>
                <span class="fpcm__tier-what">The complete MyHGY Professional Practice Guide.</span>
              </li>
              <li class="fpcm__tier">
                <span class="fpcm__tier-when">Over time</span>
                <span class="fpcm__tier-what">New professional resources and relevant research.</span>
              </li>
              <li class="fpcm__tier">
                <span class="fpcm__tier-when">As we build</span>
                <span class="fpcm__tier-what">Occasional early looks at MyHGY and MyDopa developments.</span>
              </li>
              <li class="fpcm__tier">
                <span class="fpcm__tier-when">When relevant</span>
                <span class="fpcm__tier-what">Focused invitations to give feedback.</span>
              </li>
              <li class="fpcm__tier">
                <span class="fpcm__tier-when">Later</span>
                <span class="fpcm__tier-what">Selected opportunities to participate in pilots, product evaluation, or research collaborations.</span>
              </li>
            </ul>
          </div>

          <p class="fpcm__note">
            We will use professional role and specialty information to make those invitations more relevant.
          </p>
        </div>
      </div>
    </section>

    <!-- ═══ 7. FORM + 8. SUCCESS STATE ══════════════════════════════ -->
    <section class="fpf section--lg bg-warm-paper" aria-labelledby="fpf-heading">
      <div class="container">
        <div class="fpf__inner">

          <!-- SUCCESS -->
          <div v-if="formState === 'success'" class="fpf__success" role="status">
            <h2 class="fpf__success-heading">Thank you.</h2>
            <p class="fpf__success-subhead">Your MyHGY Professional Practice Guide is ready.</p>
            <p class="fpf__success-message">
              From time to time, we will share relevant research, professional resources,
              meaningful developments in MyHGY and MyDopa, and opportunities to contribute
              when they match your work.
            </p>
            <p class="fpf__success-setup">Our goal is simple:</p>
            <p class="fpf__success-mission">
              Build something genuinely useful for the space between meaningful conversations.
            </p>
            <NuxtLink
              to="/professional-practice-guide"
              class="fpf__guide-cta"
              @click="trackGuideAccess"
            >
              Access the Guide
            </NuxtLink>
          </div>

          <!-- FORM -->
          <template v-else>
            <h2 id="fpf-heading" class="fpf__heading">Join the MyHGY Professional Community</h2>

            <form class="fpf__form" novalidate @submit.prevent="submit">

              <div class="fpf__row fpf__row--half">
                <div class="fpf__field">
                  <label for="fp-firstName" class="fpf__label">Name <span aria-hidden="true">*</span></label>
                  <input
                    id="fp-firstName"
                    v-model="form.firstName"
                    type="text"
                    class="fpf__input"
                    autocomplete="given-name"
                    required
                    :disabled="formState === 'submitting'"
                  />
                </div>
                <div class="fpf__field">
                  <label for="fp-email" class="fpf__label">Professional email <span aria-hidden="true">*</span></label>
                  <input
                    id="fp-email"
                    v-model="form.email"
                    type="email"
                    class="fpf__input"
                    autocomplete="email"
                    required
                    :disabled="formState === 'submitting'"
                  />
                </div>
              </div>

              <div class="fpf__field">
                <label for="fp-role" class="fpf__label">Role / profession <span aria-hidden="true">*</span></label>
                <select
                  id="fp-role"
                  v-model="form.role"
                  class="fpf__input fpf__select"
                  required
                  :disabled="formState === 'submitting'"
                >
                  <option value="" disabled>Select your role</option>
                  <option>Therapist</option>
                  <option>Psychologist</option>
                  <option>Psychiatrist</option>
                  <option>Coach</option>
                  <option>Executive coach</option>
                  <option>Counselor</option>
                  <option>Educator</option>
                  <option>L&D professional</option>
                  <option>Organizational leader</option>
                  <option>Other</option>
                </select>
              </div>

              <div class="fpf__row fpf__row--half">
                <div class="fpf__field">
                  <label for="fp-specialty" class="fpf__label">Primary specialty or focus</label>
                  <input
                    id="fp-specialty"
                    v-model="form.specialty"
                    type="text"
                    class="fpf__input"
                    placeholder="e.g. grief, anxiety, career transitions"
                    :disabled="formState === 'submitting'"
                  />
                </div>
                <div class="fpf__field">
                  <label for="fp-audience" class="fpf__label">Who do you primarily work with?</label>
                  <select
                    id="fp-audience"
                    v-model="form.audience"
                    class="fpf__input fpf__select"
                    :disabled="formState === 'submitting'"
                  >
                    <option value="">Select one (optional)</option>
                    <option>Individuals</option>
                    <option>Couples</option>
                    <option>Families</option>
                    <option>Executives</option>
                    <option>Teams</option>
                    <option>Organizations</option>
                    <option>Students</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div class="fpf__field">
                <label for="fp-feedback" class="fpf__label">What would make MyHGY or MyDopa more useful for the people you work with?</label>
                <textarea
                  id="fp-feedback"
                  v-model="form.feedback"
                  class="fpf__input fpf__textarea"
                  rows="4"
                  placeholder="Optional — share your thoughts."
                  :disabled="formState === 'submitting'"
                />
              </div>

              <div class="fpf__consent">
                <label class="fpf__consent-label">
                  <input
                    v-model="form.consent"
                    type="checkbox"
                    class="fpf__checkbox"
                    :disabled="formState === 'submitting'"
                  />
                  <span>
                    I agree to receive occasional updates from HaveAGreatYesterday.com.
                    No spam. Unsubscribe anytime.
                  </span>
                </label>
              </div>

              <div v-if="formState === 'error'" class="fpf__error" role="alert">
                Something went wrong. Please try again.
                <button type="button" class="fpf__retry" @click="retry">Retry</button>
              </div>

              <button
                type="submit"
                class="fpf__submit"
                :disabled="!isValid || formState === 'submitting'"
              >
                {{ formState === 'submitting' ? 'Sending…' : 'Help Us Make This More Useful' }}
              </button>

              <p class="fpf__required-note">* Required fields</p>
            </form>
          </template>

        </div>
      </div>
    </section>

    <!-- ═══ 9. CLOSE ══════════════════════════════════════════════════ -->
    <section class="fpcl section--lg bg-ink" aria-label="Closing">
      <div class="container">
        <div class="fpcl__inner">
          <p class="fpcl__primary">
            <InlineWordmark variant="dark" /> teaches the practice.
            <InlineMyDopa /> provides the equipment.
          </p>
          <p class="fpcl__boundary">
            MyHGY remains a personal-development practice and is not therapy, diagnosis, treatment, or crisis care.
          </p>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>

/* ══════════════════════════════════════════════════════════════════════
   1. HERO
   ══════════════════════════════════════════════════════════════════════ */

.fph__inner {
  max-width: var(--container-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.fph__eyebrow {
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: var(--color-muted-ink);
  line-height: var(--lh-body);
}

.fph__eyebrow::after {
  content: '';
  display: block;
  width: 28px;
  height: 2px;
  background: var(--color-sun);
  margin-top: var(--space-2);
}

.fph__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.fph__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.fph__body p {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

.fph__emphasis {
  font-family: var(--font-display);
  font-size: var(--text-body-lg);
  font-weight: var(--weight-bold);
  font-style: italic;
  color: var(--color-muted-ink);
}


/* ══════════════════════════════════════════════════════════════════════
   2. THE PRACTICE
   ══════════════════════════════════════════════════════════════════════ */

.fpp__inner {
  max-width: var(--container-md);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.fpp__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.fpp__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.fpp__body p {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

.fpp__statement {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: var(--weight-bold);
  font-style: italic;
  color: var(--color-ink);
  line-height: var(--lh-heading);
  border-left: 4px solid var(--color-sun);
  padding: var(--space-4) var(--space-6);
  margin: 0;
}


/* ══════════════════════════════════════════════════════════════════════
   3. GUIDE PREVIEW
   ══════════════════════════════════════════════════════════════════════ */

.fpgp__inner {
  max-width: var(--container-md);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.fpgp__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.fpgp__intro {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

.fpgp__preview {
  background: var(--color-paper);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.fpgp__preview-label {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
  padding: var(--space-5) var(--space-6);
  border-bottom: 1px solid rgba(17, 17, 17, 0.08);
}

.fpgp__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.fpgp__item {
  padding: var(--space-5) var(--space-6);
  border-bottom: 1px solid rgba(17, 17, 17, 0.06);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.fpgp__item:last-child {
  border-bottom: none;
}

.fpgp__item-title {
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: var(--weight-semibold);
  color: var(--color-ink);
}

.fpgp__item-desc {
  font-family: var(--font-body);
  font-size: var(--text-body);
  line-height: var(--lh-body);
  color: var(--color-muted-ink);
}

.fpgp__access-note {
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: var(--color-muted-ink);
  font-style: italic;
}


/* ══════════════════════════════════════════════════════════════════════
   4. WHY THIS MAY MATTER
   ══════════════════════════════════════════════════════════════════════ */

.fpwm__inner {
  max-width: var(--container-md);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.fpwm__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.fpwm__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.fpwm__body p {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
}


/* ══════════════════════════════════════════════════════════════════════
   5. EVIDENCE & BOUNDARIES
   ══════════════════════════════════════════════════════════════════════ */

.fpe__inner {
  max-width: var(--container-md);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-10);
}

.fpe__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.fpe__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.fpe__body p {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

.fpe__claims-boundary {
  border-left: 4px solid var(--color-sun);
  padding: var(--space-2) var(--space-6);
}

.fpe__claims-boundary p {
  font-family: var(--font-body);
  font-size: var(--text-body);
  line-height: var(--lh-body);
  color: var(--color-muted-ink);
  font-style: italic;
}

.fpe__citation {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.fpe__source {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: var(--color-muted-ink);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.fpe__source:hover {
  color: var(--color-ink);
}

.fpe__professional-boundary p {
  font-family: var(--font-body);
  font-size: var(--text-body);
  line-height: var(--lh-body);
  color: var(--color-muted-ink);
}


/* ══════════════════════════════════════════════════════════════════════
   6. PROFESSIONAL COMMUNITY
   ══════════════════════════════════════════════════════════════════════ */

.fpcm__inner {
  max-width: var(--container-md);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-10);
}

.fpcm__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.fpcm__intro {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.fpcm__intro p {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

.fpcm__receives {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.fpcm__receives-label {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-muted-ink);
}

.fpcm__tiers {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid rgba(17, 17, 17, 0.08);
}

.fpcm__tier {
  display: grid;
  grid-template-columns: 130px 1fr;
  gap: var(--space-6);
  align-items: baseline;
  padding: var(--space-4) 0;
  border-bottom: 1px solid rgba(17, 17, 17, 0.08);
}

.fpcm__tier-when {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: var(--weight-semibold);
  color: var(--color-muted-ink);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.fpcm__tier-what {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

.fpcm__note {
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-style: italic;
  color: var(--color-muted-ink);
  line-height: var(--lh-body);
}

@media (max-width: 480px) {
  .fpcm__tier {
    grid-template-columns: 1fr;
    gap: var(--space-1);
  }
}


/* ══════════════════════════════════════════════════════════════════════
   7+8. FORM & SUCCESS STATE
   ══════════════════════════════════════════════════════════════════════ */

.fpf__inner {
  max-width: var(--container-md);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-10);
}

.fpf__heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.fpf__form {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.fpf__row {
  display: flex;
  gap: var(--space-6);
}

.fpf__row--half > * {
  flex: 1 1 0;
  min-width: 0;
}

.fpf__field {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.fpf__label {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: var(--weight-semibold);
  color: var(--color-ink);
}

.fpf__label span {
  color: var(--color-muted-ink);
}

.fpf__input {
  font-family: var(--font-body);
  font-size: var(--text-body);
  color: var(--color-ink);
  background: var(--color-paper);
  border: 1.5px solid rgba(17, 17, 17, 0.18);
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-4);
  width: 100%;
  transition: border-color var(--transition-fast);
  appearance: none;
}

.fpf__input:focus {
  outline: none;
  border-color: var(--color-ink);
}

.fpf__input:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.fpf__select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2366635D' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right var(--space-4) center;
  padding-right: var(--space-10);
  cursor: pointer;
}

.fpf__textarea {
  resize: vertical;
  min-height: 100px;
}

.fpf__consent {
  padding: var(--space-4);
  background: var(--color-stone);
  border-radius: var(--radius-md);
}

.fpf__consent-label {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  cursor: pointer;
  font-family: var(--font-body);
  font-size: var(--text-small);
  line-height: var(--lh-body);
  color: var(--color-ink);
}

.fpf__checkbox {
  flex-shrink: 0;
  margin-top: 2px;
  width: 18px;
  height: 18px;
  accent-color: var(--color-ink);
  cursor: pointer;
}

.fpf__error {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: var(--color-ink);
  background: var(--color-stone);
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-4);
}

.fpf__retry {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: var(--weight-semibold);
  color: var(--color-ink);
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  padding: 0;
}

.fpf__submit {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  background: var(--color-ink);
  color: var(--color-paper);
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: var(--weight-semibold);
  border: none;
  cursor: pointer;
  padding: var(--space-4) var(--space-8);
  border-radius: var(--radius-full);
  transition: background var(--transition-fast), color var(--transition-fast);
}

.fpf__submit:hover:not(:disabled) {
  background: var(--color-sun);
  color: var(--color-ink);
}

.fpf__submit:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.fpf__required-note {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: var(--color-muted-ink);
}

/* success */
.fpf__success {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.fpf__success-heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: var(--weight-extrabold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.fpf__success-subhead {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: var(--weight-bold);
  color: var(--color-ink);
  line-height: var(--lh-heading);
}

.fpf__success-message {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
  max-width: 52ch;
}

.fpf__success-setup {
  font-family: var(--font-body);
  font-size: var(--text-body);
  color: var(--color-muted-ink);
  font-style: italic;
}

.fpf__success-mission {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: var(--weight-bold);
  font-style: italic;
  color: var(--color-ink);
  line-height: var(--lh-heading);
  max-width: 42ch;
}

.fpf__guide-cta {
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  background: var(--color-sun);
  color: var(--color-ink);
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: var(--weight-semibold);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: var(--space-4) var(--space-8);
  border-radius: var(--radius-full);
  transition: background var(--transition-fast), color var(--transition-fast);
  margin-top: var(--space-4);
}

.fpf__guide-cta:hover {
  background: var(--color-ink);
  color: var(--color-paper);
}

@media (max-width: 640px) {
  .fpf__row--half { flex-direction: column; }
  .fpf__submit { width: 100%; justify-content: center; }
  .fpf__guide-cta { width: 100%; justify-content: center; }
}


/* ══════════════════════════════════════════════════════════════════════
   9. CLOSE
   ══════════════════════════════════════════════════════════════════════ */

.fpcl__inner {
  max-width: var(--container-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.fpcl__primary {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: var(--weight-bold);
  color: #ffffff;
  line-height: var(--lh-heading);
}

.fpcl__boundary {
  font-family: var(--font-body);
  font-size: var(--text-small);
  line-height: var(--lh-body);
  color: rgba(255, 255, 255, 0.4);
}
</style>
