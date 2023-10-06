import React from "react";
import { contact } from "../../database/data";
import { HeroSection } from "../../containers/QuetionsPage";
import { ContactForm, MainSection } from "../../containers/ContactUsPage";

const ContactUs = () => {
  return (
    <>
      <HeroSection
        img={contact.img}
        text={contact.text}
        title1={contact.title1}
      />
      <MainSection />
      <ContactForm />
    </>
  );
};

export default ContactUs;
