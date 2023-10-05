import React from "react";
import {
  Appointment,
  BuisenessPlan,
  Grow,
  HeroSection,
  Projects,
  Solutions,
  Team,
  Testimonials,
} from "../../containers/LandingPage";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <BuisenessPlan />
      <Solutions />
      <Grow />
      <Projects />
      <Testimonials />
      <Appointment />
      <Team />
    </>
  );
};

export default LandingPage;
