import type { AccordionDataType, ProjectType } from "../../lib/types";
import Accordion from "../Accordion";
import ProjectImg from "./ProjectImg";
import ProjectLink from "./ProjectLink";
import ProjectTechStack from "./ProjectTechStack";

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
  ];

  if (challenges) {
    data.push({
      title: "Key Technical Challenges & Learnings",
      body: challenges,
    });
  }

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex w-full gap-4 max-lg:flex-col max-lg:items-center max-lg:justify-center lg:gap-6">
        <p className="text-xl lg:hidden">{title}</p>

        <ProjectImg src={imgSrc} title={title} />
        <div className="flex flex-col gap-4 lg:h-full">
          <p className="text-xl max-lg:hidden lg:h-full">{title}</p>
          <ProjectTechStack techStack={techStack} />
          <ProjectLink link={demoLink} />
        </div>
      </div>
      <Accordion data={data} />
    </div>
  );
}
export default Project;
