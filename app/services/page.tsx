import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Pricing } from "@/components/sections/pricing";
import { services } from "@/lib/data/services";
import { offers } from "@/lib/data/offers";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Services — ${siteConfig.name}`,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What I Do"
        title={
          <>
            Not another <em className="italic">AI content mill</em>.
          </>
        }
        subtitle="I don't write generic SaaS content. I study your readers first — and it shows."
      />

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.number}
                className="rounded-[3rem] border border-black/5 bg-cream p-10 transition-all duration-300 hover:shadow-[0_16px_50px_-12px_rgba(239,74,134,0.5)] sm:rounded-full sm:p-14"
              >
                <span className="font-serif text-sm font-bold text-accent">
                  {service.number}
                </span>
                <h3 className="mt-3 font-serif text-xl font-bold leading-snug">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <p className="eyebrow text-ink/40">Content Types</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {offers.map((offer) => (
                <span
                  key={offer}
                  className="rounded-full border border-accent/30 px-4 py-2 text-sm font-medium text-ink"
                >
                  {offer}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Pricing />
    </>
  );
}
