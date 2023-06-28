import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Cv from "../assets/img/Cv.pdf";
import { motion } from "../../node_modules/framer-motion";

const Home = () => {
  // for text animation
  const textGroups = [
    "I'm trying to Full-Stack Developer",
    "Other frame-work for Front-end",
    "React , RTK , Tailwind , Bootstrap ",
    "NodeJs , MongoDB , knowlage of PHP",
  ];

  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroupIndex((prevIndex) =>
        prevIndex === textGroups.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Delay between iterations in milliseconds

    return () => clearInterval(interval);
  }, [textGroups.length]);
  return (
    <>
      <div className="flex sm:flex-row items-center flex-col">
        {/* left side  */}
        <div className="sm:w-8/12 sm:px-40 sm:py-20 p-4 flex flex-col gap-5 sm:gap-16">
          {/* intro */}
          <div className=" flex flex-col gap-2">
            <h2 className="sm:text-4xl text-xl font-bold">
              Hi, I'm Thant Zin Min!
            </h2>
            <h1 className="sm:text-6xl text-2xl font-semibold">
              Web Developer
            </h1>
            <p className="sm:text-[25px] text-[15px]">
              I'm react based front end webveloper with
              <span className="text-[#FD940A] font-bold"> 1+ year</span> of
              experince
            </p>
          </div>

          {/* button */}
          <div className="mb-5 relative">
            <div className="flex gap-4">
              <a href={Cv} download="ThantZinMin_Cv">
                <button className="rounded-md sm:px-12 px-3 sm:py-4 py-1 bg-gradient-to-r from-[#FD940A] to-orange-500 sm:font-semibold sm:text-xl text-white">
                  Download CV
                </button>
              </a>
              <Link to="connect" smooth={true} duration={400}>
                <button className="rounded-md sm:px-12 px-3 sm:py-4 py-1 bg-gradient-to-r from-[#FD940A] to-orange-500 sm:font-semibold sm:text-xl text-white">
                  Hire Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* right side  */}
        <div className="sm:w-4/12">
          {/* for desktop  */}
          <div className="sm:flex items-start gap-10 hidden">
            <div className=" rounded-lg h-[250px] w-2 border-opacity-20 border border-orange-500 relative overflow-hidden ">
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: 250 }}
                className="bg-[#FD940A] sm:h-[250px] h-[100px] w-[100%]"
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              ></motion.div>
            </div>
            <div className=" text-[#FD940A] text-sm sm:text-2xl font-bold ">
              {textGroups.map((text, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={
                    index === currentGroupIndex
                      ? { opacity: 1 }
                      : { opacity: 0, y: "-20px" }
                  }
                  exit={{ opacity: 0, y: "-20px" }}
                  transition={{ duration: 0.2 }}
                >
                  <p>{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
          {/* for phone  */}
          <div className="flex items-start gap-10 sm:hidden">
            <div className="h-[105px] rounded-lg  sm:h-[250px] w-2 border-opacity-20 border border-orange-500 relative  overflow-hidden">
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: 105 }}
                className="bg-[#FD940A] sm:h-[250px] h-[100px] w-[100%]"
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              ></motion.div>
            </div>
            <div className=" text-[#FD940A] text-sm sm:text-2xl font-bold ">
              {textGroups.map((text, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={
                    index === currentGroupIndex
                      ? { opacity: 1 }
                      : { opacity: 0, y: "-20px" }
                  }
                  exit={{ opacity: 0, y: "-20px" }}
                  transition={{ duration: 0.2 }}
                >
                  <p>{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
