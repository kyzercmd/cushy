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
        <div className=" text-[#021431] text-3xl tracking-widest font-serif font-medium">
          Community Picks
        </div>
        <p className="text-[#131313cc] font-[Urbanist] mt-2 leading-relaxed antialiased text-[18px]">
          Explore our most-loved pieces, handpicked for their exceptional
          comfort and timeless design.
        </p>
      </div>

      <div
        className={
          isLoading
            ? "loading loading-ring loading-xl m-auto flex h-100"
            : "border-b border-dashed border-slate-300 mt-5 mb-10"
        }
      ></div>
      <div className="w-full h-full grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {featuredItems?.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
      <div className="flex mt-5">
        <div className=" m-auto flex p-1 rounded-xl border-slate-600 border-2">
          <Link
            to="/products"
            className="btn m-auto bg-blue-600 hover:bg-blue-500 text-slate-200 font-bold rounded-box px-10 py-5 text-base"
          >
            View All
            <SquareArrowOutUpRight size={17} strokeWidth={3} />
          </Link>
        </div>
      </div>
    </div>
  );
};
