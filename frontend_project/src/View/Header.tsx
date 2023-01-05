import React from "react";
import { Button, Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";
import { CategoryType } from "../Types";
import { MdOutlineShoppingCart } from "react-icons/md";

const useStyles = createUseStyles({
  wrapper: {
    padding: "20px 10%",
  },
  logo: {
    '&:hover': {
      cursor: "pointer",
    }
  },
  cart: {
    fontSize: "20px"
  }
})

interface HeaderProps {

}

function Header(props: HeaderProps) {
  const classes = useStyles();
  const navigate = useNavigate();

  const [categories, setCategories] = React.useState<CategoryType[]>([]);

  React.useEffect(() => {
    const res = fetch('http://localhost:8080/categories');
    res.then((res) => {
      res.json().then((data) => {
        setCategories(data);
      });
    });
  }, []);

  return <Navbar className={classes.wrapper} bg="white" expand="lg">
    <Container fluid>
      <Navbar.Brand className={classes.logo} onClick={() => navigate("/")} >Komplett</Navbar.Brand>

      <Navbar.Toggle aria-controls="navbarScroll" />

      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
        >
          <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>

          <NavDropdown title="Categories" id="navbarScrollingDropdown">
            {categories.map((category) => {
              return category.parent_id === null ? <NavDropdown.Item key={category.id} onClick={() => navigate(`/category/${category.id}`)}>
                {category.name}
              </NavDropdown.Item> : null
            })}
          </NavDropdown>

          <Nav.Link>
            <MdOutlineShoppingCart className={classes.cart} />
            0
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