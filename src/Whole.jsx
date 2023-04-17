import React from "react";
import Footer from "./Head&Footer/Footer";
import Nav from "./Head&Footer/Nav";
import About from "./Home/About";
import Home from "./Home/Home";
import Projects from "./Home/Projects";
import Testimonial from "./Home/Testimonial"

const Whole = () => {
  return (
    <>
      <div className="sm:flex">
        <div className=" sm:w-1/5">
          <Nav />
          <div className="hidden sm:block">
            <Footer />
          </div>
        </div>

        <div className=" sm:w-4/5">
          <Home />
          <About />
          <Projects/>
          <Testimonial/>
        </div>
      </div>

      <div className="block sm:hidden">
        <Footer />
      </div>
    </>
  );
};

export default Whole;
