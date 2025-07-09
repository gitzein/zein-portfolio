import Css from "./Css";
import ExpressJs from "./ExpressJs";
import Html from "./Html";
import Javascript from "./Javascript";
import NextJs from "./NextJs";
import NodeJs from "./NodeJs";
import ReactJs from "./ReactJs";
import Tailwind from "./Tailwind";
import TechCategory from "./TechCategory";
import Typescript from "./Typescript";

function Technologies() {
  return (
    <div className="space-y-2 text-lg font-semibold">
      <TechCategory categoryName="Markup/Styling Languages & Libraries">
        <Html />
        <Css />
        <Tailwind />
      </TechCategory>
      <TechCategory categoryName="Programming Languages">
        <Javascript />
        <Typescript />
      </TechCategory>
      <TechCategory categoryName="Frontend Frameworks/Libraries">
        <ReactJs />
        <NextJs />
      </TechCategory>
      <TechCategory categoryName="Backend Technologies">
        <NodeJs />
        <ExpressJs />
      </TechCategory>
    </div>
  );
}
export default Technologies;
