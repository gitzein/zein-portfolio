import SkyBackground from "./components/background/SkyBackground";
import Technologies from "./components/technologies/Technologies";
import ThemeButton from "./components/ThemeButton";
import useTheme from "./hooks/useTheme";
import { calculateAge, cn } from "./lib/utils";

function App() {
  const [theme] = useTheme();

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
      <div className="custom-scrollbar relative z-50 w-full overflow-y-auto">
        <div className="fixed top-4 right-4 w-fit">
          <ThemeButton />
        </div>
        <div className="fixed top-[50%] right-10 flex -translate-y-[50%] justify-start gap-4 text-sm max-lg:hidden">
          <div className="flex flex-col items-center gap-4">
            <a href="#about">About</a>
            <a href="#tech">Technology</a>
            <a href="#project">Projects</a>
            <a href="#edu">Education</a>
          </div>
        </div>
        <section
          id="about"
          className="flex min-h-screen flex-col items-center justify-center gap-8"
        >
          <p className="text-center text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            Zein Farhan Makarim
          </p>
          <div className="text-center">
            <p>Front-end Developer</p>
            <p>Bekasi, Indonesia</p>
            <p>{calculateAge("March 25, 2000")} years old</p>
          </div>
        </section>

        <section
          id="tech"
          className="flex min-h-screen flex-col items-center justify-center"
        >
          <p className="text-center text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            Technologies
          </p>

          <Technologies />
        </section>

        <section
          id="project"
          className="flex min-h-screen flex-col items-center justify-center"
        >
          <p className="text-center text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            Projects
          </p>

          <Technologies />
        </section>
        <section
          id="edu"
          className="flex min-h-screen flex-col items-center justify-center"
        >
          <p className="text-center text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            Education
          </p>

          <Technologies />
        </section>
      </div>
    </main>
  );
}

export default App;
