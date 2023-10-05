import React from "react";
import { appoint } from "../../database/data";
import { AiOutlineCheck } from "react-icons/ai";

const Appointment = () => {
  return (
    <section className="flex flex-col justify-start items-start select-none h-full bg-[#6B77E5] text-white">
      <div className="flex md:flex-row flex-col justify-center items-center gap-10 py-10 w-full lg:px-20 px-10">
        <div className="flex flex-col justify-start items-start gap-5 md:w-[60%]">
          <p className="lg:text-lg md:text-base text-sm font-normal">
            How We Work
          </p>
          <div className="flex flex-col justify-start items-start">
            <h1 className="lg:text-3xl font-bold md:text-2xl text-lg">
              To Get Your Business
            </h1>
            <h1 className="lg:text-3xl font-bold md:text-2xl text-lg">
              To The Next Level
            </h1>
          </div>
          <div className="flex flex-col justify-start items-start">
            <p className="lg:text-lg md:text-base text-sm font-normal">
              Leverage agile frameworks to provide synopsis for high level{" "}
            </p>
            <p className="lg:text-lg md:text-base text-sm font-normal">
              overviews.Iterative approaches to corporate strategy foster
            </p>
            <p className="lg:text-lg md:text-base text-sm font-normal">
              collaborative thinking to further the overal.
            </p>
          </div>
          <div className="flex flex-row min-w-[20rem] px-5 justify-start items-center gap-x-5 bg-[#40DDB6] p-4">
            <div className="p-3 rounded-full border-[#6B77E5] border-2 flex flex-col justify-center items-center">
              <p className="lg:text-lg md:text-base text-sm font-bold">562+</p>
              <p className="md:text-base text-sm font-semibold">Project</p>
            </div>
            <div className="flex flex-col justify-start items-start">
              <p className="lg:text-lg md:text-base text-sm font-normal">
                We have <span className="font-semibold">50+</span> years of{" "}
              </p>
              <p className="lg:text-lg md:text-base text-sm font-normal">
                experience. We offer
              </p>
              <p className="lg:text-lg md:text-base text-sm font-normal">
                <span className="font-semibold">whitecollar</span> services to
                you
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-3">
            {appoint?.map((item, ind) => (
              <div
                className={`flex flex-row justify-center items-start gap-4 ${
                  ind !== appoint.length - 1 && "border-b-2 border-white pb-4"
                }`}
              >
                <div className="p-1 h-7 w-7 text-[#6B77E5] text-lg font-bold flex flex-col justify-center items-center bg-[#40DDB6] rounded-full mt-2">
                  <AiOutlineCheck />
                </div>
                <div className="flex flex-col justify-start items-start">
                  <h1 className="font-semibold md:text-lg text-base">
                    {item.name}
                  </h1>
                  <div className="flex flex-col justify-start items-start">
                    <p className="md:text-base text-sm font-normal">
                      {item.text1}
                    </p>
                    <p className="md:text-base text-sm font-normal">
                      {item.text2}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-start items-start md:items-center gap-5 md:w-[80%] mx-auto">
          <p className="lg:text-lg md:text-base text-sm font-normal">
            Book Now
          </p>
          <div className="flex flex-col justify-start items-start">
            <h1 className="lg:text-3xl font-bold md:text-2xl text-lg">
              Get Free Business
            </h1>
            <h1 className="lg:text-3xl font-bold md:text-2xl text-lg">
              Appointment
            </h1>
          </div>
          <form
            action=""
            className="flex flex-col justify-start items-start bg-white gap-4 md:w-[60%] p-4"
          >
            <input
              className="border-[#dddddd] border-[1px] w-full px-3 py-2 bg-[#f8f8f8] text-black outline-none placeholder:text-[#37393F]"
              placeholder="YourName"
              type="text"
              name=""
              id=""
            />
            <input
              className="border-[#dddddd] border-[1px] w-full px-3 py-2 bg-[#f8f8f8] text-black outline-none placeholder:text-[#37393F]"
              type="email"
              placeholder="Email Address"
              name=""
              id=""
            />
            <input
              className="border-[#dddddd] border-[1px] w-full px-3 py-2 bg-[#f8f8f8] text-black outline-none placeholder:text-[#37393F]"
              type="number"
              placeholder="Phone Number"
              name=""
              id=""
            />
            <div className="flex sm:flex-row flex-col w-full gap-3">
              <input
                className="border-[#dddddd] border-[1px] w-full px-3 py-2 bg-[#f8f8f8] text-black outline-none placeholder:text-[#37393F]"
                type="date"
                placeholder="Date"
                name=""
                id=""
              />
              <input
                className="border-[#dddddd] border-[1px] w-full px-3 py-2 bg-[#f8f8f8] text-black outline-none placeholder:text-[#37393F]"
                type="time"
                placeholder="Time"
                name=""
                id=""
              />
            </div>
            <textarea
              className="border-[#dddddd] border-[1px] w-full px-3 py-2 bg-[#f8f8f8] text-black outline-none placeholder:text-[#37393F]"
              name=""
              placeholder="Service Description"
              id=""
              cols="30"
              rows="5"
            ></textarea>
            <div className="flex flex-col justify-center items-center">
              <button className="capitalize text-lg text-[#37393F] font-semibold bg-[#40DDB6] hover:bg-[#379c84] transition-all duration-300 ease-in-out px-6 py-3">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
