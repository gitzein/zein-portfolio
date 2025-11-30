import type { ReactElement } from "react";
import CloudinarySvg from "../components/svg/CloudinarySvg";
import CssSvg from "../components/svg/CssSvg";
import ExpressjsSvg from "../components/svg/ExpressjsSvg";
import HtmlSvg from "../components/svg/HtmlSvg";
import JavascriptSvg from "../components/svg/JavascriptSvg";
import MongoDBSvg from "../components/svg/MongoDBSvg";
import NextjsSvg from "../components/svg/NextjsSvg";
import NodejsSvg from "../components/svg/NodejsSvg";
import ReactSvg from "../components/svg/ReactSvg";
import TailwindSvg from "../components/svg/TailwindSvg";
import TypescriptSvg from "../components/svg/TypescriptSvg";
import type { CarouselItem, ProjectsType, TechNameType } from "./types";
import type {
  TargetAndTransition,
  Transition,
  VariantLabels,
  ViewportOptions,
} from "motion";

export const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    title: "freeCodeCamp's JavaScript Algorithms and Data Structures",
    id: 1,
    imageSrc: "./assets/freeCodeCampCertificate.png",
  },
  {
    title: "TOEFL",
    description: "score: 524",
    id: 2,
    imageSrc: "./assets/toeflCertificate.png",
  },
];

export const NAV_LINKS = [
  {
    name: "About",
    id: "about",
  },
  {
    name: "Technology",
    id: "tech",
  },
  {
    name: "Project",
    id: "project",
  },
  {
    name: "Education",
    id: "edu",
  },
  {
    name: "Certificate",
    id: "certificate",
  },
];

export const PROJECTS: ProjectsType = [
  {
    title: "Digist: a photo sharing platform",
    imgSrc: "./assets/digist-homepage.jpg",
    demoLink: "https://digist-web-app.vercel.app/",
    description:
      "This project was my first venture into independent development, created specifically to escape 'tutorial hell.' Inspired by my long-time favorite platform, Pinterest, my goal was to build a visually engaging, image-focused web application. The core of this project is a dynamic image gallery with features for user-interest based content.",
    challenges:
      "One of the most valuable lessons from this project was the complexity of implementing a responsive masonry layout with infinite scroll. This required a deep understanding of DOM manipulation and performance optimization to ensure a smooth user experience as images loaded dynamically. It was a challenging yet rewarding experience that helped solidify my skills in building robust, interactive UIs.",
    techStack: ["NextJs", "TypeScript", "Tailwindcss", "MongoDB", "Cloudinary"],
  },
  {
    title: "Wordle Clone: Continuous Word Game",
    imgSrc: "./assets/wordle.png",
    demoLink: "https://gitzein.github.io/wordle-game/",
    description:
      "A full-featured, client-side implementation of the popular word-guessing game. This project showcases proficiency in front-end development, state management, and efficient data structure use. Players can instantly start a new, random puzzle after every game, providing continuous, unlimited playability.",
    techStack: ["ReactJs", "TypeScript", "Tailwindcss"],
  },
];

export const TECH_CATEGORIES: {
  name: string;
  techStack: TechNameType[];
}[] = [
  {
    name: "Markup/Styling Languages & Libraries",
    techStack: ["Html", "Css", "Tailwindcss"],
  },
  {
    name: "Programming Languages",
    techStack: ["JavaScript", "TypeScript"],
  },
  {
    name: "Frontend Frameworks/Libraries",
    techStack: ["ReactJs", "NextJs"],
  },
  {
    name: "Backend Technologies",
    techStack: ["NodeJs", "ExpressJs"],
  },
];

export const TECH_ICON: Record<
  TechNameType,
  { icon: ReactElement; name: TechNameType }
> = {
  Cloudinary: { icon: CloudinarySvg({}), name: "Cloudinary" },
  Css: { icon: CssSvg({}), name: "Css" },
  ExpressJs: { icon: ExpressjsSvg({}), name: "ExpressJs" },
  Html: { icon: HtmlSvg({}), name: "Html" },
  JavaScript: { icon: JavascriptSvg({}), name: "JavaScript" },
  MongoDB: { icon: MongoDBSvg({}), name: "MongoDB" },
  NextJs: { icon: NextjsSvg({}), name: "NextJs" },
  NodeJs: { icon: NodejsSvg({}), name: "NodeJs" },
  ReactJs: { icon: ReactSvg({}), name: "ReactJs" },
  Tailwindcss: { icon: TailwindSvg({}), name: "Tailwindcss" },
  TypeScript: { icon: TypescriptSvg({}), name: "TypeScript" },
};

export const INIT_DIV_STYLE:
  | boolean
  | TargetAndTransition
  | VariantLabels
  | undefined = {
  opacity: 0,
  filter: "blur(0.3rem)",
  translateY: "-15px",
  scale: 0.8,
};

export const DIV_ANIMATION: TargetAndTransition | VariantLabels | undefined = {
  opacity: 1,
  filter: "none",
  translateY: "0px",
  scale: 1,
};

export const DIV_TRANSITION: Transition<any> | undefined = {
  ease: "easeIn",
  duration: 0.8,
};

export const DIV_VIEWPORT: ViewportOptions | undefined = {
  margin: "-10% 0px -10% 0px",
  once: true,
};
