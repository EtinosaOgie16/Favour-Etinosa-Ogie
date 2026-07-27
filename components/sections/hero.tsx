import Image from "next/image";
import { PillButton } from "@/components/ui/pill-button";

export function Hero() {
  return (
    <section id="top" className="bg-paper pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:gap-10">
        <div>
          <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-1.5 text-xs font-medium text-ink/70">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Available for work
          </span>
          <p className="eyebrow text-accent" style={{ fontSize: "0.875rem" }}>
            <sup className="mr-1 text-[0.7em]">✦</sup>Hi, I&rsquo;m Favour
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-[1.1] font-bold tracking-tight sm:text-5xl lg:text-[3.4rem]">
            I turn audience research and SME interviews into B2B SaaS content
            that <em className="font-serif italic">sells your product</em>.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70">
            You&rsquo;ve got a ton of articles published on your blog, but not enough
            leads in the pipeline. I bring that extra &ldquo;spice&rdquo; your content needs
            to turn casual readers into repeat buyers.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <PillButton href="/contact" variant="solid">
              Work with me
            </PillButton>
            <PillButton href="/work" variant="outline">
              View my samples
            </PillButton>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div aria-hidden className="pointer-events-none absolute -inset-10 -z-10">
            <Image
              src="/placeholders/brush-stroke-bg.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div
            className="relative aspect-[4/5] w-full"
            style={{
              maskImage:
                "radial-gradient(ellipse 80% 84% at 50% 48%, black 55%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 84% at 50% 48%, black 55%, transparent 100%)",
            }}
          >
            <Image
              src="/placeholders/hero-portrait.svg"
              alt="Portrait of Favour Etinosa Ogie"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
