import Aurora from "./components/Aurora/Aurora";
import ShinyText from "./components/ShinyText/ShinyText";
import Technologies from "./components/technologies/Technologies";
import useTheme from "./hooks/useTheme";
import { cn } from "./lib/utils";

function App() {
  const [theme, setTheme] = useTheme();

  return (
    <main
      className={cn(
        `relative w-full bg-[#0a0a0a] bg-[url(/assets/stardust.png)] text-slate-900 dark:text-neutral-100`,
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
      <div className="flex w-full flex-col justify-center gap-8">
        <ShinyText
          text="Zein Farhan Makarim"
          className="text-center text-6xl font-bold"
        />
        <div className="relative mx-auto flex size-5 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-[ping_2.5s_cubic-bezier(0,_0,_0.2,_1)_infinite] rounded-full bg-neutral-100 opacity-75 duration-100"></span>
          <span className="relative inline-flex size-2 rounded-full bg-neutral-200"></span>
        </div>
        {/* <h2 className="text-center text-4xl font-bold">Self taught developer</h2> */}
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
      </div>
    </main>
  );
}

export default App;
