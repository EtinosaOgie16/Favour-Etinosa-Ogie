import { Eyebrow } from "@/components/ui/eyebrow";
import { writingSamples } from "@/lib/data/samples";

export function SelectedWork() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <Eyebrow>Selected Work</Eyebrow>
            <h2 className="mt-6 font-serif text-3xl font-bold leading-tight sm:text-4xl">
              Content that <em className="italic">ranks and gets cited</em>.
            </h2>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {writingSamples.map((sample) => (
            <article
              key={sample.title}
              className="rounded-[2.5rem] border border-black/5 bg-cream p-8 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_16px_50px_-12px_rgba(238,111,160,0.5)]"
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

        <div className="mt-12">
          <a
            href="/work"
            className="inline-flex items-center gap-2 font-serif text-lg italic text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
          >
            View all work →
          </a>
        </div>
      </div>
    </section>
  );
}
