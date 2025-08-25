import React, { useEffect, useRef, useState, useCallback } from "react";
import cx from "clsx";

interface SliderProps {
  showDot?: boolean;
  autoPlaySpeed?: number;
  transitionDuration?: number;
  itemClass?: string;
  containerClass?: string;
  dotClass?: string;
  infinite?: boolean;
  children: React.ReactNode;
}

const Carousel = ({
  children,
  showDot = true,
  itemClass,
  containerClass,
  infinite = true,
  dotClass,
  transitionDuration = 300,
  autoPlaySpeed = 3000,
}: SliderProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const carouselItemsCount = React.Children.count(children);

  const startSlider = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % carouselItemsCount;
        return infinite
          ? nextIndex
          : prev < carouselItemsCount - 1
          ? nextIndex
          : carouselItemsCount - 1;
      });
    }, autoPlaySpeed);
  }, [autoPlaySpeed, carouselItemsCount, infinite]);

  useEffect(() => {
    startSlider();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startSlider]);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    startSlider();
  };

  const handleKeyDown = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === "Enter" || e.key === " ") {
      handleClick(idx);
    }
  };

  const renderDots = () => {
    if (!showDot) return null;
    return (
      <div className="absolute bottom-3 flex space-x-2 justify-center w-full">
        {React.Children.map(children, (_, idx) => (
          <div
            key={idx}
            tabIndex={0}
            role="button"
            aria-label={`Go to slide ${idx + 1}`}
            className={cx(
              `h-4 w-4 rounded-full cursor-pointer outline-none transition-colors duration-200 ${
                activeIndex === idx ? "bg-blue-500" : "bg-gray-500"
              }`,
              dotClass
            )}
            onClick={() => handleClick(idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
          />
        ))}
      </div>
    );
  };

  return (
    <div
      className={cx(
        "w-4/5 h-[400px] relative pr-2.5 mx-auto", // width 80%, height cố định, căn giữa
        containerClass
      )}
    >
      <div className="relative h-full">
        {React.Children.map(children, (child, idx) => (
          <div
            key={idx}
            className={cx(
              `w-full h-full absolute top-0 left-0 transition-opacity duration-${transitionDuration} ${
                activeIndex === idx
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0 pointer-events-none"
              }`,
              itemClass
            )}
            aria-hidden={activeIndex !== idx}
          >
            {child}
          </div>
        ))}
      </div>
      {renderDots()}
    </div>
  );
};

export default Carousel;
