import React from "react";
import notfound from "../../assets/404.png";

export const PageNotFound = () => {
  return (
    <div className="max-w-6xl h-screen m-auto">
      <div className="flex flex-col justify-center items-center">
        <img src={notfound} className="w-100"></img>
      </div>
    </div>
  );
};
