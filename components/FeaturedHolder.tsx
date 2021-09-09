import { Container, Row } from "react-bootstrap";
import Featured, { featured } from "./Featured";

interface featuredHolderProps {
  featured: featured[];
}

const FeaturedHolder = (props: featuredHolderProps) => {
  return (
    <Container>
      <Row>
        {props.featured.map((feat) => (
          <Featured
            id={feat.id}
            key={feat.id}
            title={feat.title}
            image={feat.image.url}
            text={feat.text}
          ></Featured>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturedHolder;
