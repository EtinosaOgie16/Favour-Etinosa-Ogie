"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { PillButton } from "@/components/ui/pill-button";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 mx-auto w-[calc(100%-1.5rem)] max-w-5xl px-2 sm:top-6">
      <div className="flex items-center justify-between gap-4 rounded-full border border-black/5 bg-white/80 px-4 py-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.06)] backdrop-blur-md sm:px-6">
        <Link
          href="/"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-ink font-serif text-sm font-bold text-white"
        >
          {siteConfig.initials}
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {siteConfig.nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  active ? "text-accent" : "text-ink/80 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden sm:block">
          <PillButton href="/contact" className="px-5 py-2 text-sm">
            Work with me
          </PillButton>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full text-ink md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className="h-0.5 w-5 bg-ink" />
            <span className="h-0.5 w-5 bg-ink" />
          </div>
        </button>
      </div>

      {open && (
        <div className="mt-2 rounded-3xl border border-black/5 bg-white p-4 shadow-lg md:hidden">
          <nav className="flex flex-col gap-1">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-ink hover:bg-blush"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <PillButton href="/contact" className="mt-3 w-full">
            Work with me
          </PillButton>
        </div>
      )}
    </header>
  );
}
