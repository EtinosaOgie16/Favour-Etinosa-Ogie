"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PillButton } from "@/components/ui/pill-button";
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
            The <em className="italic">Favour Framework</em>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/70">
            How I write content that ranks on Google and gets cited by AI.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16">
          <div className="flex flex-col divide-y divide-black/10 border-y border-black/10">
            {processSteps.map((s, i) => (
              <button
                key={s.number}
                type="button"
                onClick={() => setActive(i)}
                className={`flex items-center gap-5 py-6 text-left transition-colors ${
                  active === i ? "text-accent" : "text-ink/50 hover:text-ink"
                }`}
              >
                <span className="font-serif text-2xl font-bold">{s.number}</span>
                <span className="font-serif text-lg font-semibold sm:text-xl">
                  {s.title}
                </span>
              </button>
            ))}
          </div>

          <div className="rounded-[3rem] bg-blush p-10 transition-all duration-300 hover:shadow-[0_16px_50px_-12px_rgba(238,111,160,0.5)] sm:rounded-full sm:p-16">
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

        <div className="mt-14">
          <PillButton href="/contact" variant="outline">
            Book an intro call
          </PillButton>
        </div>
      </div>
    </section>
  );
}
