import { useEffect, useState } from "react";
import { BlinkCaretProps } from "../../types/types";

const BlinkCaret = ({ speed }: BlinkCaretProps) => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const blink = setInterval(() => {
      setShow(!show);
    }, speed);

    return () => clearInterval(blink);
  }, [show, speed]);

  return show ? <span>|</span> : <span className="invisible">|</span>;
};

export default BlinkCaret;
