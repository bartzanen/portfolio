"use client";

import { useEffect, useMemo, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export interface NavItem {
  /** Anchor id of the section, e.g. "projects". */
  id: string;
  label: string;
}

/**
 * Tracks which section is currently in view so the nav can highlight it.
 *
 * The top offset matches the fixed header height, so a section counts as
 * "current" from the moment it clears the header rather than the viewport.
 */
function useActiveSection(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(null);

  // `ids` is a fresh array on every render; key the effect on its contents
  // so the observer is rebuilt only when the sections actually change.
  const idsKey = ids.join(",");

  useEffect(() => {
    const ids = idsKey ? idsKey.split(",") : [];
    if (ids.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-64px 0px -55% 0px", threshold: 0 },
    );

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [idsKey]);

  return active;
}

/**
 * Fixed header. Starts transparent over the hero and smoothly gains a
 * blurred, bordered background once the page is scrolled (CSS transition
 * driven by a scroll listener — no layout shift).
 *
 * Nav items are computed in `page.tsx` from the config, so sections removed
 * from the data disappear from the nav automatically. Below `md` the same
 * items are served through a disclosure menu.
 */
export function Header({ brand, items }: { brand: string; items: NavItem[] }) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 16));

  const ids = useMemo(() => items.map((item) => item.id), [items]);
  const active = useActiveSection(ids);

  // Escape closes the menu, and the page behind it must not scroll while
  // the panel is covering it.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const linkClass = (id: string) =>
    `rounded-full px-3 py-1.5 text-sm transition-colors ${
      active === id
        ? "bg-teal-700/10 font-medium text-teal-700 dark:bg-teal-400/10 dark:text-teal-400"
        : "text-stone-600 hover:bg-stone-200/60 hover:text-stone-900 dark:text-zinc-400 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-100"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-stone-200/70 bg-stone-50/80 backdrop-blur-md dark:border-zinc-800/70 dark:bg-zinc-950/75"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-5 sm:px-8">
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
                    aria-current={active === item.id ? "true" : undefined}
                    className={linkClass(item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ThemeToggle />

          {items.length > 0 && (
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 bg-white/60 text-stone-600 transition-colors hover:border-teal-600/40 hover:text-teal-700 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400 dark:hover:border-teal-400/40 dark:hover:text-teal-400 md:hidden"
            >
              {open ? (
                <X className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Menu className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Mobile disclosure panel — same items as the desktop nav. */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-stone-200/70 bg-stone-50/95 backdrop-blur-md dark:border-zinc-800/70 dark:bg-zinc-950/95 md:hidden"
      >
        <nav aria-label="Sections">
          <ul className="mx-auto flex max-w-content flex-col gap-1 px-5 py-4 sm:px-8">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === item.id ? "true" : undefined}
                  className={`block rounded-xl px-4 py-3 text-base transition-colors ${
                    active === item.id
                      ? "bg-teal-700/10 font-medium text-teal-700 dark:bg-teal-400/10 dark:text-teal-400"
                      : "text-stone-700 hover:bg-stone-200/60 dark:text-zinc-300 dark:hover:bg-zinc-800/60"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
