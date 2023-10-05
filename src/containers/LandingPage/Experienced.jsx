import React from "react";
import expe from "../../assets/expe.jpg";

const Experienced = () => {
  return (
    <section className="flex flex-col justify-start items-start select-none h-full lg:px-20 px-10">
      <div
        className="bg-cover bg-center w-full"
        style={{ backgroundImage: `url(${expe})` }}
      >
        <div className="bg-[#40DDB6] bg-opacity-75 flex flex-col justify-center items-center gap-8 py-12">
          <p className="lg:text-lg md:text-base text-sm font-normal">
            Subscribe Whitecollar
          </p>
          <div className="flex flex-col justify-center items-center gap-1">
            <h1 className="lg:text-4xl font-bold md:text-2xl text-lg">
              Need An Experienced{" "}
            </h1>
            <h1 className="lg:text-4xl font-bold md:text-2xl text-lg">
              <span className="text-white">Whitecollar</span> job Service?
              Contact Us
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="lg:text-lg md:text-base text-sm font-normal">
              Leverage agile frameworks to provide a robust synopsis for high
              level
            </p>
            <p className="lg:text-lg md:text-base text-sm font-normal">
              overviews.Iterative approaches to corporate strategy foster
              collaborative{" "}
            </p>
            <p className="lg:text-lg md:text-base text-sm font-normal">
              thinkingfurther the overal
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <button className="capitalize text-lg text-[#fff] font-semibold bg-[#6B77E5] hover:bg-[#5f66a8] transition-all duration-300 ease-in-out px-10 py-4">
              get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experienced;
