import { Eyebrow } from "@/components/ui/eyebrow";
import { PillButton } from "@/components/ui/pill-button";
import { goodFit, notFit } from "@/lib/data/fit-check";

function pad(n: number) {
  return String(n + 1).padStart(2, "0");
}

export function FitCheck() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="max-w-2xl">
          <Eyebrow>Is This a Fit</Eyebrow>
          <h2 className="mt-6 font-serif text-3xl font-bold leading-tight sm:text-4xl">
            Built for <em className="italic">some</em> teams. Not for everyone.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/70">
            I work best with a specific type of client. Here&rsquo;s how to tell if we&rsquo;re
            aligned.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-blush p-8 sm:p-10">
            <h3 className="font-serif text-xl font-bold">Good fit — if you...</h3>
            <ul className="mt-6 space-y-5">
              {goodFit.map((item, i) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                    +
                  </span>
                  <span className="text-sm leading-relaxed text-ink/80">
                    <span className="mr-2 font-mono text-xs text-accent">{pad(i)}</span>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-stone p-8 sm:p-10">
            <h3 className="font-serif text-xl font-bold">Not a fit — if you...</h3>
            <ul className="mt-6 space-y-5">
              {notFit.map((item, i) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink/80 text-sm font-bold text-white">
                    –
                  </span>
                  <span className="text-sm leading-relaxed text-ink/70">
                    <span className="mr-2 font-mono text-xs text-ink/40">{pad(i)}</span>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <p className="font-serif text-xl italic">Sound like a fit? Let&rsquo;s talk.</p>
          <PillButton href="/contact" variant="solid">
            Book a call
          </PillButton>
        </div>
      </div>
    </section>
  );
}
