import type { Portfolio } from "@/types/portfolio";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  PORTFOLIO CONFIG — this is the only file you need to edit.
 *
 *  Every section of the site is generated from this object. Field-by-field
 *  documentation lives in `src/types/portfolio.ts` and in README.md.
 *
 *  Hiding sections: any section whose array is empty (or whose key is
 *  removed) disappears from the page automatically — no component changes
 *  needed.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const portfolio: Portfolio = {
  seo: {
    title: "Bart Zanen — Full-Stack Software Engineer",
    description:
      "Backend and platform engineer building reliable distributed systems. Currently shipping developer tooling and event-driven infrastructure in Go and TypeScript.",
    // Set this to your deployed domain so Open Graph links resolve correctly.
    url: "https://bartzanen.com/",
    // 1200×630 image used for link previews. Drop a file in /public and
    // reference it with an absolute URL once deployed, or use a hosted image.
    ogImage: "/public/ogimage.jpeg",
    keywords: [
      "backend engineer",
      "platform engineering",
      "Go",
      "TypeScript",
      "Kubernetes",
    ],
  },

  hero: {
    // Small monospace line above the name. Omit to hide.
    name: "Bart Zanen",
    headline: "Full-Stack Software Engineer",
    tagline:
      "I design and run the systems other engineers build on — event pipelines, internal platforms, and APIs that stay boring at 3 a.m.",
    cta: {
      label: "See my work",
      href: "#projects", // anchors scroll smoothly; mailto: and https:// also work
    },
    portrait: "/portrait.PNG",
  },

  about: {
    paragraphs: [
      "I'm a backend engineer with eight years of experience turning ambiguous product ideas into systems that survive contact with production. My happy place is the layer between application code and infrastructure: message queues, service boundaries, schema design, and the tooling that lets a team ship without fear.",
      "Most recently I led the platform team at a logistics scale-up, where we replaced a nightly batch monolith with an event-driven architecture processing around 40M events a day. Before that I helped two early-stage startups find product-market fit by keeping their backends simple enough to change weekly.",
      "Outside of work I maintain a couple of small open-source tools, mentor early-career engineers through a local coding school, and spend too much time tuning my home server.",
    ],
    // Short facts shown as a compact side list. Omit or empty to hide.
    highlights: [
      "Computer Engineering graduate @FIB - UPC",
      "AI in production",
      "Led teams of 3–7 engineers",
      "OSS maintainer",
      "Based in Turin, Italy",
    ],
  },

  skills: [
    {
      title: "Languages",
      skills: ["TypeScript", "JavaScript", "Python", "C++", "SQL"],
    },
    {
      title: "Backend & Data",
      skills: [
        "PostgreSQL",
        "Kafka",
        "Redis",
        "gRPC",
        "REST APIs",
        "Event sourcing",
      ],
    },
    {
      title: "Infrastructure",
      skills: [
        "Kubernetes",
        "Terraform",
        "AWS",
        "Docker",
        "GitHub Actions",
        "Observability (Grafana, OTel)",
      ],
    },
    {
      title: "Practices",
      skills: [
        "System design",
        "Incident response",
        "Tech leadership",
        "Mentoring",
      ],
    },
  ],

  projects: [
    {
      title: "Relay — event pipeline toolkit",
      description:
        "An open-source Go library for building exactly-once event pipelines on top of Kafka, with first-class support for schema evolution and replay. Used in production by a handful of small teams.",
      tags: ["Go", "Kafka", "Open source"],
      githubUrl: "https://github.com/mayalindqvist/relay",
      // No imageUrl here on purpose — this card demonstrates the placeholder.
      featured: true,
    },
    {
      title: "Fleetboard",
      description:
        "Real-time logistics dashboard that tracks 2,000+ vehicles with sub-second updates. I built the ingestion layer and the WebSocket fan-out service.",
      tags: ["TypeScript", "WebSockets", "PostgreSQL", "Redis"],
      liveUrl: "https://fleetboard.example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    },
    {
      title: "tf-drift",
      description:
        "A tiny CLI that detects Terraform state drift on a schedule and posts a human-readable diff to Slack before it becomes an incident.",
      tags: ["Go", "Terraform", "CLI"],
      githubUrl: "https://github.com/mayalindqvist/tf-drift",
      liveUrl: "https://tf-drift.dev",
      imageUrl:
        "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1200&q=80",
    },
    {
      title: "Queue depth simulator",
      description:
        "Interactive notebook + web demo for reasoning about queueing theory in service design: arrival rates, utilization, and why p99 explodes at 80% load.",
      tags: ["Python", "Education", "Data viz"],
      githubUrl: "https://github.com/mayalindqvist/queue-sim",
    },
  ],

  experience: [
    {
      role: "Staff Engineer, Platform",
      company: "Cargolane",
      companyUrl: "https://example.com/cargolane",
      period: "2022 — Present",
      location: "Turin, IT (hybrid)",
      achievements: [
        "Led the migration from a nightly batch monolith to an event-driven platform handling ~40M events/day with 99.95% delivery SLO.",
        "Cut median deploy time from 45 minutes to 6 by rebuilding CI/CD on reusable GitHub Actions workflows.",
        "Grew the platform team from 2 to 6 engineers; introduced lightweight design docs and blameless incident reviews.",
      ],
    },
    {
      role: "Senior Backend Engineer",
      company: "Nordpay",
      period: "2019 — 2022",
      location: "Stockholm, SE",
      achievements: [
        "Owned the payments reconciliation service (Go + PostgreSQL), reducing unmatched transactions by 70%.",
        "Designed the public partner API and its versioning strategy, now used by 30+ integrators.",
        "Ran the on-call rotation revamp that halved pages per week without lowering coverage.",
      ],
    },
    {
      role: "Backend Engineer",
      company: "Studio Mela",
      period: "2017 — 2019",
      location: "Remote",
      achievements: [
        "First backend hire; built the original API, auth, and billing for a B2B SaaS that reached 200 paying teams.",
        "Introduced automated testing and review practices that took the team from zero tests to 80% coverage on core paths.",
      ],
    },
  ],

  education: [
    {
      degree: "MSc, Computer Science & Engineering",
      institution: "Politecnico di Torino",
      period: "2015 — 2017",
      detail:
        "Thesis on backpressure strategies in distributed stream processing.",
    },
    {
      degree: "BSc, Computer Engineering",
      institution: "Politecnico di Torino",
      period: "2012 — 2015",
    },
  ],

  contact: {
    email: "hello@mayalindqvist.dev",
    location: "Turin, Italy · CET (UTC+1)",
    availability: {
      // "available" (green) | "limited" (amber) | "unavailable" (gray)
      status: "limited",
      label: "Open to staff/principal roles from September",
    },
    note: "The fastest way to reach me is email — I reply within a day or two.",
  },

  socialLinks: [
    {
      platform: "github",
      label: "GitHub",
      url: "https://github.com/mayalindqvist",
    },
    {
      platform: "linkedin",
      label: "LinkedIn",
      url: "https://linkedin.com/in/mayalindqvist",
    },
    {
      platform: "mastodon",
      label: "Mastodon",
      url: "https://hachyderm.io/@maya",
    },
    {
      platform: "rss",
      label: "Blog / RSS",
      url: "https://mayalindqvist.dev/feed.xml",
    },
  ],
};
