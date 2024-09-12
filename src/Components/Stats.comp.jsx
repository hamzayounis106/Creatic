import React from "react";
import SingleStat from "./Single.Stat";
function Stats() {
  return (
    <>
      <section className="relative  flex justify-center bg-black h-[48vh]  items-center  w-full  z-[100]  ">
        <div className=" bg-gradient-to-r from-[#6d96fc1c] left-0 to-[#6d96fc00]  absolute top-0 z-[200] w-[30%] h-full object-cover"></div>
        <div className="flex justify-between  w-[80%] z-[300]">
          <SingleStat
            _id={"team_stat"}
            img="./Stats/Team.svg"
            count={"50+"}
            text={"Team members"}
          />
          <SingleStat
            _id={"projects_stat"}
            img="./Stats/projects.svg"
            count={"200+"}
            text={"Project done"}
          />
          <SingleStat
            _id={"customers_stat"}
            img="./Stats/customers.svg"
            count={"500+"}
            text={"Happy customers"}
          />
          <SingleStat
            _id={"awards_test"}
            img="./Stats/Awards.svg"
            count={"75+"}
            text={"Award Winning "}
          />
        </div>
      </section>
    </>
  );
}

export default Stats;
