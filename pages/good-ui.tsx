import QuoteBlock from "../components/QuoteBlock";
import Layout from "../containers/Layout";

const Good = () => {
  return (
    <Layout title={"Good UI"}>
      <div className="flex flex-row flex-wrap">
        <div>
          <QuoteBlock>
            <p className="text-xl italic text-left">
              {'"'}This is the improved design of the dropdown menu.{'"'}
            </p>
          </QuoteBlock>
        </div>
      </div>
    </Layout>
  );
};

export default Good;
