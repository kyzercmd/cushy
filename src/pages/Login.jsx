import React from "react";
import { useState } from "react";
import Loginillust from "../assets/loginillust3.svg";
import { Armchair } from "lucide-react";
import { Link } from "react-router-dom";

import { IoMdEye, IoMdEyeOff } from "react-icons/io";

export const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);

  const handleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  const [formType, setFormType] = useState("login");

  return (
    <div className="transition-opacity duration-500 max-w-full mx-auto flex justify-between flex-col md:flex-row ">
      <div className="md:w-1/2 md:flex bg-slate-100 justify-end items-end hidden relative">
        <Link
          to="/"
          className="absolute top-0 left-0 pl-5 pt-5 items-center  gap-2 select-none inline-flex "
        >
          <div className="flex items-center justify-center w-10 h-10 bg-slate-700 text-blue-100 rounded-2xl shadow-sm">
            <Armchair size={26} strokeWidth={2} />
          </div>

          <h1 className="text-2xl font-bold text-blue-600 tracking-tight">
            Ever<span className="text-slate-700">Soft.</span>
          </h1>
        </Link>

        <img
          src={Loginillust}
          className="object-cover -scale-x-100 mt-15 justify-end flex items-end"
        ></img>
      </div>

      <div className="md:w-1/2 w-full mx-auto ">
        {formType === "login" && (
          <div className=" md:py-20 lg:px-30 p-15 bg-white">
            <div className="text-center">
              <h1 className="text-3xl font-semibold">Welcome Back</h1>
              <p>
                Sign In to <span className="text-blue-600">Ever</span>Soft.
              </p>
            </div>
            <div className="flex flex-col items-center mt-5">
              <form className="w-full flex flex-col gap-2">
                <p className="text-slate-700">Email</p>
                <input
                  type="text"
                  className="text-sm border border-slate-600 focus:shadow-2xl focus:bg-blue-50 focus:ring-0 focus:outline-1 rounded-box p-2 w-full transition-all duration-200 ease-in-out focus:scale-[1.01]"
                  placeholder="Email"
                ></input>
                <p className="text-slate-700">Password</p>
                <div className="relative flex">
                  <input
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
                </div>

                <div className="flex justify-between my-3">
                  <label className="label">
                    <input
                      type="checkbox"
                      defaultunChecked
                      className="checkbox text-slate-700"
                    />
                    Remember me
                  </label>
                  <div className="hover:text-blue-500 text-gray-600 hover:cursor-pointer font-medium text-base">
                    Forgot password
                  </div>
                </div>
                <div className="bg-blue-500 text-sm text-center p-2 rounded-box text-slate-200 font-semibold">
                  <button>Sign In</button>
                </div>
                <div className=" text-center text-slate-600 font-medium">
                  OR
                </div>
                <div className="text-center text-sm bg-gray-300 p-2 rounded-box font-semibold">
                  Sign In with Google
                </div>
              </form>
            </div>
            <div className="text-center mt-5 text-slate-700">
              Don't have an account?{" "}
              <span
                className="text-blue-500 font-semibold hover:cursor-pointer hover:link"
                onClick={() => {
                  setFormType("register");
                }}
              >
                Create an account
              </span>
            </div>
          </div>
        )}
        {formType === "register" && (
          <div className=" md:py-13 lg:px-30 p-15 bg-white">
            <div className="text-center">
              <h1 className="text-3xl font-semibold">Create an Account</h1>
              <p>
                Your journey with <span className="text-blue-600">Ever</span>
                Soft begins here.
              </p>
            </div>
            <div className="flex flex-col items-center mt-5">
              <form className="w-full flex flex-col gap-2">
                <p className="text-slate-700">Name</p>
                <input
                  type="text"
                  className="text-sm border border-slate-600 focus:shadow-2xl focus:bg-blue-50 focus:ring-0 focus:outline-1 rounded-box p-2 w-full transition-all duration-200 ease-in-out focus:scale-[1.01]"
                  placeholder="Name"
                ></input>
                <p className="text-slate-700">Email</p>
                <input
                  type="text"
                  className="text-sm border border-slate-600 focus:shadow-2xl focus:bg-blue-50 focus:ring-0 focus:outline-1 rounded-box p-2 w-full transition-all duration-200 ease-in-out focus:scale-[1.01]"
                  placeholder="Email"
                ></input>

                <p className="text-slate-700">Password</p>
                <div className="relative flex">
                  <input
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
                </div>

                <p className="text-slate-700">Confirm password</p>
                <div className="relative flex">
                  <input
                    type="password"
                    className="text-sm border border-slate-600 focus:shadow-2xl focus:bg-blue-50 focus:ring-0 focus:outline-0 rounded-box p-2 w-full transition-all duration-200 ease-in-out focus:scale-[1.01]"
                    placeholder="Password"
                  ></input>
                </div>

                <div className="flex justify-between my-3">
                  <label className="label">
                    <input
                      type="checkbox"
                      defaultunChecked
                      className="checkbox text-slate-700"
                    />
                    I agree to the{" "}
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
              <span
                className="text-blue-500 font-semibold hover:cursor-pointer hover:link"
                onClick={() => {
                  setFormType("login");
                }}
              >
                Sign In
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
