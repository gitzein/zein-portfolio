import Carousel from "../Carousel";
import SectionContainer from "../layout/SectionContainer";

function CertificateSection() {
  return (
    <SectionContainer id="certificate" title="Certificate">
      {/* <div className="flex w-full flex-col items-center justify-center gap-4">
        <div className="flex w-full gap-4">
          <div className="max-h-48 w-full max-w-2xs">
            <img
              src="/assets/freeCodeCampCertificate.png"
              alt="freeCodeCampCertificate"
              loading="lazy"
              className="object-contain"
            />
          </div>
          <div>
            <p>freeCodeCampCertificate</p>
          </div>
        </div>
        <div className="max-h-48 max-w-2xs min-w-full">
          <img
            src="/assets/toeflCertificate.png"
            alt="toeflCertificate"
            loading="lazy"
            className="w-full object-contain"
          />
        </div>
      </div> */}
      <Carousel />
    </SectionContainer>
  );
}
export default CertificateSection;
