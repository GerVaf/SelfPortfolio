import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "../../node_modules/react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="sm:justify-between rounded-t-sm py-5 sm:pt-10 flex flex-col items-center gap-5 bg-white">
        <div className="sm:text-2xl text-2xl flex gap-10">
          <p className=" w-16 h-10 flex justify-center items-center rounded-full border border-slate-700 hover:border-red-500 hover:text-red-500 duration-500 text-slate-700 transition cursor-pointer">
            <FaFacebook />
          </p>
          <p className=" w-16 h-10 flex justify-center items-center rounded-full border border-slate-700 hover:border-red-500 hover:text-red-500 duration-500 text-slate-700 transition cursor-pointer">
            <FaInstagram />
          </p>
          <p className=" w-16 h-10 flex justify-center items-center rounded-full border border-slate-700 hover:border-red-500 hover:text-red-500 duration-500 text-slate-700 transition cursor-pointer">
            <FaGithub />
          </p>
        </div>
        <div>
          <p className=" font-bold text-center">
            Copyright © {new Date().getFullYear()} - All right reserved by
            ThantZinMin
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
