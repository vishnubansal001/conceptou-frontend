import React from "react";
import { HeroSection } from "../../containers/QuetionsPage";
import { projectsHero } from "../../database/data";
import { Project } from "../../containers/ProjectsPage";

const Projects = () => {
  return (
    <>
      <HeroSection
        img={projectsHero.img}
        text={projectsHero.text}
        title1={projectsHero.title1}
        title2={projectsHero.title2}
      />
      <Project />
    </>
  );
};

export default Projects;
