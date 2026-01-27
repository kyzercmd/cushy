import { useLocation, useParams } from "react-router";
import { useProductFetch } from "../../hooks/useProductFetch";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import {
  ArrowUpFromLine,
  ArrowLeftRight,
  Box,
  Weight,
  CircleCheck,
  Plus,
  Minus,
} from "lucide-react";
import { useState } from "react";

export const ProductDetails = () => {
  const location = useLocation();
  const { sku } = useParams();
  const [itemCount, setItemCount] = useState(1);

  const stateProduct = location.state?.product;

  const {
    data: fetchProduct,
    isLoading,
    isError,
  } = useProductFetch({
    sku,
    enabled: !stateProduct,
  });

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  if (isError) {
    return <PageNotFound />;
  }

  const product = stateProduct || fetchProduct;

  return (
    <div className="lg:max-w-6xl max-w-11/12 m-auto overflow-hidden my-10">
      <div className="flex flex-col md:flex-row overflow-hidden min-h-100">
        <div className="relative flex w-full md:w-1/2 h-120 md:h-auto">
          <img
            src={product.image_path}
            alt="LifeStyle"
            className="object-cover h-full w-full"
          ></img>
          <div className="absolute inset-0 bg-slate-900/10"></div>
        </div>

        <div className="w-full md:w-1/2 flex items-center px-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl md:text-2xl font-bold text-slate-900 mb-4 leading-tight">
              {product.name}
            </h1>
            <p className="text-stone-600 text-lg font-bold">
              Finish: {product.finish}
            </p>
            <div className="flex flex-row gap-2 text-xl text-blue-800">
              <div className=" pt-2  font-semibold line-through decoration-red-800 decoration-2">
                ${product.price}
              </div>
              <div className=" pt-2  font-semibold">
                ${product.discount_price}
              </div>
            </div>
            <div className="border-b border-slate-400 my-3"></div>
            <p className="text-slate-700 text-base mb-8 leading-relaxed">
              {product.description}
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap flex-col md:flex-row gap-4 text-base text-slate-700">
                <div className="flex items-center gap-1.5 border-l border-slate-300 md:border-0">
                  <ArrowUpFromLine size={16} className="text-blue-500" />
                  <span>{product.dimensions.height}" Height</span>
                </div>

                <div className="flex items-center gap-1.5 border-l border-slate-300 pl-4">
                  <ArrowLeftRight size={16} className="text-blue-500" />
                  <span>{product.dimensions.width}" Width</span>
                </div>

                <div className="flex items-center gap-1.5 border-l border-slate-300 pl-4">
                  <Box size={16} className="text-blue-500" />
                  <span>{product.dimensions.depth}" Depth</span>
                </div>

                <div className="flex items-center gap-1.5 border-l border-slate-300 pl-4">
                  <Weight size={16} className="text-blue-500" />
                  <span>{product.weight} kg</span>
                </div>
              </div>
              <div className="text-green-600">
                {product.stock && (
                  <div className="flex gap-2 text-center items-center">
                    <CircleCheck size={18} />
                    <p>In stock</p>
                  </div>
                )}
              </div>
              <div className="flex">
                <div className="border rounded-box border-slate-300 flex items-center justify-center gap-5 p-2 md:px-3 font-semibold">
                  <Minus
                    size={15}
                    onClick={() => {
                      setItemCount(itemCount - 1);
                    }}
                  />
                  <span>{itemCount}</span>
                  <Plus
                    size={15}
                    onClick={() => {
                      setItemCount(itemCount + 1);
                    }}
                  />
                </div>
                <button className="text-sm rounded-box font-bold text-slate-200 bg-slate-900 hover:border-slate-600 hover:bg-slate-800  transition-all hover:cursor-pointer p-3 md:px-10 border">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
