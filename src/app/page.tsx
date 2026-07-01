import { portfolio } from "@/data/portfolio";
import { Header, type NavItem } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Certificates } from "@/components/sections/Certificates";
import { Contact } from "@/components/sections/Contact";
import { SocialLinks } from "@/components/sections/SocialLinks";

/** True when an optional array exists and has at least one item. */
function hasItems<T>(arr: T[] | undefined): arr is T[] {
  return Array.isArray(arr) && arr.length > 0;
}

export default function Page() {
  const {
    hero,
    about,
    skills,
    projects,
    experience,
    education,
    certificates,
    contact,
    socialLinks,
  } = portfolio;

  // Each section renders only when its data exists — and the header nav
  // mirrors exactly the sections that are visible.
  const showAbout = !!about && about.paragraphs.length > 0;
  const showSkills = hasItems(skills);
  const showProjects = hasItems(projects);
  const showExperience = hasItems(experience);
  const showEducation = hasItems(education);
  const showCertificates = hasItems(certificates);
  const showContact = !!contact?.email;
  const showSocial = hasItems(socialLinks);

  const navItems: NavItem[] = [
    showAbout && { id: "about", label: "About" },
    showSkills && { id: "skills", label: "Skills" },
    showProjects && { id: "projects", label: "Projects" },
    showExperience && { id: "experience", label: "Experience" },
    showEducation && { id: "education", label: "Education" },
    showCertificates && { id: "certificates", label: "Certificates" },
    showContact && { id: "contact", label: "Contact" },
  ].filter((item): item is NavItem => Boolean(item));

  return (
    <>
      <Header brand={hero.name} items={navItems} />

      <main>
        <Hero data={hero} />
        {showAbout && <About data={about} />}
        {showSkills && <Skills data={skills} />}
        {showProjects && <Projects data={projects} />}
        {showExperience && <Experience data={experience} />}
        {showEducation && <Education data={education} />}
        {showCertificates && <Certificates data={certificates} />}
        {showContact && <Contact data={contact} />}
        {showSocial && <SocialLinks data={socialLinks} />}
      </main>

      <footer className="mx-auto max-w-content px-5 pb-10 pt-4 sm:px-8">
        <p className="border-t border-stone-200 pt-6 font-mono text-xs text-stone-400 dark:border-zinc-800 dark:text-zinc-600">
          © {new Date().getFullYear()} {hero.name} · Built with Next.js
        </p>
      </footer>
    </>
  );
}
