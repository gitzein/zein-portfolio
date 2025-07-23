import {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import type { ChildrenType, SectionsIdType } from "../lib/types";

type SectionSpyType = [
  SectionsIdType,
  Dispatch<SetStateAction<SectionsIdType>>,
];

const initState: SectionSpyType = ["about", () => {}];

const SectionSpyContext = createContext<SectionSpyType>(initState);

export const SectionSpyProvider = ({ children }: ChildrenType) => {
  return (
    <SectionSpyContext.Provider value={useState<SectionsIdType>("about")}>
      {children}
    </SectionSpyContext.Provider>
  );
};

export default SectionSpyContext;
