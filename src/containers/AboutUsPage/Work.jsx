import React from "react";
import { works } from "../../database/data";

const Work = () => {
  return (
    <section className="flex flex-col justify-start items-start select-none h-full">
      <div className="flex flex-col justify-center items-center gap-10 py-10 w-full lg:px-20 px-10">
        <div className="flex flex-col justify-center items-center gap-2 pb-6">
          <p className="md:text-base text-sm font-normal">Work Process</p>
          <h1 className="lg:text-5xl font-bold md:text-3xl sm:text-xl text-lg">
            How We Work
          </h1>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center items-center gap-5">
          {works?.map((item, ind) => (
            <div key={ind} className="max-w-[20rem] flex flex-col items-center justify-center gap-3 text-center bg-[#F4F4F4] py-5">
              <img src={item.img} alt="" />
              <h1 className="lg:text-xl font-bold md:text-lg text-base">{item.name}</h1>
              <p>{item.text}</p>
              <p className="lg:text-lg md:text-base text-sm cursor-pointer font-semibold text-[#6B77E5] hover:underline">{item.t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
