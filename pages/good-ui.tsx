import QuoteBlock from "../components/ui/QuoteBlock";
import Card from "../components/ui/Card";
import Layout from "../containers/Layout";
import { NextPage } from "next";
import Dropdown from "../components/Dropdown";
import YearInput from "../components/YearInput";
import { useState } from "react";

const Good: NextPage = () => {
  const currentYear = new Date().getFullYear();
  const [admissionYear, setAdmissionYear] = useState<number>(currentYear);
  const handleChange = ({ target }) => setAdmissionYear(target.value);

  return (
    <Layout title={"Good UI"}>
      <div className="flex justify-center">
        <QuoteBlock>
          <p className="text-xl italic text-left">
            {'"'}This is the improved design of the dropdown menu.
          </p>
        </QuoteBlock>
      </div>

      <div className="flex justify-center">
        <Card>
          <div className="px-4 py-4 rounded-md">
            <div className="mb-3">
              <p className="text-lg italic">
                Users are shown with two input boxes. One for the school season
                and one for the school year.
              </p>
            </div>

            <div className="border-slate-100 border-2 rounded-md p-4 shadow-lg">
              <div className="text-center">
                <YearInput handleChangeAdmissionYear={handleChange} />
              </div>

              <div className="flex justify-between">
                <Dropdown admissionYear={admissionYear} />
              </div>
            </div>
          </div>

          <div className="px-4 py-4 rounded-md">
            <div className="mb-3">
              <p className="text-lg italic">
                Note that the input for the school year only lists till the
                {" user's"} admission year. This makes the dropdown cleaner.
                {'"'}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Good;
