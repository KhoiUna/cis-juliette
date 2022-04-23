import Head from "next/head";
import HeaderBar from "../components/ui/HeaderBar";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>Juliette | {title}</title>
      </Head>

      <HeaderBar />

      <main>
        <div className="bg-white">{children}</div>
      </main>

      <footer className="bg-slate-700 text-slate-50 text-center px-3 py-3 mt-3">
        <a
          className="underline underline-offset-4"
          href="https://github.com/KhoiUna/cis-juliette"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Source code</p>
        </a>

        <p className="mt-4">
          Made by{" "}
          <a
            href="https://bio.khoiuna.info"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="underline underline-offset-4 italic">
              Khoi Nguyen
            </span>
          </a>
        </p>
      </footer>
    </>
  );
};

export default Layout;
