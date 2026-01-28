import React from "react";
import { Hero } from "./Hero";
import { FeaturedProducts } from "./FeaturedProducts";
import { CategoryShowcase } from "./CategoryShowcase";
import { ValueProposition } from "./ValueProposition";
import { Faq } from "./Faq";
import { LifestyleFeature } from "./LifestyleFeature";
import { ScrollRevealAnimation } from "../../helper/scrollRevealAnimation";

export const Home = () => {
  return (
    <>
      <Hero />

      <ScrollRevealAnimation>
        <CategoryShowcase />
      </ScrollRevealAnimation>

      <ScrollRevealAnimation>
        <ValueProposition />
      </ScrollRevealAnimation>

      <ScrollRevealAnimation>
        <FeaturedProducts />
      </ScrollRevealAnimation>

      <ScrollRevealAnimation>
        <LifestyleFeature />
      </ScrollRevealAnimation>
      <ScrollRevealAnimation>
        <Faq />
      </ScrollRevealAnimation>
    </>
  );
};
