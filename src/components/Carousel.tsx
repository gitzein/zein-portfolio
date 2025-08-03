import {
  motion,
  type PanInfo,
  type Transition,
  useMotionValue,
  useTransform,
} from "motion/react";
import { type JSX, useCallback, useEffect, useRef, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { CAROUSEL_ITEMS } from "../lib/constants";
import type { CarouselItem } from "../lib/types";
import FullScreenImageModal from "./modal/FullScreenImageModal";
import FullScreenSvg from "./svg/FullScreenSvg";

// src: https://reactbits.dev/components/carousel

export interface CarouselProps {
  items?: CarouselItem[];
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
}

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS: Transition<any> | undefined = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

export default function Carousel({
  items = CAROUSEL_ITEMS,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
}: CarouselProps): JSX.Element {
  const isSmallScreen = useMediaQuery("(max-width: 678px)");
  const baseWidth = isSmallScreen ? 300 : 400;
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isResetting, setIsResetting] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalImgSrc, setModalImgSrc] = useState<string>("");

  const openImageFullscreen = useCallback((src: string) => {
    setModalImgSrc(src);
    setOpenModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === items.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    loop,
    items.length,
    carouselItems.length,
    pauseOnHover,
  ]);

  const effectiveTransition: Transition<any> | undefined = isResetting
    ? { duration: 0 }
    : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ): void => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0,
        },
      };

  return (
    <>
      <div
        ref={containerRef}
        className={`relative overflow-hidden bg-gradient-to-b from-yellow-700/40 to-yellow-700/20 p-4 dark:bg-none ${
          round
            ? "rounded-full border border-neutral-100"
            : "rounded-[24px] border-2 border-amber-900/40 dark:border-neutral-100"
        }`}
        style={{
          width: `${baseWidth}px`,
          ...(round && { height: `${baseWidth}px` }),
        }}
      >
        <motion.div
          className="flex"
          drag="x"
          {...dragProps}
          style={{
            width: itemWidth,
            gap: `${GAP}px`,
            perspective: 1000,
            perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
            x,
          }}
          onDragEnd={handleDragEnd}
          animate={{ x: -(currentIndex * trackItemOffset) }}
          transition={effectiveTransition}
          onAnimationComplete={handleAnimationComplete}
        >
          {carouselItems.map((item, index) => {
            const range = [
              -(index + 1) * trackItemOffset,
              -index * trackItemOffset,
              -(index - 1) * trackItemOffset,
            ];
            const outputRange = [90, 0, -90];
            const rotateY = useTransform(x, range, outputRange, {
              clamp: false,
            });
            return (
              <motion.div
                key={index}
                className={`relative flex shrink-0 flex-col ${
                  round
                    ? "items-center justify-center border-0 bg-[#060010] text-center"
                    : "items-start justify-between rounded-[12px] border border-neutral-100"
                } cursor-grab overflow-hidden active:cursor-grabbing`}
                style={{
                  width: itemWidth,
                  height: round ? itemWidth : "100%",
                  rotateY: rotateY,
                  ...(round && { borderRadius: "50%" }),
                }}
                transition={effectiveTransition}
              >
                <button
                  onClick={() => openImageFullscreen(item.imageSrc)}
                  className="absolute top-1 left-1 cursor-pointer rounded-full bg-amber-700/75 p-2 transition-all duration-300 hover:scale-105 hover:bg-yellow-700 dark:bg-violet-950/75 dark:hover:bg-violet-950 [&_svg]:size-8"
                >
                  <FullScreenSvg />
                </button>
                <div className="w-full overflow-hidden">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="object-cover"
                  />
                </div>
                <div className="flex w-full flex-col justify-end bg-amber-700/50 px-5 py-2 text-start dark:bg-violet-900/50">
                  <p className="line-clamp-2 text-sm font-bold md:text-lg">
                    {item.title}
                  </p>
                  <p className="line-clamp-2 text-xs font-semibold md:text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        <div
          className={`flex w-full justify-center ${
            round ? "absolute bottom-12 left-1/2 z-20 -translate-x-1/2" : ""
          }`}
        >
          <div className="mt-4 flex justify-center gap-4 px-8">
            {items.map((_, index) => (
              <motion.div
                key={index}
                className={`h-2 w-2 cursor-pointer rounded-full transition-colors duration-150 ${
                  currentIndex % items.length === index
                    ? round
                      ? "bg-white"
                      : "bg-yellow-100 dark:bg-violet-100"
                    : round
                      ? "bg-[#555]"
                      : "bg-yellow-100/75 dark:bg-violet-100/75"
                }`}
                animate={{
                  scale: currentIndex % items.length === index ? 1.2 : 1,
                }}
                onClick={() => setCurrentIndex(index)}
                transition={{ duration: 0.15 }}
              />
            ))}
          </div>
        </div>
      </div>
      <FullScreenImageModal
        isOpen={openModal}
        onClose={closeModal}
        src={modalImgSrc}
        alt="certificate"
      />
    </>
  );
}
