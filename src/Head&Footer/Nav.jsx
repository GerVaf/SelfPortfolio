import React from "react";
import profile from "../assets/img/profile.jpg";
const Nav = () => {
  return (
    <>
      <div className=" sm:h-[75vh] py-1 sm:py-0 bg-white ">
        <div className="  sm:p-10 items-center sm:pt-24 gap-4 sm:flex sm:flex-col flex justify-around">
          <img
            className="sm:mb-5 w-12 h-12 sm:w-40 sm:h-40 object-cover rounded-[50%]"
            src={profile}
            alt=""
          />
          
          {/* desktop */}
          <h2 className=" hidden sm:block font-bold sm:text-3xl">Thant Zin Min</h2>
          <div className="sm:flex sm:items-center sm:flex-col hidden text-[10px] font-bold sm:text-[20px] gap-1 sm:gap-5">
            <p>HOME</p>
            <p>EXPERIENCE</p>
            <p>PROJECTS</p>
            <p>KNOWLAGE</p>
            <p>CONNECT</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
