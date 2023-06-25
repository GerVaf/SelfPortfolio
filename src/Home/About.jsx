import React from "react";
import { useState } from "react";
import ReactTyped from "react-typed";
import { Data } from "../assets/PresentData";
import animation4 from "../assets/img/animation4.gif";
const About = () => {
  return (
    <>
      <div className="p-5 flex flex-col gap-5">
        

        {/* intro-ani  */}
        <div className=" sm:flex sm:gap-10 sm:items-center sm:justify-around">
          {/* intro */}

          <div className="sm:w-4/5  mb-5">
            <h2 className="sm:text-3xl text-2xl font-semibold ">
              <p>-ThantZinMin</p>
              <ReactTyped
                strings={["Web Developer", "Front-end", "Back-end"]}
                typeSpeed={120}
                backSpeed={70}
                loop
              />
            </h2>
            <hr className="sm:w-36 w-20 border-[#FD940A] border-b-2 mb-5" />
            <h1>
              Welcome to my portfolio.I'll bring unique skills and expertise,
              working together with your company to create outstanding results.
              From design to development, I'm dedicated to delivering
              high-quality work that meets your clients' needs. Get to know
              about me below and learn more about the projects!
            </h1>
          </div>

          {/* animation */}
          <img src={animation4} className="sm:w-1/5 sm:" alt="" />
        </div>

        {/* experince */}
        <div className=" flex flex-col gap-5">
          <div className="mb-3 ">
            <h3 className="sm:text-4xl text-2xl sm:mb-2 ">-Experience</h3>
            <h1 className="sm:text-2xl text-lg sm:ml-10 ml-5">
              Everything About Me
            </h1>
          </div>

          <div className="sm:flex flex flex-col sm:flex-row sm:flex-wrap gap-10">
            {Data.map((card) => {
              return (
                <div
                  key={card.id}
                  className="sm:w-72 bg-white rounded-md hover:bg-slate-100 p-3"
                >
                  <h4>{card.date}Present</h4>
                  <div className=" p-3">
                    <h2 className="font-bold text-[#FD940A]">{card.title}</h2>
                    <p>{card.cate}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
