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
            Not another <em className="italic">AI content mill</em>.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/60">
            I don&rsquo;t write generic SaaS content. I study your readers first — and it
            shows.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.number}
              className="rounded-[3rem] bg-cream p-10 text-ink sm:rounded-full sm:p-14"
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
          <PillButton href="/contact" variant="solid">
            Work with me
          </PillButton>
        </div>
      </div>
    </section>
  );
}
