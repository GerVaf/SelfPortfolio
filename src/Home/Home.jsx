import React from "react";
import animation from "../assets/img/genius.gif"
import animation2 from "../assets/img/animation11.gif"
import animation3 from '../assets/img/animation22.gif'
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
            <button className="rounded-md sm:px-12 px-3 sm:py-4 py-1 bg-[#EC2626] sm:font-semibold sm:text-xl text-white">
              Download CV
            </button>
            <button className="rounded-md sm:px-12 px-3 sm:py-4 py-1 bg-[#EC2626] sm:font-semibold sm:text-xl text-white">
              Hire Now
            </button>
          </div>
          <img className="sm:hidden" src={animation} alt="" />
          <img src={animation2} className='sm:hidden absolute top-0 z-[-1] w-[100%]' alt="" />
          <div className=" relative sm:hidden items-center flex justify-center">
          <img src={animation3} 
          className='sm:hidden absolute bottom-[-50px] w-36'
          alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
