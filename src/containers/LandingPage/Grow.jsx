import React from "react";
import homeGrow from "../../assets/homeGrow.jpg";
import chart1 from "../../assets/Chart1.svg";
import chart2 from "../../assets/Chart2.png";
import { AiOutlineCheck, AiFillStar } from "react-icons/ai";

const Grow = () => {
  return (
    <section className="flex flex-col justify-start items-start select-none h-full">
      <div className="flex lg:flex-row flex-col w-full">
        <div className="lg:w-[80%] bg-[#37393F] text-white flex-1 flex-col justify-start md:px-20 px-10 py-14 lg:items-end">
          <div className="flex flex-col justify-start items-start gap-3">
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
            <div className="flex sm:flex-row flex-col justify-start items-center gap-6 mb-3">
              <div className="flex bg-[#2E2F34] min-w-[15rem] px-2 py-4 justify-center items-center gap-4">
                <img src={chart1} alt="" />
                <div className="flex flex-col justify-start items-start">
                  <p className="md:text-base text-sm font-normal">Clients</p>
                  <h1 className="md:text-lg text-base font-semibold">
                    Quick Response
                  </h1>
                </div>
              </div>
              <div className="flex bg-[#2E2F34] min-w-[15rem] px-2 py-4 justify-center items-center gap-4">
                <img src={chart2} alt="" />
                <div className="flex flex-col justify-start items-start">
                  <p className="md:text-base text-sm font-normal">Project</p>
                  <h1 className="md:text-lg text-base font-semibold">
                    Finished Jobs
                  </h1>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-4">
              <div className="flex flex-row justify-start items-center gap-2">
                <div className="w-auto h-auto p-1 text-white text-lg font-bold flex flex-col justify-center items-center bg-[#40DDB6] rounded-full">
                  <AiOutlineCheck />
                </div>
                <p className="flex flex-row justify-center items-center gap-1 lg:text-lg md:text-base text-sm font-normal">
                  <span className="font-semibold">2800+</span> Active clients
                </p>
              </div>
              <div className="flex flex-row justify-start items-center gap-2">
                <div className="w-auto h-auto p-1 text-white text-lg font-bold flex flex-col justify-center items-center bg-[#40DDB6] rounded-full">
                  <AiOutlineCheck />
                </div>
                <p className="flex flex-row justify-center items-center gap-1 lg:text-lg md:text-base text-sm font-normal">
                  <span className="font-semibold">106+</span>
                </p>
              </div>
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
              <p className="capitalize lg:text-lg md:text-base text-sm cursor-pointer font-semibold text-[#40DDB6] pl-2 underline">
                get in touch
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex-1 lg:flex bg-cover bg-center" style={{background:`url(${homeGrow})`}}>
          {/* <img src={homeGrow} alt="" /> */}
        </div>
        <div className="lg:hidden flex-1 flex flex-col justify-center items-center">
          <img src={homeGrow} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Grow;
