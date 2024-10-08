import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "../index.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
export default function Projects() {
  return (
    <>
      <section className="relative  flex justify-center bg-black py-16 items-center  w-full  z-[100]  projectSection">
        <div className=" bg-gradient-to-r from-[#6d96fc1c] left-0 to-[#6d96fc00]  absolute top-0 z-[200] w-[30%] h-full object-cover"></div>

        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className=" font-bold  text-white text-[40px] text-center projects_come_up">
            ENJOY OUR <span className="text-[#6D95FC]">LATEST</span> PROJECTS
          </h2>
          <div className="w-[40%] flex justify-center items-center gap-2 projects_come_up">
            <hr className="flex-grow border-[#fff] border-2" />
            <h3 className="text-[#6D95FC] text-[21[x] uppercase">our WORK</h3>
            <hr className="flex-grow border-[#fff] border-2" />
          </div>
        </div>
      </section>
      <section className="relative pb-10  flex justify-center bg-black  items-center  h-screen w-full  z-[100]  ">
        {" "}
        <div className=" bg-gradient-to-r from-[#6d96fc1c] left-0 to-[#6d96fc00]  absolute top-0 z-[50] w-[30%] h-full object-cover"></div>
        <Swiper
          breakpoints={{
            500: {
              slidesPerView: 1,
            },
            800: {
              slidesPerView: 2,
            },
            1100:{
              slidesPerView: 3,
            }
          }}
        
          centeredSlides={true}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper cursor-grab !z-[300] projects_come_up"
        >
          <SwiperSlide>
            <img
              src="./Slider/slider_1.png"
              className="object-cover w-full h-full"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="./Slider/slider_3.png"
              className="object-cover w-full h-full"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./Slider/12.jpg"
              className="object-cover w-full h-full"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="./Slider/13.jpg"
              className="object-cover w-full h-full"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./Slider/14.jpg"
              className="object-cover w-full h-full"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./Slider/15.jpg"
              className="object-cover w-full h-full"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
