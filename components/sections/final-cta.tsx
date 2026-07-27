import { Eyebrow } from "@/components/ui/eyebrow";
import { PillButton } from "@/components/ui/pill-button";
import { siteConfig } from "@/lib/site-config";

export function FinalCta() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="rounded-[2.5rem] bg-cream px-8 py-16 text-center sm:px-16 sm:py-20">
          <Eyebrow className="text-center">Let&rsquo;s Work Together</Eyebrow>
          <h2 className="mx-auto mt-6 max-w-xl font-serif text-3xl font-bold leading-tight sm:text-4xl">
            B2B SaaS content that works for{" "}
            <em className="italic">your bottom line</em>.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ink/70">
            Scrap the good enough, the filler and the AI slop. Your product deserves a
            unique voice and a writer ready to go the extra mile.
          </p>
          <div className="mt-9 flex justify-center">
            <PillButton href="/contact" variant="solid">
              Work with me
            </PillButton>
          </div>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-5 inline-block text-sm text-ink/60 underline decoration-accent/40 underline-offset-4 hover:text-accent"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </section>
  );
}
