import React from "react";
import team from "../../assets/team.jpg";
import { useNavigate } from "react-router-dom";

const Team = () => {
  const navigate = useNavigate();
  return (
    <section
      className="flex flex-col justify-center items-center bg-cover bg-center min-h-[60vh]"
      style={{ backgroundImage: `url(${team})` }}
    >
      <div
        onClick={() => navigate("/about-us")}
        className="flex flex-col justify-center items-center capitalize lg:text-2xl md:text-xl sm:text-lg text-base text-[#fff] font-semibold bg-opacity-80 bg-[#37393F] hover:bg-opacity-90 cursor-pointer transition-all duration-300 ease-in-out px-14 py-8"
      >
        more about us
      </div>
    </section>
  );
};

export default Team;
