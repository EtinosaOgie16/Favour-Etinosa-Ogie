"use client";

import { useEffect, useRef, useState } from "react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { processSteps } from "@/lib/data/process";

export function Process() {
  const [active, setActive] = useState(0);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActive(index);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    rowRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="max-w-2xl">
          <Eyebrow>My Process</Eyebrow>
          <h2 className="mt-6 font-serif text-3xl font-bold leading-tight sm:text-4xl">
            The Favour Framework: <em className="italic">Watch me Cook!</em>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/70">
            My recipe for writing content that speaks to readers and drives results
            for your brand.
          </p>
        </div>

        <div className="relative mt-16 pl-8 sm:pl-10">
          <div className="absolute top-2 bottom-2 left-0 w-px bg-black/10" aria-hidden />

          <div className="flex flex-col gap-14">
            {processSteps.map((step, i) => (
              <div
                key={step.number}
                ref={(el) => {
                  rowRefs.current[i] = el;
                }}
                data-index={i}
                className="grid gap-5 sm:grid-cols-[minmax(0,13rem)_minmax(0,1fr)] sm:items-center sm:gap-14"
              >
                <div className="relative">
                  <span
                    className={`absolute -left-8 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full ring-4 ring-paper transition-colors duration-300 sm:-left-10 ${
                      active === i ? "bg-accent" : "bg-ink/20"
                    }`}
                    aria-hidden
                  />
                  <p
                    className={`eyebrow transition-colors duration-300 ${
                      active === i ? "text-accent" : "text-ink/30"
                    }`}
                  >
                    {step.number}
                  </p>
                  <h3
                    className={`mt-2 font-serif text-xl font-bold leading-snug transition-colors duration-300 sm:text-2xl ${
                      active === i ? "text-ink" : "text-ink/30"
                    }`}
                  >
                    {step.title}
                  </h3>
                </div>

                <div
                  className={`rounded-[3rem] p-10 transition-all duration-300 sm:rounded-full sm:p-14 ${
                    active === i
                      ? "bg-blush shadow-[0_16px_50px_-12px_rgba(239,74,134,0.35)]"
                      : "bg-cream/60"
                  }`}
                >
                  <p
                    className={`text-base leading-relaxed transition-colors duration-300 ${
                      active === i ? "text-ink/80" : "text-ink/35"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <a
            href="/work"
            className="inline-flex items-center gap-2 font-serif text-lg italic text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
          >
            See the process in action →
          </a>
        </div>
      </div>
    </section>
  );
}
