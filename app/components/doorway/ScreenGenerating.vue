<template>
  <section
    class="generating"
    aria-label="Generating your Starting Point"
    aria-live="polite"
    aria-busy="true"
  >
    <div class="generating__inner container container--sm">

      <div class="generating__dots" aria-hidden="true">
        <span class="generating__dot" />
        <span class="generating__dot" />
        <span class="generating__dot" />
      </div>

      <ul class="generating__lines" role="list">
        <li class="generating__line generating__line--1">Reading what you shared…</li>
        <li class="generating__line generating__line--2">Finding where meaningful moments may already appear…</li>
        <li class="generating__line generating__line--3">Making this practical for your days…</li>
      </ul>

      <div
        class="generating__progress"
        role="progressbar"
        aria-label="Generating"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div class="generating__progress-fill" />
      </div>

    </div>
  </section>
</template>

<style scoped>
.generating {
  min-height: 100svh;
  display: flex;
  align-items: center;
  background: var(--color-warm-paper);
}

.generating__inner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-10);
  padding-block: var(--space-20);
}

/* ── Dots ──────────────────────────────────────── */

.generating__dots {
  display: flex;
  gap: var(--space-3);
}

.generating__dot {
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-sun);
  animation: dotPulse 1.6s ease-in-out infinite;
}

.generating__dot:nth-child(2) { animation-delay: 0.27s; }
.generating__dot:nth-child(3) { animation-delay: 0.54s; }

@keyframes dotPulse {
  0%, 60%, 100% { opacity: 0.25; transform: scale(0.8); }
  30%            { opacity: 1;    transform: scale(1);   }
}

/* ── Text lines ──────────────────────────────────── */

.generating__lines {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.generating__line {
  font-family: var(--font-body);
  font-size: var(--text-body-lg);
  line-height: var(--lh-body);
  color: var(--color-ink);
  opacity: 0;
  transform: translateY(6px);
  animation: fadeUp 0.55s ease forwards;
}

.generating__line--1 { animation-delay: 0.3s; }
.generating__line--2 { animation-delay: 1.8s; }
.generating__line--3 { animation-delay: 3.3s; }

@keyframes fadeUp {
  to { opacity: 1; transform: translateY(0); }
}

/* ── Progress bar — Sun → Evidence green as it fills ── */

.generating__progress {
  width: 100%;
  height: 3px;
  background: rgba(17, 17, 17, 0.08);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.generating__progress-fill {
  height: 100%;
  width: 0%;
  background-color: var(--color-sun);
  border-radius: var(--radius-full);
  animation: progressFill 5s ease-out forwards;
}

@keyframes progressFill {
  from { width: 0%;    background-color: var(--color-sun); }
  to   { width: 100%; background-color: var(--color-evidence-green); }
}

/* ── Reduced motion ──────────────────────────────── */

@media (prefers-reduced-motion: reduce) {
  .generating__dot           { animation: none; opacity: 0.6; transform: none; }
  .generating__line          { animation: none; opacity: 1;   transform: none; }
  /* Full-width Evidence green: static "ready" state is cleaner than a
     partial bar that reads as broken or mid-progress. */
  .generating__progress-fill { animation: none; width: 100%; background-color: var(--color-evidence-green); }
}
</style>
