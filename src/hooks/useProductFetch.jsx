import { useQuery, keepPreviousData } from "@tanstack/react-query";

export const useProductFetch = ({
  page = 1,
  limit = 12,
  featured = false,
  search = "",
  sku,
  category = "all",
  woodType = "all",
  sortBy = "name_asc",
  maxPrice = 2000,
  enabled = true,
}) => {
  return useQuery({
    queryKey: sku
      ? ["products", sku]
      : [
          "products",
          {
            page,
            limit,
            featured,
            search,
            category,
            woodType,
            sortBy,
            maxPrice,
          },
        ],
    queryFn: async () => {
      if (sku) {
        const response = await fetch(
          `https://furniture-api.fly.dev/v1/products/${sku}`,
        );
        if (!response.ok) throw new Error("Failed to fetch product");
        const json = await response.json();
        return json.data;
      }

      const fetchLimit = featured ? 8 : limit;
      const offset = (page - 1) * limit;
      let url = `https://furniture-api.fly.dev/v1/products?limit=${fetchLimit}&offset=${offset}`;

      if (search) url += `&name=${search}`;
      if (category != "all") url += `&category=${category}`;
      if (woodType != "all") url += `&wood_type=${woodType}`;
      if (sortBy != "name_asc") url += `&sort=${sortBy}`;
      if (maxPrice < 2000) url += `&max_price=${maxPrice}`;

      console.log("Fetching products now...");

      const response = await fetch(url);

      console.log("test");
      if (!response.ok) throw new Error("Failed to fetch products");
      return await response.json();
    },
    select: (data) => {
      if (sku) return data;
      if (featured) return data.data.filter((p) => p.featured === true);
      return data;
    },
    enabled: enabled,
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 10,
  });
};
