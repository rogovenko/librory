# Librory — portfolio

Personal portfolio site for a game developer. Vue 3 + TypeScript + Vite, single page with
intro, selected work, about and contact sections.

All content is currently placeholder data.

## Getting started

```sh
npm install
npm run dev
```

## Scripts

| Command              | Description                              |
| -------------------- | ---------------------------------------- |
| `npm run dev`        | Start the dev server                     |
| `npm run build`      | Type-check and build for production      |
| `npm run preview`    | Preview the production build locally     |
| `npm run type-check` | Run `vue-tsc`                            |
| `npm run lint`       | Run Oxlint and ESLint with `--fix`       |
| `npm run format`     | Format `src/` with Prettier              |

## Where the content lives

- `src/data/profile.ts` — name, intro, about paragraphs, facts, email and social links
- `src/data/projects.ts` — the project list (title, year, role, platforms, tags, description, links)
- `public/projects/*.svg` — placeholder screenshots; replace with real images and update the
  `image` field of the matching project

## Design tokens

Colors, spacing, typography and both themes are defined as CSS custom properties in
`src/assets/base.css`. The theme follows the OS setting and can be toggled in the header;
the choice is stored in `localStorage`.
