import React from "react";

const MainSection = () => {
  return (
    <section className="flex flex-col justify-center items-center select-none h-full py-14">
      <div className="flex flex-col justify-center items-center w-full gap-5">
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="md:text-base text-sm font-normal">Published</p>
          <h1 className="lg:text-5xl font-bold md:text-3xl sm:text-xl text-lg">
            Version 1.0
          </h1>
        </div>
        <div className="flex flex-col justify-start items-start">
          <p className="md:text-base text-sm font-normal lg:text-lg">
            Initial Whitcollar Webflow Template Released!
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
