import React from "react";
import { project } from "../../database/data";

const Infor = ({ ind }) => {
  return (
    <section className="flex flex-col justify-start items-start select-none h-full lg:px-20 px-10">
      <div className="flex flex-col justify-center items-center ">
        <div className="relative flex flex-col justify-center items-center w-full h-auto pt-10">
          <img
            src={project[ind].img}
            alt="Sample"
            className="w-full max-h-[90vh] h-auto"
          />
        </div>
        <div className="flex md:flex-row flex-col justify-start items-start w-full gap-10 lg:px-10 px-10 py-10">
          <div className="flex flex-col gap-4 sm:w-[70%] lg:w-[60%] w-full bg-[#efeeee] pb-7">
            <h1 className="w-full px-5 bg-[#40DDB6] py-4 text-center text-white">
              Project Details
            </h1>
            <div className="px-5 flex flex-col justify-start items-start">
              <h1 className="lg:text-xl font-bold md:text-lg text-base">
                Client :
              </h1>
              <p className="lg:text-lg md:text-base text-sm font-normal text-[#7D7D7D] border-b-2 border-b-[#7d7d7d] w-full pb-2">
                Katherine Coleman
              </p>
            </div>
            <div className="px-5 flex flex-col justify-start items-start">
              <h1 className="lg:text-xl font-bold md:text-lg text-base">
                Location :
              </h1>
              <p className="lg:text-lg md:text-base text-sm font-normal text-[#7D7D7D] border-b-2 border-b-[#7d7d7d] w-full pb-2">
                New York United States
              </p>
            </div>
            <div className="px-5 flex flex-col justify-start items-start">
              <h1 className="lg:text-xl font-bold md:text-lg text-base">
                Project Date :
              </h1>
              <p className="lg:text-lg md:text-base text-sm font-normal text-[#7D7D7D] border-b-2 border-b-[#7d7d7d] w-full pb-2">
                15 September ,2023
              </p>
            </div>
            <div className="px-5 flex flex-col justify-start items-start">
              <h1 className="lg:text-xl font-bold md:text-lg text-base">
                Website :
              </h1>
              <p className="lg:text-lg md:text-base text-sm font-normal text-[#7D7D7D]">
                http://whitecollar.com
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-7">
            <h1 className="lg:text-4xl font-bold md:text-2xl text-lg">
              Project Information
            </h1>
            <p className="lg:text-lg md:text-base text-sm font-normal">
              Distinctively re-engineer revolutionary meta service and premium
              architectures incubate intuitive opportunities and real-time
              potentialities. Appropriately communicates once one technology
              after plug-and-play networks.
            </p>
            <p className="lg:text-lg md:text-base text-sm font-normal">
              Quickly aggregates users and worldwides potentialities
              progressively plagiarize resource leveling e-commerce through
              resource leveling cores competencies dramatically mesh low risk
              high yield alignments before transparent e-tailers.
            </p>
            <ul className="list-disc flex flex-col justify-start items-start pl-10 gap-5">
              <li className="lg:text-lg md:text-base text-sm font-normal">
                the printing and typesetting industry.
              </li>
              <li className="lg:text-lg md:text-base text-sm font-normal">
                Lorem Ipsum has been the industry's standard{" "}
              </li>
              <li className="lg:text-lg md:text-base text-sm font-normal">
                It has survived not only five centuries.
              </li>
            </ul>
            <p className="lg:text-lg md:text-base text-sm font-normal">
              Compellingly embrace empowered e-business after user friendly
              intellectual capitals Interactively actualize front-end processes
              with effectives convergenced Synergistically deliver performanced
              based methods empowerment whereas distributed expertised
              efficiently enable enabled sources and cost effective products
              completely ethical communities.
            </p>
            <ul className="flex flex-col justify-start items-start gap-5 pl-5 pb-10">
              <li className="lg:text-lg md:text-base text-sm font-normal">
                01. the printing and typesetting industry.
              </li>
              <li className="lg:text-lg md:text-base text-sm font-normal">
                02. Lorem Ipsum has been the industry's standard
              </li>
              <li className="lg:text-lg md:text-base text-sm font-normal">
                03. It has survived not only five centuries.
              </li>
            </ul>
            <p className="lg:text-lg md:text-base text-sm font-normal">
              Compellingly embrace empowered e-business after user friendly
              intellectual capitals Interactively actualize front-end processes
              with effectives convergenced Synergistically deliver performanced
              based methods empowerment whereas distributed expertised
              efficiently enable enabled sources and cost effective products
              completely ethical communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infor;
