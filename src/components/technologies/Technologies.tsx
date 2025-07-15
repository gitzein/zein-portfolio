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
    <div className="flex flex-col items-center justify-center gap-5 py-8 text-base font-semibold">
      <TechCategory categoryName="Markup/Styling Languages & Libraries">
        <Technology children={<HtmlSvg />} name="Html" />
        <Technology children={<CssSvg />} name="Css" />
        <Technology children={<TailwindSvg />} name="Tailwindcss" />
      </TechCategory>
      <TechCategory categoryName="Programming Languages">
        <Technology children={<JavascriptSvg />} name="Javacript" />
        <Technology children={<TypescriptSvg />} name="Typescript" />
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
