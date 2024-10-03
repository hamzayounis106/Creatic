import React from "react";
import AnimatedButton from "./Utils/AnimatedButton";
function Hero() {
  return (
    <>
      <section className="relative Hero flex justify-center bg-black  w-full  z-[100] h-[85vh] ">
        <img
          src="./Hero/women_hero.png"
          className=" lg:hidden opacity-15  image_hero_girl opacity object-cover  absolute bottom-0 z-[100]"
          alt=""
        />
        <div className=" bg-gradient-to-l shadow_Hero from-[#6d96fc3b] right-0 to-[#6d96fc00]  absolute top-0 z-[200]  w-[40%] xl:w-[60%] h-full object-cover"></div>
        <div className="  w-[90%] h-full flex justify-center items-center z-[150] ">
          <div className="flex h-full hero_content flex-col items-center lg:items-start justify-center  w-[80%] md:w-[55%]  lg:w-[45%] gap-5">
            <p className="text-[#6D95FC]   text-[14px] sm:text-[17px] md:text-[19px] xl:text-[21px] uppercase welcome bringUp lg:text-start text-center  ">
              Welcome to creatic
            </p>
            <h2 className=" font-semibold sm:font-bold  text-white  text-[25px]  md:text-[35px] lg:text-start text-center   lg:text-[45px] xl:text-[50px] bringUp">
              WE ARE <span className="text-[#6D95FC]">CREATIVE</span>
              <br /> DESIGN AGENCY
            </h2>
            <hr className="border-[#6D95FC] border-2 rounded-lg w-1/3 line_progress" />
            <p className="text-white  text-[16px] md:text-[17px]  lg:text-start text-center  lg:text-[18px] font-light bringUp group_text">
              Lorem ipsumNeque porro quisquam est qui dolorem ipsum quia dolor
              sit amet, consectetur, adipisci velit Neque porro elit Neque porro
              quis ipsum
            </p>

            <AnimatedButton text={"Get in touch"} specialClass={"bringUp"} />
          </div>
          <div className="lg:flex hidden items-end justify-start  w-[45%]  lg:w-[55%] h-full">
            <img
              src="./Hero/women_hero.png"
              className="  image_hero_girl opacity max-w-[100%] w-full  "
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
