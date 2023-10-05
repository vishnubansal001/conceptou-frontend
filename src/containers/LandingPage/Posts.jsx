import React from "react";
import { news } from "../../database/data";

const Posts = () => {
  return (
    <section className="flex flex-col justify-start items-start select-none h-full">
      <div className="flex flex-col justify-center items-center gap-10 py-10 w-full lg:px-20 px-10">
        <div className="flex sm:flex-row flex-col sm:justify-between justify-center items-center w-full gap-5">
          <div className="flex flex-col justify-start items-start gap-2">
            <p className="lg:text-lg md:text-base text-sm font-normal">
              Our Recent News
            </p>
            <h1 className="lg:text-4xl font-bold md:text-2xl text-lg">
              Latest Posts
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <button className="capitalize text-lg text-[#fff] font-semibold bg-[#37393F] hover:bg-[#48494a] transition-all duration-300 ease-in-out px-8 py-4">
              more news
            </button>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-x-12 gap-y-5">
          {news?.map((item, ind) => (
            <div
              key={ind}
              className="flex flex-col justify-start items-start gap-4"
            >
              <div className="flex flex-col justify-start items-start gap-0">
                <img src={item.img} alt="" />
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full">
                  <button className="capitalize text-lg text-[#fff] font-semibold bg-[#6B77E5] hover:bg-[#5f66a8] transition-all duration-300 ease-in-out px-4 py-4">
                    {item.date}
                  </button>
                  <button className="capitalize text-lg text-[#fff] font-semibold bg-[#40DDB6] hover:bg-[#379c84] transition-all duration-300 ease-in-out px-8 py-4 border-r-0 border-b-2 border-b-[#6B77E5] md:border-b-0 md:border-r-2 md:border-r-[#6B77E5]">
                    {item.by}
                  </button>
                  <button className="capitalize text-lg text-[#fff] font-semibold bg-[#40DDB6] hover:bg-[#379c84] transition-all duration-300 ease-in-out px-8 py-4">
                    {item.for}
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start">
                <h1 className="lg:text-2xl font-bold md:text-xl sm:text-lg text-base">
                  {item.name1}
                </h1>
                <h1 className="lg:text-2xl font-bold md:text-xl sm:text-lg text-base">
                  {item.name2}
                </h1>
              </div>
              <div className="flex flex-col justify-start items-start">
                <p className="lg:text-lg md:text-base text-sm font-normal text-[#7D7D7D]">
                  {item.text1}
                </p>
                <p className="lg:text-lg md:text-base text-sm font-normal text-[#7D7D7D]">
                  {item.text2}
                </p>
                <p className="lg:text-lg md:text-base text-sm font-normal text-[#7D7D7D]">
                  {item.text3}
                </p>
              </div>
              <p className="lg:text-lg md:text-base text-sm cursor-pointer font-semibold text-[#6B77E5] hover:underline">
                Read More
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Posts;
