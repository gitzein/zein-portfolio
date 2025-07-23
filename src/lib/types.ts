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
