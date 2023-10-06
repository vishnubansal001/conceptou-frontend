import React from "react";
import contact1 from "../../assets/contact1.jpg";
import { IoIosCall } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";

const MainSection = () => {
  return (
    <section className="flex flex-col justify-center items-center select-none h-full">
      <div className="flex md:flex-row flex-col justify-center items-start gap-10 py-10 w-full lg:px-20 px-10">
        <div className="flex flex-col justify-start items-start gap-5 lg:w-[40%] md:w-[50%]">
          <img src={contact1} alt="" />
        </div>
        <div className="flex flex-col justify-start items-start gap-2">
          <p className="lg:text-lg md:text-base text-sm font-normal">
            Let’s Talk
          </p>
          <h1 className="lg:text-3xl font-bold md:text-2xl text-lg text-[#37393F]">
            Get in touch with us
          </h1>
          <div className="flex flex-col justify-start items-start pt-4">
            <p className="lg:text-lg md:text-base text-sm font-normal">
              Completely synergize resource taxing relationships via premier
              niche{" "}
            </p>
            <p className="lg:text-lg md:text-base text-sm font-normal">
              ynamically innovate state of the art customer service.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start pt-4 gap-5">
            <div className="flex flex-row justify-start items-center gap-5">
              <div className="w-auto h-auto p-3 bg-[#F4F4F4] rounded-full text-[#6B77E5]">
                <IoIosCall className="text-xl" />
              </div>
              <div className="flex flex-col justify-start items-start">
                <p className="lg:text-lg md:text-base text-sm font-normal text-[#7D7D7D]">
                  Have any question?
                </p>
                <h1 className="lg:text-lg md:text-base text-sm font-normal">
                  Free +01 569 896 654
                </h1>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center gap-5">
              <div className="w-auto h-auto p-3 bg-[#F4F4F4] rounded-full text-[#6B77E5]">
                <FiMail className="text-xl" />
              </div>
              <div className="flex flex-col justify-start items-start">
                <p className="lg:text-lg md:text-base text-sm font-normal text-[#7D7D7D]">
                  Write email
                </p>
                <h1 className="lg:text-lg md:text-base text-sm font-normal">
                  Info@whitecollar.com
                </h1>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center gap-5">
              <div className="w-auto h-auto p-3 bg-[#F4F4F4] rounded-full text-[#6B77E5]">
                <IoLocationOutline className="text-xl" />
              </div>
              <div className="flex flex-col justify-start items-start">
                <p className="lg:text-lg md:text-base text-sm font-normal text-[#7D7D7D]">
                  Visit anytime
                </p>
                <h1 className="lg:text-lg md:text-base text-sm font-normal">
                  King Street, Prior Lake, New York
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
