# HaveAGreatYesterday.com — Claude Instructions

## Governing document hierarchy

When documents conflict, the higher one wins:

1. `MyHGY™ Source of Truth v2 — August 13, 2026` (doctrine — highest authority)
2. `MyHGY™ Website Blueprint v1 — August 13, 2026` (experience, brand, content, technical spec)
3. Build instructions passed at session start (scope)

Do not invent doctrine. Surface substantive brand or product questions rather than resolving them silently.

---

## ABSOLUTE PROHIBITION — do not modify MyDopa

The MyDopa project at `/Users/reneestripeaut/MyDopa/` is read-only. Never modify it in any way, for any reason.

Do not copy from MyDopa: brand colors, fonts, voice, copy, routes, product screens, mascot, app logic, secrets, keys, user data, or database structure.

---

## Locked brand decisions

**Typography:**
- Display / headings: `Manrope` (weights 700–800)
- Body / interface: `Inter` (weights 400–500)
- Line height body: 1.55–1.7

**Logo:** typographic wordmark only — no symbol. See `WordmarkHGY.vue`.

**Hero CTA (exact copy):** `Show me what I can do from here.`

**Pain-choice prompt (exact copy):** `Tell us what you're going through`

**Seven pain choices (stored in `content/pain-choices.json`):**
1. Job or career disruption
2. Divorce or breakup
3. Health uncertainty
4. Financial setback
5. Starting over
6. Feeling stuck or without direction
7. Other

---

## Locked design tokens

All tokens live in `app/assets/css/tokens.css`. Never hardcode hex values in components.

| Token variable | Hex | Use |
|---|---|---|
| `--color-sun` | `#F4C542` | Primary buttons, highlights, selected states |
| `--color-ink` | `#111111` | Headlines, body text, strong dividers |
| `--color-paper` | `#FFFFFF` | Primary content background |
| `--color-warm-paper` | `#FFF9E8` | Callouts, Method explanations, gentle emphasis |
| `--color-stone` | `#F3F2ED` | Alternating sections, cards, form surfaces |
| `--color-muted-ink` | `#66635D` | Secondary copy, captions — verify AA contrast |
| `--color-evidence-green` | `#26734D` | Completion / constructive evidence only |

Color ratio target: ~60% paper/warm-paper, 25% ink, 10% sun, 5% stone/green.

**Never:** small white text on Sun yellow (fails contrast). Always verify WCAG 2.2 AA.

---

## Accessibility (launch gate)

WCAG 2.2 AA required. Visible keyboard focus. Meaningful alt text. Reduced-motion support. Forgiving forms.

---

## Scope exclusions — never build these

- Pain-entry methodology engine or AI response generation
- Email delivery or capture backend
- Consent storage or user accounts
- Sensitive-data collection of any kind
- Retention or deletion systems
- Crisis or safety-routing logic
- Phase 2 practice features
- MyDopa integrations
- Production deployment or DNS changes

The `/what-are-you-going-through` route must be a **static placeholder only**. It must not contain a working form, store information, call any model, or pretend the engine works.

---

## Checkpoint discipline

At every checkpoint:
1. Report what was created, what files changed, what was verified
2. Give the exact command and URL to view it
3. List any open decisions
4. State the recommended next action
5. **Wait for visual approval** before advancing to the next checkpoint

**Hard stop after Checkpoint 1:** Do not build the global shell, header, nav, footer, homepage, or any component work until Checkpoint 1 is explicitly approved.

---

## Stack

- Framework: Nuxt 4 + Vue 3
- Language: TypeScript
- CSS: CSS custom properties (tokens in `app/assets/css/tokens.css`)
- Routing: Nuxt file-based pages (`app/pages/`)
- Content: `@nuxt/content` for markdown-driven pages
- Package manager: npm
- Deployment: Cloudflare Pages (push `main` → auto-deploy)
