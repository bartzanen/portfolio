/**
 * Type definitions for the portfolio config (`src/data/portfolio.ts`).
 *
 * Every piece of content rendered on the page is described here. Fields marked
 * with `?` are optional — leaving them out (or providing an empty array)
 * hides the corresponding UI automatically.
 */

/** Platforms with a dedicated icon. Anything else falls back to a generic link icon. */
export type SocialPlatform =
  | "github"
  | "linkedin"
  | "whatsapp"
  | "website"
  | "calendly"
  | "cv"
  | "other";

export interface SocialLink {
  /** Which platform this is — controls the icon shown. */
  platform: SocialPlatform;
  /** Visible label, e.g. "GitHub" or "@jane". */
  label: string;
  /** Full URL including protocol. */
  url: string;
}

export interface Hero {
  /** Your name — rendered as the page's main heading. */
  name: string;
  /** One-line professional headline shown under the name. */
  headline: string;
  /** Short supporting sentence (1–2 lines) under the headline. */
  tagline?: string;
  /** Optional small label above the name, e.g. "Hi, I'm" or a location. */
  eyebrow?: string;
  /** Primary call-to-action button. */
  cta?: {
    label: string;
    /** Anchor ("#projects"), mailto, or external URL. */
    href: string;
  };
  /** Portrait photo — path under /public or an absolute URL. Omit to hide. */
  portrait?: string;
}

export interface About {
  /**
   * Paragraphs of the about section. Each string becomes one <p>.
   * Leave the array empty (or omit `about` entirely) to hide the section.
   */
  paragraphs: string[];
  /** Optional quick facts rendered as a compact list next to the text. */
  highlights?: string[];
}

export interface SkillGroup {
  /** Group heading, e.g. "Languages" or "Infrastructure". */
  title: string;
  /** Individual skills rendered as pills. */
  skills: string[];
}

export type GitHubRepo = {
  url: string;
  repoType: string;
};

export interface Project {
  title: string;
  /** 1–3 sentence summary of what the project is and why it matters. */
  description: string;
  /** Tech/topic tags rendered as small pills on the card. */
  tags: string[];
  /** Link to the running product/demo. Omit to hide the "Live" button. */
  liveUrl?: string;
  /** Link to the source code. Omit to hide the "Code" button. */
  githubUrls?: GitHubRepo[];
  /**
   * Screenshot or cover image (absolute URL or a path under /public).
   * When omitted, a neutral placeholder is rendered instead.
   */
  imageUrl?: string;
  /** Marks the project as featured (slightly larger card spanning the grid). */
  featured?: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  /** Optional link wrapped around the company name. */
  companyUrl?: string;
  /** Free-form, e.g. "2022 — Present" or "Mar 2020 – Jun 2021". */
  period: string;
  /** Optional location, e.g. "Berlin, DE" or "Remote". */
  location?: string;
  /** Bullet points describing impact. Keep each to one sentence. */
  achievements: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  /** Optional extra line, e.g. thesis topic or honors. */
  detail?: string;
}

export interface Certificate {
  /** Name of the certificate or badge, e.g. "AWS Certified Cloud Practitioner". */
  title: string;
  /** Issuing organization, e.g. "Amazon Web Services" or "DeepLearning.AI · Coursera". */
  issuer: string;
  /** Free-form date the credential was earned, e.g. "Mar 2024" or "2023". */
  date?: string;
  /** Credential / verification ID, shown as a small monospace line. */
  credentialId?: string;
  /** Link to the verification page or online badge — adds a "Verify" link. */
  credentialUrl?: string;
  /**
   * Badge or certificate image (path under /public or an absolute URL).
   * Rendered as a small square thumbnail — ideal for Credly-style badges.
   * When omitted, a neutral award icon is shown instead (never looks broken).
   */
  imageUrl?: string;
  /** Optional skill/topic tags rendered as pills. */
  tags?: string[];
}

export interface Contact {
  /** Shown verbatim and used for the mailto CTA. */
  email: string;
  /** Optional location line, e.g. "Turin, Italy (CET)". */
  location?: string;
  /**
   * Availability badge. `status` controls the dot color:
   *  - "available"   → green
   *  - "limited"     → amber
   *  - "unavailable" → gray
   * `label` is the text shown next to it.
   */
  availability?: {
    status: "available" | "limited" | "unavailable";
    label: string;
  };
  /** Optional short invitation sentence above the email button. */
  note?: string;
}

export interface Seo {
  /** <title> of the page and Open Graph title. */
  title: string;
  /** Meta description and Open Graph description. */
  description: string;
  /** Canonical production URL, e.g. "https://jane.dev". Used for OG metadata. */
  url?: string;
  /** Absolute URL of an Open Graph preview image (1200×630 recommended). */
  ogImage?: string;
  /** Extra keywords for the keywords meta tag. */
  keywords?: string[];
}

export interface Portfolio {
  seo: Seo;
  hero: Hero;
  /** Omit or pass `paragraphs: []` to hide the About section. */
  about?: About;
  /** Empty array hides the Skills section. */
  skills?: SkillGroup[];
  /** Empty array hides the Projects section. */
  projects?: Project[];
  /** Empty array hides the Experience section. */
  experience?: ExperienceItem[];
  /** Empty array hides the Education section. */
  education?: EducationItem[];
  /** Empty array hides the Certificates & Badges section. */
  certificates?: Certificate[];
  /** Omit to hide the Contact section. */
  contact?: Contact;
  /** Empty array hides the Social Links section (and footer icons). */
  socialLinks?: SocialLink[];
}
