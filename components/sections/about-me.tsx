import Image from "next/image";
import { Eyebrow } from "@/components/ui/eyebrow";
import { aboutMeBio, aboutMePullQuote } from "@/lib/data/about-me";

export function AboutMe() {
  const [firstParagraph, ...restParagraphs] = aboutMeBio;

  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <blockquote className="mx-auto max-w-xl text-center">
          <p className="font-serif text-lg italic leading-relaxed text-ink/70">
            &ldquo;{aboutMePullQuote.quote}&rdquo;
          </p>
          <footer className="eyebrow mt-4 text-ink/40">
            — {aboutMePullQuote.name}, {aboutMePullQuote.title}
          </footer>
        </blockquote>

        <div className="mt-10 text-center">
          <Eyebrow className="text-center">About Me</Eyebrow>
          <h2 className="mx-auto mt-6 max-w-2xl font-serif text-3xl font-bold leading-tight sm:text-4xl">
            3+ years in B2B SaaS content. Still in the{" "}
            <em className="italic">research rabbit hole</em>.
          </h2>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden [border-radius:63%_37%_54%_46%/43%_37%_63%_57%]">
            <Image
              src="/placeholders/hero-portrait.svg"
              alt="Favour Etinosa Ogie"
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
          </div>
        </div>
      </div>
    </section>
  );
}
