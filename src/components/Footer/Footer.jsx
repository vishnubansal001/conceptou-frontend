import React from "react";
import { footers } from "../../database/data";
import { BsFacebook, BsTwitter, BsPinterest } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-start items-start select-none h-full bg-[#37393F] text-white mt-10">
      <div className="flex flex-col w-full md:px-20 px-10 py-10 gap-y-10">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pb-7 border-b-2 border-b-[#6C6D72]">
          <div className="lg:col-span-2 col-span-1">
            <img src={logo} alt="" />
          </div>
          <div className="flex flex-row justify-start items-center gap-5">
            <div className="w-auto h-auto p-3 bg-[#4C4D52] rounded-full text-[#40DDB6]">
              <IoIosCall className="text-xl" />
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <h1 className="font-semibold md:text-lg text-base">Call Us</h1>
              <p className="md:text-base text-sm font-normal">
                +01 569 896 654
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-start items-center gap-x-5 gap-y-5">
            <div className="w-auto h-auto p-3 bg-[#4C4D52] rounded-full text-[#40DDB6]">
              <FiMail className="text-xl" />
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <h1 className="font-semibold md:text-lg text-base">Mail Us</h1>
              <p className="md:text-base text-sm font-normal">
                Info@Example.com
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-start items-center gap-5">
            <div className="w-auto h-auto p-3 bg-[#4C4D52] rounded-full text-[#40DDB6]">
              <IoLocationOutline className="text-xl" />
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <h1 className="font-semibold md:text-lg text-base">Location</h1>
              <p className="md:text-base text-sm font-normal">
                Amsterdam, 109-74
              </p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pb-7 border-b-2 border-b-[#6C6D72] gap-y-5">
          {footers?.map((item, ind) => (
            <div
              key={ind}
              className="flex flex-col justify-start items-start gap-3"
            >
              <h1 className="font-semibold md:text-lg text-base text-[#40DDB6] cursor-pointer hover:underline">
                {item.name}
              </h1>
              <div className="flex flex-col justify-start items-start gap-1">
                {item.pages?.map((i, id) => (
                  <p
                    key={id}
                    className="md:text-base text-sm font-normal cursor-pointer hover:underline"
                  >
                    {i.name}
                  </p>
                ))}
              </div>
            </div>
          ))}
          <div className="lg:col-span-2 col-span-1 ">
            <div className="flex flex-col justify-start items-start gap-3 bg-[#4C4D52] px-5 py-6 max-w-[25rem]">
              <h1 className="lg:text-2xl font-semibold md:text-xl sm:text-lg text-base">
                Subscribe
              </h1>
              <p className="md:text-base text-sm font-normal">
                Join Our Mailing List & to get our news.
              </p>
              <div className="flex sm:flex-row flex-col gap-y-4">
                <input
                  type="email"
                  name=""
                  id=""
                  className="w-full px-3 py-2 bg-[#f8f8f8] text-black outline-none placeholder:text-[#37393F]"
                  placeholder="Your Email Address"
                />
                <div className="flex flex-col justify-center items-center">
                  <button className="capitalize text-lg text-[#fff] font-semibold bg-[#6B77E5] hover:bg-[#5f66a8] transition-all duration-300 ease-in-out px-6 py-3">
                    subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:justify-between justify-start items-start gap-y-5 gap-x-5">
          <p>
            Copyright © <span className="text-[#40DDB6]">WhiteCollar</span> | Designed by <span className="text-[#6B77E5]">VictorFlow</span> Templates - Powered
            by Webflow
          </p>
          <div className="flex flex-row gap-2 justify-center items-center">
            <p>Follow :</p>
            <AiOutlineInstagram />
            <BsFacebook />
            <BsTwitter />
            <BsPinterest />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
