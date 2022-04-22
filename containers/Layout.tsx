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
        <Container
          sx={{
            bgcolor: "#1e2b31",
            color: "#fff",
            width: "100%",
            padding: "0.8rem",
            margin: "0.8rem 0 0 0",
          }}
        >
          <Typography textAlign="center" sx={{ margin: "0.3rem" }}>
            Source code: https://github.com/KhoiUna/cis-juliette
          </Typography>

          <Typography textAlign="center" sx={{ margin: "0.3rem" }}>
            Made by Khoi Nguyen
          </Typography>
        </Container>
      </footer>
    </>
  );
};

export default Layout;
