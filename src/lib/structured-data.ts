import type { Portfolio } from "@/types/portfolio";

/**
 * Builds a schema.org `Person` object from the portfolio config.
 *
 * This is what search engines use to build a knowledge panel for a personal
 * name query, so everything here is derived from existing config rather than
 * duplicated — the structured data cannot drift from the visible page.
 */
export function personSchema(portfolio: Portfolio) {
  const { seo, hero, about, contact, socialLinks, education, skills } =
    portfolio;

  // "Copenhagen, DK · CET (UTC+1)" -> "Copenhagen, DK" -> locality + country
  const [locality, country] = (contact?.location ?? "")
    .split("·")[0]
    .trim()
    .split(",")
    .map((part) => part.trim());

  // Only real profile URLs belong in sameAs — not the CV, and not mailto.
  const sameAs = (socialLinks ?? [])
    .filter((link) => /^https?:\/\//.test(link.url) && link.platform !== "cv")
    .map((link) => link.url);

  // Spoken-language proficiencies are not areas of expertise. Matched on
  // "spoken" specifically so the "Languages" group (the programming ones)
  // is still included.
  const knowsAbout = (skills ?? [])
    .filter((group) => !/spoken/i.test(group.title))
    .flatMap((group) => group.skills);

  // "English · C2" -> "English"
  const knowsLanguage = (skills ?? [])
    .filter((group) => /spoken/i.test(group.title))
    .flatMap((group) => group.skills.map((s) => s.split("·")[0].trim()));

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: hero.name,
    jobTitle: hero.headline,
    description: about?.paragraphs[0] ?? seo.description,
    ...(seo.url ? { url: seo.url } : {}),
    ...(seo.ogImage ? { image: seo.ogImage } : {}),
    ...(contact?.email ? { email: `mailto:${contact.email}` } : {}),
    ...(locality
      ? {
          address: {
            "@type": "PostalAddress",
            addressLocality: locality,
            ...(country ? { addressCountry: country } : {}),
          },
        }
      : {}),
    ...(sameAs.length > 0 ? { sameAs } : {}),
    ...(knowsAbout.length > 0 ? { knowsAbout } : {}),
    ...(knowsLanguage.length > 0 ? { knowsLanguage } : {}),
    ...(education && education.length > 0
      ? {
          alumniOf: education.map((item) => ({
            "@type": "EducationalOrganization",
            name: item.institution,
          })),
        }
      : {}),
  };
}
