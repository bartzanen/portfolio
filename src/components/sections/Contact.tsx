import { Mail, MapPin } from "lucide-react";
import type { Contact as ContactData } from "@/types/portfolio";
import { Section } from "@/components/ui/Section";
import { HoverLift, Reveal } from "@/components/motion/Reveal";

const statusDot: Record<NonNullable<ContactData["availability"]>["status"], string> = {
  available: "bg-emerald-500",
  limited: "bg-amber-500",
  unavailable: "bg-stone-400 dark:bg-zinc-600",
};

export function Contact({ data }: { data: ContactData }) {
  return (
    <Section id="contact" title="Contact">
      <Reveal delay={0.05}>
        {data.availability && (
          <p className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-1.5 text-sm dark:border-zinc-800 dark:bg-zinc-900">
            <span
              className={`h-2 w-2 rounded-full ${statusDot[data.availability.status]}`}
              aria-hidden="true"
            />
            {data.availability.label}
          </p>
        )}

        {data.note && <p className="mt-5 max-w-xl leading-relaxed">{data.note}</p>}

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
          <HoverLift className="w-fit">
            <a
              href={`mailto:${data.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-teal-700 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-teal-600 dark:bg-teal-500 dark:text-zinc-950 dark:hover:bg-teal-400"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {data.email}
            </a>
          </HoverLift>

          {data.location && (
            <p className="inline-flex items-center gap-1.5 text-sm text-stone-500 dark:text-zinc-500">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {data.location}
            </p>
          )}
        </div>
      </Reveal>
    </Section>
  );
}
