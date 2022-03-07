import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function NewsSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1.5}
        breakpoints={{
          // when window width is >= 640px
          // 640: {
          //   // width: 640,
          //   slidesPerView: 1,
          // },
          // when window width is >= 768px
          768: {
            // width: 768,
            slidesPerView: 2.8,
          },
        }}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        loop={true}
        className="mySwiper text-white "
      >
        <SwiperSlide className="cursor-pointer working-card">
          <div
            className="bottom-[2rem] flex flex-col items-start p-4 h-[15rem] 2xl:h-[20rem] bg-center  bg-no-repeat bg-cover rounded-md w-full "
            style={{ backgroundImage: "url('/Home/Working-with-TCS-2.jpg')" }}
          >
            <h1 className="text-2xl font-bold mt-[8rem] 2xl:mt-[13rem] text-white">
              Community Learning
            </h1>
            <p>Industry-wide meetups, events and conferences.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer working-card">
          <div
            className="bottom-[2rem] flex flex-col items-start p-4 h-[15rem] 2xl:h-[20rem] bg-center bg-no-repeat bg-cover rounded-md w-full"
            style={{ backgroundImage: "url('/Home/Working-with-TCS-1.jpg')" }}
          >
            <h1 className="text-2xl font-bold mt-[8rem] 2xl:mt-[13rem] text-white">
              Health Insurance
            </h1>
            <p>Industry-wide meetups, events and conferences.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer working-card">
          <div
            className="bottom-[2rem] flex flex-col items-start p-4 h-[15rem] 2xl:h-[20rem] bg-center bg-no-repeat bg-cover rounded-md w-full"
            style={{ backgroundImage: "url('/Home/Working-with-TCS-3.jpg')" }}
          >
            <h1 className="text-2xl font-bold mt-[8rem] 2xl:mt-[13rem] text-white">
              Your Work, Your Time
            </h1>
            <p>Industry-wide meetups, events and conferences.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
