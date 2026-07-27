import Image from "next/image";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { PillButton } from "@/components/ui/pill-button";
import { aboutMeBio, aboutMePullQuote } from "@/lib/data/about-me";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `About — ${siteConfig.name}`,
};

export default function AboutPage() {
  const [firstParagraph, ...restParagraphs] = aboutMeBio;

  return (
    <>
      <PageHeader
        eyebrow="About Me"
        title={
          <>
            3+ years in B2B SaaS content. Still in the{" "}
            <em className="italic">research rabbit hole</em>.
          </>
        }
      />

      <section className="bg-paper py-16">
        <div className="mx-auto grid max-w-5xl items-center gap-14 px-6 sm:px-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden [border-radius:63%_37%_54%_46%/43%_37%_63%_57%]">
            <Image
              src="/photos/favour-about.jpg.jpg"
              alt={siteConfig.name}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-base leading-relaxed text-ink/70 first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-6xl first-letter:leading-[0.8] first-letter:font-bold first-letter:text-accent-text">
              {firstParagraph}
            </p>
            {restParagraphs.map((paragraph, i) => (
              <p key={i} className="mt-4 text-base leading-relaxed text-ink/70">
                {paragraph}
              </p>
            ))}
            <p className="mt-6 font-serif text-xl italic text-ink underline decoration-accent decoration-2 underline-offset-4">
              — Favour
            </p>
            <div className="mt-9">
              <PillButton href="/contact" variant="solid">
                Work with me
              </PillButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blush py-16">
        <blockquote className="mx-auto max-w-xl px-6 text-center sm:px-8">
          <p className="font-serif text-lg italic leading-relaxed text-ink/70">
            &ldquo;{aboutMePullQuote.quote}&rdquo;
          </p>
          <footer className="eyebrow mt-4 text-ink/40">
            — {aboutMePullQuote.name}, {aboutMePullQuote.title}
          </footer>
        </blockquote>
      </section>
    </>
  );
}
