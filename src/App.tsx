import { useScroll } from "motion/react";
import SkyBackground from "./components/background/SkyBackground";
import Header from "./components/Header";
import SectionsWrapper from "./components/layout/SectionsWrapper";
import ScrollIndicatorX from "./components/ScrollIndicatorX";
import AboutSection from "./components/section/AboutSection";
import CertificateSection from "./components/section/CertificateSection";
import EducationSection from "./components/section/EducationSection";
import ProjectSection from "./components/section/ProjectSection";
import TechSection from "./components/section/TechSection";
import SideNav from "./components/SideNav";
import useTheme from "./hooks/useTheme";
import { cn } from "./lib/utils";

function App() {
  const [theme] = useTheme();
  const { scrollYProgress } = useScroll();

  return (
    <main
      className={cn(`main-container`, {
        dark: theme === "dark",
      })}
    >
      <ScrollIndicatorX scrollYProgress={scrollYProgress} />
      <Header />
      <SkyBackground />
      <SectionsWrapper>
        <AboutSection />
        <TechSection />
        <ProjectSection />
        <EducationSection />
        <CertificateSection />
        <SideNav scrollYProgress={scrollYProgress} />
      </SectionsWrapper>
    </main>
  );
}

export default App;
