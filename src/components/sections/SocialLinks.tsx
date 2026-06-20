import type { SocialLink } from "@/types/portfolio";
import { Section } from "@/components/ui/Section";
import { HoverLift, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { socialIcon } from "@/lib/social-icons";

export function SocialLinks({ data }: { data: SocialLink[] }) {
  return (
    <Section id="links" title="Elsewhere">
      <Stagger className="flex flex-wrap gap-3">
        {data.map((link) => {
          const Icon = socialIcon(link.platform);
          return (
            <StaggerItem key={link.url}>
              <HoverLift>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-medium text-stone-700 transition-colors hover:border-teal-600/50 hover:text-teal-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-teal-400/50 dark:hover:text-teal-400"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {link.label}
                </a>
              </HoverLift>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
