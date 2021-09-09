import { Col } from "react-bootstrap";

export interface featured {
  id: string;
  title: string;
  text: string;
  image: any;
}

const Featured = (props: featured) => {
  return (
    <Col sm={12} md={4} key={props.id} className="featured">
      <h3 className="with-margin">{props.title}</h3>
      <div className="featured-img-holder">
        <img
          src={`${process.env.backend}${props.image}`}
          alt={props.title}
        ></img>
      </div>
      <p>{props.text}</p>
    </Col>
  );
};

export default Featured;
