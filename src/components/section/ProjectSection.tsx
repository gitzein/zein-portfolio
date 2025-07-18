import SectionContainer from "../layout/SectionContainer";

function ProjectSection() {
  return (
    <SectionContainer id="project" title="Projects">
      <div className="flex items-start justify-start gap-2">
        <div className="size-36 bg-violet-300/50"></div>
        <p className="text-lg font-semibold">
          Digist: a photo sharing platform
        </p>
      </div>
      <div className="w-11/12 space-y-4 text-justify lg:w-2/3">
        <p>
          This project was my first venture into independent development,
          created specifically to escape "tutorial hell." Inspired by my
          long-time favorite platform, Pinterest, my goal was to build a
          visually engaging, image-focused web application. The core of this
          project is a dynamic image gallery with features for user-interest
          based content.
        </p>
        <p className="text-center font-semibold">
          Key Technical Challenges & Learnings
        </p>
        <p>
          One of the most valuable lessons from this project was the complexity
          of implementing a responsive masonry layout with infinite scroll. This
          required a deep understanding of DOM manipulation and performance
          optimization to ensure a smooth user experience as images loaded
          dynamically. It was a challenging yet rewarding experience that helped
          solidify my skills in building robust, interactive UIs.
        </p>
      </div>
    </SectionContainer>
  );
}
export default ProjectSection;
