import type { CarouselItem, ProjectsType, TechNameType } from "./types";

export const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    title: "freeCodeCamp's JavaScript Algorithms and Data Structures",
    id: 1,
    imageSrc: "/assets/freeCodeCampCertificate.png",
  },
  {
    title: "TOEFL",
    description: "score: 524",
    id: 2,
    imageSrc: "/assets/toeflCertificate.png",
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
    name: "Projects",
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
    imgSrc: "/assets/digist-homepage.jpg",
    demoLink: "https://digist-web-app.vercel.app/",
    description:
      "This project was my first venture into independent development, created specifically to escape 'tutorial hell.' Inspired by my long-time favorite platform, Pinterest, my goal was to build a visually engaging, image-focused web application. The core of this project is a dynamic image gallery with features for user-interest based content.",
    challenges:
      "One of the most valuable lessons from this project was the complexity of implementing a responsive masonry layout with infinite scroll. This required a deep understanding of DOM manipulation and performance optimization to ensure a smooth user experience as images loaded dynamically. It was a challenging yet rewarding experience that helped solidify my skills in building robust, interactive UIs.",
    techStack: ["NextJs", "TypeScript", "Tailwindcss", "MongoDB", "Cloudinary"],
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
