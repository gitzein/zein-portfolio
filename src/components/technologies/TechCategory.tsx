import type { ReactNode } from "react";
import { cn } from "../../lib/utils";
import {
  motion,
  type TargetAndTransition,
  type Transition,
  type VariantLabels,
  type ViewportOptions,
} from "motion/react";

type PropsType = {
  categoryName: string;
  className?: string;
  children: ReactNode;
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
};
const divTransition: Transition<any> | undefined = {
  ease: "easeIn",
  duration: 0.8,
};

function TechCategory({ categoryName, children, className }: PropsType) {
  return (
    <motion.div
      initial={initDivStyle}
      whileInView={inViewDivStyle}
      viewport={divViewport}
      transition={divTransition}
      className={cn("space-y-2", className)}
    >
      <p>{categoryName}</p>
      <div className="technologies-container">{children}</div>
    </motion.div>
  );
}
export default TechCategory;
