import React from "react";
import { useState } from "react";

export const SearchFilter = ({ onSearch, onReset, selectedCategory }) => {
  const [filters, setFilters] = useState({
    search: "",
    category: selectedCategory ? selectedCategory : "all",
    woodType: "all",
    sortBy: "name_asc",
    maxPrice: 2000,
  });

  return (
    <div className="max-w-6xl bg-white border border-base-300 shadow-sm m-auto flex flex-col mt-5 p-5 rounded-2xl">
      <div className="flex flex-wrap justify-around">
        <div>
          <fieldset className="fieldset w-55">
            <legend className="fieldset-legend text-slate-700">
              Search Product
            </legend>
            <input
              type="text"
              className="input input-sm rounded-box text-sm text-slate-600"
              placeholder="Type here"
              value={filters.search}
              onChange={(e) => {
                setFilters({ ...filters, search: e.target.value });
              }}
            />
          </fieldset>
        </div>
        <div className="">
          <fieldset className="fieldset w-55">
            <legend className="fieldset-legend text-slate-700">
              Select Category
            </legend>
            <select
              value={filters.category}
              className="select select-sm rounded-box text-slate-600 text-sm capitalize"
              onChange={(e) => {
                setFilters({ ...filters, category: e.target.value });
              }}
            >
              <option>all</option>
              <option>sofa</option>
              <option>chair</option>
              <option>table</option>
              <option>desk</option>
              <option>kitchen</option>
              <option>vanitory</option>
              <option>matress</option>
              <option>mirror</option>
              <option>wardrove</option>
              <option>lamp</option>
              <option>tv table</option>
              <option>garden</option>
            </select>
          </fieldset>
        </div>
        <div className="">
          <fieldset className="fieldset w-55">
            <legend className="fieldset-legend text-slate-700">
              Select Wood Type
            </legend>
            <select
              value={filters.woodType}
              className="select select-sm rounded-box text-slate-600 text-sm capitalize"
              onChange={(e) => {
                setFilters({ ...filters, woodType: e.target.value });
              }}
            >
              <option>all</option>
              <option>walnut</option>
              <option>maple</option>
              <option>pine</option>
              <option>eucalyptus</option>
              <option>bamboo</option>
              <option>teak</option>
              <option>cedar</option>
            </select>
          </fieldset>
        </div>
        <div className="">
          <fieldset className="fieldset w-55">
            <legend className="fieldset-legend text-slate-700 ">Sort By</legend>
            <select
              value={filters.sortBy}
              className="select select-sm rounded-box text-slate-600 text-sm capitalize"
              onChange={(e) => {
                setFilters({ ...filters, sortBy: e.target.value });
              }}
            >
              <option>name_asc</option>
              <option>name_desc</option>
              <option>newest</option>
              <option>oldest</option>
              <option>price_desc</option>
              <option>price_asc</option>
            </select>
          </fieldset>
        </div>
      </div>
      <div className="flex justify-around flex-wrap mt-5 items-center">
        <div className="w-55">
          <div className="flex justify-between">
            <p className="text-sm text-slate-700">Select Price</p>
            <p className="text-base text-slate-700 font-semibold">
              ${filters.maxPrice}
            </p>
          </div>
          <input
            type="range"
            min={0}
            max="2000"
            value={filters.maxPrice}
            onChange={(e) => {
              setFilters({ ...filters, maxPrice: e.target.value });
            }}
            className="range range-sm text-blue-500 [--range-bg:gray] [--range-thumb:white]"
          />
        </div>
        <div className="mt-2">
          <fieldset className="fieldset rounded-box w-55">
            <label className="label">
              <input type="checkbox" className="checkbox checkbox-sm" />
              On sale
            </label>
          </fieldset>
        </div>
        <div className="md:py-0 py-5">
          <button
            className="btn rounded-box w-55 btn-sm bg-blue-500 text-slate-200"
            onClick={() => {
              onSearch(filters);
            }}
          >
            SEARCH
          </button>
        </div>
        <div>
          <button
            className="btn btn-ghost rounded-box w-55 btn-sm text-xs bg-[#7169b6] text-slate-200"
            onClick={() => {
              setFilters({
                search: "",
                category: "all",
                woodType: "all",
                sortBy: "name_asc",
                maxPrice: 2000,
              });
              onReset();
            }}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};
