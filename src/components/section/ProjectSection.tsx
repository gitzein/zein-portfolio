import { PROJECTS } from "../../lib/constants";
import SectionContainer from "../layout/SectionContainer";
import Project from "../project/Project";

function ProjectSection() {
  return (
    <SectionContainer id="project" title="Projects">
      <div className="flex flex-col gap-8">
        {PROJECTS.map((project, i) => (
          <Project {...project} key={i} />
        ))}
      </div>
    </SectionContainer>
  );
}
export default ProjectSection;
