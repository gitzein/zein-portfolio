import { useScroll, useSpring } from "motion/react";
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
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main
      className={cn(
        `main-container font-space-grotesk transition-colors duration-800`,
        {
          dark: theme === "dark",
        },
      )}
    >
      <ScrollIndicatorX scaleX={scaleX} />
      <Header />
      <SkyBackground />
      <SectionsWrapper>
        <AboutSection />
        <TechSection />
        <ProjectSection />
        <EducationSection />
        <CertificateSection />
        <SideNav scaleX={scaleX} />
      </SectionsWrapper>
    </main>
  );
}

export default App;
