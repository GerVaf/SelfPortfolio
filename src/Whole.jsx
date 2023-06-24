import React, { useState } from "react";
import Footer from "./Head&Footer/Footer";
import About from "./Home/About";
import Home from "./Home/Home";
import Projects from "./Home/Projects";
import Testimonial from "./Home/Testimonial";
import Contact from "./Home/Contact";
// decoration
import { Link } from "react-scroll";
// animation
import SlideMenu from "./Head&Footer/SlideMenu";
const Whole = () => {

  return (
    <>
      <div className="sm:flex sm:h-[100vh]">
        <div className="w-3/12 hidden sm:block">
          <SlideMenu />
        </div>
          {/* component */}
        <div className="w-9/12 overflow-y-scroll scrollbar-thin scrollbar-thumb-red-600">
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

      <div className="block sm:hidden">
        <Footer />
      </div>
    </>
  );
};

export default Whole;
