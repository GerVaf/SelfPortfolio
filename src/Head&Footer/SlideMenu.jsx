import React from "react";
import { Link } from "react-scroll";
import profile from "../assets/img/profile.jpg";
import Footer from "./Footer";
import ani from "../assets/img/slide_menu1.gif";
// Import ParticleNetworkAnimation component correctly
import ParticleNetworkAnimation from '../Home/Particle';

const SlideMenu = () => {
  return (
    <div className="bg-white h-[100vh] flex flex-col items-center justify-end relative">
      {/* back ground animation  */}
      <div className="w-[100%] bg-red-400 z-10 h-[170px] top-0 rounded-b-md absolute">
        

        <img
          className="mt-24 ml-16 z-20 w-40 h-40 rounded-xl object-cover"
          src={profile}
          alt=""
        />
      </div>

      {/* Slide menu and footer and animation  */}
      <div className="flex flex-col justify-between h-[70vh]">
        {/* menu  */}
        <div className="flex font-bold justify-around items-center cursor-pointer gap-5 text-xl">
          <div className="flex flex-col gap-5">
            <img className="w-60 h-44 object-cover" src={ani} alt="" />
          </div>
          {/* animation gif  */}
          <div className="flex flex-col gap-5">
            <Link
              className="hover:text-red-600 duration-200 transition"
              to="home"
              smooth={true}
              duration={500}
            >
              HOME
            </Link>
            <Link
              className="hover:text-red-600 duration-200 transition"
              to="experience"
              smooth={true}
              duration={500}
            >
              EXPERIENCE
            </Link>
            <Link
              className="hover:text-red-600 duration-200 transition"
              to="projects"
              smooth={true}
              duration={500}
            >
              PROJECTS
            </Link>
            <Link
              className="hover:text-red-600 duration-200 transition"
              to="knowlage"
              smooth={true}
              duration={500}
            >
              KNOWLAGE
            </Link>
            <Link
              className="hover:text-red-600 duration-200 transition"
              to="connect"
              smooth={true}
              duration={500}
            >
              CONNECT
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default SlideMenu;
