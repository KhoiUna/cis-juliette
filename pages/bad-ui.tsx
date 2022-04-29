import Image from "next/image";
import QuoteBlock from "../components/ui/QuoteBlock";
import Card from "../components/ui/Card";
import Layout from "../containers/Layout";
import { NextPage } from "next";
import NavLink from "../components/ui/NavLink";

const Bad: NextPage = () => {
  return (
    <Layout title={"Bad UI"}>
      <div className="flex justify-center flex-wrap">
        <QuoteBlock>
          <p className="text-xl italic text-left">
            {'"'}Small UI details may give users a bad experience. For instance,
            ...
          </p>
        </QuoteBlock>
      </div>

      <div className="flex justify-center">
        <Card>
          <div className="px-4 py-4 rounded-md w-[95vw]">
            <div className="mb-3">
              <p className="text-lg italic">
                This is the page for students to view their grades.
              </p>
              <div className="my-4 text-center">
                <Image
                  className="rounded-lg"
                  src={"/images/student_grades_page.jpg"}
                  width={550}
                  height={300}
                  alt="Student grades page"
                />
              </div>
            </div>

            <hr className="m-4" />

            <div className="mt-7">
              <p className="text-lg italic">
                Here is the dropdown menu that may confuse users. Users are
                provided a long list of school semesters that they have to
                scroll down.
              </p>
              <div className="my-4 text-center">
                <Image
                  className="rounded-lg"
                  src={"/images/dropdown_menu.jpg"}
                  width={550}
                  height={500}
                  alt="Dropdown menu"
                />
              </div>{" "}
              <p className="text-lg italic">
                Note that users are also shown the school years that are way
                before they have been admitted. But there is a{" "}
                <span className="underline underline-offset-4 text-blue-600 font-bold">
                  <NavLink href={"/good-ui"} text={"better way"}></NavLink>
                </span>
                .{'"'}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Bad;
