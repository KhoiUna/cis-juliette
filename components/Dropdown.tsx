import { DropdownProps } from "../types/types";

const Dropdown = ({ admissionYear }: DropdownProps) => {
  const currentYear = new Date().getFullYear();
  const yearDifference = currentYear - admissionYear;
  const yearArray = new Array(yearDifference + 1).fill(null);

  return (
    <>
      <select
        className="border-2 border-black rounded-md p-3"
        name="season"
        id="season"
      >
        <option value="Fall">Fall</option>
        <option value="Winter">Winter</option>
        <option value="Spring">Spring</option>
        <option value="Summer">Summer</option>
      </select>

      <select
        className="border-2 border-black rounded-md p-3"
        name="year"
        id="year"
      >
        {yearArray.map((item, index) => (
          <option key={index} value="Fall">
            {currentYear - index}
          </option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;
