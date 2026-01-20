import React from "react";
import { MapPinHouse, Phone, Send } from "lucide-react";

export const Contact = () => {
  return (
    <div className="lg:max-w-6xl max-w-11/12 m-auto mt-5 mb-30">
      <div className="text-center max-w-3xl m-auto">
        <span className="text-blue-600 font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">
          DROP US A LINE
        </span>
        <h2 className="text-xl md:text-3xl font-serif text-slate-900 mb-3 leading-tight">
          Round-The-Clock Service
        </h2>
        <p className="text-slate-600 text-base mb-8 leading-relaxed">
          Whether you're curious about our artisan-sourced hardwoods or need a
          professional eye to help curate your living space, we're here to help.
          At EverSoft, we believe every piece of furniture tells a story-let's
          start yours today.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2 flex gap-5 flex-col p-7">
          <h1 className="font-semibold tracking-tight">LET'S TALK TO US</h1>
          <div className="flex flex-col md:flex-row flex-wrap justify-between gap-5">
            <input
              type="text"
              className="border border-gray-500 focus:outline-0 focus:ring-0 focus:bg-slate-100 focus:shadow-2xl text-sm p-2 rounded-xl lg:w-60 w-full"
              placeholder="Your Name"
            ></input>
            <input
              type="text"
              className="border border-gray-500 focus:outline-0 focus:ring-0 focus:bg-slate-100 focus:shadow-2xl text-sm p-2 rounded-xl lg:w-60 w-full"
              placeholder="Number"
            ></input>
          </div>
          <input
            type="text"
            className="border border-gray-500 focus:outline-0 focus:ring-0 focus:bg-slate-100 focus:shadow-2xl text-sm p-2 rounded-xl"
            placeholder="Email"
          ></input>
          <textarea
            className="textarea textarea-ghost w-full border border-gray-500 focus:outline-0 focus:ring-0 focus:bg-slate-100 focus:shadow-2xl text-sm p-2 rounded-xl"
            placeholder="Message"
          ></textarea>
          <div className="flex justify-end">
            <button className="btn btn-sm btn-ghost bg-blue-500 rounded-2xl p-5 font-semibold text-slate-200">
              Submit Query
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-slate-200 rounded-xl flex md:flex-row flex-col justify-center items-center p-5 gap-5 font-[Urbanist] shadow-xl">
          <div className=" flex-col flex items-center text-center">
            <MapPinHouse size={40} strokeWidth={1} />

            <h1 className="font-semibold mb-3 tracking-widest">ADDRESS</h1>
            <p>17 Elimatta Dr, Ashgrove QLD 4060, Australia.</p>
          </div>
          <div className=" flex-col flex items-center text-center">
            <Phone size={40} strokeWidth={1} />
            <h1 className="font-semibold mb-3 tracking-widest">PHONE</h1>
            <p>(+84) 8 3555 3203 (+84) 8 3777 3203</p>
          </div>
          <div className=" flex-col flex items-center text-center">
            <Send size={40} strokeWidth={1} />
            <h1 className=" font-semibold mb-3 tracking-widest">EMAIL</h1>
            <h1>eversoft.info@gmail.com support.info@gmail.com</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
