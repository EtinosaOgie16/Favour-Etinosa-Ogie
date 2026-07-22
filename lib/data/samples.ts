export type WritingSample = {
  category: string;
  client: string;
  title: string;
  keyword: string;
  position: string;
  aiCitations: string[];
  result: string;
};

export const writingSamples: WritingSample[] = [
  {
    category: "SEO Hub",
    client: "Northbeam SaaS",
    title: "The Complete Guide to Attribution Modeling for B2B Marketers",
    keyword: "attribution modeling software",
    position: "#2",
    aiCitations: ["ChatGPT", "AI Overviews"],
    result: "60+ KWs ranking · $36K/yr traffic value",
  },
  {
    category: "Roundup",
    client: "Ledgerly",
    title: "9 Best AP Automation Tools for Finance Teams in 2026",
    keyword: "ap automation software",
    position: "#4",
    aiCitations: ["Perplexity", "AI Overviews"],
    result: "38 KWs ranking · $21K/yr traffic value",
  },
  {
    category: "Comparison",
    client: "Fieldpulse",
    title: "Fieldpulse vs Jobber: Which Field Service Tool Actually Wins?",
    keyword: "fieldpulse vs jobber",
    position: "#1",
    aiCitations: ["ChatGPT", "Perplexity"],
    result: "24 KWs ranking · $14K/yr traffic value",
  },
  {
    category: "Case Study",
    client: "Hearth Analytics",
    title: "How a Mid-Market SaaS Cut Churn 18% With Better Onboarding Content",
    keyword: "reduce saas churn onboarding",
    position: "#3",
    aiCitations: ["AI Overviews"],
    result: "45 KWs ranking · $27K/yr traffic value",
  },
];
