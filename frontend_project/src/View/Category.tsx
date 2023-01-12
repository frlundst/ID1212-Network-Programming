import { createUseStyles } from "react-jss";
import Wrapper from "../Components/Wrapper";
import { CategoryType, ProductType } from "../Types";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Dot from "../Components/Dot";
import { MdHeight } from "react-icons/md";

const useStyles = createUseStyles({
    item: {
        color: "black",
        background: "white",
        border: "1px solid lightgray",
        borderRadius: "5px",
        padding: "10px",
        textAlign: "center",
        '&:hover': {
            boxShadow: "2px 2px 5px lightgray",
            cursor: "pointer",
        }
    },
    productTitle: {
        color: "black",
        '&:hover': {
            cursor: "pointer",
            textDecoration: "underline",
        }
    },
    productText: {
        color: "black",
        
    },
    stockRow: {
        color: "black",
        display: "flex",
        marginTop: "10px",
        alignItems: "center",
        columnGap: "10px"
    }
})

interface CategoryProps {
    category: CategoryType;
    products: ProductType[];
    addToCart: (productId: string) => void;
}

function Category(props: CategoryProps) {
    const classes = useStyles();
    const navigate = useNavigate();

    return <Wrapper>
        <h3>{props.category?.name} - Category</h3>
        <p>{props.category?.description}</p>
        <br/>
        {props.category?.children?.length !== 0 ? 
            <h4 style={{textAlign: "center"}}>Subcategories</h4>
            :
            <h4 style={{textAlign: "center"}}>Products</h4>
        }
        <br/>
        <Row className="justify-content-center" style={{ columnGap: "10px" }}>
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
                    style={{ width: '18rem'}}
                >
                    <Card.Img variant="top" src={product?.imagePathname} />
                    <Card.Body>
                        <Card.Title
                            className={classes.productTitle}
                            onClick={() => navigate(`/product/${product.id}`)}>
                            {product.name}
                        </Card.Title>
                        {/*<Badge bg="danger">
                            Sale
            </Badge>*/}
                        <Card.Text className={classes.productText}>
                            
                            {product.description}
                            
                        </Card.Text>
                        
                    </Card.Body>
                    <Row style={{ marginTop: "flex", height: "75px"}}>
                    <div className={classes.stockRow}> <Dot size="15px" numberAvailable={product?.numberAvailable} /> {product?.numberAvailable} in store</div>
                        <div style={{ width: "50%", fontWeight: "bold"}}>
                        <div className={classes.productText}>Price: {product.price} kr</div>
                        </div>
                        <Button style={{ width: "50%", position: "absolute", bottom: "10px", left: "50%"}} variant="primary"onClick={() => props.addToCart(product.id)}>Add to cart</Button></Row>
                </Card>
            })}
        </Row>
    </Wrapper>
}

export default Category;

