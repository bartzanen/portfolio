# Data-Driven Portfolio Template

A single-page developer portfolio built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion** — designed so that **the only file you ever edit is [`src/data/portfolio.ts`](src/data/portfolio.ts)**.

Every section is generated from that one typed config object. Empty arrays or omitted fields hide their sections automatically (and remove them from the header nav). No component changes are ever needed to update content.

## Features

- 📄 **Fully data-driven** — one strongly typed config file, zero `any`
- 🌗 **Dark/light mode** — Tailwind `class` strategy via `next-themes`, defaults to system preference, toggle in the header
- 🎞️ **Subtle motion** — scroll-triggered fade/slide reveals (staggered for lists), gentle hover lifts, smooth header background on scroll; respects `prefers-reduced-motion`; nothing loops
- 📱 **Mobile-first, fully responsive**
- 🔍 **SEO from config** — `<title>`, description, keywords, and Open Graph/Twitter metadata all derive from `portfolio.seo`
- ⚡ **Static output** — the page is prerendered; self-hosted fonts (no Google Fonts requests); built for Lighthouse 90+
- 🧩 **Modular** — one component per section under `src/components/sections/`

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run typecheck
```

**Deploy to Vercel:** push the repo to GitHub and import it at vercel.com — no configuration needed. Remember to set `seo.url` to your production domain so Open Graph links resolve.

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # Fonts, theme provider, metadata from config
│   ├── page.tsx          # Composes sections; hides empty ones
│   ├── globals.css       # Tailwind layers + base styles
│   └── icon.svg          # Favicon
├── data/
│   └── portfolio.ts      # ⭐ THE config file — edit this
├── types/
│   └── portfolio.ts      # All TypeScript types for the config
├── lib/
│   └── social-icons.ts   # Platform → icon mapping
└── components/
    ├── Header.tsx        # Fixed header, scroll-aware background, nav
    ├── ThemeToggle.tsx   # Light/dark switch
    ├── motion/Reveal.tsx # Reveal / Stagger / HoverLift primitives
    ├── ui/Section.tsx    # Section shell + Tag pill
    └── sections/         # Hero, About, Skills, Projects, Experience,
                          # Education, Certificates, Contact, SocialLinks
```

## Configuration reference (`src/data/portfolio.ts`)

The config exports a single `Portfolio` object. Sections appear in this fixed order: **Hero → About → Skills → Projects → Experience → Education → Certificates → Contact → Social Links**. Every section except Hero is optional.

### `seo` (required)

Controls the document `<head>`.

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | `string` | ✅ | Browser tab title and Open Graph title. |
| `description` | `string` | ✅ | Meta description (aim for ~150 chars). |
| `url` | `string` | — | Canonical production URL, e.g. `"https://jane.dev"`. Enables absolute OG URLs. |
| `ogImage` | `string` | — | Absolute URL of a 1200×630 link-preview image. |
| `keywords` | `string[]` | — | Extra keywords meta tag. |

```ts
seo: {
  title: "Jane Doe — Frontend Engineer",
  description: "Frontend engineer crafting accessible interfaces in React.",
  url: "https://janedoe.dev",
  ogImage: "https://janedoe.dev/og.png",
}
```

### `hero` (required — the only always-visible section)

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | ✅ | Your name; rendered as the `<h1>`. |
| `headline` | `string` | ✅ | One-line professional title under the name. |
| `tagline` | `string` | — | 1–2 supporting sentences. |
| `eyebrow` | `string` | — | Small monospace line above the name (e.g. `~/jane-doe`). Also used as the header brand; falls back to `name` if omitted. |
| `cta` | `{ label, href }` | — | Primary button. `href` accepts anchors (`#projects`), `mailto:` links, or full URLs. Omit to hide. |

### `about` (optional)

Hidden when omitted or when `paragraphs` is `[]`.

| Field | Type | Required | Description |
|---|---|---|---|
| `paragraphs` | `string[]` | ✅ | Each string renders as one paragraph. |
| `highlights` | `string[]` | — | Short quick-facts list shown beside the text (e.g. `"8+ years in backend"`). Omit to use full width for the paragraphs. |

### `skills` (optional)

An array of groups; `[]` hides the section.

| Field | Type | Description |
|---|---|---|
| `title` | `string` | Group heading, e.g. `"Languages"`, `"Infrastructure"`. |
| `skills` | `string[]` | Rendered as pill tags. |

```ts
skills: [
  { title: "Languages", skills: ["Go", "TypeScript"] },
  { title: "Practices", skills: ["System design", "Mentoring"] },
]
```

### `projects` (optional)

An array of project cards; `[]` hides the section.

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | `string` | ✅ | Card heading. |
| `description` | `string` | ✅ | 1–3 sentence summary. |
| `tags` | `string[]` | ✅ | Tech/topic pills (can be `[]`). |
| `liveUrl` | `string` | — | Shows a "Live" button when present. |
| `githubUrl` | `string` | — | Shows a "Code" button when present. |
| `imageUrl` | `string` | — | Cover image (remote URL or `/public` path). **When omitted, a neutral terminal-style placeholder is shown** — cards never look broken. |
| `featured` | `boolean` | — | `true` makes the card span the full grid width. |

> Remote images are allowed from any HTTPS host by default (see `next.config.ts`). Tighten `images.remotePatterns` to your actual hosts for production if you prefer.

### `experience` (optional)

Work history, newest first; `[]` hides the section.

| Field | Type | Required | Description |
|---|---|---|---|
| `role` | `string` | ✅ | Job title. |
| `company` | `string` | ✅ | Employer name. |
| `companyUrl` | `string` | — | Wraps the company name in a link. |
| `period` | `string` | ✅ | Free-form, e.g. `"2022 — Present"`. |
| `location` | `string` | — | e.g. `"Remote"` or `"Berlin, DE"`. |
| `achievements` | `string[]` | ✅ | One-sentence impact bullets. |

### `education` (optional)

`[]` hides the section.

| Field | Type | Required | Description |
|---|---|---|---|
| `degree` | `string` | ✅ | e.g. `"MSc, Computer Science"`. |
| `institution` | `string` | ✅ | School/university name. |
| `period` | `string` | ✅ | Free-form date range. |
| `detail` | `string` | — | Extra line: thesis topic, honors, etc. |

### `certificates` (optional)

Certificates and digital badges (Credly, Coursera, freeCodeCamp, cloud certs, …); `[]` hides the section. Each entry is a card in a two-column grid.

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | `string` | ✅ | Certificate/badge name, e.g. `"AWS Certified Cloud Practitioner"`. |
| `issuer` | `string` | ✅ | Issuing organization, e.g. `"Amazon Web Services"` or `"DeepLearning.AI · Coursera"`. |
| `date` | `string` | — | Free-form date earned, e.g. `"Mar 2024"` or `"2023"`. |
| `credentialId` | `string` | — | Credential/verification ID, shown as a small monospace line. |
| `credentialUrl` | `string` | — | Verification/badge link. When present, adds a "Verify credential" link. |
| `imageUrl` | `string` | — | Badge image (`/public` path or absolute URL), rendered as a small square thumbnail — ideal for Credly-style badges. **When omitted, a neutral award icon is shown** so cards never look broken. |
| `tags` | `string[]` | — | Skill/topic pills shown on the card. |

```ts
certificates: [
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI · Coursera",
    date: "2025",
    credentialUrl: "https://coursera.org/verify/specialization/XXXXXXXX",
    tags: ["Machine Learning", "Python"],
  },
]
```

### `contact` (optional)

Hidden when omitted. **No form** — just a `mailto:` CTA button, location, and an availability badge.

| Field | Type | Required | Description |
|---|---|---|---|
| `email` | `string` | ✅ | Shown on the button and used for `mailto:`. |
| `location` | `string` | — | e.g. `"Turin, Italy · CET (UTC+1)"`. |
| `availability` | `{ status, label }` | — | Status badge. `status` controls the dot color: `"available"` → green, `"limited"` → amber, `"unavailable"` → gray. `label` is the badge text. |
| `note` | `string` | — | Short invitation sentence above the button. |

```ts
contact: {
  email: "hello@janedoe.dev",
  location: "Lisbon, PT",
  availability: { status: "available", label: "Open to freelance work" },
}
```

### `socialLinks` (optional)

`[]` hides the section.

| Field | Type | Description |
|---|---|---|
| `platform` | `SocialPlatform` | One of `github`, `linkedin`, `twitter`, `mastodon`, `dribbble`, `youtube`, `instagram`, `website`, `rss`, `other` — picks the icon. Unknown platforms fall back to a generic link icon. |
| `label` | `string` | Visible text, e.g. `"GitHub"`. |
| `url` | `string` | Full URL including `https://`. |

## Customization beyond content

- **Accent color:** change `colors.accent` in `tailwind.config.ts` and the few `teal-*` utilities (search-and-replace `teal-` works well).
- **Fonts:** swap the `@fontsource-variable/*` imports in `src/app/layout.tsx` and the `--font-*` variables in `globals.css`.
- **Section order:** rearrange the components in `src/app/page.tsx`.

## License

Use it freely for your own portfolio. Replace all placeholder content (Maya Lindqvist is fictional, and the example URLs don't resolve) before deploying.
