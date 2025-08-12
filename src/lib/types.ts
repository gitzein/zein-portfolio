import type { ReactElement, ReactNode } from "react";

export interface CarouselItem {
  title: string;
  description?: string;
  id: number;
  imageSrc: string;
}

export type ChildrenType = {
  children?: ReactElement | ReactElement[] | ReactNode;
};

export type SectionsIdType =
  | "about"
  | "tech"
  | "project"
  | "edu"
  | "certificate";

export type TechNameType =
  | "Cloudinary"
  | "Css"
  | "ExpressJs"
  | "Html"
  | "JavaScript"
  | "MongoDB"
  | "NextJs"
  | "NodeJs"
  | "ReactJs"
  | "Tailwindcss"
  | "TypeScript";

export type ProjectType = {
  title: string;
  imgSrc: string;
  demoLink: string;
  description: string;
  challenges?: string;
  techStack: TechNameType[];
};

export type ProjectsType = ProjectType[];

export type AccordionDataType = {
  title: string;
  body: string;
}[];
