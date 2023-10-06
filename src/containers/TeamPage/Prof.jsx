import React from "react";
import team1 from "../../assets/team1.jpg";

const Prof = () => {
  return (
    <section className="flex flex-col justify-start items-start select-none h-full py-10 lg:px-20 px-10">
      <div className="flex lg:flex-row flex-col w-full">
        <div className="lg:w-[50%] w-full bg-[#37393F] text-white px-10 py-10 flex flex-col justify-start items-start gap-10">
          <div className="flex flex-col justify-start items-start gap-3">
            <p className="md:text-base text-sm font-normal lg:text-lg">
              Dedicated Team
            </p>
            <h1 className="lg:text-4xl font-bold md:text-2xl text-lg">
              Professional Individuals
            </h1>
            <div className="flex flex-col justify-start items-start pt-3">
              <p className="lg:text-lg md:text-base text-sm font-normal">
                Leverage agile frameworks to provided a synopsis for
              </p>
              <p className="lg:text-lg md:text-base text-sm font-normal">
                high overviews thinking overall proposition.{" "}
              </p>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col justify-start items-center gap-x-5">
            <div className="p-7 rounded-full border-[#40DDB6] border-2 flex flex-col justify-center items-center">
              <p className="lg:text-2xl font-bold md:text-xl sm:text-lg text-base">
                Year of
              </p>
              <p className="lg:text-2xl font-bold md:text-xl sm:text-lg text-base">
                2023
              </p>
            </div>
            <div className="flex flex-col justify-start items-start gap-3">
              <div className="flex flex-col justify-start items-start gap-1">
                <h1 className="lg:text-4xl font-bold md:text-2xl text-lg">
                  75%
                </h1>
                <h1 className="lg:text-2xl font-bold md:text-xl sm:text-lg text-base">
                  Income Statement
                </h1>
              </div>
              <div className="flex flex-col justify-start items-start gap-1">
                <p className="lg:text-lg md:text-base text-sm font-normal">
                  Leverage agile frameworks to provide
                </p>
                <p className="lg:text-lg md:text-base text-sm font-normal">
                  a robust proposition.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={team1} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Prof;
