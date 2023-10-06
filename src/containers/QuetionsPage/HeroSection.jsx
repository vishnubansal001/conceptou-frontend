import React from "react";

const HeroSection = ({ img, text, title1, title2 }) => {
  return (
    <section
      className="bg-cover bg-center flex flex-col z-10 justify-start items-start select-none h-full"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="flex flex-col bg-[#37393F] bg-opacity-90 py-28 lg:w-[40%] md:w-[50%] w-full md:px-20 px-10 text-white">
        <div className="flex flex-col justify-center items-start gap-4">
          <p className="md:text-base text-sm font-normal">{text}</p>
          <div className="flex flex-col justify-start items-start gap-2">
            <h1 className="lg:text-5xl font-bold md:text-3xl sm:text-xl text-lg">
              {title1}
            </h1>
            <h1 className="lg:text-5xl font-bold md:text-3xl sm:text-xl text-lg">
              {title2}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
