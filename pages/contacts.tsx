import React, { useRef, useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Spinner, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import ReactMapGL, { Marker } from "react-map-gl";

const Contacts: NextPage = () => {
  const [data, setData] = useState(null);

  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 8,
  });

  useEffect(() => {
    axios.get(`${process.env.backend}/contacts`).then(function (response) {
      setData(response.data);
      setViewport({
        latitude: response.data.latitude,
        longitude: response.data.longitude,
        zoom: response.data.zoom,
      });
    });
  }, []);
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
        <Row>
          <Col md={8} sm={12}>
            <div className="map-holder">
              <ReactMapGL
                {...viewport}
                width="100%"
                height="100%"
                mapboxApiAccessToken="pk.eyJ1IjoibmV1dHJvbmFzIiwiYSI6ImNrc3g2eXBxeDE5djAycHMyaGR0NWpua3oifQ.Z3A1lp7HK3G4DvEo3fN-cQ"
                onViewportChange={(viewport: any) => setViewport(viewport)}
                mapStyle="mapbox://styles/mapbox/streets-v11"
              >
                {data.pin ? (
                  <Marker
                    latitude={data.latitude}
                    longitude={data.longitude}
                    offsetLeft={-75}
                    offsetTop={-160}
                  >
                    <img src={`${process.env.backend}${data.pin.url}`}></img>
                  </Marker>
                ) : (
                  ""
                )}
              </ReactMapGL>
            </div>
          </Col>
          <Col md={4} sm={12} style={{ whiteSpace: "pre-line" }}>
            {data.text}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contacts;
