import { CardProps } from "../../types/types";

const Card = ({ children }: CardProps) => {
  return (
    <div className="bg-white rounded-md mx-4 my-4 shadow-lg shadow-slate-400 max-w-sm min-w-sm">
      {children}
    </div>
  );
};

export default Card;
