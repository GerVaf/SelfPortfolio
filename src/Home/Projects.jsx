import React from "react";
import { ProjectsDisplay } from "../assets/ProjectData";
import { AiFillGithub } from "../../node_modules/react-icons/ai";
import { BiLink } from "../../node_modules/react-icons/bi";
const Projects = () => {
  return (
    <>
    <div className="p-5 text-white">
      <h2 className="sm:text-4xl text-2xl sm:mb-2 ">-Projects</h2>
      <p className="sm:text-2xl text-lg sm:ml-10 ml-5">Recent Complete Projects</p>
    </div>
      <div className="p-5 sm:flex sm:flex-row sm:flex-wrap flex flex-col gap-5 ">
        {ProjectsDisplay.map((pj) => {
          return (
            <div className="sm:w-2/5 card lg:card-side rounded-sm shadow-xl bg-slate-100 sm:h-[455px] h-[330px]">
              <figure>
                <img className="rounded-t-sm" src={pj.img} alt="Album" />
              </figure>

              <div className="card-body py-3 px-3">
                <div className=" flex justify-center ">
                  <h2 className="card-title font-bold sm:text-xl text-[#EC2626]">
                    {pj.title}
                  </h2>
                </div>

                {/* include */}
                <div className=" flex gap-5 my-4">
                  {pj.language.map((lang) => {
                    return <img className=" w-8" src={lang.img} alt="" />;
                  })}
                </div>

                <hr className="mb-2 border-gray-400" />
                {/* link  */}
                <div className="flex justify-around sm:text-3xl text-2xl text-black">
                  <div className="flex justify-center w-1/4 hover:border-b bg-slate-300 hover:bg-slate-300 hover:border-black hover:transition p-2 ">
                    <a>
                      <AiFillGithub/>
                    </a>
                  </div>
                  <div className="flex justify-center w-1/4 hover:border-b bg-slate-300 hover:bg-slate-300 hover:border-black hover:transition p-2 ">
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
