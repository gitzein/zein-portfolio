import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "../../lib/utils";
import DecryptedText from "../DecryptedText";
import { useInView } from "motion/react";
import useSectionSpy from "../../hooks/useSectionSpy";
import type { SectionsIdType } from "../../lib/types";

type PropsType = {
  children: ReactNode;
  className?: string;
  title?: string;
  id: SectionsIdType;
};

function SectionContainer({ children, className, title, id }: PropsType) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { margin: "0% 0% -50% 0%", amount: 0.8 });
  const [_activeSection, setActiveSection] = useSectionSpy();

  useEffect(() => {
    if (isInView) {
      setActiveSection(id);
    }
  }, [isInView, id, setActiveSection]);

  return (
    <section
      id={id}
      // ref={ref}
      className={cn(
        "relative flex min-h-[50vh] shrink flex-col items-center justify-center gap-8 lg:h-screen lg:max-h-screen",
        className,
      )}
    >
      {/* Sentinel */}
      <div ref={ref} className="absolute top-0 -z-10 h-[25vh] w-full"></div>
      {title && (
        <DecryptedText
          text={title}
          animateOn="view"
          revealDirection="center"
          className="mt-4 text-center text-4xl tracking-wide md:text-5xl lg:text-6xl xl:text-7xl"
          encryptedClassName="mt-4 opacity-50 text-center tracking-wide text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
          speed={50}
          useOriginalCharsOnly
          sequential
        />
        // <p className="mt-4 text-center text-4xl tracking-wide md:text-5xl lg:text-6xl xl:text-7xl">
        //   {title}
        // </p>
      )}
      {children}
    </section>
  );
}
export default SectionContainer;
