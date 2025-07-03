import useTheme from "./hooks/useTheme";

function App() {
  const [theme, setTheme] = useTheme();

  return (
    <main
      className={
        `h-screen bg-neutral-100 dark:bg-slate-900 ` +
        (theme === "dark" ? "dark" : "")
      }
    >
      <h1 className="text-center text-6xl font-bold text-slate-900 dark:text-neutral-100">
        Zein's portfolio
      </h1>
      <button
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
          console.log(theme);
        }}
        className="cursor-pointer bg-black p-2 text-white"
      >
        toggle theme
      </button>
    </main>
  );
}

export default App;
