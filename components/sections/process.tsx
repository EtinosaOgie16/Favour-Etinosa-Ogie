"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { processSteps } from "@/lib/data/process";

export function Process() {
  const [active, setActive] = useState(0);
  const step = processSteps[active];

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

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16">
          <div className="relative pl-8 sm:pl-10">
            <div
              className="absolute top-2 bottom-2 left-0 w-px bg-black/10"
              aria-hidden
            />
            <div className="flex flex-col">
              {processSteps.map((s, i) => (
                <button
                  key={s.number}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="relative flex items-center gap-5 border-b border-black/10 py-6 text-left first:border-t"
                >
                  <span
                    className={`absolute -left-8 h-3 w-3 -translate-x-1/2 rounded-full ring-4 ring-paper transition-colors duration-300 sm:-left-10 ${
                      active === i ? "bg-accent" : "bg-ink/20"
                    }`}
                    aria-hidden
                  />
                  <span
                    className={`font-serif text-2xl font-bold transition-colors ${
                      active === i ? "text-accent" : "text-ink/50"
                    }`}
                  >
                    {s.number}
                  </span>
                  <span
                    className={`font-serif text-lg font-semibold transition-colors sm:text-xl ${
                      active === i ? "text-ink" : "text-ink/50"
                    }`}
                  >
                    {s.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="aspect-square w-full self-start rounded-full bg-blush p-10 transition-all duration-300 hover:shadow-[0_16px_50px_-12px_rgba(239,74,134,0.5)] sm:max-w-[28rem] sm:p-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                <span className="font-serif text-5xl font-bold text-accent">
                  {step.number}
                </span>
                <h3 className="mt-5 font-serif text-2xl font-bold leading-snug">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink/70">
                  {step.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
