import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode } from "swiper/modules";
import { useCategoryFetch } from "../../hooks/useCategoryFetch";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const CategoryShowcase = () => {
  const { data, isLoading, isError } = useCategoryFetch();

  const handleCategorySelection = () => {
    <Link to="/products"></Link>;
  };

  if (isError) return <div>Error.</div>;
  console.log(data);

  return (
    <div className="max-w-5xl mt-10 m-auto mb-5">
      <div className=" text-[#394E6A] text-3xl tracking-widest ">
        Browse by Category
      </div>
      <div
        className={
          isLoading
            ? "loading loading-ring loading-xl m-auto flex h-40"
            : "mt-5 "
        }
      ></div>
      <Swiper
        modules={[Navigation, Pagination, FreeMode]}
        spaceBetween={20}
        freeMode={true}
        pagination={{ clickable: true }}
        slidesPerView={4}
        grabCursor={false}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className=""
      >
        {data?.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={`/products?category=${item.category}`}>
              <div className="rounded-xl flex items-end justify-start overflow-hidden">
                <div className="relative w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                  <img
                    src={item.image_path}
                    className="w-full h-full object-fill rounded-xl"
                  ></img>
                </div>
                <div className="absolute text-2xl backdrop-blur-sm px-6 py-2 rounded-xl text-slate-900 bg-white/10 mb-3 ml-3">
                  {item.category}
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
