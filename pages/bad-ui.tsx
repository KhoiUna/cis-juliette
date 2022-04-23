import Image from "next/image";
import QuoteBlock from "../components/ui/QuoteBlock";
import Card from "../components/ui/Card";
import Layout from "../containers/Layout";
import { NextPage } from "next";

const Bad: NextPage = () => {
  return (
    <Layout title={"Bad UI"}>
      <div className="flex justify-center flex-wrap">
        <QuoteBlock>
          <p className="text-xl italic text-left">
            {'"'}Here are some images of the dropdown menu that may confuse
            users.
            {'"'}
          </p>
        </QuoteBlock>
      </div>

      <div className="flex justify-center">
        <Card>
          <div className="px-4 py-4 rounded-md">
            <div className="mb-3">
              <p className="text-lg italic">
                {'"'}Here are some images of the dropdown menu that may confuse
                users.
                {'"'}
              </p>
              <div className="my-4 shadow-lg">
                <Image
                  className="rounded-lg"
                  src={"/images/student_grades_page.jpg"}
                  width={400}
                  height={200}
                  alt="Student grades page"
                />
              </div>
            </div>

            <div className="mt-3">
              <p className="text-lg italic">
                {'"'}Here are some images of the dropdown menu that may confuse
                users.
                {'"'}
              </p>
              <div className="my-4 shadow-lg">
                <Image
                  className="rounded-lg"
                  src={"/images/dropdown_menu.jpg"}
                  width={550}
                  height={400}
                  alt="Dropdown menu"
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Bad;
