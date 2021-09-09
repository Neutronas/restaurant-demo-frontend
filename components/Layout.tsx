import { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Spinner } from "react-bootstrap";

const Layout = (props: any) => {
  useEffect(() => {}, []);

  if (!props.global)
    return (
      <div>
        <Spinner animation="grow" />
      </div>
    );

  return (
    <div>
      <Navigation
        image={props.global.logo.url}
        alt={props.global.logo.alternativeText}
        menu={props.global.menu}
        phone={props.global.phone}
      />
      {props.children}
      <Footer
        menu={props.global.menu}
        copyright={props.global.copyright}
      ></Footer>
    </div>
  );
};

export default Layout;
