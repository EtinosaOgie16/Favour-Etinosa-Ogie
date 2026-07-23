import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-onyx text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white font-serif text-sm font-bold text-ink">
              {siteConfig.initials}
            </div>
            <p className="mt-5 font-serif text-xl">{siteConfig.name}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
              {siteConfig.tagline}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-white/80">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Available for work
            </span>

            <div className="mt-4 flex items-center gap-3">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-serif text-sm font-bold text-white transition-colors hover:bg-accent"
              >
                in
              </a>
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
                </svg>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow text-white/40">Navigation</p>
            <ul className="mt-4 space-y-3">
              {siteConfig.footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-white/40">Connect</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  X / Twitter
                </a>
              </li>
            </ul>

            <p className="eyebrow mt-6 text-white/40">Contact</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.bookCallUrl}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Book a call
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-white/40">
          <p>© {siteConfig.shortName} 2026. Independent writer, no agency in between.</p>
        </div>
      </div>
    </footer>
  );
}
