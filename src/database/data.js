import organical from "../assets/organical.png";
import fn from "../assets/fn.png";
import rand from "../assets/rand.png";
import nature from "../assets/nature.png";
import modern from "../assets/modern.png";
import bank from "../assets/bank.png";
import ex from "../assets/ex.png";
import cpu from "../assets/cpu.png";
import code from "../assets/code.png";
import graph from "../assets/graph.png";

export const pages = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/about-us",
  },
  {
    name: "Pages",
    link: "/",
    dropDown: [
      {
        name: "Team",
        link: "/team",
      },
      {
        name: "Projects",
        link: "/projects",
      },
      {
        name: "Plans",
        link: "/plans",
      },
      {
        name: "Frequent Ques",
        link: "/freq-ques",
      },
    ],
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Contact Us",
    link: "/contact-us",
  },
];

export const responsiveData = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/about-us",
  },
  {
    name: "Team",
    link: "/team",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Plans",
    link: "/plans",
  },
  {
    name: "Frequent Ques",
    link: "/freq-ques",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Contact Us",
    link: "/contact-us",
  },
];

export const partners = [
  {
    img: modern,
  },
  {
    img: organical,
  },
  {
    img: rand,
  },
  {
    img: nature,
  },
  {
    img: fn,
  },
];

export const solutions = [
  {
    name1: "Financial",
    name2: "Consultancy",
    img: bank,
  },
  {
    name1: "Business",
    name2: "Management",
    img: graph,
  },
  {
    name1: "Consultants &",
    name2: "Program",
    img: code,
  },
  {
    name1: "Company",
    name2: "Management",
    img: cpu,
  },
  {
    name1: "Financial &",
    name2: "Insurance jobs",
    img: ex,
  },
];
