import React, { useState } from "react";
import Footer from "./Head&Footer/Footer";
import Nav from "./Head&Footer/Nav";
import About from "./Home/About";
import Home from "./Home/Home";
import Projects from "./Home/Projects";
import Testimonial from "./Home/Testimonial";
import Blogs from "./Home/Blogs";
import Contact from "./Home/Contact";
// decoration
import animation from "./assets/img/genius.gif";
const Whole = () => {
  const [show,setShow] = useState(false)
  
  console.log(show)
  return (
    <>
      <div className="sm:relative w-[100%]">
        <div className=" hidden sm:block sm:fixed sm:left-0 sm:top-0 sm:w-1/5">
          <Nav />
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
                <input onClick={()=>setShow(!show)} className="hidden" type="checkbox" />

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
            
            <div className={` ${show? "" : "hidden"} absolute right-0 flex flex-col gap-2 p-5 z-20 rounded-md text-black transition-all mr-4 menucate`}>
            <p>HOME</p>
            <p>EXPERIENCE</p>
            <p>PROJECTS</p>
            <p>CONNECT</p>
            </div>

            <Home />
            <About />
            <Projects />
            <Testimonial />
            <Blogs />
            <Contact />
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
