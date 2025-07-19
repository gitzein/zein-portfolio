import { calculateAge } from "../../lib/utils";
import SectionContainer from "../layout/SectionContainer";

function AboutSection() {
  return (
    <SectionContainer id="about" className="justify-center">
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <p className="text-center text-5xl font-bold md:text-6xl lg:text-7xl">
          Zein Farhan Makarim
        </p>
        <div className="text-center">
          <p>Front-end Developer</p>
          <p>Bekasi, Indonesia</p>
          <p>{calculateAge("March 25, 2000")} years old</p>
        </div>
      </div>
    </SectionContainer>
  );
}
export default AboutSection;
