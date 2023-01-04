import { Button, Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";

const useStyles = createUseStyles({
  wrapper: {
    padding: "20px 25%",
  }
})

interface HeaderProps {

}

function Header (props: HeaderProps) {
  const classes = useStyles();
  const navigate = useNavigate();

  return <Navbar className={classes.wrapper} bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Komplett</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
        <Nav.Link onClick={() => navigate("/categories")}>Categories</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">
            Another action
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
}

export default Header;