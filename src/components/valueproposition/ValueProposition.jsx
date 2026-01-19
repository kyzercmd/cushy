import React from "react";
import {
  Truck,
  House,
  Sprout,
  Receipt,
  CalendarHeart,
  PhoneCall,
} from "lucide-react";

export const ValueProposition = () => {
  return (
    <div className="lg:max-w-6xl max-w-11/12 mx-auto bg-[#021431] lg:p-20 p-5 rounded-4xl font-[Urbanist] shadow-sm my-30">
      <div className=" flex flex-col m-auto text-center">
        <div className=" text-slate-200 text-4xl font-[Urbanist] font-extrabold">
          Why Choose <span className="text-blue-500">Ever</span>Soft
        </div>
        <p className="text-[#DADADA] max-w-2xl mx-auto mt-2 text-base">
          We believe buying furniture should be as comfortable as sitting on it.
          We've removed the middlemen and the markup to bring you premium design
          without the premium hassle.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:grid-rows-2 grid-cols-1 gap-5 mt-5">
        <div className="bg-slate-50 hover:bg-blue-200 hover:scale-102 transition-transform duration-300 p-10 rounded-4xl">
          <div className="pb-3">
            <Truck
              size={20}
              strokeWidth={1}
              className="bg-slate-200 m-auto px-5 rounded-full h-18 w-18"
            />
          </div>

          <h1 className="text-[#021431] text-2xl text-center font-semibold">
            White Glove Delivery
          </h1>
          <p className="text-slate-700 text-base text-center mt-2">
            We don't just drop a box at your curb. Our team brings your
            furniture inside, sets it up in your room of choice, and takes away
            all the packaging.
          </p>
        </div>
        <div className="bg-slate-50 hover:bg-blue-200 hover:scale-102 transition-transform duration-300 p-10 rounded-4xl">
          <div className="pb-3">
            <House
              size={20}
              strokeWidth={1}
              className="bg-slate-200 m-auto px-5 rounded-full h-18 w-18"
            />
          </div>

          <h1 className="text-[#021431] text-2xl text-center font-semibold">
            365-Day Home Trial
          </h1>
          <p className="text-slate-700 text-base text-center mt-2">
            It takes time to fall in love. Live with your new piece for a full
            year. If it doesn't fit your life or style perfectly, send it back
            for a full refund.
          </p>
        </div>
        <div className="bg-slate-50 hover:bg-blue-200 hover:scale-102 transition-transform duration-300 p-10 rounded-4xl">
          <div className="pb-3">
            <Sprout
              size={20}
              strokeWidth={1}
              className="bg-slate-200 m-auto px-5 rounded-full h-18 w-18"
            />
          </div>

          <h1 className="text-[#021431] text-2xl text-center font-semibold">
            Sustainably Sourced
          </h1>
          <p className="text-slate-700 text-base text-center mt-2">
            Good design shouldn't cost the earth. All our wood is FSC-certified,
            and our fabrics are made from recycled, eco-friendly materials.
          </p>
        </div>
        <div className="bg-slate-50 hover:bg-blue-200 hover:scale-102 transition-transform duration-300 p-10 rounded-4xl">
          <div className="pb-3">
            <Receipt
              size={20}
              strokeWidth={1}
              className="bg-slate-200 m-auto px-5 rounded-full h-18 w-18"
            />
          </div>

          <h1 className="text-[#021431] text-2xl text-center font-semibold">
            No Retail Markup
          </h1>
          <p className="text-slate-700 text-base text-center mt-2">
            By designing in-house and shipping directly to you, we cut out the
            showroom costs and pass those savings straight to your wallet.
          </p>
        </div>
        <div className="bg-slate-50 hover:bg-blue-200 hover:scale-102 transition-transform duration-300 p-10 rounded-4xl">
          <div className="pb-3">
            <CalendarHeart
              size={20}
              strokeWidth={1}
              className="bg-slate-200 m-auto px-5 rounded-full h-18 w-18"
            />
          </div>

          <h1 className="text-[#021431] text-2xl text-center font-semibold">
            Built to Last a Lifetime
          </h1>
          <p className="text-slate-700 text-base text-center mt-2">
            We use solid hardwoods and reinforced joinery. Our furniture is
            crafted to withstand real life-kids, pets, and everything in
            between.
          </p>
        </div>
        <div className="bg-slate-50 hover:bg-blue-200 hover:scale-102 transition-transform duration-300 p-10 rounded-4xl">
          <div className="pb-3">
            <PhoneCall
              size={20}
              strokeWidth={1}
              className="bg-slate-200 m-auto px-5 rounded-full h-18 w-18"
            />
          </div>

          <h1 className="text-[#021431] text-2xl text-center font-semibold">
            24/7 Design Support
          </h1>
          <p className="text-slate-700 text-base text-center mt-2">
            Stuck on a color choice? Our interior design experts are available
            around the clock to help you curate the perfect palette for your
            home.
          </p>
        </div>
      </div>
    </div>
  );
};
