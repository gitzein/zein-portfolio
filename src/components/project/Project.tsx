import { TECH_ICON } from "../../lib/constants";
import type { AccordionDataType, ProjectType } from "../../lib/types";
import Accordion from "../Accordion";
import ArrowTopRightSvg from "../svg/ArrowTopRightSvg";
import Technology from "../technologies/Technology";

function Project({
  demoLink,
  description,
  imgSrc,
  techStack,
  title,
  challenges,
}: ProjectType) {
  const data: AccordionDataType = [
    { title: "Project Description", body: description },
    {
      title: "Key Technical Challenges & Learnings",
      body: challenges!,
    },
  ];

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex w-full gap-6 max-md:flex-col max-md:items-center max-md:justify-center">
        <div className="h-44 w-66">
          <img
            src={imgSrc}
            alt={title}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-4 md:h-full">
          <p className="text-xl font-semibold md:h-full">{title}</p>
          <div className="tech-stack-container flex-wrap">
            {techStack.map((tech, i) => (
              <Technology
                children={TECH_ICON[tech].icon}
                name={TECH_ICON[tech].name}
                key={i}
              />
            ))}
          </div>
          <a
            href={demoLink}
            target="_blank"
            className="relative inline-block w-fit rounded-4xl border-2 border-yellow-400/50 transition-colors duration-300 hover:bg-yellow-300/50 max-md:mx-auto dark:border-violet-500/60 dark:hover:bg-violet-400/50 [&_svg]:size-4 [&_svg]:stroke-neutral-100"
          >
            <div className="absolute -top-2 -right-2 size-7 rounded-full bg-radial from-yellow-100 to-60% dark:from-violet-300"></div>
            <div className="flex h-full w-full items-center gap-1 px-4 py-2 text-lg font-semibold [&_svg]:size-6">
              Demo
              <ArrowTopRightSvg strokeWidth="2px" />
            </div>
          </a>
        </div>
      </div>
      <Accordion data={data} />
    </div>
  );
}
export default Project;
