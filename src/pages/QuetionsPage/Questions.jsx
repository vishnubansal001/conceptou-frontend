import React from "react";
import { HeroSection,FreqQuestions } from "../../containers/QuetionsPage";
import { freq } from "../../database/data";

const Questions = () => {
  return (
    <>
      <HeroSection
        img={freq.img}
        text={freq.text}
        title1={freq.title1}
        title2={freq.title2}
      />
      <FreqQuestions />
    </>
  );
};

export default Questions;
