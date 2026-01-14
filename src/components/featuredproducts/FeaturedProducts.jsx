import { useProductFetch } from "../../hooks/useProductFetch";
import { ProductCard } from "../../ui/ProductCard";

export const FeaturedProducts = () => {
  const {
    data: featuredItems,
    isLoading,
    error,
    isError,
  } = useProductFetch({ category: "kitchen" });
  if (isError) return <div>Error: {error.message}</div>;
  //if (isLoading) return <div>Loading...</div>;
  return (
    <div className="max-w-5xl m-auto">
      <div className=" text-[#394E6A] text-3xl tracking-widest mt-20">
        Featured Products
      </div>
      <div
        className={
          isLoading
            ? "loading loading-ring loading-xl m-auto flex h-100"
            : "border-b border-slate-300 mt-5 mb-10"
        }
      ></div>
      <div className="w-full h-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {featuredItems?.data.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};
