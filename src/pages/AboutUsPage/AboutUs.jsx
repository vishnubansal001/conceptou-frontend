import React from "react";
import { HeroSection } from "../../containers/QuetionsPage";
import { aboutExp, aboutHero } from "../../database/data";
import { BuisenessPlan, Experienced } from "../../containers/LandingPage";
import { Experts } from "../../containers/TeamPage";
import { Work } from "../../containers/AboutUsPage";

const AboutUs = () => {
  return (
    <>
      <HeroSection
        img={aboutHero.img}
        text={aboutHero.text}
        title1={aboutHero.title1}
      />
      <BuisenessPlan />
      <Work />
      <Experienced data={aboutExp} />
      <Experts about={true} />
    </>
  );
};

export default AboutUs;
