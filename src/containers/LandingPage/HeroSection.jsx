import React from "react";
import heroHome from "../../assets/homeHero.png";
import { BiSolidRightArrow } from "react-icons/bi";

const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center flex flex-col z-10 justify-start items-start select-none h-full"
      style={{ backgroundImage: `url(${heroHome})` }}
    >
      <div className="flex flex-col bg-[#37393F] bg-opacity-90 py-28 lg:w-[40%] md:w-[50%] w-full md:px-20 px-10 text-white">
        <div className="flex flex-col justify-center items-start gap-4">
          <p className="md:text-base text-sm font-normal">
            Welcome to Whitecollar Solution
          </p>
          <div className="flex flex-col justify-start items-start gap-2">
            <h1 className="lg:text-5xl font-bold md:text-3xl sm:text-xl text-lg">
              The Best Value
            </h1>
            <h1 className="lg:text-5xl font-bold md:text-3xl sm:text-xl text-lg">
              for <span className="text-[#40DDB6]">Business</span> and
            </h1>
            <h1 className="lg:text-5xl font-bold md:text-3xl sm:text-xl text-lg">
              Corporation
            </h1>
          </div>
          <div className="flex flex-col justify-start items-start">
            <p className="md:text-base text-sm font-normal text-[#B9B9B9]">
              Collaboratively administrate empowered markets plug
            </p>
            <p className="md:text-base text-sm font-normal text-[#B9B9B9]">
              and play networks dynamically procrastinated
            </p>
          </div>
          <div className="flex flex-row justify-center items-center gap-6">
            <div className="flex flex-col justify-center items-center">
              <button className="capitalize text-lg text-[#37393F] font-semibold bg-[#40DDB6] hover:bg-[#379c84] transition-all duration-300 ease-in-out px-4 py-4">
                get counseling
              </button>
            </div>
            <div className="flex flex-row justify-center items-center gap-3">
              <div className="w-auto h-auto p-5 bg-[#6B77E5] rounded-full">
                <BiSolidRightArrow className="text-lg" />
              </div>
              <p className="md:text-base text-sm font-normal text-[#fff] underline">Watch Videos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
