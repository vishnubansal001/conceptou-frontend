import React from "react";
import news1 from "../../assets/news1.png";
import { news } from "../../database/data";

const MainSection = ({ ind }) => {
  return (
    <section className="flex flex-col justify-start items-start select-none h-full lg:px-20 px-10">
      <div className="flex flex-col justify-center items-center ">
        <div className="relative flex flex-col justify-center items-center w-full h-auto">
          <img
            src={news[ind].img} // Replace with your actual image URL
            alt="Sample"
            className="w-full max-h-[80vh] h-auto"
          />
          <div className="absolute bottom-0 left-0 flex w-full">
            <button className="capitalize text-lg text-[#fff] font-semibold bg-[#6B77E5] hover:bg-[#5f66a8] transition-all duration-300 ease-in-out px-14 py-4">
              {news[ind].date}
            </button>
            <button className="capitalize text-lg text-[#fff] font-semibold bg-[#40DDB6] hover:bg-[#379c84] transition-all duration-300 ease-in-out px-16 py-4 border-r-0 border-b-2 border-b-[#6B77E5] md:border-b-0 md:border-r-2 md:border-r-[#6B77E5]">
              {news[ind].by}
            </button>
            <button className="capitalize text-lg text-[#fff] font-semibold bg-[#40DDB6] hover:bg-[#379c84] transition-all duration-300 ease-in-out px-16 py-4">
              {news[ind].for}
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-10">
          <div className="flex flex-col justify-start items-start gap-2 mt-5">
            <h1 className="lg:text-4xl font-bold md:text-2xl text-lg">
              Team Identifiers, Benefits, and How to Build One that Works
            </h1>
            <p className="lg:text-lg md:text-base text-sm font-normal">
              Bring to the table win win survival strategies to ensure proactive
              domination at the end of the day going forward a new normal that
              has evolved from generation on the runway heading towards a
              streamlined cloud solution user generated content in real time
              will have multiple touchpoints for offshoring capitalize on low
              hanging fruit to identify a ballpark values added activity to beta
              test overrided the digital divided with additional clickthroughs
              from close the loop on focusing solely on the bottom line.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <h1 className="lg:text-4xl font-bold md:text-2xl text-lg">
              The Work & Life Style For All
            </h1>
            <p className="lg:text-lg md:text-base text-sm font-normal">
              Bring to the table win win survival strategies to ensure proactive
              domination at the end of the day going forward a new normal that
              has evolved from generation on the runway heading towards a
              streamlined cloud solution user generated content in real time
              will have multiple touchpoints for offshoring capitalize on low
              hanging fruit to identify a ballpark values added activity to beta
              test overrided.
            </p>
          </div>
          <ul className="list-disc flex flex-col justify-start items-start pl-10 gap-5">
            <li className="lg:text-lg md:text-base text-sm font-normal">
              Dynamically target high-payoff intellectual capital for customized
            </li>
            <li className="lg:text-lg md:text-base text-sm font-normal">
              Interactively procrastinate high-payoff content
            </li>
            <li className="lg:text-lg md:text-base text-sm font-normal">
              Credibly reinter mediate backend ideas for cross-platform models
            </li>
          </ul>
          <div className="flex flex-col justify-center text-center items-center  gap-2 px-10 bg-[#40DDB6] py-10 border-t-[15px] border-t-[#6B77E5]">
            <p className="lg:text-lg md:text-base text-sm font-normal w-[90%] mx-auto">
              “For the longest time, computers have been associated with work.
              Mainframes were for the Army, government agencies, and then large
              companies. Workstations were for engineers and software
              programmers. PCs were initially for other white-collar jobs.”
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <h1 className="lg:text-4xl font-bold md:text-2xl text-lg">
              The Work & Life Style For All
            </h1>
            <p className="lg:text-lg md:text-base text-sm font-normal">
              Bring to the table win win survival strategies to ensure proactive
              domination at the end of the day going forward a new normal that
              has evolved from generation on the runway heading towards a
              streamlined cloud solution user generated content.
            </p>
          </div>
          <ul className="flex flex-col justify-start items-start gap-5 pl-5 pb-10">
            <li className="lg:text-lg md:text-base text-sm font-normal">
              01. t brings the right people together with all the right
              information and tools to get work done
            </li>
            <li className="lg:text-lg md:text-base text-sm font-normal">
              02. We provide operational efficiency, data security, and flexible
              scale
            </li>
            <li className="lg:text-lg md:text-base text-sm font-normal">
              03. Your best work, together in one package that works seamlessly
              from your computer
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
