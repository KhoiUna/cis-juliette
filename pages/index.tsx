import type { NextPage } from "next";
import Image from "next/image";
import QuoteBlock from "../components/ui/QuoteBlock";
import Card from "../components/ui/Card";
import Layout from "../containers/Layout";

const Home: NextPage = () => {
  return (
    <Layout title={"UI Research"}>
      <QuoteBlock>
        <p className="text-xl italic">
          {'"'}This project picks one bad UI design on our university website
          and tries to improve it with a better UI.{'"'}
        </p>
      </QuoteBlock>

      <div className="flex justify-evenly flex-wrap">
        <Card>
          <div className="bg-red-200 px-4 py-4 rounded-md hover:shadow-red-300 hover:shadow-xl max-w-sm min-w-sm">
            <h1 className="text-xl font-bold mb-2">Bad UI</h1>

            <Image
              className="rounded-lg"
              src={"/images/frustrated.jpg"}
              width={550}
              height={400}
              alt="Frustrated guy"
            />

            <p className="text-lg italic">
              {'"'}
              UI is an important part of the web. Without a good UI, a web
              application may make users confused and lose patience.
              {'"'}
            </p>
          </div>
        </Card>

        <Card>
          <div className="bg-emerald-100 px-4 py-4 rounded-md hover:shadow-emerald-300 hover:shadow-xl max-w-sm min-w-sm">
            <h1 className="text-xl font-bold mb-2">Good UI</h1>

            <Image
              className="rounded-lg"
              src={"/images/happy.jpg"}
              width={550}
              height={400}
              alt="Frustrated guy"
            />

            <p className="text-lg italic">
              {'"'}
              On the other hand, with a good UI, users can spend more time,
              which gives your application more engagement.
              {'"'}
            </p>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Home;
