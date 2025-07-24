import { PROJECTS } from "../../lib/constants";
import SectionContainer from "../layout/SectionContainer";
import Project from "../project/Project";

function ProjectSection() {
  return (
    <SectionContainer id="project" title="Projects">
      {PROJECTS.map((project) => (
        <Project {...project} />
      ))}
    </SectionContainer>
  );
}
export default ProjectSection;
