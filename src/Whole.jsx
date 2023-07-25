import React, { useState, useEffect } from "react";
import Footer from "./Head&Footer/Footer";
import About from "./Home/About";
import Home from "./Home/Home";
import Projects from "./Home/Projects";
import Testimonial from "./Home/Testimonial";
import Contact from "./Home/Contact";
import SlideMenu from "./Head&Footer/SlideMenu";
import { IoIosArrowDown, IoIosArrowUp } from "../node_modules/react-icons/io";

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
  // for mobile menu
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="sm:flex sm:h-[100vh] relative">
        {/* for mobile menu  */}
        <div className={`sm:hidden flex flex-col gap-2 fixed ${show?'translate-y-[610px]':'translate-y-[440px]'} z-20 right-5 items-center trnasition duration-300`}>
          <IoIosArrowUp onClick={()=>setShow(!show)} className={`${show?'mb-10':'rotate-180 mb-0'} text-lg bg-[#FD940A] transition duration-300 text-white w-11 rounded-md`} />
          <div
            onClick={() => {
              scrollToSection("home"), setActiveSection("home");
            }}
            className={
              activeSection === "home"
                ? "active"
                : "active font-bold py-2 rounded-lg flex justify-center w-20 text-[10px]"
            }
          >
            Home
          </div>
          <div
            onClick={() => {
              scrollToSection("experience"), setActiveSection("experience");
            }}
            className={
              activeSection === "experience"
                ? "active"
                : "active font-bold py-2 rounded-lg flex justify-center w-20 text-[10px]"
            }
          >
            About
          </div>
          <div
            onClick={() => {
              scrollToSection("projects"), setActiveSection("projects");
            }}
            className={
              activeSection === "projects"
                ? "active"
                : "active font-bold py-2 rounded-lg flex justify-center w-20 text-[10px]"
            }
          >
            Projects
          </div>
          <div
            onClick={() => {
              scrollToSection("knowlage"), setActiveSection("knowlage");
            }}
            className={
              activeSection === "knowlage"
                ? "active"
                : "active font-bold py-2 rounded-lg flex justify-center w-20 text-[10px]"
            }
          >
            Knowledge
          </div>
          <div
            onClick={() => {
              scrollToSection("connect"), setActiveSection("connect");
            }}
            className={
              activeSection === "connect"
                ? "active"
                : "active font-bold py-2 rounded-lg flex justify-center w-20 text-[10px]"
            }
          >
            Contact
          </div>
        </div>
        {/* for desktop menu  */}
        <div className="sm:w-3/12 hidden sm:block">
          <SlideMenu
            setActiveSection={setActiveSection}
            scrollToSection={scrollToSection}
            activeSection={activeSection}
          />
        </div>
        <div className="sm:w-9/12 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#FD940A]">
          <div className="" id="home">
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
