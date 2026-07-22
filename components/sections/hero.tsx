import Image from "next/image";
import { PillButton } from "@/components/ui/pill-button";

export function Hero() {
  return (
    <section id="top" className="bg-paper pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:gap-10">
        <div>
          <p className="eyebrow text-accent">
            <sup className="mr-1 text-[0.7em]">✦</sup>Hi, I&rsquo;m Favour
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-[1.1] font-bold tracking-tight sm:text-5xl lg:text-[3.4rem]">
            I&rsquo;m a <em className="font-serif italic">content marketing writer</em> for
            B2B SaaS brands
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70">
            I write research-backed, MOFU/BOFU content that ranks on Google, gets cited
            by AI, and turns readers into demos.
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
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem]">
            <Image
              src="/placeholders/hero-portrait.svg"
              alt="Portrait of Favour Etinosa Ogie"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-accent px-5 py-3 text-white shadow-lg sm:block">
            <p className="font-serif text-xl italic leading-none">4+ yrs</p>
            <p className="mt-1 text-xs text-white/80">B2B SaaS content</p>
          </div>
        </div>
      </div>
    </section>
  );
}
