import Image from "next/image";
import { Award, BadgeCheck } from "lucide-react";
import type { Certificate } from "@/types/portfolio";
import { Section, Tag } from "@/components/ui/Section";
import { HoverLift, Stagger, StaggerItem } from "@/components/motion/Reveal";

/** Square badge thumbnail, or a neutral award icon when no image is provided. */
function CertificateBadge({ cert }: { cert: Certificate }) {
  if (cert.imageUrl) {
    return (
      <div className="relative h-14 w-14 flex-none overflow-hidden rounded-xl bg-stone-100 dark:bg-zinc-800">
        <Image
          src={cert.imageUrl}
          alt={`${cert.title} badge`}
          fill
          sizes="56px"
          className="object-contain"
        />
      </div>
    );
  }

  // Neutral placeholder so a card without a badge image never looks broken.
  return (
    <div
      aria-hidden="true"
      className="flex h-14 w-14 flex-none items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-teal-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-teal-400"
    >
      <Award className="h-6 w-6" />
    </div>
  );
}

function CertificateCard({ cert }: { cert: Certificate }) {
  return (
    <HoverLift className="h-full">
      <article className="flex h-full gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
        <CertificateBadge cert={cert} />

        <div className="flex flex-1 flex-col gap-2">
          <div>
            <h3 className="font-display text-base font-semibold leading-snug text-stone-900 dark:text-zinc-50">
              {cert.title}
            </h3>
            <p className="mt-0.5 text-sm text-stone-600 dark:text-zinc-400">
              {cert.issuer}
              {cert.date && (
                <span className="text-stone-400 dark:text-zinc-500">
                  {" · "}
                  {cert.date}
                </span>
              )}
            </p>
          </div>

          {cert.credentialId && (
            <p className="font-mono text-xs text-stone-500 dark:text-zinc-500">
              ID: {cert.credentialId}
            </p>
          )}

          {cert.tags && cert.tags.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {cert.tags.map((tag) => (
                <li key={tag}>
                  <Tag>{tag}</Tag>
                </li>
              ))}
            </ul>
          )}

          {cert.credentialUrl && (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex w-fit items-center gap-1.5 pt-1 text-xs font-medium text-teal-700 transition-colors hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
            >
              <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
              Verify credential
            </a>
          )}
        </div>
      </article>
    </HoverLift>
  );
}

export function Certificates({ data }: { data: Certificate[] }) {
  return (
    <Section id="certificates" title="Certificates & Badges">
      <Stagger className="grid gap-6 sm:grid-cols-2">
        {data.map((cert) => (
          <StaggerItem key={`${cert.title}-${cert.issuer}`}>
            <CertificateCard cert={cert} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
