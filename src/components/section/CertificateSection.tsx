import Carousel from "../Carousel";
import SectionContainer from "../layout/SectionContainer";

function CertificateSection() {
  return (
    <SectionContainer id="certificate" title="Certificate">
      <Carousel autoplay loop pauseOnHover />
    </SectionContainer>
  );
}
export default CertificateSection;
