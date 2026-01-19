import React from "react";
import Story from "../../assets/allproducts3.jpg";

export const BrandMission = () => {
  return (
    <div className="lg:max-w-6xl max-w-11/12 m-auto flex flex-col md:p-20 p-5 mt-5 mb-10 rounded-4xl bg-white border border-base-300 shadow-sm">
      <div className="border-b-2  border-gray-300">
        <h1 className="text-[#021431] md:text-4xl text-2xl tracking-wide font-semibold">
          Furniture for the<br></br> Forever Home
        </h1>
        <p className="text-[#131313cc] text-sm mt-2 leading-relaxed antialiased md:text-base max-w-2/3 mb-10">
          We believe that a home is more than a collection of rooms; it is the
          backdrop of your life's most meaningful moments. At EverSoft, our
          mission is to replace the cycle of 'disposable furniture' with pieces
          designed for longevity, comfort, and a lifetime of stories.
        </p>
      </div>
      <div className="mt-10">
        <div className="flex flex-col md:flex-row overflow-hidden min-h-50 rounded-4xl">
          <div className="relative flex w-full md:w-1/2 md:h-auto rounded-4xl overflow-hidden">
            <img
              src={Story}
              alt="LifeStyle"
              className="object-cover h-100 w-full rounded-4xl"
            ></img>
          </div>

          <div className="w-full md:w-1/2 flex items-center md:p-10">
            <div>
              <h2 className="md:text-2xl text-xl font-semibold text-slate-900 mb-6 leading-tight">
                Born from a Search for Better
              </h2>
              <p className="text-slate-600 text-base mb-8 leading-relaxed">
                EverSoft began in a small apartment with a broken sofa and a
                simple question: Why has quality become a luxury? We grew tired
                of choosing between high-priced showrooms and low-quality
                flat-packs. We set out to bridge that gap. By working directly
                with master artisans and sourcing our own sustainable hardwoods,
                we've cut out the middlemen to bring gallery-level craftsmanship
                directly to your door.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
