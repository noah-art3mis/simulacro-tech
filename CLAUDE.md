# CLAUDE.md

## Branch workflow

`main` is the production branch — GitHub Pages deploys it on every push (see `.github/workflows/deploy.yml`).

This is a small project. Pushing or merging directly to `main` is fine — no PR ceremony required.

Design branches (each maps to a distinct visual design, named after its main display font):

| Branch                       | Design                                  | Worktree                                                  |
| ---------------------------- | --------------------------------------- | --------------------------------------------------------- |
| `design/crimson-pro`         | Current prod (original "glass" design)  | `/home/noah-art3mis/simulacro-tech-crimson-pro`           |
| `design/cabinet-grotesk`     | Human-centered design                   | `/home/noah-art3mis/simulacro-tech-cabinet-grotesk`       |
| `design/bricolage-grotesque` | Texture-modernist (intermediate)        | `/home/noah-art3mis/simulacro-tech-bricolage-grotesque`   |

When asked to make a content/style change, ask which design branch(es) it should land on if it's not obvious.

## Translations

Whenever you write or change user-facing text in `src/i18n/ui.ts` (or any other localized copy), explicitly flag the PT and ES translations to the user for review. Machine/AI translations of marketing copy are usually rough — calques, awkward register, or phrasing a native speaker would never use. Don't quietly assume the translations are fine; surface them as something the user should sanity-check.
