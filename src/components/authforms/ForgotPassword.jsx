import React from "react";
import * as motion from "motion/react-client";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { Armchair } from "lucide-react";

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
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
      }}
      className="min-h-screen lg:px-30 px-10 pt-5 md:pt-15 bg-white flex-col flex gap-10"
    >
      <div className="text-center">
        <Link
          to="/"
          className="md:hidden items-center gap-1 select-none inline-flex mb-3"
        >
          <div className="flex items-center justify-center w-10 h-10 bg-slate-700 text-blue-100 rounded-2xl shadow-sm">
            <Armchair size={26} strokeWidth={2} />
          </div>

          <h1 className="text-2xl font-bold text-blue-600 tracking-tight">
            Ever<span className="text-slate-700">Soft.</span>
          </h1>
        </Link>
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

          <button className="bg-blue-500 hover:bg-blue-600 transition-colors duration-200  text-sm text-center p-2 rounded-box text-slate-200 font-semibold">
            Send
          </button>
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
    </motion.div>
  );
};
