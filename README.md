# HaveAGreatYesterday.com

Editorial website for the MyHGY™ Method.

## What this is

A standalone Vue/Nuxt 3 editorial website. Completely separate from the MyDopa project — different brand, different repository, different codebase. No production code, secrets, or services are shared with MyDopa.

## How to run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Available commands

| Command | What it does |
|---|---|
| `npm run dev` | Start local dev server at localhost:3000 |
| `npm run build` | Build for production |
| `npm run generate` | Static site generation |
| `npm run preview` | Preview the production build locally |

## How this differs from MyDopa

- **Separate brand:** MyHGY™ palette (Sun yellow, Ink, Paper) — not MyDopa's purple/dark theme.
- **Separate repository:** No shared git history, no shared deployment, no shared secrets.
- **Editorial site, not an app:** No database, no user accounts, no Flutter code.
- **Stack:** Nuxt 4 + Vue 3 + TypeScript. MyDopa is a static-HTML site with no build toolchain.

## Deployment

Cloudflare Pages — push to `main` triggers auto-deploy. Domain: `HaveAGreatYesterday.com` (DNS connection is a later step).

## Environment variables

Copy `.env.example` to `.env` and fill in real values. Never commit `.env`.
