import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";

export const RegisterForm = () => {
  const [hidePassword, setHidePassword] = useState(true);

  const handleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  const handleRegisterSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <div className="h-170 lg:px-30 pt-5 px-10 bg-white">
        <div className="text-center">
          <h1 className="text-3xl font-semibold">Create an Account</h1>
          <p>
            Your journey with <span className="text-blue-600">Ever</span>
            Soft begins here.
          </p>
        </div>
        <div className="flex flex-col items-center mt-5">
          <form
            className="w-full flex flex-col gap-2"
            onSubmit={handleSubmit(handleRegisterSubmit)}
          >
            <p className="text-slate-700">Name</p>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              className="text-sm border border-slate-600 focus:shadow-2xl focus:bg-blue-50 focus:ring-0 focus:outline-1 rounded-box p-2 w-full transition-all duration-200 ease-in-out focus:scale-[1.01]"
              placeholder="Name"
            ></input>
            {errors.name && (
              <span className="text-red-700">*{errors.name.message}</span>
            )}
            <p className="text-slate-700">Email</p>
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
                  required: "Password is required",
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

            <p className="text-slate-700">Confirm password</p>
            <div className="relative flex flex-col">
              <input
                {...register("confirmpassword", {
                  required: "Must be same as password",
                  validate: (value) => {
                    if (watch("password") !== value) {
                      return "Your passwords do not match";
                    }
                    return true;
                  },
                })}
                type="password"
                className="text-sm border border-slate-600 focus:shadow-2xl focus:bg-blue-50 focus:ring-0 focus:outline-0 rounded-box p-2 w-full transition-all duration-200 ease-in-out focus:scale-[1.01]"
                placeholder="Password"
              ></input>
              {errors.confirmpassword && (
                <span className="text-red-700">
                  *{errors.confirmpassword.message}
                </span>
              )}
            </div>

            <div className="flex justify-between my-3 flex-wrap">
              <label className="label flex flex-wrap">
                <input type="checkbox" className="checkbox text-slate-700" />I
                agree to the{" "}
                <span className="text-blue-500 hover:cursor-pointer hover:link">
                  Terms and Privacy Policy.
                </span>
              </label>
            </div>
            <div className="bg-blue-500 text-sm text-center p-2 rounded-box text-slate-200 font-semibold">
              <button>Create Account</button>
            </div>
          </form>
        </div>
        <div className="text-center mt-5 text-slate-700">
          Already have an Account?{" "}
          <Link
            to="/login"
            className="text-blue-500 font-semibold hover:cursor-pointer hover:link"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};
