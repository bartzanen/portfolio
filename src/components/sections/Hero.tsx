"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import type { Hero as HeroData } from "@/types/portfolio";

const EASE = [0.21, 0.65, 0.36, 1] as const;

/**
 * Hero: the only section that animates on page load (a single, short
 * staggered entrance) instead of on scroll.
 */
export function Hero({ data }: { data: HeroData }) {
  const reduce = useReducedMotion();

  const enter = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: EASE },
        };

  return (
    <section
      id="top"
      className="mx-auto flex min-h-[88svh] w-full max-w-content items-center px-5 pb-12 pt-28 sm:px-8"
    >
      <div className="flex w-full flex-col-reverse items-center gap-10 sm:flex-row sm:justify-between">
        <div className="flex flex-col sm:max-w-xl">
          {data.eyebrow && (
            <motion.p
              {...enter(0)}
              className="font-mono text-sm text-teal-700 dark:text-teal-400"
            >
              {data.eyebrow}
            </motion.p>
          )}

          <motion.h1
            {...enter(0.08)}
            className="mt-3 font-display text-4xl font-semibold tracking-tight text-stone-900 dark:text-zinc-50 sm:text-6xl"
          >
            {data.name}
          </motion.h1>

          <motion.p
            {...enter(0.16)}
            className="mt-3 font-display text-xl text-teal-700 dark:text-teal-400 sm:text-2xl"
          >
            {data.headline}
          </motion.p>
          {data.tagline && (
            <motion.p
              {...enter(0.24)}
              className="mt-5 text-base leading-relaxed sm:text-lg"
            >
              {data.tagline}
            </motion.p>
          )}

          {data.cta && (
            <motion.div {...enter(0.32)} className="mt-9">
              <motion.a
                href={data.cta.href}
                whileHover={reduce ? undefined : { y: -3 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="inline-flex items-center gap-2 rounded-full bg-teal-700 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-teal-600 dark:bg-teal-500 dark:text-zinc-950 dark:hover:bg-teal-400"
              >
                {data.cta.label}
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </motion.a>
            </motion.div>
          )}
        </div>

        {data.portrait && (
          <motion.div {...enter(0.1)} className="shrink-0">
            <Image
              src={data.portrait}
              alt={data.name}
              width={260}
              height={260}
              priority
              className="rounded-full object-cover shadow-lg ring-4 ring-teal-700/20 dark:ring-teal-400/20"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
