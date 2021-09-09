import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Spinner, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

interface textImage {
  id: number;
  image: any;
  text: string;
}

const About: NextPage = () => {
  useEffect(() => {
    axios.get(`${process.env.backend}/About`).then(function (response) {
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
      <Container className="about-us">
        <h1>{data.title}</h1>
        {data.data.map((item: textImage) =>
          item.id % 2 == 0 ? (
            <Row key={item.id}>
              <Col md={6} sm={12}>
                <img src={`${process.env.backend}${item.image.url}`}></img>
              </Col>
              <Col md={6} sm={12}>
                {item.text}
              </Col>
            </Row>
          ) : (
            <Row key={item.id}>
              <Col md={6} sm={12}>
                {item.text}
              </Col>
              <Col md={6} sm={12}>
                <img src={`${process.env.backend}${item.image.url}`}></img>
              </Col>
            </Row>
          )
        )}
      </Container>
    </div>
  );
};

export default About;
