import { useEffect, useState } from "react";
import { TextLoaderProps } from "../../types/types";

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
