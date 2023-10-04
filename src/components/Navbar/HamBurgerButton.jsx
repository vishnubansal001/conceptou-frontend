import React from "react";

const HamBurgerButton = ({isOpen,handleClick}) => {
  return (
    <button
      onClick={handleClick}
      className={`flex flex-col items-center justify-center w-10 h-10 p-2 rounded-md`}
    >
      <div
        className={`w-6 h-0.5 bg-black transition-all transform ${
          isOpen ? "rotate-45 translate-y-[0.100rem]" : ""
        }`}
      ></div>
      <div
        className={`w-6 h-0.5 bg-black my-1 transition-all opacity-100 ${
          isOpen ? "hidden" : ""
        }`}
      ></div>
      <div
        className={`w-6 h-0.5 bg-black transition-all transform ${
          isOpen ? "-rotate-45 -translate-y-[0.100rem]" : ""
        }`}
      ></div>
    </button>
  );
};

export default HamBurgerButton;
