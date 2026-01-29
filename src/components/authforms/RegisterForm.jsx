import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router";
import { UserAuth } from "../../providers/AuthContext";
import { Armchair } from "lucide-react";
import * as motion from "motion/react-client";

export const RegisterForm = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const { createUser, setUser, updateProfile } = UserAuth();
  const Navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  const handleRegisterSubmit = async (data) => {
    console.log(data);

    await createUser(data.email, data.password)
      .then(async (result) => {
        const currentUser = result.user;
        setUser(currentUser);
        if (currentUser) {
          await updateProfile(currentUser, {
            displayName: data.name,
          });
        }
        reset();
        console.log("user set");
        Navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
      }}
    >
      <div className="min-h-screen lg:px-30 pt-5 md:p-15 px-10 bg-white">
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
          <h1 className="text-3xl font-semibold">Create an Account</h1>
          <p>
            Your journey with <span className="text-blue-600">Ever</span>
            Soft begins here.
          </p>
        </div>
        <div className="flex flex-col items-center mt-5">
          <form
            className="w-full flex flex-col gap-1"
            onSubmit={handleSubmit(handleRegisterSubmit)}
          >
            <p className="text-slate-700">Name</p>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              className="text-sm border border-slate-600 focus:shadow-2xl focus:bg-blue-50 focus:ring-0 focus:outline-1 rounded-box p-2 w-full transition-all duration-200 ease-in-out focus:scale-[1.01]"
              placeholder="Name"
              name="name"
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

            <div className="flex gap-1 my-3 flex-wrap text-slate-700">
              <label className="label flex flex-wrap">
                {errors.terms && <span className="text-red-700">*</span>}
                <input
                  {...register("terms", {
                    required: true,
                  })}
                  type="checkbox"
                  className="checkbox text-slate-700"
                />
              </label>
              I agree to the{" "}
              <span className="text-blue-500 hover:cursor-pointer hover:link">
                Terms and Privacy Policy.
              </span>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 text-sm text-center p-2 rounded-box text-slate-200 font-semibold disabled:bg-blue-300 select-none"
            >
              Create Account
            </button>
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
    </motion.div>
  );
};
