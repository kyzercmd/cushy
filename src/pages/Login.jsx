import React from "react";
import { useState } from "react";
import Loginillust from "../assets/loginillust3.svg";
import { Armchair } from "lucide-react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export const Login = () => {
  const [passWordView, setPassWordView] = useState(true);

  return (
    <div className="max-w-full mx-auto flex justify-between flex-col md:flex-row">
      <div className="md:w-1/2 md:flex bg-slate-100 justify-center hidden relative">
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
          className="object-cover -scale-x-100 mt-15"
        ></img>
      </div>
      <div className="md:w-1/2 w-full mx-auto md:py-20 lg:px-30 p-15 bg-white">
        <div className="text-center">
          <h1 className="text-3xl font-semibold">Welcome Back</h1>
          <p>
            Login with <span className="text-blue-600">Ever</span>Soft.
          </p>
        </div>
        <div className="flex flex-col items-center mt-5">
          <form className="w-full flex flex-col gap-2">
            <p className="text-slate-700">Email</p>
            <input
              type="text"
              className="text-sm border border-slate-600 focus:shadow-2xl focus:bg-blue-50 focus:ring-0 focus:outline-1 rounded-box p-2 w-full"
              placeholder="Email"
            ></input>
            <p className="text-slate-700">Password</p>
            <div className="relative flex">
              <input
                type="text"
                className="text-sm border border-slate-600 focus:shadow-2xl focus:bg-blue-50 focus:ring-0 focus:outline-0 rounded-box p-2 w-full"
                placeholder="Password"
              ></input>
              <div className="absolute right-2 top-2">
                <Eye size={20} strokeWidth={2} />
              </div>
            </div>

            <div className="flex justify-between my-3">
              <label className="label">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox text-slate-700"
                />
                Remember me
              </label>
              <div className="hover:text-blue-500 text-slate-700 hover:cursor-pointer font-medium text-sm">
                Forgot password
              </div>
            </div>
            <div className="bg-blue-500 text-sm text-center p-2 rounded-box text-slate-300 font-semibold">
              <button>Login</button>
            </div>
            <div className=" text-center text-slate-600 font-medium">OR</div>
            <div className="text-center text-sm bg-gray-300 p-2 rounded-box font-semibold">
              Login with Google
            </div>
          </form>
        </div>
        <div className="text-center mt-5 text-slate-700">
          Dont have an account?{" "}
          <span className="text-blue-500 font-semibold hover:cursor-pointer hover:link">
            Register
          </span>
        </div>
      </div>
    </div>
  );
};
