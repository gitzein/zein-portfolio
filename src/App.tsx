import Technologies from "./components/technologies/Technologies";
import useTheme from "./hooks/useTheme";
import { cn } from "./lib/utils";

function App() {
  const [theme, setTheme] = useTheme();

  return (
    <main
      className={cn(
        `h-screen bg-neutral-100 text-slate-900 dark:bg-slate-900 dark:text-neutral-100`,
        {
          dark: theme === "dark",
        },
      )}
    >
      <h1 className="text-center text-6xl font-bold">Zein's portfolio</h1>

      <button
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
        className="cursor-pointer bg-black p-2 text-white"
      >
        toggle theme
      </button>
      <Technologies />
    </main>
  );
}

export default App;
