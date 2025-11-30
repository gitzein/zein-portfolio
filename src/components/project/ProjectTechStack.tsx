import { TECH_ICON } from "../../lib/constants";
import type { TechNameType } from "../../lib/types";
import Technology from "../technologies/Technology";

type PropsType = {
  techStack: TechNameType[];
};

function ProjectTechStack({ techStack }: PropsType) {
  return (
    <div className="tech-stack-container flex-wrap max-lg:justify-center">
      {techStack.map((tech, i) => (
        <Technology
          children={TECH_ICON[tech].icon}
          name={TECH_ICON[tech].name}
          key={i}
        />
      ))}
    </div>
  );
}
export default ProjectTechStack;
