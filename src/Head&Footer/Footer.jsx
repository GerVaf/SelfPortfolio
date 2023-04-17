import React from "react";
import {FaFacebook,FaInstagram,FaGithub} from "../../node_modules/react-icons/fa"
const Footer = () => {
  return (
    <>
      <div className=" sm:pt-10 flex flex-col items-center gap-5 bg-white">
        <div className="sm:text-5xl text-2xl flex gap-10">
          <FaFacebook/>
          <FaInstagram/>
          <FaGithub/>
        </div>
        <div>
        <p className=" sm:pt-20 sm:mb-16 font-bold text-center">
          Copyright © {new Date().getFullYear()} - All right reserved by ThantZinMin
        </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
