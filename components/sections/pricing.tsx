import { Eyebrow } from "@/components/ui/eyebrow";
import { PillButton } from "@/components/ui/pill-button";
import { pricingTiers } from "@/lib/data/pricing";

export function Pricing() {
  return (
    <section className="bg-onyx py-24 text-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="max-w-2xl">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="mt-6 font-serif text-3xl font-bold leading-tight sm:text-4xl">
            Quality content at <em className="italic">half the price</em>.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/60">
            No long-term contracts. Straightforward pricing, no surprises.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-3xl p-8 ${
                tier.featured
                  ? "bg-white text-ink shadow-2xl lg:-translate-y-4"
                  : "bg-white/5 text-white ring-1 ring-white/10"
              }`}
            >
              {tier.badge && (
                <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                  {tier.badge}
                </span>
              )}
              <h3 className="font-serif text-xl font-bold">{tier.name}</h3>
              <p className="mt-5 flex items-baseline gap-1">
                <span className="font-serif text-4xl font-bold">{tier.price}</span>
                <span
                  className={`text-sm ${tier.featured ? "text-ink/50" : "text-white/50"}`}
                >
                  {tier.cadence}
                </span>
              </p>
              <p
                className={`mt-4 text-sm leading-relaxed ${
                  tier.featured ? "text-ink/70" : "text-white/60"
                }`}
              >
                {tier.description}
              </p>
              <PillButton
                href="/contact"
                variant={tier.featured ? "solid" : "outline-light"}
                className="mt-8 w-full"
              >
                Start today →
              </PillButton>
            </div>
          ))}
        </div>

        <p className="mt-12 text-sm text-white/60">
          Not sure what tier fits?{" "}
          <a href="/contact" className="font-semibold text-accent underline underline-offset-4">
            Book a strategy call.
          </a>
        </p>
      </div>
    </section>
  );
}
