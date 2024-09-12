import React from "react";
import AnimatedButton from "./Utils/AnimatedButton";
function About() {
  return (
    <>
      <section className="relative about_Us  flex justify-center bg-black  w-full  z-[100]   h-[100vh] ">
        <div className=" bg-gradient-to-r from-[#6d96fc3b] left-0 to-[#6d96fc00]  absolute top-0 z-[200] w-[50%] h-full object-cover"></div>
        <div className="  w-[90%] h-full flex justify-center items-center ">
          <div className="flex items-center justify-start  w-[50%] h-full">
            <img
              src="./About/about_robot.png"
              className="max-w-[65%]  robot_about"
              alt=""
            />
          </div>
          <div className="flex h-full  flex-col items-start justify-center w-[45%] gap-5">
            <p className="text-[#6D95FC] text-[21px] uppercase  about_incoming_rtl">
              ABOUT US
            </p>
            <h2 className=" font-bold  text-white text-[40px] about_incoming_rtl">
              We Bring <span className="text-[#6D95FC]">Creative</span> ideas to
              life.
            </h2>
            <hr className="border-[#fff] border-2 rounded-lg w-1/3 aboutHr" />
            <p className="text-[#6D95FC] text-[16px] font-light   about_incoming_rtl">
              We love Creating
            </p>
            <p className="text-white text-[17px] font-light about_incoming_rtl">
              Lorem ipsumNeque porro quisquam est qui do lorem ipsum quia dolor
              sit amet, Neque porro elit NeDque porro Lorem ipsum Neque porro
              Neque porro
            </p>
            <p className="text-white text-[17px] font-light  about_incoming_rtl">
              Lorem ipsumNeque porro quisquam est qui do lorem ipsum quia dolor
              sit amet, Neque porro elit NeDque porro Lorem ipsum Neque porro
              Neque porro Neque porro quisquam est qui do lorem ipsum quia dolor
              sit amet, Lorem ipsum Neque quis ipsum
            </p>

            <AnimatedButton specialClass={"about_Button about_incoming_rtl"} text={"Read More"}  />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
