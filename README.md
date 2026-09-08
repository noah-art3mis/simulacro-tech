# Simulacro Tech

The multilingual consultancy website, built with Astro and Tailwind. English lives at `/`, Portuguese at `/pt`, and Spanish at `/es`; each has a home, projects, and about page.

## Local preview

```sh
npm ci
npm run build
npm run preview -- --host 127.0.0.1 --port 4176
```

Open http://localhost:4176. For live editing, run `npm run dev` instead. Pushing `main` deploys the production website; preview work belongs on a design branch until approved.

## Verification

With the preview running:

```sh
SITE_URL=http://127.0.0.1:4176 npm run test:e2e
SITE_URL=http://127.0.0.1:4176 npm run test:visual
npx --no-install tsc --noEmit
```

Browser checks use an installed Chrome at `/usr/bin/google-chrome`; set `CHROME_PATH` to use another Chromium executable. Visual checks cover all localized routes at desktop and narrow mobile widths, write screenshots into ignored `docs/screenshots/`, and report overflow, broken images, and page errors. Form tests intercept requests locally and never send messages to Formspree.

## Editing

Localized copy lives in `src/i18n/en.ts`, `pt.ts`, and `es.ts`. Project identities, repository URLs, and metric values live in `src/data/projects.ts`; both the home and project pages consume them. Styles are split between the shared shell and page-specific layouts. All PT and ES copy changes require native-speaker review.

See [DESIGN.md](DESIGN.md) for the redesign rationale and asset provenance.
