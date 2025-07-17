import { useScroll } from "motion/react";
import SkyBackground from "./components/background/SkyBackground";
import SectionWrapper from "./components/SectionWrapper";
import SideNav from "./components/SideNav";
import Technologies from "./components/technologies/Technologies";
import ThemeButton from "./components/ThemeButton";
import useTheme from "./hooks/useTheme";
import { calculateAge, cn } from "./lib/utils";

function App() {
  const [theme] = useTheme();
  const { scrollYProgress } = useScroll();

  return (
    <main
      className={cn(
        `relative w-full overflow-hidden scroll-smooth bg-sky-900 bg-[url(/assets/stardust.png)] text-neutral-100 bg-blend-color-dodge dark:bg-[#08000a] dark:text-neutral-100 dark:bg-blend-normal`,
        {
          dark: theme === "dark",
        },
      )}
    >
      <SkyBackground />
      <div className="custom-scrollbar relative z-50 mx-auto w-full overflow-y-auto md:w-3/4 lg:w-2/3">
        <div className="fixed top-4 right-4 block w-fit lg:hidden">
          <ThemeButton />
        </div>
        <SideNav scrollYProgress={scrollYProgress} />
        <SectionWrapper id="about" className="justify-center">
          <p className="text-center text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            Zein Farhan Makarim
          </p>
          <div className="text-center">
            <p>Front-end Developer</p>
            <p>Bekasi, Indonesia</p>
            <p>{calculateAge("March 25, 2000")} years old</p>
          </div>
        </SectionWrapper>

        <SectionWrapper id="tech" title="Technologies">
          <Technologies />
        </SectionWrapper>
        <SectionWrapper id="project" title="Projects">
          <p>Digist: a photo sharing platform</p>
          <div>
            <div className="size-36 bg-violet-300/50"></div>
          </div>
        </SectionWrapper>
        <SectionWrapper id="edu" title="Education">
          <Technologies />
        </SectionWrapper>
      </div>
    </main>
  );
}

export default App;
