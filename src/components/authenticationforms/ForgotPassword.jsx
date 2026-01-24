import React from "react";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const ForgotPassword = () => {
  const handleLoginSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="h-full lg:px-30 p-15 bg-white flex-col flex gap-10">
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-5">Forgot Password</h1>
        <p>Enter Email associated with your account to receive a reset link</p>
      </div>
      <div className="flex flex-col items-center mt-5 ">
        <form
          className="w-full flex flex-col gap-5"
          onSubmit={handleSubmit(handleLoginSubmit)}
        >
          <p className="text-slate-700">Email</p>
          <input
            {...register("email", {
              required: "Please enter Email",
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
            className="text-sm border border-slate-600 focus:shadow-2xl focus:bg-blue-50 focus:ring-0 focus:outline-1 rounded-box p-2 w-full transition-all duration-200 ease-in-out focus:scale-[1.01]"
            placeholder="Email"
            autoComplete="off"
          ></input>
          {errors.email && (
            <span className="text-red-700">*{errors.email.message}</span>
          )}

          <div className="bg-blue-500 hover:bg-blue-600 transition-colors duration-200  text-sm text-center p-2 rounded-box text-slate-200 font-semibold">
            <button>Send</button>
          </div>
        </form>
      </div>
      <div className="text-center mt-5 text-slate-700">
        Back to {""}
        <Link
          to="/login"
          className="text-blue-500 font-semibold hover:cursor-pointer hover:link"
        >
          Login
        </Link>
      </div>
    </div>
  );
};
