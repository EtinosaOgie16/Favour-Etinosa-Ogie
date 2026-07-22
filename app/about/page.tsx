import Image from "next/image";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { PillButton } from "@/components/ui/pill-button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `About — ${siteConfig.name}`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Me"
        title={
          <>
            The writer behind <em className="italic">the words</em>.
          </>
        }
      />

      <section className="bg-paper py-16">
        <div className="mx-auto grid max-w-5xl items-center gap-14 px-6 sm:px-8 lg:grid-cols-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem]">
            <Image
              src="/placeholders/hero-portrait.svg"
              alt={siteConfig.name}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-base leading-relaxed text-ink/70">
              I&rsquo;m Favour Etinosa Ogie, a freelance B2B SaaS content writer with
              around four years of experience helping SaaS founders and marketing
              teams turn research into content that ranks — and converts.
            </p>
            <p className="mt-5 text-base leading-relaxed text-ink/70">
              [Placeholder bio — replace with your real story: how you got into
              content writing, the industries you specialize in, and what makes your
              process different. This section is easy to edit later in{" "}
              <code className="rounded bg-blush px-1.5 py-0.5 text-sm">
                app/about/page.tsx
              </code>
              .]
            </p>
            <p className="mt-5 text-base leading-relaxed text-ink/70">
              When I&rsquo;m not researching G2 reviews or drafting a comparison page, I&rsquo;m
              [placeholder — hobbies, interests, or a personal note].
            </p>
            <div className="mt-9">
              <PillButton href="/contact" variant="solid">
                Work with me
              </PillButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
