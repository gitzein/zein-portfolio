import {
  motion,
  type TargetAndTransition,
  type Transition,
  type VariantLabels,
  type ViewportOptions,
} from "motion/react";
import type { TechNameType } from "../../lib/types";
import { cn } from "../../lib/utils";
import Technology from "./Technology";
import { TECH_ICON } from "../../lib/constants";

type PropsType = {
  categoryName: string;
  className?: string;
  techStack: TechNameType[];
};

const initDivStyle: boolean | TargetAndTransition | VariantLabels | undefined =
  {
    opacity: 0,
    filter: "blur(0.2rem)",
    translateY: "-15px",
    scale: 0.8,
  };

const inViewDivStyle: TargetAndTransition | VariantLabels | undefined = {
  opacity: 1,
  filter: "none",
  translateY: "0px",
  scale: 1,
};

const divViewport: ViewportOptions | undefined = {
  margin: "-10% 0px -10% 0px",
  once: true,
};
const divTransition: Transition<any> | undefined = {
  ease: "easeIn",
  duration: 0.8,
};

function TechCategory({ categoryName, className, techStack }: PropsType) {
  return (
    <motion.div
      initial={initDivStyle}
      whileInView={inViewDivStyle}
      viewport={divViewport}
      transition={divTransition}
      className={cn("space-y-2", className)}
    >
      <p>{categoryName}</p>
      <div className="technologies-container">
        {techStack.map((v) => (
          <Technology name={TECH_ICON[v].name} children={TECH_ICON[v].icon} />
        ))}
      </div>
    </motion.div>
  );
}
export default TechCategory;
