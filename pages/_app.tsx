import "bootstrap/dist/css/bootstrap.min.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "../styles/globals.css";
import "../styles/theme.scss";
import type { AppProps } from "next/app";
import axios from "axios";
import Layout from "../components/Layout";
import ErrorPage from "../components/ErrorPage";

interface globalProps {
  global: any;
}
function MyApp({ Component, pageProps, global }: AppProps & globalProps) {
  return global === null ? (
    <ErrorPage />
  ) : (
    <div>
      <Layout global={global}>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

MyApp.getInitialProps = async () => {
  try {
    const global = await axios.get(`${process.env.backend}/global`);
  } catch (error) {
    return {
      global: null,
    };
  }
  return {
    global: global.data,
  };
};

export default MyApp;
