import "bootstrap/dist/css/bootstrap.min.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "../styles/globals.css";
import "../styles/theme.scss";
import type { AppProps } from "next/app";
import axios from "axios";
import Layout from "../components/Layout";
import { propTypes } from "react-bootstrap/esm/Image";

function MyApp({ Component, pageProps, global }: AppProps) {
  return (
    <div>
      <Layout global={global}>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

MyApp.getInitialProps = async () => {
  const global = await axios.get(`${process.env.backend}/global`);
  return {
    global: global.data,
  };
};

export default MyApp;
