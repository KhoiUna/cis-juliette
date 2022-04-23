import { QuoteBlockProps } from "../../types/types";

const QuoteBlock = ({ children }: QuoteBlockProps) => {
  return (
    <div className="mx-4 sm:my-3 sm:mx-[25%] text-center shadow-lg shadow-slate-400 rounded-md w-fit h-fit">
      <div className="bg-slate-200 w-fit mx-auto px-5 py-5 rounded-md">
        {children}
      </div>
    </div>
  );
};

export default QuoteBlock;
