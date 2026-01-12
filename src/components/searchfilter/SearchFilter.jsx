import React from "react";
import { useState } from "react";

export const SearchFilter = () => {
  const [filterPrice, setFilterPrice] = useState(1000);

  return (
    <div className="max-w-5xl bg-blue-50 m-auto flex flex-col mt-15 p-5">
      <div className="flex flex-wrap justify-around">
        <div>
          <fieldset className="fieldset w-55">
            <legend className="fieldset-legend text-slate-600 text-xs">
              Search Product
            </legend>
            <input
              type="text"
              className="input input-sm rounded-box"
              placeholder="Type here"
            />
          </fieldset>
        </div>
        <div className="">
          <fieldset className="fieldset w-55">
            <legend className="fieldset-legend text-slate-600 font-semibold">
              Select Category
            </legend>
            <select
              defaultValue="all"
              className="select select-sm rounded-box text-slate-600 font-semibold"
            >
              <option>all</option>
              <option>Chrome</option>
              <option>FireFox</option>
              <option>Safari</option>
            </select>
          </fieldset>
        </div>
        <div className="">
          <fieldset className="fieldset w-55">
            <legend className="fieldset-legend text-slate-600">
              Select Wood Type
            </legend>
            <select
              defaultValue="all"
              className="select select-sm rounded-box text-slate-600 font-semibold"
            >
              <option>all</option>
              <option>Chrome</option>
              <option>FireFox</option>
              <option>Safari</option>
            </select>
          </fieldset>
        </div>
        <div className="">
          <fieldset className="fieldset w-55">
            <legend className="fieldset-legend text-slate-600">Sort By</legend>
            <select
              defaultValue="all"
              className="select select-sm rounded-box text-slate-600 font-semibold"
            >
              <option>all</option>
              <option>Chrome</option>
              <option>FireFox</option>
              <option>Safari</option>
            </select>
          </fieldset>
        </div>
      </div>
      <div>
        <div>
          <p>{filterPrice}</p>
          <input
            type="range"
            min={0}
            max="1000"
            value={filterPrice}
            onChange={(e) => {
              setFilterPrice(e.target.value);
            }}
            className="range range-sm text-blue-500 [--range-bg:gray] [--range-thumb:white]"
          />
        </div>
      </div>
    </div>
  );
};
