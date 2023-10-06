import React from "react";
import { HeroSection } from "../../containers/QuetionsPage";
import { plansHero } from "../../database/data";
import { MainSection } from "../../containers/PlansPage";

const Plans = () => {
  return (
    <>
      <HeroSection
        img={plansHero.img}
        text={plansHero.text}
        title1={plansHero.title1}
        title2={plansHero.title2}
      />
      <MainSection />
    </>
  );
};

export default Plans;
