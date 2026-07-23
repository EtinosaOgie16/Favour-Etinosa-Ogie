import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { AudienceCallout } from "@/components/sections/audience-callout";
import { WhatIDo } from "@/components/sections/what-i-do";
import { SelectedWork } from "@/components/sections/selected-work";
import { Process } from "@/components/sections/process";
import { AboutMe } from "@/components/sections/about-me";
import { Testimonials } from "@/components/sections/testimonials";
import { FitCheck } from "@/components/sections/fit-check";
import { Pricing } from "@/components/sections/pricing";
import { BlogPreview } from "@/components/sections/blog-preview";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <AudienceCallout />
      <WhatIDo />
      <SelectedWork />
      <Process />
      <AboutMe />
      <Testimonials />
      <FitCheck />
      <Pricing />
      <BlogPreview />
      <Faq />
      <FinalCta />
    </>
  );
}
