import { YearInputProps } from "../types/types";

const YearInput = ({ handleChangeAdmissionYear }: YearInputProps) => {
  return (
    <input
      onChange={(e) => handleChangeAdmissionYear(e)}
      className="border-2 border-black p-3 my-3 rounded-md w-[100%]"
      type="number"
      name="admission-year"
      id="admission-year"
      placeholder="Type your admission year"
    />
  );
};

export default YearInput;
