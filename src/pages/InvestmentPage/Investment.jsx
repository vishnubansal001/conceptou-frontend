import React from "react";
import { projects1Hero } from "../../database/data";
import { HeroSection } from "../../containers/QuetionsPage";
import { Project } from "../../containers/ProjectsPage";
import { Infor } from "../../containers/InvestmentPage";
import { useParams } from "react-router-dom";

const Investment = () => {
  const { projectId } = useParams();
  return (
    <>
      <HeroSection
        img={projects1Hero.img}
        text={projects1Hero.text}
        title1={projects1Hero.title1}
        title2={projects1Hero.title2}
      />
      <Infor ind={projectId} />
      <Project single={true} />
    </>
  );
};

export default Investment;
