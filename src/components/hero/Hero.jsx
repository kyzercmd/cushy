import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.png";
import hero4 from "../../assets/hero4.png";

export const Hero = () => {
  return (
    <div className="md:max-w-5xl m-auto flex mt-15 justify-between">
      <div className="flex-col flex gap-10 lg:max-w-1/2 mt-5 lg:pr-20 ml-5">
        <div className="text-6xl font-bold text-[#394E6A]">
          We are changing the way people shop
        </div>
        <p className="text-[#394E6A] text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          amet ipsam beatae nihil id dolorum necessitatibus aperiam error totam,
          voluptate.
        </p>
        <div className="">
          <button className="py-4 px-6 font-semibold bg-blue-500 text-slate-200 text-xs hover:cursor-pointer rounded-box shadow-2xl">
            OUR PRODUCTS
          </button>
        </div>
      </div>
      <div className="mr-5 hidden lg:block">
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
