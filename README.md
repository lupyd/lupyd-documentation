# Lupyd Documentation

Source for [docs.lupyd.com](https://docs.lupyd.com), built with [Astro](https://astro.build),
[Starlight](https://starlight.astro.build), and [Pagefind](https://pagefind.app) search.
It is deployed to Cloudflare Workers static assets.

## Requirements

- Node.js 22.12 or newer
- [pnpm](https://pnpm.io) (the version is pinned in `package.json`; run `corepack enable`)

## Commands

| Command | Action |
| --- | --- |
| `pnpm install` | Install dependencies. |
| `pnpm dev` | Start the dev server at `http://localhost:4321`. |
| `pnpm build` | Build the static site and the Pagefind search index into `dist/`. |
| `pnpm preview` | Serve the production build locally (search works only here, not in `dev`). |
| `pnpm check` | Type-check content and components. |
| `pnpm deploy` | Build and deploy to Cloudflare with Wrangler. |

## Project layout

```text
src/
├── assets/            Images used in content (logo)
├── content/docs/      All pages, as Markdown/MDX — URL = file path
│   ├── getting-started/
│   ├── guides/        End-user guides
│   ├── developers/
│   │   ├── firefly/   Firefly messaging (client libs + firefly-mls server)
│   │   └── server/    lupyd-rust-server (social REST API)
│   └── support/
├── styles/custom.css  Brand overrides for Starlight
└── content.config.ts
public/                Copied as-is (favicon, robots.txt)
astro.config.mjs       Site config, sidebar, and redirects from old URLs
```

## JavaScript budget

The site ships no client-side JavaScript except search (Pagefind) and a few tiny
inline scripts: the theme toggle, applying the saved theme before paint, and the mobile
menu. To keep it that way:

- `prefetch` is disabled and Expressive Code is replaced by Astro's built-in Shiki
  highlighting (`astro.config.mjs`).
- `src/components/` overrides Starlight components that otherwise ship scripts:
  `Sidebar` (no state persistence), `TableOfContents` and `MobileTableOfContents` (no
  scroll tracking), and `LanguageSelect` (single locale).
- Don't add `<script>` tags or client-side framework components (`client:*`) to pages.
  After `pnpm build`, `dist/_astro/*.js` should contain only the search files.

## Writing docs

- Every page needs `title` and `description` frontmatter. The description is used for
  search results and social previews.
- Use `sidebar.order` in frontmatter to order pages within a section.
- Use Starlight components (`Aside`, `Steps`, `Tabs`, `Card`, `LinkCard`) from
  `@astrojs/starlight/components` in `.mdx` files.
- Link between pages with absolute paths that end in a slash, such as `/developers/firefly/`.
- Developer pages describe what the code does. When you change routes, env vars, or
  limits in `firefly`, `firefly-mls`, or `lupyd-rust-server`, update the matching page in
  `src/content/docs/developers/`.
- Never copy secrets, keys, or `.env` values from the service repositories.

The sitemap (`sitemap-index.xml`) and search index are generated at build time. Old URLs
from the previous site redirect through `redirects` in `astro.config.mjs`.
