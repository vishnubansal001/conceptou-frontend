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
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import news1 from "../assets/news1.png";
import news2 from "../assets/news2.png";

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

export const testimonials = [
  {
    name: "Nattasha Kelvin",
    position: "Designer",
    text: "dd an excerpt from your personal biography, or simply let the world know who you are and what you have to offer. Connect with your site visitor's on a personal level and make sure that your site.",
    img: p1,
  },
  {
    name: "Cincinnati",
    position: "Designer",
    text: "Leverage agile frameworks to provide a robust synopsis for high level overviews",
    img: p2,
  },
];

export const appoint = [
  {
    name: "Planning",
    text1: "Leverage agile frameworks to provide synopsis for high",
    text2: " level overviews.",
  },
  {
    name: "Briefing",
    text1: "Leverage agile frameworks to provide synopsis for high",
    text2: " level  approaches ",
  },
  {
    name: "Evaluation",
    text1: "Leverage agile frameworks to provide synopsis for high",
    text2: " level overviews Iterative.",
  },
];

export const news = [
  {
    img: news1,
    name1: "A Business Consulting That Can",
    name2: "Produce",
    date: "April 13/ 2021",
    by: "Miranda Doe",
    for: "Business",
    text1: "Leverage agile frameworks to provide a robust synopsis for high",
    text2: "level overviews.Iterative approaches to corporate strategy foster",
    text3: "collaborative thinking.",
  },
  {
    img: news2,
    name1: "Team Identifiers, Benefits, and How ",
    name2: "to Build One that Works",
    date: "April 13/ 2021",
    by: "Miranda Doe",
    for: "Business",
    text1: "Leverage agile frameworks to provide a robust synopsis for high",
    text2: "level overviews.Iterative approaches to corporate strategy foster",
    text3: "collaborative thinking.",
  },
];
