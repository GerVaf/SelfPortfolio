import React, { useState } from "react";
import { Link } from "react-scroll";
import profile from "../assets/img/profile.jpg";
import Footer from "./Footer";
import ani from "../assets/img/slide_menu.gif";
// Import ParticleNetworkAnimation component correctly
import Particle from "../Home/Particle";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const SlideMenu = () => {
  const [count, setCount] = useState(false);

  return (
    <div className="bg-white h-[100vh] flex flex-col items-center justify-between">
      {/* back ground animation  */}
      <div className="w-[100%] bg-[#FD940A] z-20 h-[210px] rounded-b-sm relative overflow-hidden">
        <Particle />
      </div>
      <img
        className=" border-4 border-white absolute top-36 left-12 z-30 w-48 h-36 rounded-xl object-cover"
        src={profile}
        alt=""
      />

      {/* Slide menu and footer and animation  */}
      <div className="flex flex-col justify-between h-[70vh]">
        {/* menu  */}
        <div className="flex font-bold justify-around items-center cursor-pointer gap-5 text-xl">
          {/* animation gif  */}
          <div className="flex flex-col gap-5">
            <img className="w-60 h-60 object-cover" src={ani} alt="" />
          </div>

          <div className="flex flex-col gap-3 ">
            <Link
              className="hover:text-[#FD940A] duration-200 transition"
              to="home"
              smooth={true}
              duration={500}
            >
              HOME
            </Link>
            <Link
              className="hover:text-[#FD940A] duration-200 transition"
              to="experience"
              smooth={true}
              duration={500}
            >
              EXPERIENCE
            </Link>
            <Link
              className="hover:text-[#FD940A] duration-200 transition"
              to="projects"
              smooth={true}
              duration={500}
            >
              PROJECTS
            </Link>
            <Link
              className="hover:text-[#FD940A] duration-200 transition"
              to="knowlage"
              smooth={true}
              duration={500}
            >
              KNOWLAGE
            </Link>
            <Link
              className="hover:text-[#FD940A] duration-200 transition"
              to="connect"
              smooth={true}
              duration={500}
            >
              CONNECT
            </Link>
          </div>
        </div>
        <ScrollTrigger
          onEnter={() => setCount(true)}
          onExit={() => setCount(false)}
        >
          <div className=" flex justify-around gap-3 sm:gap-5 sm:justify-center sm:text-[15px] text-white text-[10px] font-semibold ">
            <div className="flex flex-col gap-5">
              <div className="bg-gradient-to-r hover:from-[#fdc40a] hover:to-orange-400 from-[#FD940A] to-orange-500 py-3 px-3 rounded-md sm:flex sm:flex-col sm:items-center">
                <h1 className="sm:text-lg text-xl">
                  {count && (
                    <CountUp start={0} end={1} duration={5} delay={0.5} />
                  )}
                  +
                </h1>
                <h2>YEARS OF EXPERINCES</h2>
              </div>
              <div className="bg-gradient-to-r hover:from-[#fdc40a] hover:to-orange-400 from-[#FD940A] to-orange-500 py-3 px-3 rounded-md sm:flex sm:flex-col sm:items-center">
                <h1 className="sm:text-lg text-xl">
                  {count && (
                    <CountUp start={0} end={10} duration={5} delay={0.5} />
                  )}
                  +
                </h1>
                <h2>PROJECT COMPLETED</h2>
              </div>
            </div>
            <div className="bg-gradient-to-r hover:from-[#fdc40a] hover:to-orange-400 from-[#FD940A] to-orange-500 flex justify-center py-3 px-3 rounded-md sm:flex sm:flex-col sm:items-center">
              <h1 className="sm:text-lg text-xl">
                {count && (
                  <CountUp start={0} end={100} duration={5} delay={0.5} />
                )}
                +
              </h1>
              <h2>HAPPY USERS</h2>
            </div>
          </div>
        </ScrollTrigger>
        <Footer />
      </div>
    </div>
  );
};

export default SlideMenu;
