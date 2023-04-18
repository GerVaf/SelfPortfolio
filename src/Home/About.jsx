import React from "react";
import { useState } from "react";
import CountUp from "react-countup";
import ReactTyped from "react-typed";
import ScrollTrigger from "react-scroll-trigger";
import { Data } from "../assets/PresentData";
const About = () => {
  const [count, setCount] = useState(false);
  return (
    <>
      <div className="p-5 flex flex-col gap-5">
        <ScrollTrigger
          onEnter={() => setCount(true)}
          onExit={() => setCount(false)}
        >
          <div className=" flex justify-around gap-3 sm:gap-10 sm:justify-center sm:text-[23px] text-[10px] font-semibold sm:mb-24 ">
            <div className="bg-[#BCD1FF] sm:py-7 sm:px-10 py-3 px-3 rounded-sm sm:flex sm:flex-col sm:items-center">
              <h1 className="sm:text-3xl text-xl">
                {count && <CountUp start={0} end={1} duration={5} delay={1} />}+
              </h1>
              <h2>YEARS OF EXPERINCES</h2>
            </div>
            <div className="bg-[#FFBCBC] sm:py-7 sm:px-10 py-3 px-3 rounded-sm sm:flex sm:flex-col sm:items-center">
              <h1 className="sm:text-3xl text-xl">
                {count && <CountUp start={0} end={10} duration={5} delay={1} />}
                +
              </h1>
              <h2>PROJECT COMPLETED</h2>
            </div>
            <div className="bg-[#FFD9B6] sm:py-7 sm:px-10 py-3 px-3 rounded-sm sm:flex sm:flex-col sm:items-center">
              <h1 className="sm:text-3xl text-xl">
                {count && (
                  <CountUp start={0} end={100} duration={5} delay={1} />
                )}
                +
              </h1>
              <h2>HAPPY USERS</h2>
            </div>
          </div>
        </ScrollTrigger>

        {/* intro-loca  */}
        <div className=" sm:flex sm:gap-10 sm:items-center sm:justify-around">
          {/* intro */}

          <div className="sm:w-3/5 text-white mb-5">
            <h2 className="sm:text-3xl text-2xl font-semibold ">
              <p>-ThantZinMin</p>
              <ReactTyped
                strings={["Web Developer", "Front-end", "Back-end"]}
                typeSpeed={120}
                backSpeed={70}
                loop
              />
            </h2>
            <hr className="sm:w-36 w-20 border-red-500 border-b-2 mb-5" />
            <h1>
            Welcome to my portfolio.I'll bring unique skills and expertise, working together with your company to create outstanding results. From design to development, I'm dedicated to delivering high-quality work that meets your clients' needs. Get to know about me below and learn more about the projects!
            </h1>
          </div>

          {/* location */}
          <div className="sm:2/5 text-white flex gap-10">
            <div className="flex flex-col sm:gap-5 gap-2 text-sm sm:text-xl">
              <p>AGE</p>
              <p>BORN IN</p>
              <p>E-MAIL</p>
              <p>CALL</p>
            </div>
            <div className="flex flex-col sm:gap-5 gap-2  text-sm sm:text-xl">
              <p>21</p>
              <p>Katha</p>
              <p>thantzinmin667@gmail.com</p>
              <p>+95 942 521 2523</p>
            </div>
          </div>
        </div>

          {/* experince */}
        <div className=" flex flex-col gap-5">
          <div className="mb-3 text-white">
            <h3 className="sm:text-4xl text-2xl sm:mb-2 ">-Experience</h3>
            <h1 className="sm:text-2xl text-lg sm:ml-10 ml-5">Everything About Me</h1>
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
                  <h2>{card.title}</h2>
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
