import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode, Autoplay } from "swiper/modules";
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
    <div className="lg:max-w-6xl max-w-11/12 mx-auto my-30">
      <div className="max-w-10/12 flex flex-col m-auto text-center">
        <div className=" text-[#021431] text-3xl tracking-widest font-serif font-medium">
          Curate Your Space
        </div>
        <p className="text-[#131313cc] mt-2 text-[18px] font-[Urbanist]">
          Find comfort for every corner. From deep-seated sofas to artisan
          dining tables, explore our curated collections designed to make your
          home the ultimate sanctuary.
        </p>
      </div>

      <div
        className={
          isLoading
            ? "loading loading-ring loading-xl m-auto flex h-40"
            : "mt-5 "
        }
      ></div>
      <Swiper
        modules={[Navigation, Pagination, FreeMode, Autoplay]}
        freeMode={false}
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
        className="max-w-11/12 md:max-w-6xl "
      >
        {data?.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={`/products?category=${item.category}`}>
              <div className="border border-slate-700 rounded-xl flex items-end justify-center overflow-hidden">
                <div className="relative w-full h-full object-cover hover:scale-103 transition-transform duration-300 overflow-hidden">
                  <img
                    src={item.image_path}
                    className="w-full h-80 object-cover"
                  ></img>
                </div>
                <div className="absolute text-xl font-semibold capitalize px-3 py-2 rounded-xl text-[#021431] bg-white/70 mb-3 z-50">
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
