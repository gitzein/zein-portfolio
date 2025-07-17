import type { ReactNode } from "react";
import { cn } from "../../lib/utils";
import { motion } from "motion/react";

type PropsType = {
  categoryName: string;
  className?: string;
  children: ReactNode;
};

function TechCategory({ categoryName, children, className }: PropsType) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: "blur(0.2rem)",
        translateY: "-15px",
        scale: 0.5,
      }}
      whileInView={{
        opacity: 1,
        filter: "none",
        translateY: "0px",
        scale: 1,
      }}
      viewport={{ margin: "-10% 0px -10% 0px" }}
      transition={{ ease: "easeIn", duration: 0.8 }}
      className={cn("space-y-4", className)}
    >
      <p>{categoryName}</p>
      <div className="technologies-container">{children}</div>
    </motion.div>
  );
}
export default TechCategory;
