import { motion } from "motion/react";
import type { ReactNode } from "react";
import {
  DIV_ANIMATION,
  DIV_TRANSITION,
  INIT_DIV_STYLE,
} from "../../lib/constants";
import { calculateAge } from "../../lib/utils";
import SectionContainer from "../layout/SectionContainer";
import GithubSvg from "../svg/GithubSvg";
import LinkedInSvg from "../svg/LinkedInSvg";
import MailSvg from "../svg/MailSvg";
import LeetcodeSvg from "../svg/LeetcodeSvg";

const CONTACT_INFO_LINKS: {
  href: string;
  name: string;
  icon: ReactNode;
}[] = [
  {
    href: "https://github.com/gitzein",
    name: "github",
    icon: <GithubSvg />,
  },
  {
    href: "https://leetcode.com/u/gitzein/",
    name: "leetcode",
    icon: <LeetcodeSvg />,
  },
  {
    href: "mailto:zeinfarhan2000@gmail.com",
    name: "email",
    icon: <MailSvg className="stroke-neutral-100" />,
  },
  {
    href: "https://www.linkedin.com/in/zeinfm/",
    name: "linkedin",
    icon: <LinkedInSvg className="fill-neutral-100" />,
  },
];

const NAME = "Zein Farhan Makarim";

function AboutSection() {
  return (
    <SectionContainer id="about" className="justify-center">
      <div className="flex min-h-screen flex-col items-center justify-center gap-8">
        <div className="flex flex-wrap items-center justify-center gap-2 text-center text-5xl tracking-wide text-neutral-100 md:text-6xl lg:text-7xl">
          {NAME.split(" ").map((v, i) => (
            <motion.span
              initial={INIT_DIV_STYLE}
              animate={DIV_ANIMATION}
              transition={{ ...DIV_TRANSITION, delay: i * 0.2 }}
              key={i}
            >
              {v}
            </motion.span>
          ))}
        </div>
        <motion.div
          initial={INIT_DIV_STYLE}
          animate={DIV_ANIMATION}
          transition={{ ...DIV_TRANSITION, delay: 1 }}
          className="text-center"
        >
          <p>Front-end Developer</p>
          <p>Bekasi, Indonesia</p>
          <p>{calculateAge("March 25, 2000")} years old</p>
        </motion.div>
        <motion.div
          initial={INIT_DIV_STYLE}
          animate={DIV_ANIMATION}
          transition={{ ...DIV_TRANSITION, delay: 1.4 }}
          className="flex justify-center gap-4 [&_svg]:size-9 [&_svg]:opacity-75"
        >
          {CONTACT_INFO_LINKS.map((info, i) => (
            <a target="_blank" href={info.href} key={i}>
              {info.icon}
            </a>
          ))}
        </motion.div>
        <motion.a
          initial={INIT_DIV_STYLE}
          animate={DIV_ANIMATION}
          transition={{ ...DIV_TRANSITION, delay: 1.8 }}
          href="./assets/zein-resume2.pdf"
          download={"zein-resume2.pdf"}
          className="rounded-4xl border-2 border-yellow-400/50 bg-yellow-400/50 px-4 py-2 font-semibold transition-colors duration-300 hover:bg-yellow-300/50 dark:border-violet-500/60 dark:bg-violet-500/50 dark:hover:bg-violet-400/50"
        >
          Download Resume
        </motion.a>
      </div>
    </SectionContainer>
  );
}
export default AboutSection;
