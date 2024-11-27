import project1 from "../assets/project1.png";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.jpeg";

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodejsLine,
  RiBracesFill,
} from "@remixicon/react";
import { RiDatabaseLine, RiCodeSSlashLine } from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Azril Pramudia",
  role: "Web Development",
  subheading:
    "I am a student at Islamic University of Nusantara, I am a beginner web developer enthusiast with 5 months of experience learning React, JavaScript, Nodejs, and Express.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Himatif Uninus Website",
    description:
      "an organizational website, namely the student association of informatics engineering at the Islamic University of Nusantara which focuses on education, information, and history. This website is still in the development stage using React, Vite, TypeScript, and TailwindCSS for the frontend.",
    techStack: ["React", "Vite", "TypeScript", "TailwindCSS"],
    imgSrc: project1,
    link: "https://github.com/Azrilpramudia/uninus-himatif",
  },
  {
    id: 2,
    title: "Fullstack CRUD",
    description:
      "Project Create, Read, Update, Delete (CRUD) using NodeJs and Express for the backend, for the frontend using React and for the database using MySQL.",
    techStack: ["Node.Js", "Express", "React", "MySQL"],
    imgSrc: project2,
    link: "https://github.com/Azrilpramudia/FullStack-CRUD-NodeJs",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills. Fully responsive and optimized for performance.",
    techStack: [
      "React",
      "TailwindCSS",
      "Vite",
      "JavaScript",
      "Gsap",
      "Remix Icon",
    ],
    imgSrc: project3,
    link: "",
  },
  {
    id: 4,
    title: "Snake Games",
    description:
      "a snake game with some features of game control mechanics, restart game, and game over. This project uses HTML, CSS, and JavaScript",
    techStack: ["HTML", "CSS", "JavaScript"],
    imgSrc: project4,
    link: "https://github.com/Azrilpramudia/snake-games",
  },
  {
    id: 5,
    title: "Backend Login & Register",
    description:
      "A login & register for users with CRUD, Authentication, JWT token, and bcrypt features",
    techStack: [
      "Node.Js",
      "Express",
      "React",
      "TailwindCSS",
      "Vite",
      "MySQL",
      "Bcrypt",
      "JWT",
    ],
    imgSrc: project5,
    link: "https://github.com/Azrilpramudia/backend-test-login-register",
  },
  {
    id: 6,
    title: "Agriculture Website",
    description:
      "Agriculture website that focuses on education for beginner farmers who want to learn about agriculture.",
    techStack: ["Node.js", "Express", "React", "Vite", "TailwindCSS", "MySQL"],
    imgSrc: project6,
    link: "https://github.com/Azrilpramudia/nineteen-hidro-akuaponik-massive-project",
  },
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "Node.js",
    icon: <RiNodejsLine className="text-green-500" />,
  },
  {
    name: "MySQL",
    icon: <RiDatabaseLine className="text-orange-500" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "Express",
    icon: <RiBracesFill className="text-gray-500" />,
  },
];

export const EXPERIENCES = [
  {
    yearRange: "2024 - Present",
    role: "Web Development & UI UX (Study Independent Kampus Merdeka Mandiri)",
    company: "Infinite Learning Indonesia",
    description:
      "I am currently studying independently at the Infinite Learning Indonesia company which focuses on Web Development and UI UX",
    techStack: [
      "HTML",
      "CSS",
      "Javascript",
      "React.js",
      "TailwindCSS",
      "Node.js",
      "Express",
      "MySQL",
    ],
  },
  {
    yearRange: "2023 - 2024",
    role: "Head of Information and Communication Division (KOMINFO)",
    company: "Himpunan Mahasiswa Teknik Informatika UNINUS",
    description:
      "I am the head of communication and information (KOMINFO) who carries out several tasks such as developing the organization's website, managing social media accounts, designing posters for Instagram feed content, and assistant mentor for Informatics Coding Camp Season 3 (ICC)",
    techStack: [
      "Communication",
      "Public Speaking",
      "Teamwork",
      "Time Management",
      "Organizational Abilities",
    ],
  },
  {
    yearRange: "2022 - 2022",
    role: "DevOps Engineer & Cloud Server Training",
    company: "ID-Networkers",
    description:
      "Participated in DevOps and Cloud Server training from the ID-Networkers company which was held at SMKN 1 Cihampelas school for 1 month by learning DevOps, Cloud Server, Linux Server, Cisco CCNA, and Optical Fiber",
    techStack: [
      "DevOps",
      "Cisco CCNA",
      "Optical Fiber",
      "Linux Server",
      "DevOps",
      "Cloud",
    ],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Engineering",
    institution: "Islamic Nusantara University",
    duration: "2022 - Present",
    description:
      "Undergraduate Informatics Engineering at Islamic Nusantara University",
  },
  {
    id: 2,
    degree: "Web Development & UI UX",
    institution: "Infinite Learning Indonesia",
    duration: "2024 - Present",
    description:
      "I am currently taking an independent independent campus education program at an infinite learning company with a Web Development and UI UX role",
  },
  {
    id: 3,
    degree: "Computer and Network Engineering",
    institution: "SMK Negeri 1 Cihampelas",
    duration: "2019 - 2022",
    description:
      "I am a graduate of SMKN 1 Cihampelas majoring in computer and network engineering",
  },
];
