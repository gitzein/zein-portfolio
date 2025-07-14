import Aurora from "./components/Aurora/Aurora";
import BlurText from "./components/BlurText/BlurText";
import MeteorShower from "./components/MeteorShower";
import ShinyText from "./components/ShinyText/ShinyText";
import Technologies from "./components/technologies/Technologies";
import useTheme from "./hooks/useTheme";
import { cn } from "./lib/utils";

function App() {
  const [theme] = useTheme();

  return (
    <main
      className={cn(
        `relative w-full overflow-hidden bg-[#08000a] bg-[url(/assets/stardust.png)] text-slate-900 dark:text-neutral-100`,
        {
          dark: theme === "dark",
        },
      )}
    >
      <Aurora
        amplitude={1.5}
        speed={0.5}
        blend={1}
        colorStops={["#8aed07", "#0e392f", "#743c55"]}
      />
      <MeteorShower />
      <div className="absolute bottom-0 left-[50%] z-0 h-full w-[140vw] -translate-x-[50%] bg-radial-[at_50%_100%] from-violet-200/50 via-violet-400/30 via-5% to-60%" />
      <div className="relative !z-50 flex w-full flex-col items-center justify-center gap-8">
        <BlurText
          text="Zein Farhan Makarim"
          className="text-center text-6xl font-bold"
        />

        {/* <div className="relative mx-auto flex size-5 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-[ping_2.5s_cubic-bezier(0,_0,_0.2,_1)_infinite] rounded-full bg-neutral-100 opacity-75 duration-100"></span>
          <span className="relative inline-flex size-2 rounded-full bg-neutral-200"></span>
        </div> */}
        {/* <h2 className="text-center text-4xl font-bold">
          Self taught developer
        </h2> */}
        <div className="text-center">
          <p>Front-end Developer</p>
          <p>Bekasi, Indonesia</p>
        </div>
        {/* <button
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
          className="cursor-pointer bg-black p-2 text-white"
          >
          toggle theme
        </button> */}
        <ShinyText
          text="Technologies"
          className="text-center text-5xl font-bold"
        />
        <Technologies />

        <ShinyText text="Projects" className="text-center text-5xl font-bold" />
        <Technologies />
        <Technologies />
      </div>
    </main>
  );
}

export default App;
