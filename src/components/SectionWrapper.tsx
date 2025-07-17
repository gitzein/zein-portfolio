import type { ReactNode } from "react";
import { cn } from "../lib/utils";

type PropsType = {
  children: ReactNode;
  className?: string;
  title?: string;
  id: string;
};

function SectionWrapper({ children, className, title, id }: PropsType) {
  return (
    <section
      id={id}
      className={cn("flex min-h-screen flex-col items-center gap-8", className)}
    >
      {title && (
        <p className="text-center text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </p>
      )}
      {children}
    </section>
  );
}
export default SectionWrapper;
