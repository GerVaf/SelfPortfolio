import React, { useState } from "react";
import profile from "../assets/img/profile.jpg";
import Footer from "./Footer";
import ani from "../assets/img/slide_menu.gif";
// Import ParticleNetworkAnimation component correctly
import Particle from "../Home/Particle";

const SlideMenu = ({ activeSection, setActiveSection, scrollToSection }) => {
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
            <div
              onClick={() => {
                scrollToSection("home"), setActiveSection("home");
              }}
              className={
                activeSection === "home"
                  ? "active"
                  : "text-[#FD940A] duration-300 transition border-[#FD940A] border hover:text-white hover:bg-[#FD940A] font-bold py-2 rounded-lg flex justify-center"
              }
            >
              Home
            </div>
            <div
              onClick={() => {
                scrollToSection("experience"), setActiveSection("experience");
              }}
              className={
                activeSection === "experience"
                  ? "active"
                  : "text-[#FD940A] duration-300 transition border-[#FD940A] border hover:text-white hover:bg-[#FD940A] font-bold py-2 rounded-lg flex justify-center"
              }
            >
              About
            </div>
            <div
              onClick={() => {
                scrollToSection("projects"), setActiveSection("projects");
              }}
              className={
                activeSection === "projects"
                  ? "active"
                  : "text-[#FD940A] duration-300 transition border-[#FD940A] border hover:text-white hover:bg-[#FD940A] font-bold py-2 rounded-lg flex justify-center"
              }
            >
              Projects
            </div>
          </div>
          <div className="flex flex-col w-6/12 gap-5">
            <div
              onClick={() => {
                scrollToSection("knowlage"), setActiveSection("knowlage");
              }}
              className={
                activeSection === "knowlage"
                  ? "active"
                  : "text-[#FD940A] duration-300 transition border-[#FD940A] border hover:text-white hover:bg-[#FD940A] font-bold py-2 rounded-lg flex justify-center"
              }
            >
              Knowledge
            </div>
            <div
              onClick={() => {
                scrollToSection("connect"), setActiveSection("connect");
              }}
              className={
                activeSection === "connect"
                  ? "active"
                  : "text-[#FD940A] duration-300 transition border-[#FD940A] border hover:text-white hover:bg-[#FD940A] font-bold py-2 rounded-lg flex justify-center"
              }
            >
              Contact
            </div>
          </div>
        </div>
        {/* animation gif  */}
        <img className=" h-52 object-contain" src={ani} alt="" />

        <Footer />
      </div>
    </div>
  );
};

export default SlideMenu;
