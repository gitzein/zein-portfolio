import type { ReactNode } from "react";
import { TECH_CATEGORIES } from "../../lib/constants";
import type { TechNameType } from "../../lib/types";
import CloudinarySvg from "../svg/CloudinarySvg";
import CssSvg from "../svg/CssSvg";
import ExpressjsSvg from "../svg/ExpressjsSvg";
import HtmlSvg from "../svg/HtmlSvg";
import JavascriptSvg from "../svg/JavascriptSvg";
import MongoDBSvg from "../svg/MongoDBSvg";
import NextjsSvg from "../svg/NextjsSvg";
import NodejsSvg from "../svg/NodejsSvg";
import ReactSvg from "../svg/ReactSvg";
import TailwindSvg from "../svg/TailwindSvg";
import TypescriptSvg from "../svg/TypescriptSvg";
import TechCategory from "./TechCategory";

export const TECH_ICON: Record<
  TechNameType,
  { icon: ReactNode; name: TechNameType }
> = {
  Cloudinary: { icon: <CloudinarySvg />, name: "Cloudinary" },
  Css: { icon: <CssSvg />, name: "Css" },
  ExpressJs: { icon: <ExpressjsSvg />, name: "ExpressJs" },
  Html: { icon: <HtmlSvg />, name: "Html" },
  JavaScript: { icon: <JavascriptSvg />, name: "JavaScript" },
  MongoDB: { icon: <MongoDBSvg />, name: "MongoDB" },
  NextJs: { icon: <NextjsSvg />, name: "NextJs" },
  NodeJs: { icon: <NodejsSvg />, name: "NodeJs" },
  ReactJs: { icon: <ReactSvg />, name: "ReactJs" },
  Tailwindcss: { icon: <TailwindSvg />, name: "Tailwindcss" },
  TypeScript: { icon: <TypescriptSvg />, name: "TypeScript" },
};

function Technologies() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 font-semibold lg:text-base">
      {TECH_CATEGORIES.map((category) => (
        <TechCategory
          categoryName={category.name}
          techStack={category.techStack}
        />
      ))}
    </div>
  );
}
export default Technologies;
