import { motion, type Variants } from "motion/react";
import { useCallback } from "react";
import useTheme from "../../hooks/useTheme";

//src: (goat ed) https://www.youtube.com/watch?v=0Ihn7vylPlA , https://github.com/developedbyed/react-gradient-glow/blob/main/components/nav.tsx

const raysVariants: Variants = {
  hidden: {
    strokeOpacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  visible: {
    strokeOpacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const rayVariant: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
    // Start from center of the circle
    scale: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      // Customize timing for each property
      pathLength: { duration: 0.3 },
      opacity: { duration: 0.2 },
      scale: { duration: 0.3 },
    },
  },
};

const shineVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 2,
    strokeDasharray: "20, 1000",
    strokeDashoffset: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: [0, 1, 0],
    strokeDashoffset: [0, -50, -100],
    filter: ["blur(2px)", "blur(2px)", "blur(0px)"],

    transition: {
      duration: 1.25,
      ease: "linear",
    },
  },
};

const sunPath =
  "m 70 49.5 c 0 11.3218 -9.1782 20.5 -20.5 20.5 c -11.3218 0 -20.5 -9.1782 -20.5 -20.5 c 0 -11.3218 9.1782 -20.5 20.5 -20.5 c 10.5 0 20 9 20.5 20.5 z";
const moonPath =
  "m 70 49.5 c 0 11.3218 -9.1782 20.5 -20.5 20.5 c -11.3218 0 -20.5 -9.1782 -20.5 -20.5 c 0 -11.3218 9.1782 -20.5 20.5 -20.5 c -20.5 19 2.5 40 20.5 20.5 z";

export default function ThemeButton() {
  const [theme, setTheme] = useTheme();

  const handleClick = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, [setTheme]);

  return (
    <button className="cursor-pointer" onClick={handleClick}>
      <motion.svg
        strokeWidth="4"
        strokeLinecap="round"
        width={36}
        height={36}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative"
      >
        <motion.path
          variants={shineVariant}
          d={moonPath}
          className={"absolute top-0 left-0 z-[51] stroke-neutral-50"}
          initial="hidden"
          animate={theme === "dark" ? "visible" : "hidden"}
        />

        <motion.g
          variants={raysVariants}
          initial="hidden"
          animate={theme === "light" ? "visible" : "hidden"}
          className="stroke-yellow-500 stroke-6"
          style={{ strokeLinecap: "round" }}
        >
          <motion.path
            className="origin-center"
            variants={rayVariant}
            d="m 50 2 v 9 z"
          />
          <motion.path variants={rayVariant} d="m 85 15 l -7 7 z" />
          <motion.path variants={rayVariant} d="m 98 50 h -9 z" />
          <motion.path variants={rayVariant} d="m 85 85 l -7 -7 z" />
          <motion.path variants={rayVariant} d="m 50 98 v -9 z" />
          <motion.path variants={rayVariant} d="m 23 78 l -7 6 z" />
          <motion.path variants={rayVariant} d="m 11 50 h -9 z" />
          <motion.path variants={rayVariant} d="m 23 23 l -7 -7 z" />
        </motion.g>

        {theme === "dark" ? (
          <motion.path
            d={moonPath}
            fill="transparent"
            transition={{ duration: 1, type: "spring" }}
            initial={{ fillOpacity: 0, strokeOpacity: 0 }}
            animate={{
              rotate: -360,
              scale: 2,
              stroke: "var(--color-neutral-300)",
              fill: "var(--color-neutral-300)",
              fillOpacity: 0.35,
              strokeOpacity: 1,
              transition: { delay: 0.1 },
            }}
          />
        ) : (
          <motion.path
            d={sunPath}
            fill="transparent"
            transition={{ duration: 1, type: "spring" }}
            initial={{ fillOpacity: 0, strokeOpacity: 0 }}
            animate={{
              rotate: 0,
              stroke: "var(--color-yellow-500)",
              fill: "var(--color-yellow-500)",
              fillOpacity: 0.35,
              strokeOpacity: 1,
            }}
          />
        )}
        {/* This one giving Error: <path> attribute d: Expected moveto path command ('M' or 'm'), "undefined" */}
        {/* <motion.path
          d={sunPath}
          fill="transparent"
          transition={{ duration: 1, type: "spring" }}
          initial={{ fillOpacity: 0, strokeOpacity: 0 }}
          animate={
            theme === "dark"
              ? {
                  d: moonPath,
                  rotate: -360,
                  scale: 2,
                  stroke: "var(--color-neutral-400)",
                  fill: "var(--color-neutral-400)",
                  fillOpacity: 0.35,
                  strokeOpacity: 1,
                  transition: { delay: 0.1 },
                }
              : {
                  d: sunPath,
                  rotate: 0,
                  stroke: "var(--color-yellow-500)",
                  fill: "var(--color-yellow-500)",
                  fillOpacity: 0.35,
                  strokeOpacity: 1,
                }
          }
        /> */}
      </motion.svg>
    </button>
  );
}
