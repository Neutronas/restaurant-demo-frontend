import { Col } from "react-bootstrap";

export interface menuItemType {
  id: string;
  title: string;
  description: string;
  image: any;
  price: number;
  priceTag: string;
  currency: string;
}

const Featured = (props: menuItemType) => {
  return (
    <Col sm={12} md={4} key={props.id} className="featured menu">
      <h3 className="">{props.title}</h3>
      <div className="featured-img-holder">
        <img
          src={`${process.env.backend}${props.image.url}`}
          alt={props.title}
        ></img>
      </div>
      <p className="description">{props.description}</p>
      <div className="price-holder">
        <label className="priceTag">{props.priceTag}: </label>
        <label className="price">
          {props.price}
          {props.currency}
        </label>
      </div>
    </Col>
  );
};

export default Featured;
