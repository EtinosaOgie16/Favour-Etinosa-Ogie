"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const total = testimonials.length;
  const t = testimonials[active];

  const step = (delta: number) =>
    setActive((current) => (current + delta + total) % total);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="bg-blush py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex items-end justify-between gap-4">
          <div className="max-w-2xl">
            <Eyebrow>Testimonials</Eyebrow>
            <h2 className="mt-6 font-serif text-3xl font-bold leading-tight sm:text-4xl">
              What clients say about <em className="italic">working together</em>.
            </h2>
          </div>
          <p className="hidden shrink-0 font-serif text-xl italic text-accent sm:block">
            {String(active + 1).padStart(2, "0")}
            <span className="text-ink/30"> / {String(total).padStart(2, "0")}</span>
          </p>
        </div>

        <div className="mt-12 border-t border-black/10" />

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <div>
            <span className="font-serif text-6xl leading-none text-accent/25">
              &ldquo;
            </span>
            <blockquote className="mt-2 font-serif text-xl leading-relaxed text-ink sm:text-2xl">
              {t.quote}
            </blockquote>

            <div className="mt-10 flex items-center gap-4 border-t border-black/10 pt-6">
              <div>
                <p className="font-semibold text-ink">{t.name}</p>
                <p className="text-sm text-ink/50">{t.title}</p>
              </div>
              <span className="h-8 w-px bg-black/10" />
              <span className="eyebrow text-ink/40">{t.company}</span>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem]">
              <Image
                key={t.photo}
                src={t.photo}
                alt={t.name}
                fill
                className="object-cover"
              />
              <span className="absolute bottom-4 left-4 rounded-full bg-ink px-4 py-1.5 text-xs font-semibold text-white">
                {t.company}
              </span>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-paper text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                    <path
                      d="M15 6l-6 6 6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-paper text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                    <path
                      d="M9 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <span className="eyebrow text-ink/40">←/→ keys</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
