import { motion } from "motion/react";
import { useCallback, useState } from "react";
import { NAV_LINKS } from "../lib/constants";
import { cn } from "../lib/utils";
import ThemeButton from "./button/ThemeButton";
import BurgerMenuSvg from "./svg/BurgerMenuSvg";
import useSectionSpy from "../hooks/useSectionSpy";
import useOutsideClick from "../hooks/useOutsideClick";

function Header() {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const [activeSection] = useSectionSpy();

  const handleClose = useCallback(() => {
    setOpenDropdown(false);
  }, []);

  const ref = useOutsideClick(handleClose);

  const handleClick = useCallback(() => {
    setOpenDropdown((prev) => !prev);
  }, []);

  const handleNavigate = useCallback(
    (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
      if ((e.target as HTMLElement).tagName === "A") {
        handleClose();
      }
    },
    [],
  );

  return (
    <div
      ref={openDropdown ? ref : undefined}
      className={cn("fixed top-0 z-30 w-full p-2 backdrop-blur-sm lg:hidden", {
        "bg-yellow-800/50 dark:bg-[#08000a7c]": openDropdown,
      })}
    >
      <div className="flex w-full flex-col gap-4">
        <div className="flex justify-end gap-2 [&_svg]:size-9">
          <ThemeButton />
          <button
            onClick={handleClick}
            className={openDropdown ? "opened" : ""}
          >
            <BurgerMenuSvg className="animated-burger" />
          </button>
        </div>
        {openDropdown && (
          <motion.nav
            initial={{ height: "0px" }}
            animate={{ height: "100%" }}
            transition={{
              ease: "easeOut",
              duration: NAV_LINKS.length / 10,
            }}
          >
            <ul className="text-center font-semibold" onClick={handleNavigate}>
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  initial={{
                    opacity: 0,
                    translateX: (i + 1) % 2 === 0 ? "100px" : "-100px",
                    filter: "blur(0.2rem)",
                  }}
                  animate={{
                    opacity: 1,
                    translateX: 0,
                    filter: "none",
                  }}
                  transition={{ duration: 0.5, delay: i / 10 }}
                  // exit={{
                  //   opacity: 0,
                  //   translateX: (i + 1) % 2 === 0 ? "100px" : "-100px",
                  //   filter: "blur(0.2rem)",
                  //   animationDelay: 0,
                  // }}
                  key={i}
                >
                  <a
                    href={"#" + link.id}
                    className={cn("inline-block w-full py-3 opacity-60", {
                      "underline underline-offset-2 opacity-100":
                        activeSection === link.id,
                    })}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </div>
    </div>
  );
}
export default Header;
