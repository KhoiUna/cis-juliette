import type { NextPage } from "next";
import Image from "next/image";
import QuoteBlock from "../components/QuoteBlock";
import Card from "../components/ui/Card";
import Layout from "../containers/Layout";

const Home: NextPage = () => {
  return (
    <Layout title={"UI Research"}>
      <QuoteBlock>
        <p className="text-xl italic">
          {'"'}This project explores and compares design of a bad UI and a good
          UI on our university website.{'"'}
        </p>
      </QuoteBlock>

      <div className="flex justify-evenly flex-wrap">
        <Card>
          <div className="bg-red-200 px-4 py-4 rounded-md hover:shadow-red-300 hover:shadow-xl">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              modi, vitae voluptatibus nobis quisquam mollitia, a voluptas esse
              nostrum nemo voluptate iure distinctio vero fugiat. Nisi ex rerum
              nam reiciendis?
              {'"'}
            </p>
          </div>
        </Card>

        <Card>
          <div className="bg-emerald-100 px-4 py-4 rounded-md hover:shadow-emerald-300 hover:shadow-xl">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              modi, vitae voluptatibus nobis quisquam mollitia, a voluptas esse
              nostrum nemo voluptate iure distinctio vero fugiat. Nisi ex rerum
              nam reiciendis?
              {'"'}
            </p>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Home;
