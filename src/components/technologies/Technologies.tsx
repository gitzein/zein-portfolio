import CssSvg from "../svg/CssSvg";
import ExpressjsSvg from "../svg/ExpressjsSvg";
import HtmlSvg from "../svg/HtmlSvg";
import JavascriptSvg from "../svg/JavascriptSvg";
import NextjsSvg from "../svg/NextjsSvg";
import NodejsSvg from "../svg/NodejsSvg";
import ReactSvg from "../svg/ReactSvg";
import TailwindSvg from "../svg/TailwindSvg";
import TypescriptSvg from "../svg/TypescriptSvg";
import TechCategory from "./TechCategory";
import Technology from "./Technology";

function Technologies() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 font-semibold lg:text-base">
      <TechCategory categoryName="Markup/Styling Languages & Libraries">
        <Technology children={<HtmlSvg />} name="Html" />
        <Technology children={<CssSvg />} name="Css" />
        <Technology children={<TailwindSvg />} name="Tailwindcss" />
      </TechCategory>
      <TechCategory categoryName="Programming Languages">
        <Technology children={<JavascriptSvg />} name="JavaScript" />
        <Technology children={<TypescriptSvg />} name="TypeScript" />
      </TechCategory>
      <TechCategory categoryName="Frontend Frameworks/Libraries">
        <Technology children={<ReactSvg />} name="ReactJs" />
        <Technology children={<NextjsSvg />} name="NextJs" />
      </TechCategory>
      <TechCategory categoryName="Backend Technologies">
        <Technology children={<NodejsSvg />} name="NodeJs" />
        <Technology children={<ExpressjsSvg />} name="ExpressJs" />
      </TechCategory>
    </div>
  );
}
export default Technologies;
