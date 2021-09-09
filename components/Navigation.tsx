import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";

interface menuItem {
  id: number;
  title: string;
  url: string;
}

interface NavigationProps {
  image: string;
  alt: string;
  menu: menuItem[];
  phone?: string;
}

const Navigation = (props: NavigationProps) => {
  return (
    <div>
      <Navbar bg="white" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={`${process.env.backend}${props.image}`}
              width="120"
              height="120"
              className="d-inline-block align-top"
              title={props.alt}
              alt={props.alt}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {props.menu.map((menuItem) => (
                <Nav.Link key={menuItem.id} href={menuItem.url}>
                  {menuItem.title}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
          {props.phone ? (
            <Nav.Link href={`tel:${props.phone}`}>
              <FiPhoneCall />
              {props.phone}
            </Nav.Link>
          ) : (
            ""
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
