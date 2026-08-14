import certificate_advanced_deep_learning_specialist from "@/assets/advanced-deep-learning-specialist.png";
import certifcate_ibm_logo from "@/assets/ibm_logo.jpeg";
import portrait from "@/assets/portrait.png";
import project_pulmonurbano from "@/assets/pulmonurbano.png";
import project_dici from "@/assets/dici.png";

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
      "Bart Zanen — full-stack developer building AI-powered web apps. Explore projects, experience, and skills spanning React, Python, and ML",
    // Set this to your deployed domain so Open Graph links resolve correctly.
    url: "https://bartzanen.com/",
    // 1200×630 image used for link previews. Drop a file in /public and
    // reference it with an absolute URL once deployed, or use a hosted image.
    ogImage: "https://bartzanen.com/ogimage.jpeg",
    keywords: [
      "Bart Zanen",
      "full-stack developer",
      "software engineer",
      "AI engineer",
      "machine learning",
      "React developer",
      "Python developer",
      "TypeScript",
      "Barcelona software engineer",
      "web developer portfolio",
    ],
  },

  hero: {
    // Small monospace line above the name. Omit to hide.
    name: "Bart Zanen",
    headline: "Full-Stack Software Engineer",
    eyebrow: "Based in Copenhagen",
    tagline:
      "I build full-stack web apps with AI in the stack — from fine-tuned on-device models to the interface around them. Currently co-founding Journii, and open to full-time roles.",
    cta: {
      label: "See my work",
      href: "#projects", // anchors scroll smoothly; mailto: and https:// also work
    },
    secondaryCta: {
      label: "Download CV",
      href: "/Bart_Zanen_CV.pdf",
    },
    portrait: portrait,
  },

  about: {
    paragraphs: [
      "I'm a software engineer who likes building things end to end, from the database up to the interface someone actually clicks on. My happy place is full-stack web development, especially when AI is part of the stack. I've spent the last couple of years getting hands-on experience building AI-adjacent tooling, which I think is becoming essential in this field.",
      "While studying Computer Science at UPC in Barcelona, I spent six months on exchange in Bergen, Norway. After it ended, I chose to stay a while longer, finishing my thesis remotely and working as a Head Waiter leading a team at a high-volume restaurant to support myself in the meantime.",
      "Once I wrapped up my degree, I took a few months to backpack through Southeast Asia, meeting people building all kinds of remote and independent careers along the way. I came back wanting to keep learning and building — which is what I'm doing now, co-founding Journii and shipping side projects like Dici to stay close to the parts of this field that are moving fastest.",
    ],
    // Short facts shown as a compact side list. Omit or empty to hide.
    highlights: [
      "Full-stack development",
      "Trained & deployed ML models",
      "Led teams under pressure",
      "AI-adjacent tooling",
      "5 languages spoken",
      "Fast learner, fast mover",
    ],
  },

  skills: [
    {
      title: "Languages",
      skills: ["TypeScript", "JavaScript", "Python", "C++", "C", "SQL"],
    },
    {
      title: "Frontend & Mobile",
      skills: [
        "React",
        "Next.js",
        "Expo",
        "React Native",
        "Tailwind CSS",
        "Zustand",
        "Redux",
        "TanStack Query",
      ],
    },
    {
      title: "Backend & Data",
      skills: [
        "Django",
        "NestJS",
        "PostgreSQL",
        "SQLite",
        "FastAPI",
        "Redis",
        "REST APIs",
      ],
    },
    {
      title: "AI/ML",
      skills: ["Core ML", "MLX", "OpenAI API", "Anthropic API", "Hugging Face"],
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git",
        "Docker",
        "Supabase",
        "Firebase",
        "GitHub Actions",
        "Figma",
      ],
    },
    {
      title: "Spoken languages",
      skills: [
        "English · C2",
        "Spanish · C2",
        "Dutch · C2",
        "Catalan · C2",
        "Italian · B1",
      ],
    },
  ],

  projects: [
    {
      title: "Dici",
      description:
        "A privacy-first Italian tutor that runs entirely on your device using a fine-tuned Qwen 3.5 4B model (MLX). It provides real-time conversation feedback, turns mistakes into spaced-repetition flashcards, and keeps you motivated with daily AI challenges. Everything stays local—no cloud, no accounts. Built with Next.js.",

      // Dici — A local-first Italian tutor built on a fine-tuned Qwen 3.5 4B (MLX). Conversation practice with real-time correction, daily ▎ challenges, and flashcards generated automatically from your own mistakes — all running on-device with a Next.js interface.

      tags: [
        "Next.js",
        "TypeScript",
        "IndexedDB",
        "MLX",
        "LLM Fine-tuning",
        "Prompt Engineering",
        "Qwen",
      ],
      liveUrl: "https://dici-frontend.vercel.app/",
      githubUrls: [
        {
          url: "https://github.com/bartzanen/dici",
          repoType: "ML Model",
        },
        {
          url: "https://github.com/bartzanen/dici-frontend",
          repoType: "Frontend",
        },
      ],
      featured: true,
      imageUrl: project_dici,
    },
    {
      title: "Journii",
      description:
        "A social platform for Erasmus students combining a social feed, event discovery, and nearby connections, so students can make the most of their exchange. I co-founded it and built the core of both clients — a Next.js web app and an Expo mobile app sharing UI components, types, and themes through an internal package system, deployed on Cloudflare via CI/CD.",
      tags: [
        "React Native",
        "Expo",
        "Next.js",
        "Supabase",
        "Monorepo",
        "CI/CD",
        "Cloudflare",
      ],
      liveUrl: "https://journiiapp.com",
      githubUrls: [
        {
          url: "https://github.com/journii-app/journii-mobile",
          repoType: "Mobile",
          private: true,
        },
        {
          url: "https://github.com/journii-app/journii-web",
          repoType: "Web",
          private: true,
        },
      ],
    },
    {
      title: "AiGile 2.0",
      description:
        "My Bachelor's thesis at UPC — the second iteration of AiGILE, an AI-powered educational platform for teaching agile methodologies in a university Software Project Management course.",
      tags: ["Django", "OpenAI API", "PostgreSQL", "Docker", "Education"],
      githubUrls: [
        {
          url: "https://github.com/marcoriol/AIGILE",
          repoType: "Code",
          private: true,
        },
      ],
    },
    {
      title: "Pulmón Urbano",
      description:
        "A mobile app for athletes in Barcelona. Combines a real-time air quality map with route planning that favors cleaner-air paths, plus social features like activity tracking, a community feed, friends, and chat. Built with React Native/Expo and a Django backend, integrating OSRM for routing and Barcelona's open air-quality data API.",
      tags: [
        "React Native",
        "Expo",
        "Django",
        "PostgreSQL",
        "Firebase",
        "OSRM",
        "API",
      ],
      githubUrls: [
        {
          url: "https://github.com/pes2425q1-1-gei-upc/Pulmon-Urbano-Frontend",
          repoType: "Frontend",
        },
        {
          url: "https://github.com/pes2425q1-1-gei-upc/Pulmon-Urbano-Backend",
          repoType: "Backend",
        },
      ],
      imageUrl: project_pulmonurbano,
    },
  ],

  experience: [
    {
      role: "Co-Founder",
      company: "Journii",
      companyUrl: "https://journiiapp.com",
      category: "engineering",
      period: "Jun 2026 — Present",
      location: "Remote",
      achievements: [
        "Architected and developed core software for two applications (Next.js web, Expo mobile), establishing monorepo structure, CI/CD, and Cloudflare deployment.",
        "Built an internal GitHub package system centralizing UI components, types, and themes for reuse across all applications.",
      ],
    },
    {
      role: "Junior Full-Stack Developer",
      company: "Rosepetal",
      companyUrl: "https://www.rosepetal.ai/",
      category: "engineering",
      period: "Apr 2024 — Jan 2025",
      location: "Sabadell, ES",
      achievements: [
        "Built an AI-assisted dataset labeling tool integrated into the internal editor, improving labeling efficiency by 35%.",
        "Developed and improved software for AI-driven quality control systems, supporting automated defect detection and process monitoring on industrial production lines.",
        "Identified and resolved performance bottlenecks across the application, improving responsiveness and overall system stability.",
      ],
    },
    {
      role: "Head Waiter",
      company: "Villa Paradiso",
      companyUrl: "https://www.villaparadiso.no/",
      category: "other",
      period: "Apr 2025 — Jan 2026",
      location: "Bergen, NO",
      achievements: [
        "Led and coordinated a waitstaff team in a high-volume restaurant serving 150+ guests simultaneously.",
        "Managed reservations, guest requests, and table coordination, keeping service running smoothly under nightly pressure.",
        "Trained and onboarded new staff on service procedures, helping maintain consistent standards across the team.",
        "Collaborated cross-functionally with kitchen and bar teams to streamline communication and improve guest experience.",
      ],
    },
    {
      role: "Tour Guide",
      company: "Self-Employed",
      category: "other",
      period: "May 2024 — Sep 2024",
      location: "Barcelona, ES",
      achievements: [
        "Built and ran an end-to-end bike tour business, handling bookings, payments, scheduling, and customer communication.",
        "Led tours for groups of up to 10, adapting routes and storytelling to different group sizes and interests.",
        "Maintained a 5-star customer rating across the season by tailoring each tour to guest interests.",
      ],
    },
    {
      role: "Team Coordinator",
      company: "FieldHockeyTravel.com",
      companyUrl:
        "https://www.fieldhockeytravel.com/pg-28957-7-114462/pagina/home.html",
      category: "other",
      period: "Feb 2023 — Feb 2024",
      location: "Barcelona, ES",
      achievements: [
        "Coordinated transportation and logistics for international hockey teams, including airport transfers and bus schedules.",
        "Acted as the main point of contact between drivers, venues, and event organizers to prevent delays during tournaments.",
        "Provided on-the-ground assistance and recommendations to visiting teams throughout their stay.",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor's Degree in Computer Science (Software Engineering)",
      institution: "Universitat Politècnica de Catalunya (UPC)",
      period: "Sep 2021 — Jan 2026",
      detail:
        "Thesis: AiGile 2.0, an AI-powered tool for learning agile methodologies.",
    },
    {
      degree: "Erasmus Exchange",
      institution: "Universitetet i Bergen (UiB)",
      period: "Jan 2025 — Jun 2025",
      detail: "Coursework in Machine Learning and Web Development.",
    },
    {
      degree: "Talent Program, Bojos per les Noves Tecnologies",
      institution: "Fundació Catalunya — La Pedrera",
      period: "2020 — 2021",
      detail:
        "Selective program for secondary students in programming, robotics, and applied digital technology.",
    },
  ],

  certificates: [
    {
      title: "Advanced Deep Learning Specialist",
      issuer: "Coursera",
      date: "2026",
      credentialUrl:
        "https://www.credly.com/badges/d9f524f7-81b1-4d25-946e-ece683b6eddc",
      imageUrl: certificate_advanced_deep_learning_specialist,
      tags: ["Deep Learning", "Keras", "TensorFlow", "CNNs", "Transformers"],
    },
    {
      title: "Machine Learning with Python",
      issuer: "Coursera",
      date: "Jun 2026",
      credentialUrl:
        "https://coursera.org/share/df9a827a193ce3700a46aeceecdc1b9f",
      imageUrl: certifcate_ibm_logo,
      tags: ["Machine Learning", "Python"],
    },
  ],

  contact: {
    email: "bartszanen@gmail.com",
    location: "Copenhagen, DK · CET (UTC+1)",
    availability: {
      // "available" (green) | "limited" (amber) | "unavailable" (gray)
      status: "available",
      label: "Open to full-time roles",
    },
    note: "Always happy to talk about new opportunities, feel free to reach out",
  },

  socialLinks: [
    {
      platform: "github",
      label: "GitHub",
      url: "https://github.com/bartzanen",
    },
    {
      platform: "linkedin",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/bart-sebastiaan-zanen",
    },
    {
      platform: "calendly",
      label: "Calendly",
      url: "https://calendly.com/bartszanen/30min",
    },
    {
      platform: "cv",
      label: "CV",
      url: "/Bart_Zanen_CV.pdf",
    },
  ],
};
