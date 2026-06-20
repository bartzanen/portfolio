import type { About as AboutData } from "@/types/portfolio";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

export function About({ data }: { data: AboutData }) {
  const hasHighlights = (data.highlights?.length ?? 0) > 0;

  return (
    <Section id="about" title="About">
      <div className={hasHighlights ? "grid gap-10 sm:grid-cols-[1fr_14rem]" : ""}>
        <Reveal delay={0.05} className="space-y-5">
          {data.paragraphs.map((paragraph, i) => (
            <p key={i} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </Reveal>

        {hasHighlights && (
          <Reveal delay={0.15}>
            <ul className="space-y-3 border-t border-stone-200 pt-5 dark:border-zinc-800 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
              {data.highlights!.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2 text-sm">
                  <span className="mt-0.5 font-mono text-teal-700 dark:text-teal-400" aria-hidden="true">
                    ›
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </Section>
  );
}
