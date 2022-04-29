import { useEffect, useState } from "react";
import { TextLoaderProps } from "../../types/types";

/**
 * A text loader.
 *
 * Eg: "Loading..."
 *
 * @param {string} loadingText - The loader's text.
 * @param {number} speed - The speed of the loader's dots. The smaller the number, the faster the speed.
 */
const TextLoader = ({ loadingText, speed }: TextLoaderProps) => {
  const [dots, setDots] = useState<string>(".");
  useEffect(() => {
    const loadingDots = setInterval(() => {
      if (dots.length < 3) {
        setDots((prev) => prev + ".");
      } else {
        setDots(".");
      }
    }, speed);

    return () => clearInterval(loadingDots);
  });

  return (
    <p>
      {loadingText}
      {dots}
    </p>
  );
};

export default TextLoader;
