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
            Content that earns its place in your <em className="italic">pipeline</em>.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ink/70">
            B2B SaaS content built to rank on Google, get cited by AI, and turn traffic
            into demos.
          </p>
          <div className="mt-9 flex justify-center">
            <PillButton href="/contact" variant="solid">
              Book an intro call
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
