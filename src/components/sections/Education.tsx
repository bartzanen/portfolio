import type { EducationItem } from "@/types/portfolio";
import { Section } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

export function Education({ data }: { data: EducationItem[] }) {
  return (
    <Section id="education" title="Education">
      <Stagger className="space-y-8">
        {data.map((item) => (
          <StaggerItem key={`${item.degree}-${item.period}`}>
            <p className="font-mono text-xs text-stone-500 dark:text-zinc-500">{item.period}</p>
            <h3 className="mt-1.5 font-display text-lg font-semibold text-stone-900 dark:text-zinc-50">
              {item.degree}
            </h3>
            <p className="mt-0.5 text-sm text-stone-600 dark:text-zinc-400">{item.institution}</p>
            {item.detail && <p className="mt-2 text-sm leading-relaxed">{item.detail}</p>}
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
