import Ping from "./Ping";
import ThemeButton from "./ThemeButton";
import { motion, MotionValue } from "motion/react";

function SideNav({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  return (
    <div className="fixed top-[50%] right-0 flex w-1/6 -translate-y-[50%] justify-start gap-4 text-sm max-lg:hidden">
      {/* <StarBorder as="div" thickness={3} speed="5s">
              </StarBorder> */}
      <div className="flex flex-col items-center gap-4">
        <div className="w-fit max-md:hidden">
          <ThemeButton />
        </div>
        <div className="relative border-2 border-dashed border-neutral-200">
          <nav>
            <ul className="space-y-4 text-center">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#tech">Technology</a>
              </li>
              <li>
                <a href="#project">Projects</a>
              </li>
              <li>
                <a href="#edu">Education</a>
              </li>
            </ul>
          </nav>
          <div className="absolute top-0 -right-4 h-full translate-x-[100%]">
            <div className="relative flex h-full flex-col justify-between">
              <motion.div
                id="scroll-indicator"
                style={{
                  scaleY: scrollYProgress,
                  position: "absolute",
                  top: "7%",
                  left: "50%",
                  bottom: "7%",
                  width: 2,
                  translateX: "-50%",
                  originY: 0,
                  backgroundColor: "#c4b4ff",
                }}
              />
              <Ping />
              <Ping />
              <Ping />
              <Ping />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="[&_svg]:size-20">
                <StarConstellation />
              </div> */}
    </div>
  );
}
export default SideNav;
