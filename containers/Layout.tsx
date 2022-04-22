import Head from "next/head";
import HeaderBar from "../components/ui/HeaderBar";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>Juliette | {title}</title>
      </Head>

      <header>
        <HeaderBar />
      </header>

      <main>{children}</main>

      <footer>
        <Container maxWidth="sm" sx={{ bgcolor: "#1e2b31", color: "#fff" }}>
          <Typography
            sx={{ padding: "0.8rem", margin: "0.8rem 0 0 0" }}
            textAlign="center"
          >
            Made by Khoi Nguyen
          </Typography>
        </Container>
      </footer>
    </>
  );
};

export default Layout;
