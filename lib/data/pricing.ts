export type PricingTier = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  featured: boolean;
  badge?: string;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Single Article",
    price: "$200",
    cadence: "one-off",
    description: "One blog post, one-time purchase.",
    featured: false,
  },
  {
    name: "Monthly Retainer",
    price: "$1,200",
    cadence: "/mo",
    description: "8 blog posts per month.",
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Content Refresh",
    price: "$100",
    cadence: "per post",
    description: "Refresh/reoptimize an existing blog post.",
    featured: false,
  },
];
