import { createUseStyles } from "react-jss";
import Wrapper from "../Components/Wrapper";
import { CategoryType, ProductType } from "../Types";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const useStyles = createUseStyles({
    item: {
        border: "1px solid lightgray",
        borderRadius: "5px",
        padding: "10px",
        textAlign: "center",
        //margin: "10px",
        '&:hover': {
            boxShadow: "2px 2px 5px lightgray",
            cursor: "pointer",
        }
    },
    productTitle: {
        '&:hover': {
            cursor: "pointer",
            textDecoration: "underline",
        }
    }
})

interface CategoryProps {
    category: CategoryType;
    products: ProductType[];
}

function Category(props: CategoryProps) {
    const classes = useStyles();
    const navigate = useNavigate();

    return <Wrapper>
        <h3>Category "{props.category.name}"</h3>
        <p>{props.category.description}</p>
        <Row style={{ columnGap: "10px" }}>
            {props.category?.children?.map(child => {
                return <Col
                    xs={3}
                    key={child.id}
                    className={classes.item}
                    onClick={() => navigate(`/category/${child.id}`)}
                >
                    <h5>{child.name}</h5>
                    <p>{child.description}</p>
                </Col>
            })}

            {props.products?.map(product => {
                return <Card
                    key={product.id}
                    style={{ width: '18rem' }}
                >
                    <Card.Img variant="top" src="/images/default.png" />
                    <Card.Body>
                        <Card.Title
                            className={classes.productTitle}
                            onClick={() => navigate(`/product/${product.id}`)}
                        >
                            {product.name}
                        </Card.Title>
                        {/*<Badge bg="danger">
                            Sale
            </Badge>*/}
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                        <Row style={{ marginTop: "auto" }}>
                            <div style={{ width: "50%" }}>
                                <div>{product.price} kr</div>
                            </div>
                            <Button style={{ width: "50%" }} variant="primary">Add to cart</Button>
                        </Row>
                    </Card.Body>
                </Card>
            })}
        </Row>
    </Wrapper>
}

export default Category;

