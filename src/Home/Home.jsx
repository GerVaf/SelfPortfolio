import React from "react";
import { Link } from "react-scroll";
import Cv from '../assets/img/Cv.pdf'
const Home = () => {
  return (
    <>
      <div className="text-white sm:px-40 sm:py-20 p-4 flex flex-col gap-5 sm:gap-16">
        {/* intro */}
        <div className=" flex flex-col gap-2">
          <h2 className="sm:text-4xl text-xl font-bold">
            Hi, I'm Thant Zin Min!
          </h2>
          <h1 className="sm:text-6xl text-2xl font-semibold">Web Developer</h1>
          <p className="sm:text-[25px] text-[15px]">
            I'm react based front end webveloper with
            <span className="text-[#EC2626]"> 1+ year</span> of experince
          </p>
        </div>

        {/* button */}
        <div className="mb-5 relative">
          <div className="flex gap-4">
            <a href={Cv} download='ThantZinMin_Cv'>
              <button className="rounded-md sm:px-12 px-3 sm:py-4 py-1 bg-[#EC2626] sm:font-semibold sm:text-xl text-white">
                Download CV
              </button>
            </a>
            <Link to="connect" smooth={true} duration={400}>
              <button className="rounded-md sm:px-12 px-3 sm:py-4 py-1 bg-[#EC2626] sm:font-semibold sm:text-xl text-white">
                Hire Now
              </button>
            </Link>
          </div>
          <div className=" relative sm:hidden items-center flex justify-center"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
