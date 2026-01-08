import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
  console.log("Fetching products now...");
  const response = await fetch("https://furniture-api.fly.dev/v1/products");
  console.log("test");
  if (!response.ok) throw new Error("Failed to fetch products");
  const result = await response.json();
  return result.data;
};

export const useProductFetch = (filterFeatured = false) => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    select: (data) => {
      let filtered = data;
      if (filterFeatured) filtered = filtered.filter((p) => p.featured);
      return filtered;
    },
  });
};
