import type { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

function SectionsWrapper({ children }: PropsType) {
  return (
    <div className="custom-scrollbar relative z-50 mx-auto w-11/12 overflow-y-auto max-lg:space-y-8 md:w-3/4 lg:w-2/3 xl:w-3/5 2xl:w-1/2">
      {children}
    </div>
  );
}
export default SectionsWrapper;
