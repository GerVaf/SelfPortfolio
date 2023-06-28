import React, { useState } from "react";
import profile from "../assets/img/profile.jpg";
import Footer from "./Footer";
import ani from "../assets/img/slide_menu.gif";
// Import ParticleNetworkAnimation component correctly
import Particle from "../Home/Particle";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const SlideMenu = ({ activeSection, setActiveSection, scrollToSection }) => {
  const [count, setCount] = useState(false);

  return (
    <div className="bg-white h-[100vh] flex flex-col items-center justify-between">
      {/* back ground animation  */}
      <div className="w-[100%] h-[30%]">
        <div className=" bg-[#FD940A] z-20 h-[210px] rounded-b-sm relative overflow-hidden">
          <Particle />
        </div>
        <img
          className=" border-4 border-white absolute top-36 left-12 z-30 w-48 h-36 rounded-xl object-cover"
          src={profile}
          alt=""
        />
      </div>

      {/* Slide menu and footer and animation  */}
      <div className="flex flex-col justify-around h-[70%]">
        {/* menu  */}
        <div className="flex gap-3 justify-around ">
          <div className="flex flex-col w-6/12 gap-5">
            <button
              onClick={() => {
                scrollToSection("home"), setActiveSection("home");
              }}
              className={
                activeSection === "home"
                  ? "active"
                  : "text-[#FD940A] duration-300 transition border-[#FD940A] border hover:text-white hover:bg-[#FD940A] font-bold py-2 rounded-lg"
              }
            >
              Home
            </button>
            <button
              onClick={() => {
                scrollToSection("experience"), setActiveSection("experience");
              }}
              className={
                activeSection === "experience"
                  ? "active"
                  : "text-[#FD940A] duration-300 transition border-[#FD940A] border hover:text-white hover:bg-[#FD940A] font-bold py-2 rounded-lg"
              }
            >
              About
            </button>
            <button
              onClick={() => {
                scrollToSection("projects"), setActiveSection("projects");
              }}
              className={
                activeSection === "projects"
                  ? "active"
                  : "text-[#FD940A] duration-300 transition border-[#FD940A] border hover:text-white hover:bg-[#FD940A] font-bold py-2 rounded-lg"
              }
            >
              Projects
            </button>
          </div>
          <div className="flex flex-col w-6/12 gap-5">
            <button
              onClick={() => {
                scrollToSection("knowlage"), setActiveSection("knowlage");
              }}
              className={
                activeSection === "knowlage"
                  ? "active"
                  : "text-[#FD940A] duration-300 transition border-[#FD940A] border hover:text-white hover:bg-[#FD940A] font-bold py-2 rounded-lg"
              }
            >
              Knowledge
            </button>
            <button
              onClick={() => {
                scrollToSection("connect"), setActiveSection("connect");
              }}
              className={
                activeSection === "connect"
                  ? "active"
                  : "text-[#FD940A] duration-300 transition border-[#FD940A] border hover:text-white hover:bg-[#FD940A] font-bold py-2 rounded-lg"
              }
            >
              Contact
            </button>
          </div>
        </div>
        {/* bottom  */}
        <div className="flex font-bold justify-around items-center cursor-pointer gap-5 text-xl">
          {/* animation gif  */}
          <div className=" flex flex-col gap-5">
            <img className=" h-52 object-cover" src={ani} alt="" />
          </div>
          {/* the count up  */}
          <ScrollTrigger
            onEnter={() => setCount(true)}
            onExit={() => setCount(false)}
          >
            <div className="flex flex-col gap-5 text-white">
              <div className="bg-gradient-to-r hover:from-[#fdc40a] hover:to-orange-400 from-[#FD940A] to-orange-500 rounded-md flex flex-col justify-center items-center text-sm p-1">
                <h1 className="sm:text-lg text-xl">
                  {count && (
                    <CountUp start={0} end={1} duration={5} delay={0.5} />
                  )}
                  +
                </h1>
                <h2>YEARS OF EXPERINCES</h2>
              </div>
              <div className="bg-gradient-to-r hover:from-[#fdc40a] hover:to-orange-400 from-[#FD940A] to-orange-500 rounded-md flex flex-col justify-center items-center text-sm p-1">
                <h1 className="sm:text-lg text-xl">
                  {count && (
                    <CountUp start={0} end={10} duration={5} delay={0.5} />
                  )}
                  +
                </h1>
                <h2>PROJECT COMPLETED</h2>
              </div>
              <div className="bg-gradient-to-r hover:from-[#fdc40a] hover:to-orange-400 from-[#FD940A] to-orange-500 rounded-md flex flex-col justify-center items-center text-sm p-1">
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
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SlideMenu;
