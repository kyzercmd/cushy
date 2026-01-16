import React from "react";
import { Hero } from "../components/hero/Hero";
import { FeaturedProducts } from "../components/featuredproducts/FeaturedProducts";
import { CategoryShowcase } from "../components/categoryshowcase/CategoryShowcase";

export const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <CategoryShowcase />
    </>
  );
};
