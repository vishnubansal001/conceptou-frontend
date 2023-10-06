import React, { useState } from "react";
import { buttons, ques_ans } from "../../database/data";

const FreqQuestions = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };
  return (
    <section className="flex flex-col justify-center items-center select-none h-full py-20">
      <div className="flex md:flex-row flex-col justify-start items-start w-full gap-10 lg:px-10 px-10 py-10">
        <>
          <div className="flex flex-col gap-5 px-5 py-7 sm:w-[70%] lg:w-[50%] w-full bg-[#efeeee]">
            <h1 className="lg:text-3xl font-bold md:text-2xl sm:text-xl text-lg">
              Categories
            </h1>
            {buttons?.map((buttonNumber, ind) => (
              <button
                key={ind}
                className={`p-4 mx-2 ${
                  activeButton === ind
                    ? "bg-[#6B77E5] text-white"
                    : "bg-white text-[#6B77E5]"
                }`}
                onClick={() => handleButtonClick(ind)}
              >
                {buttonNumber}
              </button>
            ))}
          </div>
        </>

        <div className="flex flex-col justify-start items-start gap-4">
          {ques_ans[activeButton].ques_ans?.map((qa, ind) => (
            <div
              className="collapse collapse-arrow border-[1px] border-black rounded-none"
              key={ind}
            >
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
                {qa.ques}
              </div>
              <div className="collapse-content">
                <p>{qa.ans}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreqQuestions;
