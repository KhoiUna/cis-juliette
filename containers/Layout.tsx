import Head from "next/head";
import HeaderBar from "../components/ui/HeaderBar";
import { LayoutProps } from "../types/types";

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Juliette | {title}</title>
      </Head>

      <HeaderBar />

      <main className="bg-slate-50 py-3 min-h-[85vh]">{children}</main>

      <footer className="bg-slate-700 text-slate-50 text-center px-4 py-4 rounded-t-lg">
        <a
          className="underline underline-offset-4"
          href="https://github.com/KhoiUna/cis-juliette"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-lg">Source code</p>
        </a>

        <p className="mt-4 text-lg">
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
