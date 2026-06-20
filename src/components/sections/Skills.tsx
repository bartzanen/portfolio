import type { SkillGroup } from "@/types/portfolio";
import { Section, Tag } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

export function Skills({ data }: { data: SkillGroup[] }) {
  return (
    <Section id="skills" title="Skills">
      <Stagger className="space-y-8">
        {data.map((group) => (
          <StaggerItem key={group.title}>
            <h3 className="font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-zinc-500">
              {group.title}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill}>
                  <Tag>{skill}</Tag>
                </li>
              ))}
            </ul>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
