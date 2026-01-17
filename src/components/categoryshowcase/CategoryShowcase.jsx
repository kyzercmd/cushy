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

  if (isError) return <div>Error.</div>;
  console.log(data);

  return (
    <div className="max-w-6xl mt-10 m-auto mb-5">
      <div className=" text-[#394E6A] text-3xl tracking-widest ">
        Curate Your Space
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
        freeMode={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        grabCursor={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className=""
      >
        {data?.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={`/products?category=${item.category}`}>
              <div className="rounded-xl flex items-end justify-center overflow-hidden">
                <div className="relative w-full h-full object-cover hover:scale-105 transition-transform duration-300 shadow-2xl">
                  <img
                    src={item.image_path}
                    className="w-full h-full object-fill rounded-xl"
                  ></img>
                </div>
                <div className="absolute text-xl font-semibold capitalize px-3 py-2 rounded-xl text-[#021431] bg-white/70 mb-6 ml-6">
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
