import React, { useEffect, useRef, useState } from "react";

interface SliderProps {
  showDot: boolean;
  autoPlaySpeed?: number;
  transitionDuration?: number;
  itemClass: string;
  containerClass: string;
  infinite: boolean;
  children: React.ReactNode;
}

const Carousel = (props: SliderProps) => {
  const {
    children,
    showDot,
    infinite,
    transitionDuration = 300,
    autoPlaySpeed = 3000,
  } = props;
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const carouselItemsCount = React.Children.count(children);

  const startSlider = () => {
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
  };

  useEffect(() => {
    startSlider();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    startSlider(); // reset interval khi click
  };

  const renderDots = () => {
    if (!showDot) return null;
    return (
      <div className="absolute bottom-3 flex space-x-2 justify-center w-full">
        {React.Children.map(children, (child, idx) => (
          <div
            key={idx}
            className={`h-4 w-4 rounded-full cursor-pointer ${
              activeIndex === idx ? "bg-blue-500" : "bg-gray-500"
            }`}
            onClick={() => handleClick(idx)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="w-3/5 h-full relative pr-2.5">
      <div>
        {React.Children.map(children, (child, idx) => (
          <div
            key={idx}
            className={`w-full h-full ${
              activeIndex === idx ? "block" : "hidden"
            }`}
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
