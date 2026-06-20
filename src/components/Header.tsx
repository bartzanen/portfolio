"use client";

import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";

export interface NavItem {
  /** Anchor id of the section, e.g. "projects". */
  id: string;
  label: string;
}

/**
 * Fixed header. Starts transparent over the hero and smoothly gains a
 * blurred, bordered background once the page is scrolled (CSS transition
 * driven by a scroll listener — no layout shift).
 *
 * Nav items are computed in `page.tsx` from the config, so sections removed
 * from the data disappear from the nav automatically.
 */
export function Header({ brand, items }: { brand: string; items: NavItem[] }) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 16));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-stone-200/70 bg-stone-50/80 backdrop-blur-md dark:border-zinc-800/70 dark:bg-zinc-950/75"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="font-mono text-sm font-medium text-stone-900 transition-colors hover:text-teal-700 dark:text-zinc-100 dark:hover:text-teal-400"
        >
          {brand}
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <nav aria-label="Sections" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="rounded-full px-3 py-1.5 text-sm text-stone-600 transition-colors hover:bg-stone-200/60 hover:text-stone-900 dark:text-zinc-400 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-100"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
