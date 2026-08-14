import type { ReactNode } from "react";
import type { SkillGroup } from "@/types/portfolio";
import { Section } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

/**
 * Skill chip — deliberately lighter than the shared `Tag`.
 *
 * A handful of tags on a project card can each carry a border; fifty of them
 * in a row cannot, or the section reads as noise. Same type, less chrome.
 */
function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-stone-200/60 px-2.5 py-1 font-mono text-xs text-stone-700 dark:bg-zinc-900 dark:text-zinc-300">
      {children}
    </span>
  );
}

/**
 * Skills reads as a spec sheet rather than a tag cloud: the group name sits
 * in a fixed left gutter and its skills flow in a single wide column beside
 * it, with a hairline rule between groups.
 *
 * The gutter is what does the work — every row starts on the same left edge,
 * so the wrapped rows stop looking like scattered confetti. The section runs
 * at the wider Projects width for the same reason: more room per line means
 * fewer groups ending in a lone orphan chip.
 */
export function Skills({ data }: { data: SkillGroup[] }) {
  return (
    <Section id="skills" title="Skills" width="wide">
      <Stagger className="divide-y divide-stone-200 border-y border-stone-200 dark:divide-zinc-800 dark:border-zinc-800">
        {data.map((group) => (
          <StaggerItem key={group.title}>
            <div className="grid gap-x-8 gap-y-3 py-5 sm:grid-cols-[10rem_1fr] sm:py-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-zinc-500 sm:pt-1.5">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <Chip>{skill}</Chip>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
