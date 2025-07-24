import type { ReactNode } from "react";
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

function AboutSection() {
  return (
    <SectionContainer id="about" className="justify-center">
      <div className="flex min-h-screen flex-col items-center justify-center gap-8">
        <p className="text-center text-5xl font-bold md:text-6xl lg:text-7xl">
          Zein Farhan Makarim
        </p>
        <div className="text-center">
          <p>Front-end Developer</p>
          <p>Bekasi, Indonesia</p>
          <p>{calculateAge("March 25, 2000")} years old</p>
        </div>
        <div className="flex justify-center gap-4 [&_svg]:size-9">
          {CONTACT_INFO_LINKS.map((info) => (
            <a target="_blank" href={info.href}>
              {info.icon}
            </a>
          ))}
        </div>
        <a
          href="/assets/zein-resume.pdf"
          download={"zein-resume.pdf"}
          className="rounded-4xl border-2 border-yellow-400/50 bg-yellow-400/50 px-4 py-2 font-semibold transition-colors duration-300 hover:bg-yellow-300/50 dark:border-violet-500/60 dark:bg-violet-500/50 dark:hover:bg-violet-400/50"
        >
          Download Resume
        </a>
      </div>
    </SectionContainer>
  );
}
export default AboutSection;
