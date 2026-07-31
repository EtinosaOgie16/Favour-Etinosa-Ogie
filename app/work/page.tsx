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
        subtitle="I write content that shows up on Google, gets pulled into AI answers, and actually converts."
      />

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            {writingSamples.map((sample) => (
              <a
                key={sample.title}
                href={sample.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center rounded-[3rem] border-2 border-blush-deep bg-cream p-10 text-center transition-all duration-300 hover:border-accent hover:shadow-[0_16px_50px_-12px_rgba(239,74,134,0.5)] sm:rounded-full sm:p-14"
              >
                <span className="rounded-full bg-ink px-4 py-1.5 text-xs font-semibold text-white">
                  {sample.client}
                </span>
                <span className="eyebrow mt-4 text-ink/40">{sample.category}</span>
                <h3 className="mt-3 font-serif text-lg font-bold leading-snug transition-colors group-hover:text-accent">
                  {sample.title}
                </h3>
                <p className="mt-2 text-xs text-ink/40">Target: {sample.keyword}</p>

                <div className="mt-7 flex items-start justify-center gap-8">
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className={
                        sample.serpRank
                          ? "flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent bg-accent/10 text-sm font-bold text-accent"
                          : "flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-ink/25 text-xs font-semibold text-ink/50"
                      }
                    >
                      {sample.serpRank ?? "TBD"}
                    </div>
                    <span className="eyebrow text-[0.6rem] text-ink/40">SERP Rank</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className={
                        sample.citedInAI
                          ? "flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent bg-accent/10 text-xs font-bold text-accent"
                          : "flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-ink/25 text-xs font-semibold text-ink/50"
                      }
                    >
                      {sample.citedInAI ? "Yes" : "—"}
                    </div>
                    <span className="eyebrow text-[0.6rem] text-ink/40">AI Overviews</span>
                  </div>
                </div>

                {sample.note && (
                  <p className="mt-5 max-w-xs text-xs italic leading-relaxed text-ink/40">
                    {sample.note}
                  </p>
                )}

                <span className="mt-7 text-sm font-semibold text-accent">
                  Read the piece ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
