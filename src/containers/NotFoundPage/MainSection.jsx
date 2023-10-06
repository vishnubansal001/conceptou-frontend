import React from "react";
import nfbg from "../../assets/nfbg.jpg";
import { useNavigate } from "react-router-dom";

const MainSection = () => {
  const navigate = useNavigate();
  return (
    <section
      className="flex flex-col justify-center items-center select-none h-full bg-cover bg-center"
      style={{ backgroundImage: `url(${nfbg})` }}
    >
      <div className="flex flex-col justify-center items-center gap-7 lg:px-10 px-10 py-20 w-full h-full bg-[#37393F] bg-opacity-90 text-white">
        <h1 className="lg:text-9xl md:text-6xl sm:text-4xl text-2xl font-bold">
          404
        </h1>
        <h1 className="lg:text-4xl font-bold md:text-3xl sm:text-xl text-lg capitalize">
          oops! page not found
        </h1>
        <div className="flex flex-col justify-center items-center gap-1">
          <p className="md:text-base text-sm font-normal lg:text-lg">
            Leveling customer service for state of the art customer service
            innovate product for reliable supply{" "}
          </p>
          <p className="md:text-base text-sm font-normal lg:text-lg">
            engage web services cutting-edge deliverables.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <button
            onClick={() => navigate("/")}
            className="capitalize text-lg text-[#37393F] font-semibold bg-[#40DDB6] hover:bg-[#379c84] transition-all duration-300 ease-in-out px-16 py-3 w-full"
          >
            go to home
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
