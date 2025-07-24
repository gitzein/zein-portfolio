import type { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

function SectionsWrapper({ children }: PropsType) {
  return (
    <div className="relative mx-auto w-11/12 max-lg:mb-[25vh] md:w-3/4 lg:w-2/3 xl:w-3/5 2xl:w-1/2 [&_section]:max-lg:not-first:pt-16">
      {children}
    </div>
  );
}
export default SectionsWrapper;
