import React from "react";
import prtect from '../../assets/prtect.png';

const MainSection = () => {
  return (
    <section className="flex flex-col justify-center items-center select-none h-full py-20">
      <div className="flex flex-col justify-center items-center w-full gap-10 lg:px-10 px-10 py-10 max-w-[30rem] bg-[#efeeee]">
        <img src={prtect} alt="" />
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="md:text-base text-sm font-normal">Password</p>
          <h1 className="lg:text-4xl font-bold md:text-3xl sm:text-xl text-lg">
            Protected Page
          </h1>
        </div>
        <div className="md:w-[90%] w-full flex flex-col justify-center items-center gap-5">
          <input
            className="border-[#dddddd] border-[1px] w-full px-3 py-2 bg-[#f8f8f8] text-black outline-none placeholder:text-[#37393F]"
            placeholder="Your Password"
            type="password"
            name=""
            id=""
          />
          <div className="flex flex-col justify-center items-center w-full">
            <button className="capitalize text-lg text-[#fff] font-semibold bg-[#6B77E5] hover:bg-[#5f66a8] transition-all duration-300 ease-in-out px-6 py-3 w-full">
              submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
