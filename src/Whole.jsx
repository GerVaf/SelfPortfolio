import React, { useState } from "react";
import Footer from "./Head&Footer/Footer";
import About from "./Home/About";
import Home from "./Home/Home";
import Projects from "./Home/Projects";
import Testimonial from "./Home/Testimonial";
import Contact from "./Home/Contact";
// decoration
import animation from "./assets/img/genius.gif";
import profile from "./assets/img/profile.jpg";
import { Link } from "react-scroll";
// animation
import ScrollReveal from "scrollreveal";
const Whole = () => {
  const [show, setShow] = useState(false);
  ScrollReveal({ distance: "100px" });
  ScrollReveal().reveal("#home", {
    delay: 300,
    reset: true,
  });
  ScrollReveal().reveal("#experience", {
    delay: 300,
    reset: true,
  });
  ScrollReveal().reveal("#projects", {
    delay: 300,
    reset: true,
  });
  ScrollReveal().reveal("#knowlage", {
    delay: 300,
    reset: true,
  });
  ScrollReveal().reveal("#connect", {
    delay: 300,
    reset: true,
  });

  console.log(show);
  return (
    <>
      <div className="sm:relative w-[100%] overflow-hidden">
        <div className=" hidden sm:block sm:fixed sm:left-0 sm:top-0 sm:w-1/5">
          <div className=" sm:h-[75vh] py-1 sm:py-0 bg-white ">
            {/* navbar for desktop */}
            <div className="  sm:p-10 items-center sm:pt-24 gap-4 sm:flex sm:flex-col flex justify-around">
              <img
                className="sm:mb-5 w-12 h-12 sm:w-40 sm:h-40 object-cover rounded-[20%]"
                src={profile}
                alt=""
              />

              {/* desktop */}
              <h2 className=" hidden sm:block font-bold sm:text-3xl">
                Thant Zin Min
              </h2>
              <div className="sm:flex sm:items-center sm:flex-col hidden text-[10px] font-bold sm:text-[20px] gap-1 sm:gap-5 cursor-pointer">
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
          </div>
          <div className="hidden sm:block">
            <Footer />
          </div>
        </div>

        <img
          className="hidden sm:block sm:right-0 sm:z-[1] sm:absolute"
          src={animation}
          alt=""
        />

        <div className="sm:flex sm:z-10 sm:justify-end">
          <div className=" sm:w-4/5">
            {/* menubar */}
            <div className="flex justify-end sm:hidden">
              <label className="btn btn-circle swap swap-rotate">
                <input
                  onClick={() => setShow(!show)}
                  className="hidden"
                  type="checkbox"
                />

                <svg
                  className="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                <svg
                  className="swap-on fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </label>
            </div>
            {/* mobile */}
            <div
              className={` ${
                show ? "" : "hidden"
              } absolute right-0 flex flex-col gap-2 p-5 z-20 rounded-md text-white transition-all mr-4 menucate`}
            >
              <Link
                className="font-bold hover:text-red-600"
                to="home"
                smooth={true}
                duration={400}
              >
                HOME
              </Link>
              <Link
                className="font-bold hover:text-red-600"
                to="experience"
                smooth={true}
                duration={400}
              >
                EXPERIENCE
              </Link>
              <Link
                className="font-bold hover:text-red-600"
                to="projects"
                smooth={true}
                duration={400}
              >
                PROJECTS
              </Link>
              <Link
                className="font-bold hover:text-red-600"
                to="knowlage"
                smooth={true}
                duration={400}
              >
                KNOWLAGE
              </Link>
              <Link
                className="font-bold hover:text-red-600"
                to="connect"
                smooth={true}
                duration={400}
              >
                CONNECT
              </Link>
            </div>

            {/* component */}
            <div id="home">
              <Home />
            </div>
            <div id="experience">
              <About />
            </div>
            <div id="projects">
              <Projects />
            </div>
            <div id="knowlage">
              <Testimonial />
            </div>
            <div id="connect">
              <Contact />
            </div>
          </div>
        </div>
      </div>

      <div className="block sm:hidden">
        <Footer />
      </div>
    </>
  );
};

export default Whole;
