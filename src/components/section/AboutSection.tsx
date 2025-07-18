import { calculateAge } from "../../lib/utils";
import SectionContainer from "../layout/SectionContainer";

function AboutSection() {
  return (
    <SectionContainer id="about" className="justify-center">
      <p className="text-center text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
        Zein Farhan Makarim
      </p>
      <div className="text-center">
        <p>Front-end Developer</p>
        <p>Bekasi, Indonesia</p>
        <p>{calculateAge("March 25, 2000")} years old</p>
      </div>
    </SectionContainer>
  );
}
export default AboutSection;
