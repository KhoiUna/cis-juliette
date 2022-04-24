import { CardProps } from "../../types/types";

const Card = ({ children }: CardProps) => {
  return (
    <div className="bg-white rounded-md mx-4 my-4 shadow-lg shadow-slate-400 h-fit">
      {children}
    </div>
  );
};

export default Card;
