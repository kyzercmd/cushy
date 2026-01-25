import { useProductFetch } from "../../hooks/useProductFetch";
import { ProductCard } from "../../ui/ProductCard";
import { Link } from "react-router-dom";
import { SquareArrowOutUpRight } from "lucide-react";

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
    <div className="lg:max-w-6xl max-w-11/12 mx-auto my-30">
      <div className="flex flex-col m-auto text-center">
        <div className=" text-[#021431] text-3xl tracking-widest font-medium font-[Instrument-sans]">
          Featured Collection
        </div>
        <p className="text-[#131313cc] mt-2 leading-relaxed antialiased text-[18px]">
          Express your style with our standout collection-fashion meets
          sophistication.
        </p>
      </div>

      <div
        className={
          isLoading
            ? "loading loading-ring loading-xl m-auto flex h-100"
            : "border-b border-dashed border-slate-300 mt-5 mb-10"
        }
      ></div>
      <div className="w-full h-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-10">
        {featuredItems?.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
      <div className="flex mt-5">
        <Link
          to="/products"
          className="btn m-auto btn-outline hover:bg-blue-600 hover:text-slate-200 text-blue-500 font-bold rounded-box px-10 py-5 text-sm transition-all duration-300 hover:shadow-2xl"
        >
          View All
          <SquareArrowOutUpRight size={17} strokeWidth={3} />
        </Link>
      </div>
    </div>
  );
};
