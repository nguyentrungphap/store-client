import React, { useEffect, useRef, useState } from "react";

interface InputAnimationProps {
  id?: string;
  name?: string;
  type?: string;
  placeholders: string[];
  animationSpeed?: number;
  intervalTime?: number;
  className?: string;
}
const InputAnimation = (props: InputAnimationProps) => {
  const {
    id,
    name,
    type = "text",
    placeholders,
    animationSpeed = 40,
    intervalTime = 3000,
    className,
  } = props;
  const [index, setIndex] = useState(0);
  const [animatedPlaceholder, setAnimatedPlaceholder] = useState("");
  const letterIndexRef = useRef(0);

  useEffect(() => {
    let letterTimeout: NodeJS.Timeout;

    // Animate each letter
    const animateLetters = () => {
      setAnimatedPlaceholder(
        placeholders[index].slice(0, letterIndexRef.current)
      );
      if (letterIndexRef.current < placeholders[index].length) {
        letterTimeout = setTimeout(() => {
          letterIndexRef.current += 1;
          animateLetters();
        }, animationSpeed);
      }
    };
    letterIndexRef.current = 0;
    animateLetters();

    return () => clearTimeout(letterTimeout);
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % placeholders.length);
    }, intervalTime);
    return () => clearInterval(interval);
  }, []);

  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={animatedPlaceholder}
      className={` bg-white text-black py-2 px-4 focus:outline-none focus:ring-0 focus:border-gray-300 transition-all duration-300 ${className}`}
    />
  );
};

export default InputAnimation;
