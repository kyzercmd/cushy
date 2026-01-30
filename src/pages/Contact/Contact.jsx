import React from "react";
import { MapPinHouse, Phone, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    //console.log(data);
    setSubmitted(true);
  };

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
        <form
          className="w-full md:w-1/2 flex gap-5 flex-col p-7"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="font-semibold tracking-tight">LET'S TALK TO US</h1>
          <div className="flex flex-col md:flex-row flex-wrap justify-between gap-5">
            <div className="w-full">
              <input
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be atleast 3 characters long",
                  },
                })}
                type="text"
                className="border border-slate-600 focus:shadow-2xl focus:bg-blue-50 focus:ring-0 focus:outline-0 transition-all duration-200 ease-in-out focus:scale-[1.01] text-sm p-2 rounded-xl w-full"
                placeholder="Your Name"
              ></input>
              {errors.name && (
                <span className="text-red-700 ">*{errors.name.message}</span>
              )}
            </div>

            <div className="w-full">
              <input
                {...register("number", {
                  required: "Number is required",
                  minLength: {
                    value: 10,
                    message:
                      "Please enter a valid number ( >9 characters; 0-9)",
                  },
                  validate: (value) => {
                    if (!/^\d+$/.test(value)) {
                      return "Please enter valid number ( >9 characters; 0-9)";
                    }
                    return true;
                  },
                })}
                type="text"
                className="border border-slate-600 focus:shadow-2xl focus:bg-blue-50 focus:ring-0 focus:outline-0 transition-all duration-200 ease-in-out focus:scale-[1.01] text-sm p-2 rounded-xl w-full"
                placeholder="Number"
              ></input>
              {errors.number && (
                <span className="text-red-700">*{errors.number.message}</span>
              )}
            </div>
            <div className="w-full">
              <input
                {...register("email", {
                  required: "Email is required",
                  validate: (value) => {
                    if (
                      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                        value,
                      )
                    ) {
                      return "Please enter a valid email";
                    }
                    return true;
                  },
                })}
                type="text"
                className="border border-slate-600 focus:shadow-2xl focus:bg-blue-50 focus:ring-0 focus:outline-0 transition-all duration-200 ease-in-out focus:scale-[1.01] text-sm p-2 rounded-xl w-full"
                placeholder="Email"
              ></input>
              {errors.email && (
                <span className="text-red-700">*{errors.email.message}</span>
              )}
            </div>

            <textarea
              {...register("message")}
              className="textarea textarea-ghost w-full border border-slate-600 focus:shadow-2xl focus:bg-blue-50 focus:ring-0 focus:outline-0 transition-all duration-200 ease-in-out focus:scale-[1.01] text-sm p-2 rounded-xl"
              placeholder="Message"
            ></textarea>
          </div>
          {submitted && (
            <div className="text-blue-600 font-semibold tracking-[0.2em] uppercase text-sm mb-4 block text-center">
              Thank you for reaching out
            </div>
          )}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-sm btn-ghost bg-blue-500 rounded-2xl p-5 font-semibold text-slate-200 hover:bg-blue-600 disabled:opacity-50 select-none"
            >
              {isSubmitting ? "Submiting.." : "Submit query"}
            </button>
          </div>
        </form>
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
