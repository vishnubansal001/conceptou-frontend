import React from "react";
import { HeroSection } from "../../containers/QuetionsPage";
import { newsHero } from "../../database/data";
import Posts from "../../containers/LandingPage/Posts";

const Updated = () => {
  return (
    <>
      <HeroSection
        img={newsHero.img}
        text={newsHero.text}
        title1={newsHero.title1}
        title2={newsHero.title2}
      />
      <Posts blog={true} />
    </>
  );
};

export default Updated;
