import { offers } from "@/lib/data/offers";

function MarqueeGroup() {
  return (
    <div className="flex shrink-0 items-center">
      {offers.map((offer, i) => (
        <span key={i} className="flex items-center">
          <span className="px-6 py-5 text-sm font-semibold tracking-wide text-white sm:text-base">
            {offer}
          </span>
          <span aria-hidden className="h-2 w-2 rotate-45 bg-yellow" />
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <section className="overflow-hidden bg-accent">
      <div className="flex w-max animate-marquee">
        <MarqueeGroup />
        <MarqueeGroup />
      </div>
    </section>
  );
}
