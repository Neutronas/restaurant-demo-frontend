import { Container, Row, Col } from "react-bootstrap";
import { FiHeart } from "react-icons/fi";

interface menuItem {
  id: number;
  title: string;
  url: string;
}

interface FooterProps {
  menu: menuItem[];
  copyright: string;
}
const Footer = (props: FooterProps) => {
  return (
    <div className="footer">
      <Container>
        <Row>
          {props.menu.map((menuItem) => (
            <Col key={menuItem.id}>
              <a href={menuItem.url}>{menuItem.title}</a>
            </Col>
          ))}
        </Row>
        <Row>
          <label className="copyright">{props.copyright}</label>
          <label className="copyright">
            Made with <FiHeart /> by
            <a href={"https://ruzauskas.eu"}> Lukas Ružauskas</a>
          </label>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
