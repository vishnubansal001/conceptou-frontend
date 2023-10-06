import React from "react";
import { HeroSection } from "../../containers/QuetionsPage";
import { team } from "../../database/data";
import { Experts, Prof } from "../../containers/TeamPage";

const Team = () => {
  return (
    <>
      <HeroSection img={team.img} text={team.text} title1={team.title1} />
      <Experts />
      <Prof />
    </>
  );
};

export default Team;
