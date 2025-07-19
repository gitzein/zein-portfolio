import { type ReactNode } from "react";
import { cn } from "../../lib/utils";

type PropsType = {
  children: ReactNode;
  name?: string;
  className?: string | undefined;
};

function Technology({ children, name, className }: PropsType) {
  return (
    <div className={cn("technology-container", className)}>
      {children}
      {name && <p>{name}</p>}
    </div>
  );
}
export default Technology;
