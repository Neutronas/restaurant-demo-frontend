import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Spinner, Container, Row } from "react-bootstrap";
import MenuItem, { menuItemType } from "../components/MenuItem";
import axios from "axios";

const Menu: NextPage = () => {
  useEffect(() => {
    axios.get(`${process.env.backend}/Menu`).then(function (response) {
      setData(response.data);
    });
  }, []);

  const [data, setData] = useState(null);
  if (!data) return <Spinner animation="grow" />;

  return (
    <div>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h1>{data.title}</h1>
        <p style={{ whiteSpace: "pre-line" }}>{data.deliveryInfo}</p>
        <Row>
          <h2>{data.primaryMenuText ? data.primaryMenuText : ""}</h2>
          {data.primaryMenu.length > 0 &&
            data.primaryMenu.map((menuItem: menuItemType) => (
              <MenuItem
                id={menuItem.id}
                key={menuItem.id}
                title={menuItem.title}
                image={menuItem.image}
                price={menuItem.price}
                description={menuItem.description}
                currency={data.currency}
                priceTag={data.priceTag}
              ></MenuItem>
            ))}
        </Row>
        <Row>
          <h2>{data.secondaryMenuText ? data.secondaryMenuText : ""}</h2>
          {data.secondaryMenu.length > 0 &&
            data.secondaryMenu.map((menuItem: menuItemType) => (
              <MenuItem
                id={menuItem.id}
                key={menuItem.id}
                title={menuItem.title}
                image={menuItem.image}
                price={menuItem.price}
                description={menuItem.description}
                currency={data.currency}
                priceTag={data.priceTag}
              ></MenuItem>
            ))}
        </Row>
        <Row>
          <h2>{data.thirdMenuText ? data.thirdMenuText : ""}</h2>
          {data.thirdMenu.length > 0 &&
            data.thirdMenu.map((menuItem: menuItemType) => (
              <MenuItem
                id={menuItem.id}
                key={menuItem.id}
                title={menuItem.title}
                image={menuItem.image}
                price={menuItem.price}
                description={menuItem.description}
                currency={data.currency}
                priceTag={data.priceTag}
              ></MenuItem>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default Menu;
