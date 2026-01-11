import { useQuery, keepPreviousData } from "@tanstack/react-query";

export const useProductFetch = ({ page = 1, limit = 10, featured = false }) => {
  return useQuery({
    queryKey: ["products", { page, limit, featured }],
    queryFn: async () => {
      const fetchLimit = featured ? 9 : limit;
      const offset = (page - 1) * limit;

      console.log("Fetching products now...");
      const response = await fetch(
        `https://furniture-api.fly.dev/v1/products?limit=${fetchLimit}&offset=${offset}`
      );
      console.log("test");
      if (!response.ok) throw new Error("Failed to fetch products");
      return await response.json();
    },
    select: (data) => {
      if (featured) return data.data.filter((p) => p.featured === true);
      return data;
    },
    placeholderData: keepPreviousData,
  });
};
