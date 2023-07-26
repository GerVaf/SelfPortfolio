import React, { useState } from "react";
import profile from "../assets/img/profile.jpeg";
import Footer from "./Footer";
import ani from "../assets/img/slide_menu.gif";

const SlideMenu = ({ activeSection, setActiveSection, scrollToSection }) => {
  return (
    <div className="bg-white h-[100vh] overflow-hidden flex flex-col items-center justify-between rounded-sm">
      {/* profile          */}
      <img
        className=" w-[100%] object-top h-[30vh] rounded-sm object-cover"
        src={profile}
        alt=""
      />

      {/* Slide menu and footer and animation  */}
      <div className="flex flex-col w-[100%] justify-around h-[70vh] px-5">
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
        <img
          className=" hidden md:block h-44 object-contain"
          src={ani}
          alt=""
        />
      </div>
      <Footer />
    </div>
  );
};

export default SlideMenu;
