import type { NextPage } from "next";
import Layout from "../containers/Layout";

const Home: NextPage = () => {
  return (
    <Layout title={"UI Research"}>
      <div className="mx-4 sm:my-3 sm:mx-[25%] text-center drop-shadow-lg">
        <div className="bg-slate-200 w-fit mx-auto px-5 py-5 rounded-md">
          <p className="text-xl italic">
            {'"'}This project explores and compares design of a bad UI and a
            good UI on our university website.{'"'}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
