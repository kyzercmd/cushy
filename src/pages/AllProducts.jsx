import React from "react";
import { useState } from "react";
import { useProductFetch } from "../hooks/useProductFetch";
import { ProductCard } from "../ui/ProductCard";

export const AllProducts = () => {
  //const [ view, setview ] = useState(1);
  //const [search];
  const [page, setPage] = useState(1);
  const limit = 12;
  const {
    data: items,
    error,
    isError,
    isLoading,
  } = useProductFetch({ page, limit });

  if (isError) return <div>Error: {error.message}</div>;
  if (isLoading) return <div>Loading...</div>;

  const totalItems = items.count;
  const totalPages = Math.ceil(totalItems / limit);

  return (
    <div>
      <div className="max-w-5xl m-auto">
        <div className=" text-[#394E6A] text-xl tracking-widest mt-20">
          {totalItems} Products
        </div>
        <div className="border-b border-slate-300 mt-5 mb-10"></div>
        <div className="w-full h-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {items.data.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>

      <div className="max-w-10/12 m-auto flex justify-center mt-10">
        <div className="join rounded-box shadow-2xl">
          <button
            onClick={() => {
              setPage((old) => Math.max(old - 1, 1));
            }}
            disabled={page === 1}
            className="join-item btn text-slate-700 bg-sky-50 disabled:text-gray-400"
          >
            PREV
          </button>
          <button className="join-item btn btn-active text-slate-700 bg-sky-200 disabled:text-gray-400">
            {page}
          </button>
          <button
            onClick={() => {
              setPage((old) => Math.max(old + 1, 1));
            }}
            disabled={page === totalPages}
            className="join-item btn text-slate-700 bg-sky-50 disabled:text-gray-400"
          >
            {page + 1}
          </button>
          <button
            onClick={() => {
              setPage((old) => Math.max(old + 2, 1));
            }}
            disabled={page === totalPages}
            className="join-item btn text-slate-700 bg-sky-50 disabled:text-gray-400"
          >
            {page + 2}
          </button>
          <button
            onClick={() => {
              setPage((old) => Math.max(old + 1, 1));
            }}
            disabled={page === totalPages}
            className="join-item btn text-slate-700 bg-sky-50 disabled:text-gray-400"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};
