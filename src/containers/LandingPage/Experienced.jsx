import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";

const Experienced = ({ data }) => {
  return (
    <section
      className={`flex flex-col justify-start items-start select-none h-full ${
        data.about ? "p-0" : "lg:px-20 px-10"
      } pb-10`}
    >
      <div
        className="bg-cover bg-center w-full"
        style={{ backgroundImage: `url(${data.img})` }}
      >
        <div className="bg-[#40DDB6] bg-opacity-75 flex flex-col justify-center items-center gap-8 py-12">
          <p className="lg:text-lg md:text-base text-sm font-normal">
            {data.text}
          </p>
          <div className="flex flex-col justify-center items-center gap-1">
            <h1 className="lg:text-4xl font-bold md:text-2xl text-lg">
              {data.title1}{" "}
            </h1>
            {data.title2 && (
              <h1 className="lg:text-4xl font-bold md:text-2xl text-lg">
                <span className="text-white">{data.white}</span> {data.title2}
              </h1>
            )}
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="lg:text-lg md:text-base text-sm font-normal">
              {data.p1}
            </p>
            <p className="lg:text-lg md:text-base text-sm font-normal">
              {data.p2}
            </p>
            {data.p3 && (
              <p className="lg:text-lg md:text-base text-sm font-normal">
                {data.p3}
              </p>
            )}
          </div>
          <div className="flex flex-col justify-center items-center">
            <button
              className={`capitalize text-lg text-[#fff] font-semibold bg-[#6B77E5] hover:bg-[#5f66a8] transition-all duration-300 ease-in-out ${
                data.about ? "p-5 rounded-full" : "px-10 py-4"
              }`}
            >
              {data.btn ? "get started" : <BiSolidRightArrow />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experienced;
