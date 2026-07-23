import Image from "next/image";
import { Eyebrow } from "@/components/ui/eyebrow";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  return (
    <section className="bg-blush py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="max-w-2xl">
          <Eyebrow>Testimonials</Eyebrow>
          <h2 className="mt-6 font-serif text-3xl font-bold leading-tight sm:text-4xl">
            What clients say about <em className="italic">working together</em>.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-[2.5rem] bg-paper p-9 shadow-[0_2px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_16px_50px_-12px_rgba(238,111,160,0.5)]"
            >
              <blockquote className="text-sm leading-relaxed text-ink/80">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 pt-6">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                  <Image src={t.photo} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-ink/50">{t.title}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
