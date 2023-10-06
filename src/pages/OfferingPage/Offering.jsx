import React from "react";
import { HeroSection } from "../../containers/QuetionsPage";
import { serviceHero } from "../../database/data";
import { Solutions, Testimonials } from "../../containers/LandingPage";
import { Customers, Solutions1 } from "../../containers/OfferingPage";

const Offering = () => {
  return (
    <>
      <HeroSection
        img={serviceHero.img}
        text={serviceHero.text}
        title1={serviceHero.title1}
      />
      <Solutions />
      <Customers />
      <Solutions1 />
      <Testimonials />
    </>
  );
};

export default Offering;
