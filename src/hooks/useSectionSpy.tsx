import { useContext } from "react";
import SectionSpyContext from "../context/SectionSpyProvider";

const useSectionSpy = () => {
  return useContext(SectionSpyContext);
};
export default useSectionSpy;
