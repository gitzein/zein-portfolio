import { useMemo } from "react";
import Aurora from "./components/Aurora/Aurora";
import SkyGradient from "./components/background/SkyGradient";
import BlurText from "./components/BlurText/BlurText";
import MeteorShower from "./components/MeteorShower";
import ShinyText from "./components/ShinyText/ShinyText";
import Technologies from "./components/technologies/Technologies";
import useTheme from "./hooks/useTheme";
import { calculateAge, cn } from "./lib/utils";

function App() {
  const [theme, setTheme] = useTheme();

  const auroraColor = useMemo(
    () =>
      theme === "light"
        ? ["#00CF52", "#00C690", "#00DF96"]
        : ["#8aed07", "#0e392f", "#743c55"],
    [theme],
  );

  return (
    <main
      className={cn(
        `relative w-full overflow-hidden bg-sky-900 bg-[url(/assets/stardust.png)] text-neutral-100 bg-blend-color-dodge dark:bg-[#08000a] dark:text-neutral-100 dark:bg-blend-normal`,
        {
          dark: theme === "dark",
        },
      )}
    >
      <MeteorShower />
      <Aurora amplitude={1.5} speed={0.5} blend={1} colorStops={auroraColor} />
      <SkyGradient />
      <div className="custom-scrollbar relative z-50 w-full overflow-y-auto">
        <button
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
          className="fixed top-4 right-4 cursor-pointer bg-black p-2 text-white"
        >
          toggle theme
        </button>
        <section className="flex h-screen flex-col items-center justify-center gap-8">
          <BlurText
            text="Zein Farhan Makarim"
            className="text-center text-6xl font-bold"
          />

          <div className="text-center">
            <p>Front-end Developer</p>
            <p>Bekasi, Indonesia</p>
            <p>{calculateAge("March 25, 2000")} years old</p>
          </div>
        </section>

        <section className="flex h-screen flex-col items-center justify-center">
          {/* <ShinyText
            text="Technologies"
            className="text-center text-5xl font-bold"
          /> */}
          <BlurText
            text="Technologies"
            className="text-center text-6xl font-bold"
          />

          <Technologies />
          {/* </motion.div> */}
        </section>

        <section className="flex h-screen flex-col items-center justify-center">
          {/* <ShinyText
            text="Projects"
            className="text-center text-5xl font-bold"
          /> */}
          <BlurText
            text="Projects"
            className="text-center text-6xl font-bold"
          />
          <Technologies />
        </section>
        <section className="flex h-screen flex-col items-center justify-center">
          {/* <ShinyText
            text="Education"
            className="text-center text-5xl font-bold"
          /> */}
          <BlurText
            text="Education"
            className="text-center text-6xl font-bold"
          />
          <Technologies />
        </section>
      </div>
    </main>
  );
}

export default App;
