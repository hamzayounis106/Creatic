import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
function Header() {
  const fadeFromTop = useRef();
  const tl = gsap.timeline();
  useGSAP(() => {
    gsap.from(".fadeFromTop", {
      y: -100,
      opacity: 0,
      duration: 0.75,
      stagger: 0.1,
      delay: 0.5,
      ease:"power1.inOut"
    });
  }, []);
  return (
    <>
      <section className="bg-[#000000]  w-full flex justify-center ">
        <header className="flex justify-between w-full h-[15vh] ">
          <div className="w-[20%] flex flex-col justify-center text-center items-center fadeFromTop">
            <h1 className="text-[#6D95FC]  font-semibold   text-[35px] uppercase tracking-tighter">
              Creatic
            </h1>
            <p className="text-white text-[11px]  tracking-widest">
              CREATIVE AGENCY
            </p>
          </div>
          <div className="w-[60%] flex justify-center items-center">
            <nav className="flex items-center justify-center w-full gap-10 text-white list-none">
              <li className="fadeFromTop">Home</li>
              <li className="fadeFromTop">About Us</li>
              <li className="fadeFromTop">Services</li>
              <li className="fadeFromTop">Portfolio</li>
              <li className="fadeFromTop">Contact Us</li>
            </nav>
          </div>
        </header>
      </section>
    </>
  );
}

export default Header;
