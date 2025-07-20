import {
  createContext,
  useState,
  type Dispatch,
  type ReactElement,
  type ReactNode,
  type SetStateAction,
} from "react";

type ThemeContextType = [
  "dark" | "light",
  Dispatch<SetStateAction<"dark" | "light">>,
];

let initTheme: "dark" | "light" = "light";

const isPrefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

if (isPrefersDarkTheme.matches) {
  initTheme = "dark";
}

const initialState: ThemeContextType = [initTheme, () => {}];

const ThemeContext = createContext(initialState);

type ChildrenType = { children?: ReactElement | ReactElement[] | ReactNode };

export const ThemeProvider = ({ children }: ChildrenType) => {
  return (
    <ThemeContext.Provider value={useState<"dark" | "light">(initTheme)}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
