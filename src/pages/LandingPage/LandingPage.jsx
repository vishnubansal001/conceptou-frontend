import React from "react";
import {
  Appointment,
  BuisenessPlan,
  Experienced,
  Grow,
  HeroSection,
  Posts,
  Projects,
  Solutions,
  Team,
  Testimonials,
} from "../../containers/LandingPage";
import { homeExp } from "../../database/data";

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
      <Posts />
      <Experienced data={homeExp} />
    </>
  );
};

export default LandingPage;
