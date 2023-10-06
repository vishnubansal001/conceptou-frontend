import React from "react";
import { AiOutlineCheck, AiFillStar } from "react-icons/ai";
import chart1w from "../../assets/chart1w.png";
import chart2w from "../../assets/chart2w.png";

const Solutions1 = () => {
  return (
    <section className="flex flex-col justify-start items-start select-none h-full">
      <div className="flex md:flex-row flex-col justify-center items-center gap-10 py-10 w-full lg:px-20 px-10">
        <div className="flex flex-col justify-start items-start gap-5 md:w-[60%]">
          <p className="md:text-base text-sm font-normal">Why Choose Me</p>
          <div className="flex flex-col justify-start items-start mb-3">
            <h1 className="lg:text-2xl font-bold md:text-xl sm:text-lg text-base">
              We Provide Solutions To{" "}
            </h1>
            <h1 className="lg:text-2xl font-bold md:text-xl sm:text-lg text-base">
              Grow Your Business
            </h1>
          </div>
          <div className="flex flex-col justify-start items-start mb-3">
            <p className="md:text-base text-sm font-normal">
              Leverage agile frameworks to provide a robust synopsis for high
              level
            </p>
            <p className="md:text-base text-sm font-normal">
              overviews. thinking to further the overall proposition.{" "}
            </p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-4">
            <div className="flex flex-col justify-start items-start gap-2">
              <div className="flex flex-row justify-start items-center gap-2">
                <div className="w-auto h-auto p-1 text-white text-lg font-bold flex flex-col justify-center items-center bg-[#40DDB6] rounded-full">
                  <AiOutlineCheck />
                </div>
                <p className="flex flex-row justify-center items-center gap-1 lg:text-lg md:text-base text-sm font-normal">
                  <span className="font-semibold">2800+</span> Active clients
                </p>
              </div>
              <p className="flex flex-row justify-center items-center gap-1 lg:text-lg md:text-base text-sm font-normal">
                provide a robust synopsis for high level overviews
              </p>
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
              <div className="flex flex-row justify-start items-center gap-2">
                <div className="w-auto h-auto p-1 text-white text-lg font-bold flex flex-col justify-center items-center bg-[#40DDB6] rounded-full">
                  <AiOutlineCheck />
                </div>
                <p className="flex flex-row justify-center items-center gap-1 lg:text-lg md:text-base text-sm font-normal">
                  <span className="font-semibold">106+</span> Team members
                </p>
              </div>
              <p className="flex flex-row justify-center items-center gap-1 lg:text-lg md:text-base text-sm font-normal">
                provide a robust synopsis for high level overviews
              </p>
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
              <div className="flex flex-row justify-start items-center gap-2">
                <div className="w-auto h-auto p-1 text-white text-lg font-bold flex flex-col justify-center items-center bg-[#40DDB6] rounded-full">
                  <AiOutlineCheck />
                </div>
                <p className="flex flex-row justify-center items-center gap-1 lg:text-lg md:text-base text-sm font-normal">
                  <span className="font-semibold">106+</span> Team members
                </p>
              </div>
              <p className="flex flex-row justify-center items-center gap-1 lg:text-lg md:text-base text-sm font-normal">
                provide a robust synopsis for high level overviews
              </p>
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
              <div className="flex flex-row justify-start items-center gap-2">
                <div className="w-auto h-auto p-1 text-white text-lg font-bold flex flex-col justify-center items-center bg-[#40DDB6] rounded-full">
                  <AiOutlineCheck />
                </div>
                <p className="flex flex-row justify-center items-center gap-1 lg:text-lg md:text-base text-sm font-normal">
                  <span className="font-semibold">1670+</span>{" "}
                  <span className="flex flex-row justify-center items-center gap-1 text-[#FFB342]">
                    5 <AiFillStar /> stars
                  </span>{" "}
                  reviews
                </p>
              </div>
              <p className="flex flex-row justify-center items-center gap-1 lg:text-lg md:text-base text-sm font-normal">
                provide a robust synopsis for high level overviews
              </p>
            </div>
          </div>
          <div>
            <button className="capitalize text-lg text-[#fff] font-semibold bg-[#6B77E5] hover:bg-[#5f66a8] transition-all duration-300 ease-in-out px-4 py-4">
              {" "}
              Appointment
            </button>
          </div>
        </div>
        <div className="md:w-[50%] flex flex-col justify-start items-start gap-6 mb-3">
          <div className="flex bg-[#f4f4f4] md:w-[70%] px-2 py-4 justify-start items-center gap-4">
            <img src={chart1w} alt="" />
            <div className="flex flex-col justify-start items-start">
              <p className="md:text-base text-sm font-normal">Clients</p>
              <h1 className="md:text-lg text-base font-semibold">
                Quick Response
              </h1>
            </div>
          </div>
          <div className="flex bg-[#f4f4f4] md:w-[70%] px-2 py-4 justify-start items-center gap-4">
            <img src={chart2w} alt="" />
            <div className="flex flex-col justify-start items-start">
              <p className="md:text-base text-sm font-normal">Project</p>
              <h1 className="md:text-lg text-base font-semibold">
                Finished Jobs
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions1;
