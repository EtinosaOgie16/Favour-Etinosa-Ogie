export type PricingTier = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  featured: boolean;
  badge?: string;
  features: string[];
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Single Article",
    price: "$200",
    cadence: "one-off",
    description: "One blog post, one-time purchase.",
    featured: false,
    features: [
      "1 SEO and GEO-optimized blog post",
      "Keyword + topic research",
      "Search intent check",
      "SME interview",
      "One round of revisions",
      "Delivered ready to publish",
    ],
  },
  {
    name: "Monthly Retainer",
    price: "$1,200",
    cadence: "/mo",
    description: "8 blog posts per month.",
    featured: true,
    badge: "Most Popular",
    features: [
      "8 SEO/GEO-optimized blog posts per month",
      "Audience research per piece",
      "Competitor gap analysis",
      "SME interviews",
      "One round of revisions per piece",
      "Monthly content calendar",
      "Light monthly performance check-in",
    ],
  },
  {
    name: "Content Refresh",
    price: "$100",
    cadence: "per post",
    description: "Refresh/reoptimize an existing blog post.",
    featured: false,
    features: [
      "Full audit of the existing article vs competitors",
      "SME interview",
      "Updated stats, examples, and keyword targeting",
      "Restructured for SEO/GEO and readability",
      "One round of revisions",
    ],
  },
];
