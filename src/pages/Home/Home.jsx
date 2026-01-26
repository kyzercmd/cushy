import React from "react";
import { Hero } from "./Hero";
import { FeaturedProducts } from "./FeaturedProducts";
import { CategoryShowcase } from "./CategoryShowcase";
import { ValueProposition } from "./ValueProposition";
import { Faq } from "./Faq";
import { LifestyleFeature } from "./LifestyleFeature";

export const Home = () => {
  return (
    <>
      <Hero />
      <CategoryShowcase />
      <ValueProposition />
      <FeaturedProducts />
      <LifestyleFeature />
      <Faq />
    </>
  );
};
