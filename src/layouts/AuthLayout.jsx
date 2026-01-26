import React from "react";
import { RegisterForm } from "../components/authforms/RegisterForm";
import { LoginForm } from "../components/authforms/LoginForm";
import { ForgotPassword } from "../components/authforms/ForgotPassword";

import Loginillust from "../assets/loginillust3.svg";
import { Armchair } from "lucide-react";
import { Link } from "react-router";

export const AuthLayout = ({ children }) => {
  return (
    <div className="max-h-90vh overflow-hidden max-w-full mx-auto flex justify-between flex-col md:flex-row ">
      <div className="md:w-1/2 md:flex min-h-screen bg-slate-100 justify-end items-end hidden relative">
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

      <div className="md:w-1/2 w-full mx-auto ">{children}</div>
    </div>
  );
};
