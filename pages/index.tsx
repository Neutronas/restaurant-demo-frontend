import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Spinner, Container, Row, Col } from "react-bootstrap";
import FeaturedHolder from "../components/FeaturedHolder";
import axios from "axios";

interface sliderItem {
  id: number;
  url: string;
}
const Home: NextPage = () => {
  useEffect(() => {
    axios.get(`${process.env.backend}/Homepage`).then(function (response) {
      setData(response.data);
    });
  }, []);

  const [data, setData] = useState(null);
  SwiperCore.use([Navigation, Pagination, Autoplay]);

  if (!data) return <Spinner animation="grow" />;

  return (
    <div>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Swiper
        autoplay={{ delay: 3000 }}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{
          type: "progressbar",
        }}
        loop
      >
        {data.slider.map((sliderItem: sliderItem) => (
          <SwiperSlide key={sliderItem.id}>
            <img src={`${process.env.backend}${sliderItem.url}`}></img>
          </SwiperSlide>
        ))}
      </Swiper>
      <Container>
        <Row>
          <Col>
            {data.longAboutTitle ? (
              <h2 className="with-margin">{data.longAboutTitle}</h2>
            ) : (
              ""
            )}
            {data.longAbout ? <p>{data.longAbout}</p> : ""}
          </Col>
        </Row>
      </Container>
      {data.featured ? (
        <FeaturedHolder featured={data.featured}></FeaturedHolder>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
