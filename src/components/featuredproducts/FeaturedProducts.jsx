import { useProductFetch } from "../../hooks/useProductFetch";
import { ProductCard } from "../../ui/ProductCard";
import { Link } from "react-router-dom";

export const FeaturedProducts = () => {
  const {
    data: featuredItems,
    isLoading,
    error,
    isError,
  } = useProductFetch({ category: "kitchen", featured: true });
  if (isError) return <div>Error: {error.message}</div>;
  //if (isLoading) return <div>Loading...</div>;
  return (
    <div className="max-w-5xl m-auto">
      <div className="flex justify-between mt-20 items-end">
        <div className=" text-[#394E6A] text-3xl tracking-widest">
          Featured Collection
        </div>
        <Link
          to="/products"
          className="text-[#141b24] font-semibold text-sm hover:-translate-x-1 transition-transform duration-300 hover:cursor-pointer hover:link"
        >
          View All
        </Link>
      </div>

      <div
        className={
          isLoading
            ? "loading loading-ring loading-xl m-auto flex h-100"
            : "border-b border-slate-300 mt-5 mb-10"
        }
      ></div>
      <div className="w-full h-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {featuredItems?.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};
