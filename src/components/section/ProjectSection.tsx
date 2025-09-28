import { PROJECTS } from "../../lib/constants";
import SectionContainer from "../layout/SectionContainer";
import Project from "../project/Project";

function ProjectSection() {
  return (
    <SectionContainer id="project" title="Project">
      {PROJECTS.map((project, i) => (
        <Project {...project} key={i} />
      ))}
    </SectionContainer>
  );
}
export default ProjectSection;
