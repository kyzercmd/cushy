import React from "react";
import notfound from "../../assets/404.png";
import { useNavigate } from "react-router";
import { CircleArrowLeft } from "lucide-react";

export const PageNotFound = () => {
  const navigate = useNavigate();
  const handleNavgiateBack = () => {
    navigate(-1);
  };
  return (
    <div className="max-w-6xl h-screen m-auto">
      <div className="flex flex-col justify-center items-center">
        <img src={notfound} className="w-100"></img>
        <div
          className="flex items-center text-blue-500  hover:link text-lg gap-1"
          onClick={handleNavgiateBack}
        >
          <CircleArrowLeft size={20} />
          <p className="">Go Back</p>
        </div>
      </div>
    </div>
  );
};
