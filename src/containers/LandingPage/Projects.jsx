import React from "react";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";

const Projects = () => {
  return (
    <section className="flex flex-col justify-start items-start select-none h-full">
      <div className="flex flex-col justify-center items-center gap-10 py-10 w-full ">
        <div className="flex sm:flex-row flex-col md:justify-between sm:justify-center items-center w-full gap-5 lg:px-20 px-10">
          <div className="flex flex-col justify-start items-start gap-5">
            <p className="lg:text-lg md:text-base text-sm font-normal">
              Our Project
            </p>
            <div className="flex flex-col justify-start items-start">
              <h1 className="lg:text-4xl font-bold md:text-2xl text-lg">
                You can check our projects
              </h1>
              <h1 className="lg:text-4xl font-bold md:text-2xl text-lg">
                as inspirations.
              </h1>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <button className="capitalize text-lg text-[#fff] font-semibold bg-[#40DDB6] hover:bg-[#379c84] transition-all duration-300 ease-in-out px-8 py-4">
              more work
            </button>
          </div>
        </div>
        <div className="px-5 w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-3 gap-y-5">
          <div>
            <img src={project1} alt="" />
          </div>
          <div>
            <img src={project2} alt="" />
          </div>
          <div>
            <img src={project3} alt="" />
          </div>
          <div>
            <img src={project4} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
