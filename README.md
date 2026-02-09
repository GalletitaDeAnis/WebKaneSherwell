# Global Website Redevelopment

Static website mockup based on the provided references. All text and visuals are placeholder content and should be replaced with final copy and assets.

## Run (Vite)

1. Run `npm install`.
2. Run `npm run dev`.
3. Open the local URL shown in the terminal.

## Structure

- HTML partials live in `src/partials` and are composed into `src/index.html`.
- Styles are split across `src/styles/base.css`, `src/styles/components.css`,
  `src/styles/sections.css`, and `src/styles/responsive.css`.

## Build

Run `npm run build`. Output is in `docs`.

To open locally without Vite, open `docs/index.html`.

## GitHub Pages

This project is configured for GitHub Pages at `/WebKaneSherwell/`.

1. Push to `main`.
2. GitHub Actions builds and deploys automatically.
3. In repo settings, set Pages source to **GitHub Actions** if not already.
