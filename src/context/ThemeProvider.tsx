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

const initialState: ThemeContextType = ["dark", () => {}];

const ThemeContext = createContext(initialState);

type ChildrenType = { children?: ReactElement | ReactElement[] | ReactNode };

export const ThemeProvider = ({ children }: ChildrenType) => {
  return (
    <ThemeContext.Provider value={useState<"dark" | "light">("dark")}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
