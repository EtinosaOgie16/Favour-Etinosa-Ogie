import { Eyebrow } from "@/components/ui/eyebrow";
import { PillButton } from "@/components/ui/pill-button";
import { audienceCards } from "@/lib/data/audience";

export function AudienceCallout() {
  return (
    <section className="bg-blush py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="max-w-2xl">
          <Eyebrow>Sound Familiar?</Eyebrow>
          <h2 className="mt-6 font-serif text-3xl font-bold leading-tight sm:text-4xl">
            If you&rsquo;re a SaaS founder, content marketer, or agency that needs
            writers who understand <em className="italic">search, AI, and buyers</em>
            &hellip;
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/70">
            You&rsquo;ve probably worked with writers who turn in generic, keyword-stuffed
            drafts that need a full rewrite before they&rsquo;re usable. That&rsquo;s not this.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {audienceCards.map((card) => (
            <div
              key={card.title}
              className="rounded-[2.5rem] border-2 border-blush-deep bg-paper p-10 transition-all duration-300 hover:border-accent hover:shadow-[0_16px_40px_-12px_rgba(238,111,160,0.45)] sm:rounded-[3.5rem] sm:p-12"
            >
              <h3 className="font-serif text-xl font-bold">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <p className="font-serif text-xl italic">
            If this sounds like you, here&rsquo;s how I can help.
          </p>
          <PillButton href="/contact" variant="solid">
            Let&rsquo;s work together
          </PillButton>
        </div>
      </div>
    </section>
  );
}
