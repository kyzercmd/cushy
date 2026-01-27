import React from "react";
import sleep from "../../assets/sleep.svg";
import timeflies from "../../assets/timeflies.svg";
import environment from "../../assets/Environment.svg";

export const BrandPhilosophy = () => {
  return (
    <div className="mb-30">
      <div className="lg:max-w-6xl max-w-11/12 m-auto px-5 mt-5 rounded-4xl bg-white border border-base-300 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between">
          <img
            src={timeflies}
            alt="Built to last"
            className="h-60 w-60 object-cover mr-2"
          ></img>
          <div className=" flex-col flex justify-center">
            <h1 className="text-[#021431] font-bold text-xl mb-2 font-[Urbanist]">
              Built for the Long Haul
            </h1>
            <p className="leading-relaxed text-base font-[Urbanist] text-[#131313cc]">
              The 'Ever' in our name is a promise. It's why we use kiln-dried
              FSC-certified hardwoods and reinforced joinery. We don't just
              build furniture to look good on day one; we build it to withstand
              the move, the kids, the pets, and the years.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:max-w-6xl max-w-11/12 m-auto flex flex-col px-5 mt-2 rounded-4xl bg-white border border-base-300 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between">
          <img
            src={sleep}
            alt="Comfort"
            className="h-60 w-60 object-cover mr-2"
          ></img>
          <div className=" flex-col flex justify-center ">
            <h1 className="text-[#021431] font-bold text-xl mb-2 font-[Urbanist]">
              Comfort without Compromise
            </h1>
            <p className="leading-relaxed text-base font-[Urbanist] text-[#131313cc]">
              Comfort is a science. We spent years developing our signature
              'EverSoft' cushions—a unique blend of high-density support and
              cloud-like top layers. It's ergonomic enough for your back and
              soft enough for your Saturday afternoon nap.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:max-w-6xl max-w-11/12 m-auto flex flex-col px-5 mt-2 mb-10 rounded-4xl bg-white border border-base-300 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between">
          <img
            src={environment}
            alt="Kinder to earth"
            className="h-60 w-60 object-cover  mr-2"
          ></img>
          <div className=" flex-col flex  justify-center">
            <h1 className="text-[#021431] font-bold text-xl mb-2 font-[Urbanist]">
              Kind to the Home, Kinder to the Earth
            </h1>
            <p className="leading-relaxed text-base font-[Urbanist] text-[#131313cc]">
              We believe that true comfort shouldn't come at a cost to the
              planet. That is why every EverSoft frame is built using
              FSC-certified hardwoods, ensuring that for every tree harvested,
              another is planted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
