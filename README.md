# bartzanen.com

My personal portfolio — a single-page site built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS** and **Framer Motion**, statically exported and hosted on **Cloudflare Pages**.

The whole page is generated from one typed config object: [`src/data/portfolio.ts`](src/data/portfolio.ts). Sections whose data is missing or empty disappear from the page *and* from the header nav automatically, so content changes never require touching a component.

## Stack & characteristics

- **Data-driven** — one strongly typed config file, no `any`
- **Static export** (`output: "export"`) — no server at runtime, no image optimization pipeline; every image is a local `StaticImageData` import, pre-sized and encoded to WebP
- **Dark/light mode** — Tailwind `class` strategy via `next-themes`, defaults to system preference
- **Motion** — scroll-triggered reveals (staggered for lists), hover lifts, scroll-aware header; respects `prefers-reduced-motion`
- **Accessible navigation** — skip link, mobile menu with `aria-expanded`/`aria-controls`, and `IntersectionObserver`-based active-section tracking surfaced via `aria-current`
- **SEO** — metadata, Open Graph/Twitter cards, `robots.txt`, `sitemap.xml` and schema.org `Person` structured data are all derived from the same config, so they cannot drift from the visible page
- **Self-hosted fonts** — `@fontsource-variable/*`, no runtime requests to Google

## Scripts

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export → out/
npm run lint       # eslint (next/core-web-vitals + next/typescript)
npm run typecheck  # tsc --noEmit
```

There is no `npm start`: `output: "export"` means `next start` does not apply. To preview a production build locally, serve the export directly:

```bash
npx serve out
```

## Deployment

Cloudflare Pages builds with `npm run build` and publishes `out/`.

| Environment variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_CF_BEACON_TOKEN` | — | Cloudflare Web Analytics beacon token. Set in the Pages dashboard; when absent the script is omitted entirely, so local and preview builds stay untracked. |

See [`.env.example`](.env.example). Keep `seo.url` pointed at the production domain — Open Graph URLs, the canonical link, the sitemap and `robots.txt` all derive from it.

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # Fonts, theme provider, metadata, JSON-LD, analytics
│   ├── page.tsx            # Composes sections; hides empty ones, builds the nav
│   ├── globals.css         # Tailwind layers + base styles
│   ├── robots.ts           # robots.txt (static)
│   ├── sitemap.ts          # sitemap.xml (static)
│   └── icon.svg            # Favicon
├── data/
│   └── portfolio.ts        # ⭐ THE config file — edit this
├── types/
│   └── portfolio.ts        # All config types, field-by-field documented
├── lib/
│   ├── social-icons.ts     # Platform → icon mapping
│   └── structured-data.ts  # schema.org Person, derived from the config
├── assets/                 # WebP images imported by the config
└── components/
    ├── Header.tsx          # Fixed header, mobile menu, active-section tracking
    ├── ThemeToggle.tsx     # Light/dark switch
    ├── motion/Reveal.tsx   # Reveal / Stagger / HoverLift primitives
    ├── ui/Section.tsx      # Section shell + Tag pill
    └── sections/           # Hero, About, Experience, Projects, Skills,
                            # Education, Certificates, Contact, SocialLinks
```

## Configuration reference (`src/data/portfolio.ts`)

The config exports a single `Portfolio` object. Sections render in this fixed order: **Hero → About → Experience → Projects → Skills → Education → Certificates → Contact → Social Links**. Every section except Hero is optional.

Images are imported as modules (`import portrait from "@/assets/portrait.webp"`) so Next can emit correct `width`/`height` and hashed filenames under a static export. Plain `/public` paths and absolute URLs also work, but skip that benefit.

### `seo` (required)

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | `string` | ✅ | Browser tab title and Open Graph title. |
| `description` | `string` | ✅ | Meta description (~150 chars). |
| `url` | `string` | — | Canonical production URL. Enables absolute OG URLs, the sitemap and the `robots.txt` host line. |
| `ogImage` | `string` | — | Absolute URL of a 1200×630 link-preview image. |
| `keywords` | `string[]` | — | Extra keywords meta tag. |

### `hero` (required — the only always-visible section)

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | ✅ | Rendered as the `<h1>`, and used as the header brand. |
| `headline` | `string` | ✅ | One-line professional title under the name. |
| `tagline` | `string` | — | 1–2 supporting sentences. |
| `eyebrow` | `string` | — | Small label above the name. |
| `cta` | `{ label, href }` | — | Primary button. `href` accepts anchors (`#projects`), `mailto:`, or full URLs. |
| `secondaryCta` | `{ label, href }` | — | Outline button beside the primary one — typically the CV. |
| `portrait` | `StaticImageData \| string` | — | Portrait photo. Omit to hide. |

### `about` (optional)

Hidden when omitted or when `paragraphs` is `[]`.

| Field | Type | Required | Description |
|---|---|---|---|
| `paragraphs` | `string[]` | ✅ | Each string renders as one paragraph. |
| `highlights` | `string[]` | — | Quick-facts list beside the text. Omit to use full width. |

### `experience` (optional)

Work history, newest first; `[]` hides the section.

| Field | Type | Required | Description |
|---|---|---|---|
| `role` | `string` | ✅ | Job title. |
| `company` | `string` | ✅ | Employer name. |
| `category` | `"engineering" \| "other"` | — | Defaults to `"engineering"`. When any entry sets one, the section renders labelled groups ("Engineering", then "Other experience"); otherwise a flat list. |
| `companyUrl` | `string` | — | Wraps the company name in a link. |
| `period` | `string` | ✅ | Free-form, e.g. `"2022 — Present"`. |
| `location` | `string` | — | e.g. `"Remote"`. |
| `achievements` | `string[]` | ✅ | One-sentence impact bullets. |

### `projects` (optional)

Array of project cards; `[]` hides the section.

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | `string` | ✅ | Card heading. |
| `description` | `string` | ✅ | 1–3 sentence summary. |
| `tags` | `string[]` | ✅ | Tech/topic pills (can be `[]`). |
| `liveUrl` | `string` | — | Shows a "Live" button when present. |
| `githubUrls` | `GitHubRepo[]` | — | One badge per repo, so multi-repo projects (frontend + backend) link to each. |
| `imageUrl` | `StaticImageData \| string` | — | Cover image. When omitted, a neutral terminal-style placeholder is shown. |
| `featured` | `boolean` | — | Makes the card span the full grid width. |

`GitHubRepo` is `{ url, repoType, private? }`. `repoType` labels the badge (e.g. `"Frontend"`); `private: true` renders a muted, non-clickable badge instead of a link, acknowledging the repo without sending visitors to a 404.

### `skills` (optional)

Array of groups; `[]` hides the section. Each group renders as one row of a spec sheet: the `title` sits in a fixed left gutter, its `skills` flow beside it, and a hairline rule separates groups. Groups whose `title` contains "spoken" are excluded from the structured-data `knowsAbout` list (spoken languages are not areas of expertise).

| Field | Type | Description |
|---|---|---|
| `title` | `string` | Row label in the gutter, e.g. `"Languages"`. Keep it under ~17 characters or it wraps to two lines. |
| `skills` | `string[]` | Rendered as chips. |

### `education` (optional)

| Field | Type | Required | Description |
|---|---|---|---|
| `degree` | `string` | ✅ | e.g. `"MSc, Computer Science"`. |
| `institution` | `string` | ✅ | School/university name. |
| `period` | `string` | ✅ | Free-form date range. |
| `detail` | `string` | — | Thesis topic, honors, etc. |

### `certificates` (optional)

Certificates and digital badges; `[]` hides the section.

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | `string` | ✅ | Certificate/badge name. |
| `issuer` | `string` | ✅ | Issuing organization. |
| `date` | `string` | — | Free-form date earned. |
| `credentialId` | `string` | — | Verification ID, shown as a small monospace line. |
| `credentialUrl` | `string` | — | Adds a "Verify credential" link. |
| `imageUrl` | `StaticImageData \| string` | — | Badge thumbnail. When omitted, a neutral award icon is shown. |
| `tags` | `string[]` | — | Skill/topic pills. |

### `contact` (optional)

Hidden when omitted or when `email` is empty. **No form** — a `mailto:` CTA, location, and an availability badge.

| Field | Type | Required | Description |
|---|---|---|---|
| `email` | `string` | ✅ | Shown on the button and used for `mailto:`. |
| `location` | `string` | — | e.g. `"Barcelona, ES · CET (UTC+1)"`. The part before `·` is parsed into the structured-data address. |
| `availability` | `{ status, label }` | — | `status` controls the dot color: `"available"` → green, `"limited"` → amber, `"unavailable"` → gray. |
| `note` | `string` | — | Short invitation sentence above the button. |

### `socialLinks` (optional)

`[]` hides the section and the footer icons.

| Field | Type | Description |
|---|---|---|
| `platform` | `SocialPlatform` | One of `github`, `linkedin`, `whatsapp`, `website`, `calendly`, `cv`, `other` — picks the icon. Unknown platforms fall back to a generic link icon. |
| `label` | `string` | Visible text, e.g. `"GitHub"`. |
| `url` | `string` | Full URL including `https://`. |

Only real profile URLs reach the schema.org `sameAs` list — the CV link and non-`http` URLs are filtered out.

## Customization beyond content

- **Accent color:** change `colors.accent` in `tailwind.config.ts` and the `teal-*` utilities (search-and-replace `teal-` works well).
- **Fonts:** swap the `@fontsource-variable/*` imports in `src/app/layout.tsx` and the `--font-*` variables in `globals.css`.
- **Section order:** rearrange the components in `src/app/page.tsx`.

## License

The code is free to reuse for your own portfolio. The content, images, and CV in `src/data`, `src/assets` and `public/` are mine — replace them.
