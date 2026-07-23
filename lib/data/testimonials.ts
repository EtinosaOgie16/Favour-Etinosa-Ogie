export type Testimonial = {
  name: string;
  title: string;
  photo: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Svenja Rossig",
    title: "Founder [job title placeholder]",
    photo: "/testimonials/svenja-rossig.svg",
    quote:
      "Favour and I started working together almost two years ago, and she's been an absolute blessing for my business. She's one of the most talented copywriters I've ever met — creating video scripts that performed amazingly well, plus blog posts that drove real traffic to our site. Her work ethic is outstanding, she always delivers on time, and she's a wonderful communicator.",
  },
  {
    name: "Sangeeta Regi Mathew",
    title: "Editor [job title placeholder]",
    photo: "/testimonials/sangeeta-regi-mathew.svg",
    quote:
      "Favour is a dedicated writer. Her pieces were engaging and effortless to read. She was always open to feedback and quick to incorporate suggestions, and it was rewarding to see her grow along the way. Her ease in communicating made her stand out — she's sure to thrive anywhere that values creativity and well-written content.",
  },
  {
    name: "Maria Deac",
    title: "Content Lead [job title placeholder]",
    photo: "/testimonials/maria-deac.svg",
    quote:
      "Favour is an exceptional writer. She delivered high-quality articles that were well-researched, structured perfectly, and strictly followed the brief. What I appreciated most was her ability to get straight to the point without 'fluff' while maintaining an engaging tone. She met all deadlines and required almost no edits. I highly recommend her to anyone looking for a reliable, professional SEO writer. Will definitely hire again!",
  },
];
