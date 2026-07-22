"use client";

import Image from "next/image";
import { useState } from "react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PillButton } from "@/components/ui/pill-button";
import { faqItems } from "@/lib/data/faq";
import { siteConfig } from "@/lib/site-config";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-blush py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="max-w-2xl">
          <Eyebrow>Got Questions?</Eyebrow>
          <h2 className="mt-6 font-serif text-3xl font-bold leading-tight sm:text-4xl">
            Everything you need to know <em className="italic">before we talk</em>.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] lg:gap-12">
          <div className="h-fit rounded-3xl bg-paper p-8 text-center lg:sticky lg:top-28">
            <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full">
              <Image
                src="/placeholders/profile.svg"
                alt={siteConfig.name}
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-5 font-serif text-lg font-bold">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-ink/60">{siteConfig.role}</p>
            <PillButton href="/contact" variant="solid" className="mt-6 w-full">
              Book a call
            </PillButton>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-4 block text-sm text-ink/60 underline decoration-accent/40 underline-offset-4 hover:text-accent"
            >
              {siteConfig.email}
            </a>
          </div>

          <div className="divide-y divide-black/10 border-y border-black/10">
            {faqItems.map((item, i) => {
              const open = openIndex === i;
              return (
                <div key={item.question}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="font-serif text-base font-semibold sm:text-lg">
                      {item.question}
                    </span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white transition-transform ${
                        open ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {open && (
                    <p className="pb-6 pr-12 text-sm leading-relaxed text-ink/60">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
