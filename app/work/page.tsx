import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { writingSamples } from "@/lib/data/samples";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Work — ${siteConfig.name}`,
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected Work"
        title={
          <>
            Content that <em className="italic">ranks and gets cited</em>.
          </>
        }
        subtitle="Real placeholder results structured exactly how my case studies work — swap in live samples any time."
      />

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {writingSamples.map((sample) => (
              <article
                key={sample.title}
                className="rounded-2xl border border-black/5 bg-cream p-7"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="eyebrow text-ink/50">{sample.category}</span>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    {sample.client}
                  </span>
                </div>

                <h3 className="mt-4 font-serif text-lg font-bold leading-snug">
                  {sample.title}
                </h3>

                <div className="my-5 h-px bg-black/10" />

                <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                  <div>
                    <p className="eyebrow text-ink/40">On Search</p>
                    <p className="mt-1 text-sm font-semibold">
                      {sample.position} · {sample.keyword}
                    </p>
                  </div>
                  <div>
                    <p className="eyebrow text-ink/40">Cited In AI</p>
                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {sample.aiCitations.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full bg-ink px-2.5 py-1 text-[0.65rem] font-semibold text-white"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-5 text-sm font-medium text-accent">{sample.result}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
