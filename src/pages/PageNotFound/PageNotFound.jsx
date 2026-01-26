import React from "react";
import notfound from "../../assets/404.png";

export const PageNotFound = () => {
  return (
    <div className="max-w-6xl h-screen m-auto">
      <div className="flex flex-col justify-center items-center">
        <img src={notfound} className="w-100"></img>
        <h1 className="text-xl font-bold text-blue-500 tracking-normal bg-slate-900 rounded-box p-6">
          PAGE <span className="text-slate-300">NOT</span> FOUND
        </h1>
      </div>
    </div>
  );
};
