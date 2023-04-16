import React from "react";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const About = () => {
  const [count, setCount] = useState(false);
  return (
    <>
      <div>
        <ScrollTrigger
          onEnter={() => setCount(true)}
          onExit={() => setCount(false)}
        >
          <div className=" flex justify-around gap-3 p-5 text-[10px] font-semibold ">
            <div className="bg-[#BCD1FF] py-3 px-3 rounded-sm">
              <h1 className="text-xl">
                {count && (
                  <CountUp start={0} end={1} duration={5} delay={1} />
                )}
                +
              </h1>
              <h2>YEARS OF EXPERINCES</h2>
            </div>
            <div className="bg-[#FFBCBC] py-3 px-3 rounded-sm">
              <h1 className="text-xl">
                {count && (
                  <CountUp start={0} end={10} duration={5} delay={1} />
                )}
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
      </div>
    </>
  );
};

export default About;
