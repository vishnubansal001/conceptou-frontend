import React from "react";
import { project } from "../../database/data";
import { useNavigate } from "react-router-dom";

const Project = ({ single }) => {
  const navigate = useNavigate();
  const pro1 = single ? project.slice(0, 3) : project;
  return (
    <section className="flex flex-col justify-start items-start select-none h-full">
      <div className="flex flex-col justify-center items-center gap-10 py-10 w-full lg:px-20 px-10">
        {!single && (
          <div className="flex flex-col justify-center items-center gap-2 pb-6">
            <p className="md:text-base text-sm font-normal">Latest Projects</p>
            <h1 className="lg:text-5xl font-bold md:text-3xl sm:text-xl text-lg">
              Discover our latest client projects
            </h1>
            <p className="md:text-base text-sm font-normal md:w-[70%] text-center pt-4">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews.Iterative approaches to corporate strategy foster
              collaborative thinking to further the overal.
            </p>
          </div>
        )}
        {single && (
          <div className="flex flex-col justify-center items-center gap-2 pb-6">
            <h1 className="lg:text-5xl font-bold md:text-3xl sm:text-xl text-lg">
              Related Projects
            </h1>
          </div>
        )}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10">
          {pro1?.map((item, ind) => (
            <div
              key={ind}
              className="flex flex-col justify-start items-start gap-4"
            >
              <img src={item.img} className="w-full h-[30rem]" alt="" />
              <div className="flex flex-row justify-between gap-5 items-end w-full pr-4">
                <div className="flex flex-col justify-start items-start gap-1">
                  <h1 className="font-bold md:text-xl sm:text-lg text-base">
                    {item.name}
                  </h1>
                  <p className="md:text-base text-sm font-normal text-[#7D7D7D]">
                    {item.date}
                  </p>
                </div>
                <div
                  onClick={() => navigate(`/project-single/${ind}`)}
                  className="px-4 py-2 text-xl text-[#6B77E5] hover:text-white hover:bg-[#6B77E5] bg-[#f8f8f8] cursor-pointer transition-all duration-300 ease-in-out rounded-full"
                >
                  {">"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
