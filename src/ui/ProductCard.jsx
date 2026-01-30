import { ProductDetails } from "../pages/ProductDetails/ProductDetails";
import { Link } from "react-router";

export const ProductCard = ({ product }) => {
  return (
    <div className="group w-60 h-100 m-auto transition-shadow duration-500 overflow-hidden ">
      <div className="h-full w-full">
        <div className="flex relative group">
          <div className="relative h-70 w-full group overflow-hidden">
            <img
              src={product.image_path}
              className="w-full h-70 object-cover group-hover:scale-103 transition-transform duration-300"
              alt={product.name}
            />
            <div className="absolute top-2 left-2 capitalize font-semibold text-sm text-[#f4f5c9] bg-[#141a20ce] rounded-box py-2 px-4 ">
              {product.wood_type}
            </div>
            <Link
              to={`/products/${product.sku}`}
              state={{ product }}
              className="bg-slate-800/90 text-slate-200 w-full p-3 z-10 absolute bottom-0 justify-center text-center m-auto items-center md:translate-y-full md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300 text-sm font-semibold hover:cursor-pointer"
            >
              View Details
            </Link>
          </div>
        </div>

        <div className="md:text-base text-sm text-slate-700 font-semibold mt-3">
          {product.name}
        </div>

        <div className="md:text-base text-sm text-[#36a6f1] tracking-wide capitalize">
          {product.finish} finish
        </div>

        <div className="rating rating-xs">
          <div
            className="mask mask-star bg-amber-400"
            aria-label="1 star"
          ></div>
          <div
            className="mask mask-star bg-amber-400"
            aria-label="2 star"
          ></div>
          <div
            className="mask mask-star bg-amber-400"
            aria-label="3 star"
          ></div>
          <div
            className="mask mask-star bg-amber-400"
            aria-label="4 star"
            aria-current="true"
          ></div>
          <div className="mask mask-star" aria-label="5 star"></div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-row gap-2">
            <div className="text-slate-700 pt-2 text-base font-semibold line-through decoration-slate-900 decoration-1">
              ${product.price}
            </div>
            <div className="text-slate-800 pt-2 text-base font-semibold">
              ${product.discount_price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
