import React from "react";
import Background from "../../assets/allproducts4.jpg";

export const CategoryInfo = ({ data }) => {
  console.log(data);
  return (
    <div className="rounded-2xl relative min-h-50 max-w-11/12 lg:max-w-6xl flex flex-col justify-center overflow-hidden m-auto text-center mt-5">
      <div className="absolute inset-0 z-0">
        <img src={Background} className="w-full h-full object-cover"></img>
        <div className="absolute inset-0 bg-slate-900/50"></div>
      </div>

      <div className="z-10">
        <div className=" text-white text-3xl tracking-widest font-serif font-medium antialiased">
          {data.title}
        </div>
        <p className="text-slate-200 mt-2 text-[18px] leading-relaxed antialiased">
          {data.description}
        </p>
      </div>
    </div>
  );
};
