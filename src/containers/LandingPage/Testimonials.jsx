import React from "react";
import { testimonials } from "../../database/data";
import stars from "../../assets/stars.svg";

const Testimonials = () => {
  return (
    <section className="flex flex-col justify-start items-start select-none h-full lg:px-20 px-10 py-14">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-start items-start gap-x-5 gap-y-5 py-14 w-full border-t-2">
        <div className="flex flex-col justify-start items-start gap-5">
          <p className="lg:text-lg md:text-base text-sm font-normal">
            Testimonial
          </p>
          <div className="flex flex-col justify-start items-start mb-4">
            <h1 className="lg:text-4xl font-bold md:text-2xl text-lg">
              What Our
            </h1>
            <h1 className="lg:text-4xl font-bold md:text-2xl text-lg">
              Client Say’s
            </h1>
          </div>
          <div className="flex flex-col justify-start items-start">
            <p className="text-[#7D7D7D] lg:text-lg md:text-base text-sm font-normal">
              Leverage agile frameworks to provide
            </p>
            <p className="text-[#7D7D7D] lg:text-lg md:text-base text-sm font-normal">
              a robust synopsis for high level
            </p>
            <p className="text-[#7D7D7D] lg:text-lg md:text-base text-sm font-normal">
              {" "}
              overviews.Iterative{" "}
            </p>
          </div>
        </div>
        {testimonials?.map((item, ind) => (
          <div
            key={ind}
            className="bg-[#e8e8e8] hover:bg-[#f6f6f6] transition-all duration-300 ease-in-out p-5 flex flex-col justify-start items-start gap-4 px-5"
          >
            <div className="flex flex-row justify-center items-center gap-4">
              <img src={item.img} alt="" />
              <div className="flex flex-col justify-start items-start">
                <h1 className="lg:text-xl font-bold md:text-lg text-base">
                  {item.name}
                </h1>
                <p className="text-[#7D7D7D] md:text-base text-sm font-normal">
                  {item.position}
                </p>
                <img src={stars} alt="" />
              </div>
            </div>
            <div className="w-[80%] flex flex-1 justify-start items-start">
              <p className="text-[#7D7D7D] lg:text-lg md:text-base text-sm font-normal">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
