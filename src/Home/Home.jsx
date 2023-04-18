import React from "react";

const Home = () => {
  return (
    <>
      <div className="text-white sm:px-40 sm:py-20 p-4 flex flex-col gap-5 sm:gap-16">
        {/* intro */}
       <div className=" flex flex-col gap-2">
       <h2 className="sm:text-4xl text-xl font-bold">Hi, I'm Thant Zin Min!</h2>
        <h1 className="sm:text-6xl text-2xl font-semibold">Web Developer</h1>
        <p className="sm:text-[25px] text-[15px]">
          I'm react based front end webveloper with
          <span className="text-[#EC2626]"> 1+ year</span> of experince
        </p>
       </div>

        {/* button */}
        <div className="flex mb-10 gap-4">
          <button className="rounded-md sm:px-12 px-3 sm:py-4 py-1 bg-[#EC2626] sm:font-semibold sm:text-xl text-white">
            Download CV
          </button>
          <button className="rounded-md sm:px-12 px-3 sm:py-4 py-1 bg-[#EC2626] sm:font-semibold sm:text-xl text-white">
            Hire Now
          </button>
        </div>

        
      </div>
    </>
  );
};

export default Home;
