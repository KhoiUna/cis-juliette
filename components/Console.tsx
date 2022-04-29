import { useEffect, useState } from "react";
import { ConsoleProps } from "../types/types";
import BlinkCaret from "./ui/BlinkCaret";
import TextLoader from "./ui/TextLoader";

const Console = ({ actionArray }: ConsoleProps) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  if (isLoading)
    return (
      <div className="p-4 my-3 bg-black rounded-md text-emerald-600">
        <TextLoader loadingText={"Launching console"} speed={300} />
      </div>
    );

  if (actionArray.length === 0)
    return (
      <div className="p-4 my-3 bg-black rounded-md text-emerald-600">
        <BlinkCaret speed={500} />
      </div>
    );

  return (
    <div className="p-4 my-3 bg-black rounded-md text-emerald-600 max-h-[200px] overflow-auto">
      {actionArray.map(({ field, value }, index) => (
        <p key={index}>
          {field}: {value}
        </p>
      ))}
      <BlinkCaret speed={500} />
    </div>
  );
};

export default Console;
