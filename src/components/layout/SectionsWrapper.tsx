import type { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

function SectionsWrapper({ children }: PropsType) {
  return (
    <div className="custom-scrollbar relative z-50 mx-auto w-full overflow-y-auto md:w-3/4 lg:w-2/3">
      {children}
    </div>
  );
}
export default SectionsWrapper;
