import { motion, MotionValue } from "motion/react";
import Ping from "./Ping";
import ThemeButton from "./button/ThemeButton";
import { NAV_LINKS } from "../lib/constants";
import useSectionSpy from "../hooks/useSectionSpy";
import { cn } from "../lib/utils";

type PropsType = {
  scaleX: MotionValue<number>;
};

function SideNav({ scaleX }: PropsType) {
  const [activeSection] = useSectionSpy();

  return (
    <div className="fixed top-[50%] -right-5 flex w-1/6 -translate-y-[50%] justify-start gap-2 text-sm max-lg:hidden">
      <div className="flex flex-col items-center gap-2">
        <div className="w-fit max-md:hidden">
          <ThemeButton />
        </div>
        <div className="relative rounded-md bg-yellow-100/20 p-2 backdrop-blur-sm dark:bg-violet-100/20">
          <nav>
            <ul className="space-y-4 text-center font-semibold">
              {NAV_LINKS.map((link, i) => (
                <li key={i} className="relative">
                  <a
                    href={"#" + link.id}
                    className={cn("opacity-75", {
                      "opacity-100": link.id === activeSection,
                    })}
                  >
                    {link.name}
                  </a>
                  <Ping
                    active={link.id === activeSection}
                    className="absolute top-[50%] -right-8 z-20 translate-y-[-50%]"
                  />
                </li>
              ))}
            </ul>
          </nav>
          <motion.div
            id="scroll-indicator"
            style={{
              scaleY: scaleX,
              position: "absolute",
              top: "10%",
              right: "-1rem",
              bottom: "10%",
              width: 2,
              translateX: "-50%",
              originY: 0,
              zIndex: 10,
            }}
            className="relative bg-yellow-500/50 dark:bg-violet-400/50"
          />
          {/* <div className="absolute top-[50%] -right-2 min-h-full w-4 translate-x-[100%] -translate-y-[50%]">
            <div className="relative min-h-full w-full">
              <Ping />
              <Ping />
              <Ping />
              <Ping />
              <Ping />
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="[&_svg]:size-20">
                <StarConstellation />
              </div> */}
    </div>
  );
}
export default SideNav;
