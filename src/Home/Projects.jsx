import React from "react";
import { ProjectsDisplay } from "../assets/ProjectData";
import { AiFillGithub } from "../../node_modules/react-icons/ai";
import { BiLink } from "../../node_modules/react-icons/bi";
const Projects = () => {
  return (
    <>
      <div className="p-5 ">
        <h2 className="sm:text-4xl text-2xl sm:mb-2 text-[#FD940A] font-bold ">-Projects</h2>
        <p className="sm:text-2xl text-lg sm:ml-10 ml-5">
          Recent Complete Projects
        </p>
      </div>
      <div className="p-5 sm:justify-around sm:flex sm:flex-row sm:flex-wrap flex flex-col gap-5 ">
        {ProjectsDisplay.map((pj) => {
          return (
            <div className="sm:w-4/5 flex flex-col rounded-lg  bg-slate-100 sm:h-[700px] h-[330px] shadow-lg">
              <img
                className="rounded-t-sm object-cover object-top h-2/4"
                src={pj.img}
                alt="Album"
              />

              <div className="card-body flex flex-col justify-around py-3 px-3">
                <div className=" flex justify-center ">
                  <h2 className="card-title font-bold sm:text-xl text-[#FD940A]">
                    {pj.title}
                  </h2>
                </div>

                {/* include */}
                <div className="h-[50px] sm:h-[100px]">
                  <div className=" flex gap-5 items-center h-full justify-around">
                    {pj.language.map((lang) => {
                      return (
                        <img
                          className="sm:w-16 sm:h-16 w-8 h-8"
                          src={lang.img}
                          alt=""
                        />
                      );
                    })}
                  </div>
                </div>

                <hr className="mb-2 border-gray-400" />
                {/* link  */}
                <div className="flex justify-around sm:text-3xl text-2xl text-black">
                  <a className="flex justify-center w-1/4 bg-gradient-to-r  from-[#FD940A] to-orange-500 hover:from-[#fdc40a] hover:to-orange-400  rounded-md text-white hover:transition p-2 ">
                    <AiFillGithub />
                  </a>
                  <a
                    href={pj.link}
                    className="flex justify-center w-1/4  bg-gradient-to-r from-[#FD940A] to-orange-500 hover:from-[#fdc40a] hover:to-orange-400  rounded-md text-white hover:transition p-2 "
                  >
                    <BiLink />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
