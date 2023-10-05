import React from "react";
import {
  BuisenessPlan,
  Grow,
  HeroSection,
  Projects,
  Solutions,
} from "../../containers/LandingPage";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <BuisenessPlan />
      <Solutions />
      <Grow />
      <Projects />
    </>
  );
};

export default LandingPage;
