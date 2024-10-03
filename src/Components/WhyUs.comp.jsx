import React from "react";
import AnimatedButton from "./Utils/AnimatedButton";
export default function WhyUs() {
  return (
    <>
      <section className="relative pb-36 md:flex-row flex-col  flex justify-center bg-black py-16 items-center  w-full  z-[100] gap-10 lg:gap-0  whySection">
        <div className=" bg-gradient-to-r from-[#6d96fc1c] left-0 to-[#6d96fc00]  absolute top-0 z-[200] w-[30%] h-full object-cover"></div>
        <div className=" bg-gradient-to-l from-[#6d96fc0a] right-0 to-[#6d96fc00]  absolute top-0 z-[50] w-[30%] h-full object-cover"></div>
        <div className="flex h-full  flex-col items-start justify-center  w-[90%] md:w-[50%] lg:w-[45%] gap-5 z-[300]">
          <div className="flex flex-col gap-3 bring_right_why_us">
            <p className="text-[#fff] text-[21px] uppercase">why us?</p>
            <hr className="border-[#6D95FC] border-2 rounded-lg w-full " />
          </div>
          <h2 className=" font-bold  text-white text-[28px] sm:text-[35px] lg:text-[40px] bring_right_why_us">
            25 years of <span className="text-[#6D95FC]">experience</span> as a
            creative agency
          </h2>
          <AnimatedButton
            text={"Read More"}
            specialClass={"bring_right_why_us"}
          />
        </div>
        <div className="flex h-full  flex-col items-start justify-center w-[90%] md:w-[35%] gap-5">
          <p className="text-white text-[17px] font-light bring_right_why_us">
            Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor
            sit amet, Neque porro elit NeDque porro Lorem ipsum
          </p>
          <ul className="customUL text-white text-[17px] font-light pl-10">
            <li className="bring_right_why_us">Happy Customer </li>
            <li className="bring_right_why_us">Experienced Team</li>
            <li className="bring_right_why_us">Modern Technology</li>
          </ul>
        </div>
      </section>
    </>
  );
}
