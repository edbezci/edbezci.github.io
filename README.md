

# edbezci.github.io

Personal website of Egemen Bezci, PhD — AI decision systems, risk and intelligence.

Built with [Astro](https://astro.build) and TypeScript as a fully static site. No JavaScript frameworks, no backend, no client-side API calls.

## Project structure

```
├── public/                  # Static assets (robots.txt, favicon)
├── src/
│   ├── data/                # Typed content, one module per domain
│   │   ├── profile.ts       # Identity, hero, roles, contact, navigation, SEO
│   │   ├── industry.ts      # Industry cases and the complete Industry page
│   │   ├── teaching.ts      # Current/previous teaching, professional education, workshops
│   │   ├── events.ts        # Speaking and events (status, role, dates, URL, title)
│   │   ├── research.ts      # Research profile, affiliations, book, grants
│   │   └── publications.ts  # Manually curated publication record
│   ├── layouts/BaseLayout.astro
│   ├── components/          # Header, hero, page header, section heading, event item, footer
│   ├── pages/               # /, /profile/, /industry/, /teaching-speaking/,
│   │                        # /research/, /publications/, /contact/
│   └── styles/global.css    # Design tokens and base styles
├── astro.config.mjs         # Static output, site URL, sitemap
└── .github/workflows/       # GitHub Pages deployment
```

## Editing content

All copy lives in the typed data modules under `src/data/`, validated against TypeScript interfaces. Components render from those modules only; do not hard-code copy in components. Factual entries (industry cases, courses, events, affiliations, grants) are defined once and reused by the homepage and the complete pages.

Optional link fields are left undefined until a confirmed URL exists; empty fields are not rendered. No CV or résumé link appears anywhere on the site. Event `presentationTitle` fields remain undefined until an official title has been supplied.

## Local development

```sh
npm install
npm run dev       # dev server at http://localhost:4321
```

## Production build and checks

```sh
npm run build     # static build to ./dist/
npm run preview   # preview the production build locally
npm run check     # Astro + TypeScript diagnostics
```

## Deployment

The site deploys to `https://edbezci.github.io` via `.github/workflows/deploy.yml` on every push to `main` (or manually via *Actions → Deploy to GitHub Pages → Run workflow*). The workflow installs dependencies from the lockfile, builds the site and deploys `dist/` through GitHub Pages.

Because this repository uses the special `<username>.github.io` user-site name, the Astro `base` path is `/` (not configured).

One-time repository setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
