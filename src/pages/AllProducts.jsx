import React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProductFetch } from "../hooks/useProductFetch";
import { ProductCard } from "../ui/ProductCard";
import { SearchFilter } from "../components/searchfilter/SearchFilter";
import { CategoryInfo } from "../components/categoryinfo/CategoryInfo";

export const AllProducts = () => {
  //const [ view, setview ] = useState(1);

  const [SearchParams] = useSearchParams();
  const selectedCategory = SearchParams.get("category");

  const [activeFilters, setActiveFilters] = useState({
    page: 1,
    search: "",
    category: selectedCategory ? selectedCategory : "all",
    woodType: "all",
    sortBy: "name_asc",
    maxPrice: 2000,
  });
  const { data, isLoading, error, isError } = useProductFetch(activeFilters);

  const handleSearch = (newFilters) => {
    setActiveFilters({ ...newFilters, page: 1 });
  };
  const handlePageChange = (newPage) => {
    setActiveFilters((prev) => ({ ...prev, page: newPage }));
  };
  const handleReset = () => {
    setActiveFilters({
      search: "",
      category: "all",
      woodType: "all",
      sortBy: "name_asc",
      maxPrice: 2000,
    });
  };

  if (isError) return <div>Error: {error.message}</div>;
  //if (isLoading) return <div className="loading loading-ring loading-xl"></div>;

  const limit = 12;
  const totalItems = data?.count || 0;
  const totalPages = Math.ceil(totalItems / limit);
  const currentPage = activeFilters.page;

  return (
    <div className="mb-30">
      <CategoryInfo
        data={{
          title: "All Collection",
          description:
            "Explore our full range of artisan-crafted furniture designed for durability and comfort.",
        }}
      />
      <SearchFilter
        onSearch={handleSearch}
        onReset={handleReset}
        selectedCategory={selectedCategory}
      />
      <div className="max-w-6xl m-auto">
        <div className=" text-[#394E6A] text-xl tracking-widest mt-10">
          {totalItems} Products
        </div>
        <div
          className={
            isLoading
              ? "loading loading-ring loading-xl m-auto flex h-100"
              : "border-b border-slate-300 mt-5 mb-10"
          }
        ></div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {data?.data.map((item) => (
            <ProductCard key={item.id} product={item} loading={isLoading} />
          ))}
        </div>
      </div>

      <div className="max-w-10/12 m-auto flex justify-center mt-10">
        <div className="join rounded-box shadow-2xl">
          <button
            onClick={() => {
              handlePageChange(Math.max(currentPage - 1, 1));
            }}
            disabled={currentPage === 1}
            className="join-item btn text-slate-700 bg-blue-50 disabled:text-gray-400"
          >
            PREV
          </button>
          <button className="join-item btn btn-active text-slate-700 bg-blue-200 disabled:text-gray-400">
            {currentPage}
          </button>
          <button
            onClick={() => {
              handlePageChange(Math.max(currentPage + 1, 1));
            }}
            disabled={currentPage === totalPages}
            className="join-item btn text-slate-700 bg-blue-50 disabled:text-gray-400"
          >
            {currentPage + 1}
          </button>
          <button
            onClick={() => {
              handlePageChange(Math.max(currentPage + 2, 1));
            }}
            disabled={currentPage === totalPages}
            className="join-item btn text-slate-700 bg-sky-50 disabled:text-gray-400"
          >
            {currentPage + 2}
          </button>
          <button
            onClick={() => {
              handlePageChange(Math.max(currentPage + 1, 1));
            }}
            disabled={currentPage === totalPages}
            className="join-item btn text-slate-700 bg-sky-50 disabled:text-gray-400"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};
