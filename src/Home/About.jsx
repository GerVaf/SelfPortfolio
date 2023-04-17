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
          <div className=" flex justify-around gap-3  text-[10px] font-semibold ">
            <div className="bg-[#BCD1FF] py-3 px-3 rounded-sm">
              <h1 className="text-xl">
                {count && <CountUp start={0} end={1} duration={5} delay={1} />}+
              </h1>
              <h2>YEARS OF EXPERINCES</h2>
            </div>
            <div className="bg-[#FFBCBC] py-3 px-3 rounded-sm">
              <h1 className="text-xl">
                {count && <CountUp start={0} end={10} duration={5} delay={1} />}
                +
              </h1>
              <h2>PROJECT COMPLETED</h2>
            </div>
            <div className="bg-[#FFD9B6] py-3 px-3 rounded-sm">
              <h1 className="text-xl">
                {count && (
                  <CountUp start={0} end={100} duration={5} delay={1} />
                )}
                +
              </h1>
              <h2>HAPPY USERS</h2>
            </div>
          </div>
        </ScrollTrigger>

        <div className="text-white flex gap-10">
          <div className="flex flex-col gap-2 text-sm">
            <p>AGE</p>
            <p>BORN IN</p>
            <p>E-MAIL</p>
            <p>CALL</p>
          </div>
          <div className="flex flex-col gap-2  text-sm">
            <p>21</p>
            <p>Katha</p>
            <p>thantzinmin667@gmail.com</p>
            <p>+95 942 521 2523</p>
          </div>
        </div>

        <div className="text-white mb-5">
          <h2 className="text-2xl font-semibold ">
            <p>ThantZinMin</p>
            <ReactTyped
            strings={[
              "Web Developer",
              "Front-end",
              "Back-end"
            ]}
            typeSpeed={120}
            backSpeed={70}
              loop
              
            />
          </h2>
          <hr className=" w-20 border-red-500 border-b-2 mb-5" />
          <h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            delectus accusamus nulla ex, sit libero similique corrupti quaerat,
            rerum dolor distinctio maxime quo ipsam quos architecto sequi, odit
            aspernatur quas!
          </h1>
        </div>

        <div className=" flex flex-col gap-5">
          <div className="mb-3 text-white">
            <h3 className="text-2xl">-Experience</h3>
            <h1 className="text-lg ml-5">Everything About Me</h1>
          </div>

          {Data.map((card) => {
            return (
              <div
                key={card.id}
                className="bg-white rounded-md hover:bg-slate-100 p-3"
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
    </>
  );
};

export default About;
