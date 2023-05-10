import React from "react";
import { ProjectsDisplay } from "../assets/ProjectData";
import { AiFillGithub } from "../../node_modules/react-icons/ai";
import { BiLink } from "../../node_modules/react-icons/bi";
const Projects = () => {
  return (
    <>
      <div className="p-5 text-white">
        <h2 className="sm:text-4xl text-2xl sm:mb-2 ">-Projects</h2>
        <p className="sm:text-2xl text-lg sm:ml-10 ml-5">
          Recent Complete Projects
        </p>
      </div>
      <div className="p-5 sm:flex sm:flex-row sm:flex-wrap flex flex-col gap-5 ">
        {ProjectsDisplay.map((pj) => {
          return (
            <div className="sm:w-2/5 flex flex-col  bg-slate-100 sm:h-[455px] h-[330px]">
              <img className="rounded-t-sm object-cover object-top h-2/4" src={pj.img} alt="Album" />

              <div className="card-body py-3 px-3">
                <div className=" flex justify-center ">
                  <h2 className="card-title font-bold sm:text-xl text-[#EC2626]">
                    {pj.title}
                  </h2>
                </div>

                {/* include */}
                <div className="h-[50px] sm:h-[100px]"><div className=" flex gap-5 my-4">
                  {pj.language.map((lang) => {
                    return <img className="sm:w-16 sm:h-16 w-8 h-8" src={lang.img} alt="" />;
                  })}
                </div></div>

                <hr className="mb-2 border-gray-400" />
                {/* link  */}
                <div className="flex justify-around sm:text-3xl text-2xl text-black">
                  <div className="flex justify-center w-1/4 bg-gradient-to-r from-gray-700 to-zinc-800 hover:from-gray-600 hover:to-zinc-700   rounded-md text-white hover:transition p-2 ">
                    <a>
                      <AiFillGithub />
                    </a>
                  </div>
                  <div className="flex justify-center w-1/4 bg-gradient-to-r from-gray-700 to-zinc-800 hover:from-gray-600 hover:to-zinc-700   rounded-md text-white hover:transition p-2 ">
                    <a href={pj.link}>
                      <BiLink />
                    </a>
                  </div>
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
