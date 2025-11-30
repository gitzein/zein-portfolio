import { motion, type Variants } from "motion/react";
import { useState, type MouseEvent as ReactMouseEvent } from "react";
import type { AccordionDataType } from "../lib/types";
import { cn } from "../lib/utils";
import ArrowDownSvg from "./svg/ArrowDownSvg";

type PropsType = {
  data: AccordionDataType;
};

const variants: Variants = {
  visible: {
    height: "auto",
  },
  hidden: {
    height: "0px",
  },
};

function Accordion({ data }: PropsType) {
  const [active, setActive] = useState<number | null>(null);

  const handleClick = (e: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => {
    const index = (e.target as HTMLButtonElement).dataset.index;
    if (!index) return;
    setActive((prev) => (prev === +index ? null : +index));
  };

  return (
    <div className="w-full">
      {data.map((v, i) => (
        <div
          className="w-full border-b border-neutral-100 max-sm:text-sm"
          key={i}
        >
          <button
            onClick={handleClick}
            data-index={(i + 1).toString()}
            className="flex w-full cursor-pointer items-center justify-between gap-1 p-2 underline-offset-1 hover:underline [&_svg]:size-5 [&_svg]:fill-neutral-100"
          >
            {v.title}
            <ArrowDownSvg
              className={cn("pointer-events-none transition-all duration-500", {
                "rotate-180": active === i + 1,
              })}
            />
          </button>
          <motion.div
            variants={variants}
            initial="hidden"
            animate={active === i + 1 ? "visible" : "hidden"}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="py-2 text-justify">{v.body}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
export default Accordion;
