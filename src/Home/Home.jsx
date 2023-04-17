import React from "react";

const Home = () => {
  return (
    <>
      <div className="text-white p-4 flex flex-col gap-5">
       <div className=" flex flex-col gap-2">
       <h2 className=" text-xl font-bold">Hi, I'm Thant Zin Min!</h2>
        <h1 className=" text-2xl font-semibold">Web Developer</h1>
        <p className="text-[15px]">
          I'm react based front end webveloper with
          <span className="text-[#FF4848]">1+ year</span> of experince
        </p>
       </div>

        {/* button */}
        <div className="flex mb-10 gap-4">
          <button className="rounded-md px-3 py-1 bg-[#EC2626] text-white">
            Download CV
          </button>
          <button className="rounded-md px-3 py-1 bg-[#EC2626] text-white">
            Hire Now
          </button>
        </div>

        
      </div>
    </>
  );
};

export default Home;
