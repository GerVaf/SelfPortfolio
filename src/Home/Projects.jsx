import React from "react";
import { ProjectsDisplay } from "../assets/ProjectData";
import {AiFillGithub,} from "../../node_modules/react-icons/ai"
import {BiLink} from "../../node_modules/react-icons/bi"
const Projects = () => {
  return (
    <>
      <div className="p-5 flex flex-col gap-5 ">
        {ProjectsDisplay.map((pj) => {
          return (
            <div className="card lg:card-side rounded-sm bg-base-100 shadow-xl bg-slate-100">
              <figure>
                <img className=" rounded-t-sm" src={pj.img} alt="Album" />
              </figure>

              <div className="card-body py-3 px-3">
                <div className=" flex justify-center ">
                  <h2 className="card-title font-bold text-[#FF4848]">
                    {pj.title}
                  </h2>
                </div>
                <div className="flex gap-5 my-4">
                  {pj.language.map((lang) => {
                    return <img className=" w-8" src={lang.img} alt="" />;
                  })}
                </div>
                <div className="flex text-2xl">
                  <div className="flex justify-center w-1/2 hover:border-b hover:bg-slate-200 hover:border-[#FF4848] hover:transition p-2 ">
                  <a >
                  <AiFillGithub/>
                  </a>
                  </div>
                  <div  className="flex justify-center w-1/2 hover:border-b hover:bg-slate-200 hover:border-[#FF4848] hover:transition p-2 ">
                  <a href={pj.link}>
                  <BiLink/>
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
