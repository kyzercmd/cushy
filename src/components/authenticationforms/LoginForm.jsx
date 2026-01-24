import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

export const LoginForm = () => {
  const [hidePassword, setHidePassword] = useState(true);

  const handleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

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
    <div className="h-160 lg:px-30 pt-5 px-10 bg-white">
      <div className="text-center">
        <h1 className="text-3xl font-semibold">Welcome Back</h1>
        <p>
          Sign In to <span className="text-blue-600">Ever</span>Soft.
        </p>
      </div>
      <div className="flex flex-col items-center mt-5">
        <form
          className="w-full flex flex-col gap-2"
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
          <p className="text-slate-700">Password</p>
          <div className="relative flex flex-col">
            <input
              {...register("password", {
                required: "Please enter Password",
              })}
              type={hidePassword ? "password" : "text"}
              className="text-sm border border-slate-600 focus:shadow-2xl focus:bg-blue-50 focus:ring-0 focus:outline-0 rounded-box p-2 w-full transition-all duration-200 ease-in-out focus:scale-[1.01]"
              placeholder="Password"
            ></input>
            <div
              className="absolute right-2 top-2"
              onClick={handleHidePassword}
            >
              {hidePassword ? (
                <IoMdEyeOff size={23} strokeWidth={1} />
              ) : (
                <IoMdEye size={23} strokeWidth={1} />
              )}
            </div>
            {errors.password && (
              <span className="text-red-700">*{errors.password.message}</span>
            )}
          </div>

          <div className="flex justify-between flex-col sm:flex-row gap-2 my-3">
            <label className="label">
              <input type="checkbox" className="checkbox text-slate-700" />
              Remember me
            </label>
            <Link
              to="/forgotpassword"
              className="hover:text-blue-500 text-gray-600 hover:cursor-pointer font-medium text-base"
            >
              Forgot password
            </Link>
          </div>
          <div className="bg-blue-500 hover:bg-blue-600 transition-colors duration-200 text-sm text-center p-2 rounded-box text-slate-200 font-semibold">
            <button>Sign In</button>
          </div>
          <div className=" text-center text-slate-600 font-medium">OR</div>
          <div className="text-center text-sm bg-gray-200 hover:bg-gray-300 transition-colors duration-200  p-2 rounded-box font-semibold">
            Sign In with Google
          </div>
        </form>
      </div>
      <div className="text-center mt-5 text-slate-700">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-blue-500 font-semibold hover:cursor-pointer hover:link"
        >
          Create an account
        </Link>
      </div>
    </div>
  );
};
