import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

function SingleStat({ img, count, text, _id }) {
  const countRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      countRef.current,
      { innerText: 0 },
      {
        scrollTrigger: {
          markers: false,
          trigger: `#${_id}`,
          start: "top center",
          end: "top center",
          scroller: ".page",
        },
        innerText: count,
        duration: 1,
        ease: "power1.out",
        snap: { innerText: 1 }, // Snap to whole numbers
        onUpdate: function () {
          countRef.current.innerHTML = Math.ceil(countRef.current.innerText);
        },
      }
    );
 
  }, [count, _id]);

  return (
    <div
      id={_id}
      className="w-[20%] flex    comeUpStat    justify-center items-center flex-col"
    >
      <img src={img} alt={text} className="comeUpStat" />
      <h3
        ref={countRef}
        className="   comeUpStat text-white pb-0 mb-0 mt-4 font-bold leading-none text-[50px]"
      >
        0
      </h3>
      <p className="    comeUpStat   text-[#6D95FC] text-[18px] m-0 p-0">
        {text}
      </p>
    </div>
  );
}

export default SingleStat;
