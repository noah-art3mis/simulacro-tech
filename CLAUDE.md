# CLAUDE.md

## Branch workflow

Do **not** edit the `main` branch directly. `main` is the production branch — GitHub Pages deploys it on every push (see `.github/workflows/deploy.yml`).

All changes go on a `design/*` branch, then get merged into `main` via PR.

Design branches (each maps to a distinct visual design, named after its main display font):

| Branch                       | Design                                  | Worktree                                                  |
| ---------------------------- | --------------------------------------- | --------------------------------------------------------- |
| `design/crimson-pro`         | Current prod (original "glass" design)  | `/home/noah-art3mis/simulacro-tech-crimson-pro`           |
| `design/cabinet-grotesk`     | Human-centered design                   | `/home/noah-art3mis/simulacro-tech-cabinet-grotesk`       |
| `design/bricolage-grotesque` | Texture-modernist (intermediate)        | `/home/noah-art3mis/simulacro-tech-bricolage-grotesque`   |

When asked to make a content/style change, ask which design branch(es) it should land on if it's not obvious. Never commit directly to `main`.
