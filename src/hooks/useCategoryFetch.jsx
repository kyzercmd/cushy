import React from "react";
import { useQuery } from "@tanstack/react-query";
const categories = [
  "sofa",
  "chair",
  "table",
  "desk",
  "kitchen",
  "vanitory",
  "matress",
  "mirror",
  "wardrove",
  "lamp",
  "tv table",
  "garden",
];

export const useCategoryFetch = () => {
  return useQuery({
    queryKey: ["categoryShowcase"],
    queryFn: async () => {
      const promises = categories.map(async (category) => {
        let url = `https://furniture-api.fly.dev/v1/products?category=${category}`;
        const response = await fetch(url);
        if (!response.ok) return null;
        const json = await response.json();

        return json.data.length > 0 ? json.data[0] : null;
      });

      const results = await Promise.all(promises);

      return results.filter((item) => item !== null);
    },
    staleTime: 1000 * 60 * 10,
  });
};
