import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Shared section shell: consistent spacing, a monospace "terminal path"
 * eyebrow (the site's visual signature, e.g. `~/projects`), and a display
 * heading. The id doubles as the anchor target for header navigation.
 */
export function Section({
  id,
  title,
  children,
  width = "narrow",
}: {
  id: string;
  title: string;
  children: ReactNode;
  /** "narrow" = reading column, "wide" = grid sections like Projects. */
  width?: "narrow" | "wide";
}) {
  return (
    <section
      id={id}
      className={`mx-auto w-full scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24 ${
        width === "wide" ? "max-w-5xl" : "max-w-content"
      }`}
    >
      <Reveal>
        <p
          className="font-mono text-sm text-teal-700 dark:text-teal-400"
          aria-hidden="true"
        >
          ~/{id}
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-stone-900 dark:text-zinc-50 sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      <div className="mt-8 sm:mt-10">{children}</div>
    </section>
  );
}

/** Small pill used for skills and project tags. */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-stone-200 bg-white px-3 py-1 font-mono text-xs text-stone-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
      {children}
    </span>
  );
}
