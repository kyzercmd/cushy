import React from "react";
import { Hero } from "../components/hero/Hero";
import { FeaturedProducts } from "../components/featuredproducts/FeaturedProducts";
import { CategoryShowcase } from "../components/categoryshowcase/CategoryShowcase";
import { ValueProposition } from "../components/valueproposition/ValueProposition";

export const Home = () => {
  return (
    <>
      <Hero />
      <ValueProposition />
      <CategoryShowcase />
      <FeaturedProducts />
    </>
  );
};
