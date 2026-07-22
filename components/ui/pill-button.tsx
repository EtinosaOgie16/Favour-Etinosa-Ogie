import Link from "next/link";
import { ComponentProps } from "react";

type PillButtonProps = {
  href: string;
  variant?: "solid" | "outline" | "outline-light";
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "className">;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200";

const variants: Record<NonNullable<PillButtonProps["variant"]>, string> = {
  solid: "bg-accent text-white hover:bg-accent-dark",
  outline: "border border-ink text-ink hover:bg-ink hover:text-white",
  "outline-light": "border border-white/60 text-white hover:bg-white hover:text-ink",
};

export function PillButton({
  href,
  variant = "solid",
  className = "",
  children,
  ...props
}: PillButtonProps) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
