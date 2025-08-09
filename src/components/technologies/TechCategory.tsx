import { motion } from "motion/react";
import {
  DIV_ANIMATION,
  DIV_TRANSITION,
  DIV_VIEWPORT,
  INIT_DIV_STYLE,
  TECH_ICON,
} from "../../lib/constants";
import type { TechNameType } from "../../lib/types";
import { cn } from "../../lib/utils";
import Technology from "./Technology";

type PropsType = {
  categoryName: string;
  className?: string;
  techStack: TechNameType[];
};

function TechCategory({ categoryName, className, techStack }: PropsType) {
  return (
    <motion.div
      initial={INIT_DIV_STYLE}
      whileInView={DIV_ANIMATION}
      viewport={DIV_VIEWPORT}
      transition={DIV_TRANSITION}
      className={cn("space-y-2", className)}
    >
      <p>{categoryName}</p>
      <div className="technologies-container">
        {techStack.map((v, i) => (
          <Technology
            name={TECH_ICON[v].name}
            children={TECH_ICON[v].icon}
            key={i}
          />
        ))}
      </div>
    </motion.div>
  );
}
export default TechCategory;
