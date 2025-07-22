import { motion, MotionValue } from "motion/react";
import Ping from "./Ping";
import ThemeButton from "./button/ThemeButton";

type PropsType = {
  scrollYProgress: MotionValue<number>;
};

function SideNav({ scrollYProgress }: PropsType) {
  return (
    <div className="fixed top-[50%] -right-5 flex w-1/6 -translate-y-[50%] justify-start gap-4 text-sm max-lg:hidden">
      <div className="flex flex-col items-center gap-2">
        <div className="w-fit max-md:hidden">
          <ThemeButton />
        </div>
        <div className="relative rounded-md bg-yellow-100/20 px-2 py-1 backdrop-blur-sm dark:bg-violet-100/20">
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
              <li>
                <a href="#certificate">Certificate</a>
              </li>
            </ul>
          </nav>
          <div className="absolute top-[50%] -right-4 translate-x-[100%] -translate-y-[50%]">
            <div className="relative flex flex-col gap-4">
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
                }}
                className="bg-yellow-500/50 dark:bg-violet-400/50"
              />
              <Ping />
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
