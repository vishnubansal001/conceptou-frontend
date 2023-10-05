import React from "react";
import homePlans from "../../assets/homePlans.png";
import exp from "../../assets/exp.svg";
import awards from "../../assets/awards.svg";
import { AiOutlineCheck } from "react-icons/ai";

const BuisenessPlan = () => {
  return (
    <section className="flex flex-col justify-start items-start select-none h-full min-h-screen">
      <div className="flex md:flex-row flex-col w-full">
        <div className="flex flex-col justify-start md:px-20 px-10 py-28 md:items-end lg:w-[40%] md:w-[50%] w-full bg-[#F4F4F4]">
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="flex flex-col justify-center items-center select-none">
              <img src={homePlans} alt="" />
            </div>
            <div className="flex flex-col justify-start items-start">
              <h1 className="lg:text-2xl font-bold md:text-xl sm:text-lg text-base">
                We're Ready To Grow Your
              </h1>
              <h1 className="lg:text-2xl font-bold md:text-xl sm:text-lg text-base">
                Business With Us
              </h1>
            </div>
            <div className="flex flex-col justify-start items-start">
              <p className="lg:text-lg md:text-base text-sm font-normal text-[#7D7D7D]">
                Leverage agile frameworks to provide a robust{" "}
              </p>
              <p className="lg:text-lg md:text-base text-sm font-normal text-[#7D7D7D]">
                synopsis for high level overviews. thinking to{" "}
              </p>
              <p className="lg:text-lg md:text-base text-sm font-normal text-[#7D7D7D]">
                further the overall value proposition.
              </p>
            </div>
            <p className="lg:text-lg md:text-base text-sm cursor-pointer font-semibold text-[#000] underline">
              Get In Touch
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start md:px-20 px-10 py-28 items-start md:w-[50%] w-full gap-5">
          <p className="md:text-base text-sm font-normal">
            Welcome Whitecollar
          </p>
          <div className="flex flex-col justify-start items-start">
            <h1 className="lg:text-4xl font-bold md:text-2xl text-lg">
              We Care About Your
            </h1>
            <h1 className="lg:text-4xl font-bold md:text-2xl text-lg">
              Business Plan.
            </h1>
          </div>
          <div className="flex flex-col justify-start items-start">
            <p className="lg:text-lg md:text-base text-sm font-normal text-[#7D7D7D]">
              Leverage agile frameworks to provide a robust synopsis for high
              level
            </p>
            <p className="lg:text-lg md:text-base text-sm font-normal text-[#7D7D7D]">
              overviews.Iterative approaches to corporate strategy foster
              collaborative
            </p>
            <p className="lg:text-lg md:text-base text-sm font-normal text-[#7D7D7D]">
              thinking to further the overal.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start">
            <p className="lg:text-lg md:text-base text-sm font-normal text-[#7D7D7D]">
              Leverage agile frameworks to provide a robust synopsis for high
              level{" "}
            </p>
            <p className="lg:text-lg md:text-base text-sm font-normal text-[#7D7D7D]">
              overviews.Iterative approaches to corporate strategy{" "}
            </p>
          </div>
          <div className="flex flex-row gap-4 justify-center items-center">
            <div className="w-auto h-auto p-3 text-white text-lg font-bold flex flex-col justify-center items-center bg-[#6B77E5] rounded-full">
              <AiOutlineCheck />
            </div>
            <p className="lg:text-lg md:text-base text-sm font-normal">
              Components of a Business Strategy
            </p>
          </div>
          <div className="flex flex-row gap-4 justify-center items-center">
            <div className="w-auto h-auto p-3 text-white text-lg font-bold flex flex-col justify-center items-center bg-[#6B77E5] rounded-full">
              <AiOutlineCheck />
            </div>
            <p className="lg:text-lg md:text-base text-sm font-normal">
              Business Consulting
            </p>
          </div>
          <div className="flex lg:flex-row flex-col justify-start items-start gap-3">
            <div className="p-3 border-2 border-[#E3E3E3] w-52 hover:bg-[#E3E3E3] transition-all duration-300 ease-in-out cursor-pointer">
              <img src={exp} alt="" />
              <div className="flex flex-col justify-start items-start gap-1">
                <h1 className="font-semibold md:text-lg text-base">
                  Experience
                </h1>
                <div className="flex flex-col justify-start items-start">
                  <p className="md:text-base text-sm font-normal text-[#7D7D7D]">
                    Leverage frameworks
                  </p>
                  <p className="md:text-base text-sm font-normal text-[#7D7D7D]">
                    toprovidee werment.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-3 border-2 border-[#E3E3E3] w-52 hover:bg-[#E3E3E3] transition-all duration-300 ease-in-out cursor-pointer">
              <img src={awards} alt="" />
              <div className="flex flex-col justify-start items-start gap-1">
                <h1 className="font-semibold md:text-lg text-base">
                  Awards Winner
                </h1>
                <div className="flex flex-col justify-start items-start">
                  <p className="md:text-base text-sm font-normal text-[#7D7D7D]">
                    Leverage frameworks
                  </p>
                  <p className="md:text-base text-sm font-normal text-[#7D7D7D]">
                    toprovidee werment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
              <button className="capitalize text-lg text-[#fff] font-semibold bg-[#6B77E5] hover:bg-[#5f66a8] transition-all duration-300 ease-in-out px-4 py-4">
                more about us
              </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BuisenessPlan;
