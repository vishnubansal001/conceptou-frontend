import React from "react";
import { customers } from "../../database/data";

const Customers = () => {
  return (
    <section className="flex flex-col justify-start items-start select-none h-full bg-[#37393F] text-white">
      <div className="flex flex-col justify-center items-center gap-10 py-10 w-full lg:px-20 px-10">
        <div className="flex w-full md:flex-row flex-col md:justify-between justify-center items-center">
          <div className="flex flex-col justify-start items-start gap-2">
            <p className="lg:text-lg md:text-base text-sm font-normal">
              What we’re offering
            </p>
            <div className="flex flex-col justify-start items-start">
              <h1 className="lg:text-4xl font-bold md:text-2xl text-lg">
                Services we’re providing
              </h1>
              <h1 className="lg:text-4xl font-bold md:text-2xl text-lg">
                to our customers
              </h1>
            </div>
          </div>
          <p className="md:w-[50%]">
            Completely synergize resource taxing relationships via premier niche
            markets. Professionally cultivate one-to-one customer service with
            service for state of the art customer service.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center items-center gap-5">
          {customers?.map((item, ind) => (
            <div
              key={ind}
              className="min-w-[15rem] border-2 border-[#F4F4F4] hover:bg-[#6B77E5] transition-all duration-300 ease-in-out hover:border-[#6B77E5] flex flex-col items-center justify-center gap-3 text-center py-5"
            >
              <div className="py-5">{item.img}</div>
              <div>
                <h1 className="lg:text-2xl font-bold md:text-xl sm:text-lg text-base">
                  {item.title1}
                </h1>
                <h1 className="lg:text-2xl font-bold md:text-xl sm:text-lg text-base">
                  {item.title2}
                </h1>
              </div>
              <div>
                <p>{item.p1}</p>
                <p>{item.p2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;
