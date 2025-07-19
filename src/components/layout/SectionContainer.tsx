import type { ReactNode } from "react";
import { cn } from "../../lib/utils";
import DecryptedText from "../DecryptedText";

type PropsType = {
  children: ReactNode;
  className?: string;
  title?: string;
  id: string;
};

function SectionContainer({ children, className, title, id }: PropsType) {
  return (
    <section
      id={id}
      className={cn(
        "flex flex-col items-center gap-8 lg:min-h-screen lg:gap-4",
        className,
      )}
    >
      {title && (
        <DecryptedText
          text={title}
          animateOn="view"
          revealDirection="center"
          className="mt-4 text-center text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl"
          encryptedClassName="mt-4 opacity-50 text-center font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          speed={100}
          useOriginalCharsOnly
          sequential
        />
      )}
      <div className="flex flex-1 justify-center lg:items-center">
        {children}
      </div>
    </section>
  );
}
export default SectionContainer;
