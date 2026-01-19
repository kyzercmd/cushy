import React from "react";
import { Hero } from "../components/hero/Hero";
import { FeaturedProducts } from "../components/featuredproducts/FeaturedProducts";
import { CategoryShowcase } from "../components/categoryshowcase/CategoryShowcase";
import { ValueProposition } from "../components/valueproposition/ValueProposition";
import { Faq } from "../components/Faq/Faq";
import { LifestyleFeature } from "../components/lifestylefeature/LifestyleFeature";

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
