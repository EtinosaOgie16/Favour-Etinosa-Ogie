import { Eyebrow } from "@/components/ui/eyebrow";
import { PillButton } from "@/components/ui/pill-button";
import { services } from "@/lib/data/services";

export function WhatIDo() {
  return (
    <section className="bg-onyx py-24 text-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="max-w-2xl">
          <Eyebrow>What I Do</Eyebrow>
          <h2 className="mt-6 font-serif text-3xl font-bold leading-tight sm:text-4xl">
            For brands and agencies that are done with content that&rsquo;s just{" "}
            <em className="italic">good enough</em>.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/60">
            Good enough content might help you rank, or attract some traffic, but it
            can&rsquo;t differentiate your product from the hundreds of others on the
            market or speak directly to your ideal buyers. And it certainly
            can&rsquo;t close.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            If you&rsquo;ve been burned by content that just checks boxes, let&rsquo;s fix
            that.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.number}
              className="rounded-[3rem] bg-cream p-10 text-ink transition-all duration-300 hover:shadow-[0_16px_50px_-12px_rgba(239,74,134,0.55)] sm:rounded-full sm:p-14"
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

        <div className="mt-14 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <p className="font-serif text-xl italic">Ready to outgrow basic content?</p>
          <PillButton href="/contact" variant="solid">
            Let&rsquo;s talk
          </PillButton>
        </div>
      </div>
    </section>
  );
}
