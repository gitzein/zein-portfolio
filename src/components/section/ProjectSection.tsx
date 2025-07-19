import SectionContainer from "../layout/SectionContainer";
import ArrowTopRightSvg from "../svg/ArrowTopRightSvg";
import CloudinarySvg from "../svg/CloudinarySvg";
import MongoDBSvg from "../svg/MongoDBSvg";
import NextjsSvg from "../svg/NextjsSvg";
import TailwindSvg from "../svg/TailwindSvg";
import TypescriptSvg from "../svg/TypescriptSvg";
import Technology from "../technologies/Technology";

function ProjectSection() {
  return (
    <SectionContainer id="project" title="Projects">
      <div className="flex flex-col gap-6">
        <div className="flex justify-center gap-6 max-md:flex-col">
          <div className="size-36 bg-violet-300/50"></div>
          <div className="flex w-full flex-col gap-4 md:h-full">
            <p className="text-xl font-semibold md:h-full">
              Digist: a photo sharing platform
            </p>
            <div className="tech-stack-container flex-wrap">
              <Technology children={<NextjsSvg />} name="NextJs" />
              <Technology children={<TypescriptSvg />} name="TypeScript" />
              <Technology children={<TailwindSvg />} name="Tailwindcss" />
              <Technology children={<MongoDBSvg />} name="MongoDB" />
              <Technology children={<CloudinarySvg />} name="Cloudinary" />
            </div>
            <a
              href="https://digist-web-app.vercel.app/"
              target="_blank"
              className="relative inline-block w-fit rounded-4xl border-2 border-yellow-400/50 transition-colors duration-300 hover:bg-yellow-300/50 dark:border-violet-500/60 dark:hover:bg-violet-400/50 [&_svg]:size-4 [&_svg]:stroke-neutral-100"
            >
              <div className="absolute -top-2 -right-2 size-7 rounded-full bg-radial from-yellow-100 to-60% dark:from-violet-300"></div>
              <div className="flex h-full w-full items-center gap-1 px-4 py-2 font-semibold">
                Demo
                <ArrowTopRightSvg strokeWidth="3px" />
              </div>
            </a>
          </div>
        </div>
        <div className="space-y-4 text-justify">
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
            One of the most valuable lessons from this project was the
            complexity of implementing a responsive masonry layout with infinite
            scroll. This required a deep understanding of DOM manipulation and
            performance optimization to ensure a smooth user experience as
            images loaded dynamically. It was a challenging yet rewarding
            experience that helped solidify my skills in building robust,
            interactive UIs.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
export default ProjectSection;
