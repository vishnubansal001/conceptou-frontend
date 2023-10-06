import React from "react";
import { plans } from "../../database/data";

const MainSection = () => {
  return (
    <section className="flex flex-col justify-start items-start select-none h-full">
      <div className="flex flex-col justify-center items-center gap-10 py-10 w-full lg:px-20 px-10">
        <div className="flex flex-col justify-center items-center gap-2 pb-6">
          <p className="lg:text-lg md:text-base text-sm font-normal">
            Simple Pricing Option
          </p>
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="lg:text-5xl font-bold md:text-3xl sm:text-xl text-lg">
              Choose the Right Plan for
            </h1>
            <h1 className="lg:text-5xl font-bold md:text-3xl sm:text-xl text-lg">
              Your and Your Team
            </h1>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 justify-center items-center">
          {plans?.map((item, ind) => (
            <div
              key={ind}
              className={`flex flex-col justify-start items-start gap-3 ${
                item.checked ? "bg-[#6B77E5] text-white" : "bg-[#f4f4f4]"
              }`}
            >
              {item.checked == true && (
                <div className="w-full">
                  <p className="w-full px-5 bg-[#40DDB6] py-2 text-center text-white">
                    Most Popular
                  </p>
                </div>
              )}
              <div className="px-5 py-3 flex flex-col justify-center items-center gap-4">
                <div
                  className={`pb-4 border-b-2 w-full flex flex-col justify-center items-center ${
                    item.checked && "border-b-[#fff]"
                  }`}
                >
                  <p className="lg:text-xl font-bold md:text-lg text-base">
                    {item.name}
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                  <h1 className="lg:text-2xl font-bold md:text-xl sm:text-lg text-base">
                    {item.price}
                  </h1>
                  <p
                    className={`w-full cursor-pointer px-5 ${
                      item.checked
                        ? "bg-white text-black"
                        : "bg-[#40DDB6] text-white"
                    } py-2 text-center`}
                  >
                    {item.bile}
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-5 pt-5">
                  {item.text.map((i, int) => (
                    <p key={int}>{i}</p>
                  ))}
                </div>
                <div className="flex flex-col justify-center items-center">
                  <button
                    className={`capitalize text-lg text-[#fff] font-semibold transition-all duration-300 ease-in-out px-8 py-3 ${
                      item.checked
                        ? "bg-white hover:bg-[#cacaca] text-[#6b77e5]"
                        : "bg-[#6B77E5] hover:bg-[#5f66a8]"
                    }`}
                  >
                    {item.btn}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainSection;
