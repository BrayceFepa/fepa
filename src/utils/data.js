import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Web developement",
    projects: 8,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Mobile App",
    projects: 1,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "UI/UX and Graphic Design",
    projects: +50,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I am a results-driven professional with expertise in feasibility studies, functional analysis, specification drafting, detailed design, project implementation, unit testing, validation, integration, and production launch.",
  // "We use process design to create digital products. Besides that also help their business",
];

export const workExp = [
  {
    place: "Self-Employed, Brayce design",
    tenure: "Since Aug 2022",
    role: "Graphic Designer",
    detail:
      "I worked as a freelance graphic designer, where I specialized in creating visual communication materials such as flyers, banners, labels, logos, invitations, and more.",
  },
  {
    place: "Freelance Web Developer",
    tenure: "Since August 2022",
    role: "Web Developer",
    detail:
      "I work on a diverse range of projects for various clients. My responsibilities encompass design, coding, and ensuring optimal functionality to deliver high-quality solutions.",
  },
  {
    place: "HIVE Technology",
    tenure: "Oct 2022 - Now",
    role: "CTO / Web Developer",
    detail:
      "I served as the CTO and web developer at the startup HIVE, where I worked on various projects while ensuring their scalability and the use of best coding practices.",
  },
  {
    place: "JJMALL",
    tenure: "Nov 2022 - Sept 20233",
    role: "Web developer",
    detail:
      "As  JJMALL developer, my primary role was to contribute to the design and development of both a mobile and web application as part of its operations.",
  },
];

export const comments = [
  {
    img: "./showCase1.png",
  },
  {
    img: "./showCase2.png",
  },
  {
    img: "./showCase3.png",
  },
  {
    img: "./showCase1.png",
  },
  {
    img: "./showCase2.png",
  },
  {
    img: "./showCase3.png",
  },
  {
    img: "./showCase1.png",
  },
  {
    img: "./showCase2.png",
  },
  {
    img: "./showCase3.png",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
