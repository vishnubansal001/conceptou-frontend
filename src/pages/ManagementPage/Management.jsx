import React from "react";
import { HeroSection } from "../../containers/QuetionsPage";
import { serviceSingleHero } from "../../database/data";

const Management = () => {
  return (
    <>
      <HeroSection
        img={serviceSingleHero.img}
        text={serviceSingleHero.text}
        title1={serviceSingleHero.title1}
        title2={serviceSingleHero.title2}
      />
    </>
  );
};

export default Management;
