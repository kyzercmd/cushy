import React from "react";
import { Link } from "react-router-dom";
import { SquareArrowOutUpRight } from "lucide-react";

export const Faq = () => {
  return (
    <div className="lg:max-w-6xl max-w-11/12 m-auto my-30">
      <div className=" flex flex-col mx-auto text-center mb-5 ">
        <div className=" text-[#021431] text-3xl tracking-widest  font-medium font-[Instrument-sans]">
          Frequenty Asked Questions (FAQs)
        </div>
        <p className="max-w-5/6 m-auto text-[#131313cc] mt-2 leading-relaxed antialiased text-[18px]">
          Got questions? We've got answers. Explore our quick guide to shipping,
          assembly, and returns to see how we're making furniture shopping
          easier than ever.
        </p>
      </div>
      <div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300 mb-1 shadow-sm p-1 rounded-2xl">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-bold font-[Urbanist] text-[#021431]">
            How long does delivery take?
          </div>
          <div className="collapse-content leading-relaxed text-sm font-[Urbanist] text-[#131313cc]">
            Most EverSoft pieces arrive within 7-14 business days. We offer free
            shipping and professional white-glove delivery on every order.
          </div>
        </div>
        <div className="rounded-2xl collapse collapse-arrow bg-base-100 border border-base-300 mb-1 shadow-sm p-1">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-bold font-[Urbanist] text-[#021431]">
            What is the 365-day home trial?
          </div>
          <div className="collapse-content text-sm leading-relaxed font-[Urbanist] text-[#131313cc]">
            We want you to be sure. Live with your furniture for a full year—if
            it's not the perfect fit for your home, we'll pick it up and provide
            a full refund.
          </div>
        </div>
        <div className="rounded-2xl collapse collapse-arrow bg-base-100 border border-base-300 mb-1 shadow-sm p-1">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-bold font-[Urbanist] text-[#021431]">
            Are your materials sustainable?
          </div>
          <div className="collapse-content leading-relaxed text-sm font-[Urbanist] text-[#131313cc]">
            Absolutely. We use FSC-certified hardwoods and premium fabrics made
            from recycled materials to ensure our comfort doesn't cost the
            earth.
          </div>
        </div>
        <div className="rounded-2xl collapse collapse-arrow bg-base-100 border border-base-300 mb-1 shadow-sm p-1">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-bold font-[Urbanist] text-[#021431]">
            Do I have to assemble the furniture myself?
          </div>
          <div className=" collapse-content text-sm leading-relaxed font-[Urbanist] text-[#131313cc]">
            No. Our delivery team handles all the heavy lifting and assembly for
            you, ensuring your new piece is perfectly placed and ready to use.
          </div>
        </div>
        <div className="rounded-2xl collapse collapse-arrow bg-base-100 border border-base-300 mb-1 shadow-sm p-1">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-bold font-[Urbanist] text-[#021431]">
            What kind of warranty do you provide?
          </div>
          <div className="collapse-content leading-relaxed text-sm font-[Urbanist] text-[#131313cc]">
            We build for the long haul. Every EverSoft frame comes with a
            Lifetime Limited Warranty covering structural integrity. If the
            "bones" of your furniture fail, we'll make it right.
          </div>
        </div>
      </div>
      <div className="flex mt-5">
        <Link
          to="/contact"
          className="btn m-auto btn-outline hover:bg-blue-600 hover:text-slate-200 transition-all duration-300 hover:shadow-2xl text-blue-500 font-bold rounded-box px-5 py-5 text-sm"
        >
          More FAQs
          <SquareArrowOutUpRight size={15} strokeWidth={3} />
        </Link>
      </div>
    </div>
  );
};
