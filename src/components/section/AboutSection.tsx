import {
  motion
} from "motion/react";
import type { ReactNode } from "react";
import { divAnimation, divTransition, initDivStyle } from "../../lib/constants";
import { calculateAge } from "../../lib/utils";
import SectionContainer from "../layout/SectionContainer";
import GithubSvg from "../svg/GithubSvg";
import LinkedInSvg from "../svg/LinkedInSvg";
import MailSvg from "../svg/MailSvg";

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
        <div className="flex items-center justify-center gap-0.5 text-center text-5xl font-bold text-neutral-100 md:text-6xl lg:text-7xl">
          {NAME.split(" ").map((v, i) => (
            <motion.span
              initial={initDivStyle}
              animate={divAnimation}
              transition={{ ...divTransition, delay: i * 0.2 }}
            >
              {v}
            </motion.span>
          ))}
        </div>
        <motion.div
          initial={initDivStyle}
          animate={divAnimation}
          transition={{ ...divTransition, delay: 1 }}
          className="text-center"
        >
          <p>Front-end Developer</p>
          <p>Bekasi, Indonesia</p>
          <p>{calculateAge("March 25, 2000")} years old</p>
        </motion.div>
        <motion.div
          initial={initDivStyle}
          animate={divAnimation}
          transition={{ ...divTransition, delay: 1.4 }}
          className="flex justify-center gap-4 [&_svg]:size-9"
        >
          {CONTACT_INFO_LINKS.map((info) => (
            <a target="_blank" href={info.href}>
              {info.icon}
            </a>
          ))}
        </motion.div>
        <motion.a
          initial={initDivStyle}
          animate={divAnimation}
          transition={{ ...divTransition, delay: 1.8 }}
          href="./assets/zein-resume.pdf"
          download={"zein-resume.pdf"}
          className="rounded-4xl border-2 border-yellow-400/50 bg-yellow-400/50 px-4 py-2 font-semibold transition-colors duration-300 hover:bg-yellow-300/50 dark:border-violet-500/60 dark:bg-violet-500/50 dark:hover:bg-violet-400/50"
        >
          Download Resume
        </motion.a>
      </div>
    </SectionContainer>
  );
}
export default AboutSection;
