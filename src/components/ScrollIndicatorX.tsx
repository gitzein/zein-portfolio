import { motion, MotionValue } from "motion/react";

type PropsType = {
  scrollYProgress: MotionValue<number>;
};

function ScrollIndicatorX({ scrollYProgress }: PropsType) {
  return (
    <motion.div
      id="scroll-indicator"
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 5,
        originX: 0,
        zIndex: 51,
      }}
      className="bg-yellow-500/50 lg:hidden dark:bg-violet-400/50"
    />
  );
}
export default ScrollIndicatorX;
