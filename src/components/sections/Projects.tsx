import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/types/portfolio";
import { Section, Tag } from "@/components/ui/Section";
import { HoverLift, Stagger, StaggerItem } from "@/components/motion/Reveal";

/** Used by the placeholder when a project has no image. */
function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function ProjectImage({ project }: { project: Project }) {
  if (project.imageUrl) {
    return (
      <div className="relative aspect-[16/9] overflow-hidden bg-stone-100 dark:bg-zinc-900">
        <Image
          src={project.imageUrl}
          alt={`Screenshot of ${project.title}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
          className="object-cover"
        />
      </div>
    );
  }

  // Neutral placeholder: a quiet "terminal" strip echoing the site signature.
  return (
    <div
      aria-hidden="true"
      className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-stone-100 to-stone-200 dark:from-zinc-900 dark:to-zinc-800"
    >
      <span className="font-mono text-sm text-stone-400 dark:text-zinc-600">
        $ open {slugify(project.title)}
      </span>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <HoverLift className="h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
        <ProjectImage project={project} />

        <div className="flex flex-1 flex-col gap-3 p-5">
          <h3 className="font-display text-lg font-semibold text-stone-900 dark:text-zinc-50">
            {project.title}
          </h3>
          <p className="flex-1 text-sm leading-relaxed">
            {project.description}
          </p>

          {project.tags.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li key={tag}>
                  <Tag>{tag}</Tag>
                </li>
              ))}
            </ul>
          )}

          {(project.liveUrl || project.githubUrls) && (
            <div className="mt-1 flex gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-teal-700 px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-teal-600 dark:bg-teal-500 dark:text-zinc-950 dark:hover:bg-teal-400"
                >
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  Live
                </a>
              )}
              {project.githubUrls &&
                project.githubUrls.map((githubUrl) => (
                  <a
                    key={githubUrl.repoType}
                    href={githubUrl.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-stone-300 px-4 py-1.5 text-xs font-medium text-stone-700 transition-colors hover:border-teal-600/50 hover:text-teal-700 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-teal-400/50 dark:hover:text-teal-400"
                  >
                    <Github className="h-3.5 w-3.5" aria-hidden="true" />
                    {githubUrl.repoType}
                  </a>
                ))}
            </div>
          )}
        </div>
      </article>
    </HoverLift>
  );
}

export function Projects({ data }: { data: Project[] }) {
  return (
    <Section id="projects" title="Projects">
      <Stagger className="grid gap-6 sm:grid-cols-2">
        {data.map((project) => (
          <StaggerItem
            key={project.title}
            className={project.featured ? "sm:col-span-2" : undefined}
          >
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
