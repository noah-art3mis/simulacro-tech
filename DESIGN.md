# Archivo direction

This is a local redesign of simulacro.tech on `design/archivo`, based on `origin/main` at `c77ec24`. It does not incorporate or alter the separate, unfinished `fix/first-paint-logo-flash` checkout. It is not a production deployment.

## Brief and decisions

Assumed audience: prospective consulting clients and collaborators evaluating Gustavo's AI, research, and data-engineering work. The primary task is to understand what Simulacro builds, inspect evidence, and start a conversation. This is a consultancy portfolio, not a software dashboard.

Lead with actual projects, then capabilities, the interdisciplinary approach, and contact. Use an open two-column layout with compact project rows. Give Molcajete a larger treatment because its documented use supplies concrete evidence. Keep its numbers attached to that project, not in an unqualified company-wide statistics banner.

Archivo's clear, compact forms carry headings and reading text at distinct sizes. A charcoal/olive ground and muted amber actions retain a relationship to the original identity without the purple and orange spotlights. Light mode uses the same cool neutral palette. The original artwork remains the visual signature; no stock photographs or fabricated product screenshots were introduced.

## Unslop audit

The original source and a fully revealed browser capture were inspected at a glance and at reading distance. Ranked findings:

1. The hero's italic orange-gradient “people,” ambient spotlights, and surrounding darkness establish a generic AI-consultancy mood before the work is visible. Replace the split treatment with a complete roman Archivo headline, a plain ground, and the existing artwork.
2. Three equal icon-topped service cards appear before any evidence. Replace them with an early featured project and open project rows; present services as ordinary headings and explanations below the work.
3. The “rare blend” claim and claim to see what “pure technologists can't” provide an unsupported superiority claim. Replace them with the actual fields of experience and an explanation of the questions asked during a project.
4. Glass panels, repeated capsule actions, and hover glows add furniture without clarifying hierarchy. Replace them with open spacing, restrained rules, and solid, minimally rounded actions.
5. Scroll-triggered visibility and the animated network ask for motion without communicating changing information. Remove both. Reading and navigation work without those scripts.

### Catalogue coverage

| Rendered-web family       | Original verdict | Evidence and replacement status                                                                   |
| ------------------------- | ---------------- | ------------------------------------------------------------------------------------------------- |
| Visual                    | Present          | Halos, accent-bordered rounded panels, glow; removed. Original artwork intentionally retained.     |
| Typography                | Present          | Italic gradient accent word and icon tiles; replaced with complete headings and an open hierarchy. |
| Copy                      | Present          | Superiority claim and aphoristic framing; key home passages rewritten concretely.                  |
| Craft floor               | Present          | Content hidden pending scroll animation, tiny functional labels, skipped About heading; fixed.    |
| Motion                    | Present          | Decorative network, image hover scaling, layout-height menu animation; removed.                   |
| Colour and rhythm         | Present          | Generic dark/glow palette and repeated large section islands; replaced with project-led grouping. |
| App/dashboard UI patterns | Present          | Applicable shared tells: glass panels and pill buttons. Actual dashboard-only structures absent.   |
| English-language SaaS set | Present          | Three matching icon-topped feature cards and dark-only presentation; replaced.                     |

Impeccable's detector ran on rendered HTML in DEGRADED regex mode: it returned no hits, but could not evaluate custom properties, selector matching, or computed contrast. That silence is not a clean bill of health. Original computed contrast was not evaluated. The redesigned pages were checked separately in a browser, including an axe accessibility scan in light and dark modes; automated checks do not replace assistive-technology testing or native-speaker review.

The highest-leverage change is the new information order: visitors encounter actual work before generic service claims.

## Assets and content

- `public/simulacro.png` is the repository's original artwork, unchanged. CSS adapts its contrast to the selected colour scheme.
- Archivo is self-hosted in `public/fonts/archivo-latin.woff2`, sourced through Google Fonts. Its SIL Open Font License is included as `Archivo-OFL.txt`; upstream family: https://github.com/google/fonts/tree/main/ofl/archivo.
- Project metrics, biographies, contact details, and repository URLs come from the existing main-branch content. This redesign does not independently verify those claims.
- EN, PT, and ES routes are preserved. Updated PT and ES marketing copy needs the user's review for register and naturalness.
- The original Formspree endpoint remains active in the actual form. Only automated test submissions are intercepted; a person submitting through the preview would send a real message.

## Behavioral verification

Regression tests were observed failing before fixes for project hash targets, keyboard skip navigation, pending form submissions, and the language suggestion's landmark. The suite also covers localized project navigation, successful form submission, reset, server error recovery, and remembered language-banner dismissal.

Screenshots and the nine-route, three-width visual scan live under ignored `docs/screenshots/`. Build and TypeScript checks are available through the commands in README. No Lighthouse score is claimed.
