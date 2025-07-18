import { useScroll } from "motion/react";
import SkyBackground from "./components/background/SkyBackground";
import AboutSection from "./components/section/AboutSection";
import EducationSection from "./components/section/EducationSection";
import ProjectSection from "./components/section/ProjectSection";
import TechSection from "./components/section/TechSection";
import SideNav from "./components/SideNav";
import ThemeButton from "./components/button/ThemeButton";
import useTheme from "./hooks/useTheme";
import { cn } from "./lib/utils";
import SectionsWrapper from "./components/layout/SectionsWrapper";

function App() {
  const [theme] = useTheme();
  const { scrollYProgress } = useScroll();

  return (
    <main
      className={cn(`main-container`, {
        dark: theme === "dark",
      })}
    >
      <SkyBackground />
      <SectionsWrapper>
        <div className="fixed top-4 right-4 block w-fit lg:hidden">
          <ThemeButton />
        </div>
        <SideNav scrollYProgress={scrollYProgress} />
        <AboutSection />
        <TechSection />
        <ProjectSection />
        <EducationSection />
      </SectionsWrapper>
    </main>
  );
}

export default App;
