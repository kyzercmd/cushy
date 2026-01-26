import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserAuth } from "../../providers/AuthContext";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Armchair } from "lucide-react";

export const LoginForm = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const Navigate = useNavigate();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const handleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  const { signIn, googleSignIn } = UserAuth();

  const handleEmailLogin = async (data) => {
    console.log(data);

    try {
      await signIn(data.email, data.password);

      Navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleSignIn();

      Navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="min-h-screen lg:px-30 pt-5 md:pt-15 px-10 bg-white">
      <div className=" text-center flex-col flex justify-center items-center">
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
        <h1 className="text-3xl font-semibold">Welcome Back</h1>
        <p>
          Sign In to <span className="text-blue-600">Ever</span>Soft.
        </p>
      </div>
      <div className="flex flex-col items-center mt-5">
        <form
          className="w-full flex flex-col gap-2"
          onSubmit={handleSubmit(handleEmailLogin)}
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
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 transition-colors duration-200 text-sm text-center p-2 rounded-box text-slate-200 font-semibold"
          >
            Sign In
          </button>
        </form>
        <div className=" text-center text-slate-600 font-medium py-2">OR</div>
        <button
          onClick={handleGoogleLogin}
          type="submit"
          className="text-center text-sm bg-gray-200 hover:bg-gray-300 transition-colors duration-200  p-2 rounded-box font-semibold flex justify-center items-center gap-2 w-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>
          <span>Sign In with Google</span>
        </button>
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
