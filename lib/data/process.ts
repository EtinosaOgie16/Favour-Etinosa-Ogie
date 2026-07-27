export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand their taste buds (Audience Research)",
    description:
      "Conduct thorough customer research by reviewing conversations on Reddit/Quora threads, G2 reviews, and LinkedIn.",
  },
  {
    number: "02",
    title: "Spying on the competition",
    description:
      "Review what's ranking on Google and cited by AI. This reveals searcher intent and the gaps we can fill with our article.",
  },
  {
    number: "03",
    title: "Subject matter expert interviews",
    description:
      "The secret sauce. Work with an internal or third-party SME to build a unique angle or argument that we'll use to guide the readers towards a close.",
  },
  {
    number: "04",
    title: "Laying out the ingredients",
    description:
      "Building the brief and outline for the article. Specify the target ICP, the buyer's stage, searcher's intent, target keywords, and the article's stance.",
  },
  {
    number: "05",
    title: "Start cooking",
    description:
      "Craft the first draft. Write in sections with our argument as our north star. Set this up in the introduction, back it up with the body content, and deliver a benefit driven closer with the conclusion.",
  },
  {
    number: "06",
    title: "Optimize for Google and LLMs",
    description:
      "Structure the content appropriately so it ranks well on Google, gets cited by AI and is easy for target readers to read and understand in one pass. Use clear phrases, natural keywords, question-answer formats, and skimmable structure.",
  },
  {
    number: "07",
    title: "Editing and quality checklist",
    description:
      "Before submission, read the article out loud to detect awkward phrases. I also pass the content through a personal quality checklist which accounts for product screenshots, target keywords, banned words or AI phrases, and CTA A/B testing.",
  },
  {
    number: "08",
    title: "Publish and review",
    description:
      "Publish article to your preferred Content Management System if required. I also monitor Google rankings and AI citations and schedule revisions when necessary.",
  },
];
