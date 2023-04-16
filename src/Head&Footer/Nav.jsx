import React from "react";
import profile from "../assets/img/profile.jpg";
const Nav = () => {
  return (
    <>
      <div className=" sm:h-3/5 py-3 sm:py-0  sm:w-1/5 bg-white ">
        <div className=" sm:p-10 items-center sm:pt-24 gap-4 sm:flex sm:flex-col flex justify-around">
          <img
            className="sm:mb-5 w-16 h-16 sm:w-40 sm:h-40 object-cover rounded-[50%]"
            src={profile}
            alt=""
          />
          <h2 className=" hidden sm:block font-bold sm:text-3xl">Thant Zin Min</h2>
          <div className="sm:flex sm:items-center sm:flex-col flex text-[10px] font-bold sm:text-[20px] gap-1 sm:gap-5">
            <p>HOME</p>
            <p>ABOUT</p>
            <p>PROJECTS</p>
            <p>WORK</p>
            <p>BLOGS</p>
            <p>CONTACT</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
