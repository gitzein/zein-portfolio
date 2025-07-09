import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

type PropsType = {
  categoryName: string;
  className?: string;
  children: ReactNode;
};

function TechCategory({ categoryName, children, className }: PropsType) {
  return (
    <div className={cn("space-y-2", className)}>
      <p>{categoryName}</p>
      <div className="technologies-container">{children}</div>
    </div>
  );
}
export default TechCategory;
