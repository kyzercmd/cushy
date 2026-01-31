import React from "react";
import LifeStyle from "../../assets/featurehero3.jpg";
import { Link } from "react-router";

export const LifestyleFeature = () => {
  return (
    <div className="xl:max-w-7xl max-w-11/12 m-auto bg-white rounded-4xl overflow-hidden shadow-sm  my-30">
      <div className="flex flex-col md:flex-row overflow-hidden min-h-150">
        <div className="relative flex w-full md:w-1/2 h-120 md:h-auto">
          <img
            src={LifeStyle}
            loading="lazy"
            alt="LifeStyle"
            className="object-cover h-full w-full"
          ></img>
          <div className="absolute inset-0 bg-slate-900/10"></div>
        </div>

        <div className="w-full md:w-1/2 flex items-center p-10">
          <div>
            <span className="text-blue-600 font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">
              The Art of Living
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">
              Designed for your <br /> slowest mornings.
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              We believe a home should be a sanctuary. Our artisan-crafted
              collections combine ergonomic support with cloud-like softness,
              ensuring every moment spent at home is one of pure comfort.
            </p>
            <Link
              to="/products"
              className="border-b-2 border-slate-900 pb-1 font-bold text-slate-900 hover:text-blue-600 hover:border-blue-600 transition-all hover:cursor-pointer"
            >
              Explore the Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
