import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { PillButton } from "@/components/ui/pill-button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Contact — ${siteConfig.name}`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Let's Work Together"
        title={
          <>
            Content that earns its place in your <em className="italic">pipeline</em>.
          </>
        }
        subtitle="Tell me a bit about your team and what you need — I'll reply within one business day."
      />

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-2xl px-6 sm:px-8">
          <div className="rounded-[2rem] bg-blush p-8 text-center sm:p-12">
            <p className="font-serif text-2xl italic">
              Ready to get started?
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">
              The fastest way to reach me is by email or booking a short intro call.
              [Placeholder — swap in a booking link (Calendly, Cal.com, etc.) or embed
              a contact form here later.]
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <PillButton href={siteConfig.bookCallUrl} variant="solid">
                Book an intro call
              </PillButton>
              <PillButton href={`mailto:${siteConfig.email}`} variant="outline">
                Email me
              </PillButton>
            </div>
            <p className="mt-6 text-sm text-ink/60">{siteConfig.email}</p>
          </div>

          <div className="mt-10 flex justify-center gap-8 text-sm font-medium text-ink/60">
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              X / Twitter
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
