import React, { useState } from "react";
import { pages, responsiveData } from "../../database/data";
import { useNavigate } from "react-router-dom";
import { BiTime } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsPinterest } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import logo from "../../assets/logo.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import HamBurgerButton from "./HamBurgerButton";

const Navbar = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col justify-center items-center gap-0 sticky w-full">
      <div className="hidden md:flex flex-col justify-center items-center px-10 w-full bg-[#37393F] py-3 text-white">
        <div className="flex md:flex-row flex-col justify-around w-full gap-y-4">
          <div className="flex lg:flex-row flex-col lg:justify-center justify-between items-center gap-6 md:w-auto w-full">
            <div className="flex flex-row justify-center items-center gap-2">
              <IoLocationOutline className="text-[#40DDB6] text-xl font-semibold" />
              <p className="select-none">24 Olive Street, Prairie, NY 53590</p>
            </div>
            <div className="flex flex-row justify-center items-center gap-2">
              <FiMail className="text-[#40DDB6] text-xl font-semibold" />
              <p className="select-none">whitecollar@gmail.com</p>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col lg:justify-center justify-between items-center gap-6 md:w-auto w-full">
            <div className="flex flex-row justify-center items-center gap-2">
              <BiTime className="text-[#40DDB6] text-xl font-semibold" />
              <p className="select-none">Mon - Fri: 8:00 am - 5:00 pm</p>
            </div>
            <div className="flex flex-row justify-center items-center gap-2">
              <AiOutlineInstagram className="text-2xl hover:text-[#40DDB6] transition-all duration-300 cursor-pointer ease-in-out" />
              <BsFacebook className="text-lg hover:text-[#40DDB6] transition-all duration-300 cursor-pointer ease-in-out" />
              <BsTwitter className="text-lg hover:text-[#40DDB6] transition-all duration-300 cursor-pointer ease-in-out" />
              <BsPinterest className="text-lg hover:text-[#40DDB6] transition-all duration-300 cursor-pointer ease-in-out" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full py-8 md:px-16 px-4">
        <div className="flex flex-row md:justify-around justify-between w-full gap-8">
          <div
            className="flex flex-col justify-center items-center cursor-pointer select-none"
            onClick={() => navigate("/")}
          >
            <img src={logo} alt="img/logo" />
          </div>
          <div className="hidden lg:flex gap-7 justify-center items-center">
            <div className="flex gap-7 justify-center items-center">
              {pages?.map((item, index) => (
                <div key={index} className="dropdown dropdown-hover">
                  <p
                    className="flex flex-row justify-center items-center text-lg text-[#37393F] font-semibold select-none cursor-pointer"
                    onClick={() => navigate(`${item.link}`)}
                    tabIndex={0}
                  >
                    {item.name}
                    {item.name === "Pages" && (
                      <RiArrowDropDownLine className="text-lg" />
                    )}
                  </p>
                  {item.dropDown && item.dropDown.length > 0 && (
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[999] menu px-4 py-3 shadow bg-base-100 rounded-box w-52"
                    >
                      {item?.dropDown.map((i, ind) => (
                        <p
                          key={ind}
                          className={`text-lg text-[#37393F] font-semibold select-none cursor-pointer hover:bg-gray-200 ${
                            ind !== item.dropDown.length - 1 &&
                            "border-b-2 border-b-[#37393F] pb-1"
                          }`}
                          onClick={() => navigate(`${i.link}`)}
                        >
                          {i.name}
                        </p>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center items-center">
              <button className="capitalize text-lg text-[#fff] font-semibold bg-[#6B77E5] hover:bg-[#5f66a8] transition-all duration-300 ease-in-out px-4 py-4">
                get counseling
              </button>
            </div>
          </div>
          <div className="flex lg:hidden">
            <HamBurgerButton isOpen={isOpen} handleClick={handleToggle} />
            <div
              className={`md:hidden fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-end ${
                isOpen ? "visible" : "invisible"
              }`}
              onClick={handleToggle}
            >
              <div
                className={`bg-white p-4 w-[90%] h-full rounded shadow-lg transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "visible opacity-100 translate-x-0"
                    : "invisible opacity-0 translate-x-6"
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-end">
                  <HamBurgerButton isOpen={true} handleClick={handleToggle} />
                </div>
                <ul>
                  {responsiveData?.map((item, ind) => (
                    <p
                      key={ind}
                      className="text-lg text-[#37393F] font-semibold select-none cursor-pointer"
                      onClick={() => navigate(`${item.link}`)}
                    >
                      {item.name}
                    </p>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
