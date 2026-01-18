import { Link } from "react-router-dom";

import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.png";
import hero4 from "../../assets/hero4.png";

export const Hero = () => {
  return (
    <div className="md:max-w-5xl m-auto flex justify-between bg-white py-10 mt-5 rounded-4xl">
      <div className="flex-col flex gap-10 lg:max-w-1/2 mt-5 lg:pr-20 ml-5">
        <div className="text-6xl tracking-tighter font-bold text-[#394E6A] max-w-10/12">
          The New Standard of{" "}
          <span className="text-blue-500 tracking-normal">Comfort</span>
        </div>
        <p className="text-[#394E6A] text-lg leading-relaxed antialiased">
          We believe shopping for your home should be as relaxing as living in
          it. We are changing the way you curate your space by delivering
          showroom-quality pieces directly to your door-faster, easier, and
          cozier than ever before.
        </p>
        <div className="">
          <Link
            to="/products"
            className="btn btn-ghost py-6 px-8 font-semibold bg-blue-500 hover:bg-blue-400 text-slate-200 text-sm hover:cursor-pointer rounded-box shadow-2xl"
          >
            OUR PRODUCTS
          </Link>
        </div>
      </div>
      <div className=" hidden lg:block">
        <div className="carousel carousel-center bg-[#021431] rounded-2xl max-w-lg space-x-4 p-4">
          <div className="carousel-item">
            <img src={hero1} className="rounded-2xl w-80 h-105 object-cover" />
          </div>
          <div className="carousel-item">
            <img src={hero2} className="rounded-2xl w-80 h-105 object-cover" />
          </div>
          <div className="carousel-item">
            <img src={hero3} className="rounded-2xl w-80 h-105 object-cover" />
          </div>
          <div className="carousel-item">
            <img src={hero4} className="rounded-2xl w-80 h-105 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};
