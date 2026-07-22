import { Eyebrow } from "@/components/ui/eyebrow";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-16 pb-4 text-center sm:px-8 sm:pt-24">
      <Eyebrow className="text-center">{eyebrow}</Eyebrow>
      <h1 className="mt-6 font-serif text-4xl font-bold leading-tight sm:text-5xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink/70">
          {subtitle}
        </p>
      )}
    </div>
  );
}
