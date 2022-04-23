import type { NextPage } from "next";
import Layout from "../containers/Layout";

const Home: NextPage = () => {
  return (
    <Layout title={"UI Research"}>
      <p>This project explores and compares design of a bad UI and a good UI</p>
    </Layout>
  );
};

export default Home;
