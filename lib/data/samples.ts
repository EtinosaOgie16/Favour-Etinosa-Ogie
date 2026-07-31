export type WritingSample = {
  category: string;
  client: string;
  title: string;
  url: string;
  keyword: string;
  serpRank?: string;
  citedInAI?: boolean;
  note?: string;
};

export const writingSamples: WritingSample[] = [
  {
    category: "Tool Roundup",
    client: "Nightwatch",
    title: "Best AI SEO Tools",
    url: "https://nightwatch.io/blog/best-ai-seo-tools/",
    keyword: "ai seo tools",
    serpRank: "#7",
    note: "Highly competitive term — even Semrush ranks on page 2 for it.",
  },
  {
    category: "Tool Roundup",
    client: "Nightwatch",
    title: "Best Free SEO Tools",
    url: "https://nightwatch.io/blog/best-free-seo-tools/",
    keyword: "free seo tools",
  },
  {
    category: "Explainer",
    client: "Nightwatch",
    title: "What Are AI SEO Agents?",
    url: "https://nightwatch.io/blog/what-are-ai-seo-agents/",
    keyword: "ai seo agents",
    serpRank: "#2",
    citedInAI: true,
  },
  {
    category: "SERP Feature Guide",
    client: "Nightwatch",
    title: "People Also Search For",
    url: "https://nightwatch.io/blog/people-also-search-for/",
    keyword: "people also search for",
    serpRank: "#3",
    citedInAI: true,
  },
];
