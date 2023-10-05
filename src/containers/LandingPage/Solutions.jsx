import React from "react";
import { partners, solutions } from "../../database/data";
import { useNavigate } from "react-router-dom";

const Solutions = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col justify-start items-start select-none h-full min-h-screen">
      <div className="flex flex-col w-full md:px-20 px-10 lg:py-8 py-12 gap-20">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 min-[340px]:grid-cols-2 grid-cols-1 lg:gap-x-8 w-full gap-x-3 gap-y-8">
          {partners?.map((item, ind) => (
            <div key={ind}>
              <img src={item.img} alt="img/company" />
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center w-full gap-5">
          <p className="lg:text-lg md:text-base text-sm font-semibold">
            We Are Expertise In
          </p>
          <div className="flex flex-col justify-center items-center mb-10">
            <h1 className="lg:text-4xl font-bold md:text-2xl text-lg">
              We Provide Professional
            </h1>
            <h1 className="lg:text-4xl font-bold md:text-2xl text-lg">
              Business Solutions.
            </h1>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 w-full gap-y-8">
            {solutions?.map((item, ind) => (
              <div
                key={ind}
                className="w-full flex sm:flex-row justify-between items-start bg-[#F4F4F4] px-6 hover:bg-[#d4d3d3] transition-all duration-300 ease-in-out border-[1px] border-black py-6"
              >
                <div className="flex flex-col justify-between items-start gap-10">
                  <div className="flex flex-col justify-start items-start">
                    <h1 className="lg:text-2xl font-bold md:text-xl sm:text-lg text-base">
                      {item.name1}
                    </h1>
                    <h1 className="lg:text-2xl font-bold md:text-xl sm:text-lg text-base">
                      {item.name2}
                    </h1>
                  </div>
                  <p className="lg:text-lg md:text-base text-sm cursor-pointer font-semibold text-[#6B77E5] transition-all duration-300 ease-in-out hover:underline">Read More</p>
                </div>
                <div>
                  <img src={item.img} alt="" />
                </div>
              </div>
            ))}
            <div
              className="flex flex-col justify-center items-center bg-[#6B77E5] hover:bg-[#5f66a8] transition-all duration-300 ease-in-out cursor-pointer"
              onClick={() => navigate("/services")}
            >
              <button className="capitalize lg:text-xl md:text-lg text-base text-[#fff] font-semibold px-4 py-4">
                More Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
