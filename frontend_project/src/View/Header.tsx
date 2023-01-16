import React from "react";
import { Button, Container, Form, Image, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";
import { CategoryType, ProfileType } from "../Types";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { RxAvatar } from "react-icons/rx";

const useStyles = createUseStyles({
  wrapper: {
    padding: "20px 10%",
    background: "rgba(255, 255, 255, 0.2)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    WebkitDackdropFilter: "blur(5px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
    zIndex: "5",
    paddingTop: "5px",
    paddingBottom: "5px",
  },
  logo: {
    '&:hover': {
      cursor: "pointer",
    }
  },
  cart: {
    fontSize: "20px",
  },
  loginRegister: {
    marginRight: "50px"
  }
})

interface HeaderProps {
  cartLength: number;
  setShowCart: (show: boolean) => void;
  setShowRegister: (show: boolean) => void;
  setShowLogin: (show: boolean) => void;
  profile: ProfileType | null;
  logoutFun: () => void;
}

function Header(props: HeaderProps) {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    const search = form.elements.formBasicSearch.value;

    navigate(`/searchResult/${search}`);
  };

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
      <Navbar.Brand className={classes.logo} onClick={() => navigate("/")} >
        <Image src="/images/logo.png" height="60px" />
      </Navbar.Brand>

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
        </Nav>

        <Form className="d-flex me-3" onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicSearch">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{
                borderRadius: "0.375rem 0 0 0.375rem"
              }}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            style={{
              borderRadius: "0 0.375rem 0.375rem 0"
            }}
          >
            <GoSearch />
          </Button>
        </Form>

        <Nav>
          <NavDropdown title={<RxAvatar className={classes.cart} />}>
            {props.profile ?
              <>
                <NavDropdown.Item onClick={() => navigate("/profile")}>
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/orders")}>
                  Orders
                </NavDropdown.Item>
                {props.profile?.customerRole === "ADMIN" ?
                  <NavDropdown.Item onClick={() => navigate("/admin")}>
                    Admin
                  </NavDropdown.Item> : null}
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => props.logoutFun()}>
                  Logout
                </NavDropdown.Item>
              </>
              :
              <><NavDropdown.Item onClick={() => props.setShowLogin(true)}>
                Login
              </NavDropdown.Item>
                <NavDropdown.Item onClick={() => props.setShowRegister(true)}>
                  Register
                </NavDropdown.Item></>}
          </NavDropdown>

          <Nav.Link onClick={() => props.setShowCart(true)} >
            <MdOutlineShoppingCart className={classes.cart} />
            {props.cartLength}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}

export default Header;