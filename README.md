# HaveAGreatYesterday.com

Editorial website for the MyHGY™ Method.

## What this is

A standalone Nuxt 4 + Vue 3 static editorial website. No database, no user accounts, no backend services.

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
| `npm run generate` | Static site generation (`npx nuxi generate --no-fork`) |
| `npm run preview` | Preview the production build locally |

## Deployment

| Setting | Value |
|---|---|
| Host | GitHub Pages |
| Deployment | GitHub Actions (`.github/workflows/deploy.yml`) |
| Trigger | Push to `main` branch |
| Build command | `npx nuxi generate --no-fork` |
| Output directory | `.output/public` |
| Custom domain | `haveagreatyesterday.com` |

Pushing to `main` triggers the GitHub Actions workflow, which builds the static site and deploys it to GitHub Pages.

## Environment variables

Copy `.env.example` to `.env` and fill in real values. Never commit `.env`.

| Variable | Purpose |
|---|---|
| `NUXT_PUBLIC_SITE_URL` | Production URL — set to `https://haveagreatyesterday.com` in GitHub Actions |
| `NUXT_PUBLIC_POSTHOG_KEY` | PostHog analytics key (not yet active) |
| `NUXT_PUBLIC_POSTHOG_HOST` | PostHog host URL |
