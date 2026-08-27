

# edbezci.github.io

Personal website of Egemen Bezci, PhD — AI decision systems, risk and intelligence.

Built with [Astro](https://astro.build) and TypeScript as a fully static site. No JavaScript frameworks, no backend, no client-side API calls.

## Project structure

```
├── public/                  # Static assets (robots.txt, favicon)
├── src/
│   ├── data/profile.ts      # All site content (typed, single source of truth)
│   ├── layouts/BaseLayout.astro
│   ├── components/          # Header, hero, section heading, teaching card, footer
│   ├── pages/index.astro    # Homepage
│   └── styles/global.css    # Design tokens and base styles
├── astro.config.mjs         # Static output, site URL, sitemap
└── .github/workflows/       # GitHub Pages deployment
```

## Editing content

All profile copy, links, teaching entries and SEO metadata live in `src/data/profile.ts`, validated against TypeScript interfaces. Components render from that file only; do not hard-code copy in components.

Optional link fields (`orcid`, `resume`) are left undefined until a confirmed URL exists; empty fields are not rendered.

A future `/publications/` route is reserved via `profile.publications` (`enabled: false`). While disabled, no page is built and no navigation link appears.

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
