import React, { useState, useEffect } from "react";
import Footer from "./Head&Footer/Footer";
import About from "./Home/About";
import Home from "./Home/Home";
import Projects from "./Home/Projects";
import Testimonial from "./Home/Testimonial";
import Contact from "./Home/Contact";
import SlideMenu from "./Head&Footer/SlideMenu";

const Whole = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 0 && scrollY < window.innerHeight) {
      } else if (
        scrollY >= window.innerHeight &&
        scrollY < window.innerHeight * 2
      ) {
      } else if (
        scrollY >= window.innerHeight * 2 &&
        scrollY < window.innerHeight * 3
      ) {
      } else if (
        scrollY >= window.innerHeight * 3 &&
        scrollY < window.innerHeight * 4
      ) {
      } else if (scrollY >= window.innerHeight * 4) {
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="sm:flex sm:h-[100vh]">
        <div className="sm:w-3/12 hidden sm:block">
          <SlideMenu
            setActiveSection={setActiveSection}
            scrollToSection={scrollToSection}
            activeSection={activeSection}
          />
        </div>
        <div className="sm:w-9/12 h-[calc(100vh - 4rem)] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#FD940A]">
          <div className="h-[100vh]" id="home">
            <Home
              setActiveSection={setActiveSection}
              scrollToSection={scrollToSection}
            />
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
