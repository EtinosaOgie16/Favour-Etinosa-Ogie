export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Find the opportunity.",
    description:
      "Research your ICP, competitors, G2 reviews, and Reddit/Quora threads to find what buyers are actually searching when they're close to deciding — not just browsing.",
  },
  {
    number: "02",
    title: "Brief and draft.",
    description:
      "Map the buyer stage, proof points, and product angles, then write a first draft built around how buyers actually decide — comparisons, objections, real evidence.",
  },
  {
    number: "03",
    title: "Optimize for search and AI.",
    description:
      "Structure content so it ranks on Google and gets pulled into ChatGPT, Perplexity, and AI Overviews.",
  },
  {
    number: "04",
    title: "Publish and review results.",
    description:
      "Go live with proper tracking, monitor rankings and AI citations, and refresh based on what the data shows.",
  },
];
