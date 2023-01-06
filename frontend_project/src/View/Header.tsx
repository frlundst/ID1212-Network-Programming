import React from "react";
import { Button, Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";
import { CategoryType } from "../Types";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GoSearch } from "react-icons/go";

const useStyles = createUseStyles({
  wrapper: {
    padding: "20px 10%",
    background: "rgba(255, 255, 255, 0.2)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    WebkitDackdropFilter: "blur(5px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
    zIndex: "5"
  },
  logo: {
    '&:hover': {
      cursor: "pointer",
    }
  },
  cart: {
    fontSize: "20px"
  },
  loginRegister: {
    marginLeft: "50px"
  }
})

interface HeaderProps {
  cartLength: number;
  setShowCart: (show: boolean) => void;
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

  return <Navbar className={classes.wrapper} variant="dark" expand="lg">
    <Container fluid>
      <Navbar.Brand className={classes.logo} onClick={() => navigate("/")} >E-Space</Navbar.Brand>

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

          <Nav.Link onClick={() => props.setShowCart(true)} >
            <MdOutlineShoppingCart className={classes.cart} />
            {props.cartLength}
          </Nav.Link>
        </Nav>

        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="primary"><GoSearch /></Button>
        </Form>

        <div className={classes.loginRegister}>
          <Button className="me-2" variant="outline-primary">
            Login
          </Button>
          <span style={{color: "white"}}>or</span>
          <Button className="ms-2" variant="primary" onClick={() => navigate("/register")}>
            Register
          </Button>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}

export default Header;