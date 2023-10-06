import React from "react";
import { experts } from "../../database/data";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsPinterest } from "react-icons/bs";

const Experts = ({ about }) => {
  const expes = about ? experts.slice(0, 3) : experts;
  return (
    <section className="flex flex-col justify-center items-center select-none h-full py-20">
      {about && (
        <div className="flex flex-col justify-center items-center gap-2 pb-14">
          <p className="md:text-base text-sm font-normal">Our Team</p>
          <h1 className="lg:text-5xl font-bold md:text-3xl sm:text-xl text-lg">
            Meet Our Experts
          </h1>
        </div>
      )}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 gap-y-7 lg:px-20 px-10">
        {expes?.map((item, ind) => (
          <div
            key={ind}
            className="w-[350px] h-[450px] bg-cover bg-center"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className="flex flex-col transition-all duration-300 ease-in-out justify-between items-center py-10 px-10 bg-[#6B77E5] bg-opacity-70 opacity-0 hover:opacity-100 w-full h-full">
              <div></div>
              <div className="flex flex-row gap-2">
                <div className="w-auto h-auto p-3 bg-[#40ddb6] rounded-full">
                  <AiOutlineInstagram className="text-[#fff]" />
                </div>

                <div className="w-auto h-auto p-3 bg-[#40ddb6] rounded-full">
                  <BsFacebook className="text-[#fff]" />
                </div>

                <div className="w-auto h-auto p-3 bg-[#40ddb6] rounded-full">
                  <BsPinterest className="text-[#fff]" />
                </div>

                <div className="w-auto h-auto p-3 bg-[#40ddb6] rounded-full">
                  <BsTwitter className="text-[#fff]" />
                </div>
              </div>
              <div className="bg-white w-full flex-col justify-center items-center gap-2 text-center py-3">
                <h1 className="lg:text-xl font-bold md:text-lg text-base">
                  {item.name}
                </h1>
                <p className="md:text-base text-sm font-normal text-[#7D7D7D]">
                  {item.pos}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experts;
