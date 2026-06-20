import type { ExperienceItem } from "@/types/portfolio";
import { Section } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

export function Experience({ data }: { data: ExperienceItem[] }) {
  return (
    <Section id="experience" title="Experience">
      <Stagger className="space-y-10">
        {data.map((item) => (
          <StaggerItem
            key={`${item.company}-${item.period}`}
            className="border-l-2 border-stone-200 pl-5 dark:border-zinc-800 sm:pl-6"
          >
            <p className="font-mono text-xs text-stone-500 dark:text-zinc-500">
              {item.period}
              {item.location && <span> · {item.location}</span>}
            </p>
            <h3 className="mt-1.5 font-display text-lg font-semibold text-stone-900 dark:text-zinc-50">
              {item.role}{" "}
              <span className="font-normal text-stone-500 dark:text-zinc-400">
                ·{" "}
                {item.companyUrl ? (
                  <a
                    href={item.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-stone-300 underline-offset-4 transition-colors hover:text-teal-700 hover:decoration-teal-600/50 dark:decoration-zinc-700 dark:hover:text-teal-400"
                  >
                    {item.company}
                  </a>
                ) : (
                  item.company
                )}
              </span>
            </h3>
            <ul className="mt-3 space-y-2">
              {item.achievements.map((achievement) => (
                <li key={achievement} className="flex items-start gap-2 text-sm leading-relaxed">
                  <span className="mt-0.5 font-mono text-teal-700 dark:text-teal-400" aria-hidden="true">
                    ›
                  </span>
                  {achievement}
                </li>
              ))}
            </ul>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
