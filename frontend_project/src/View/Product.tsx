import { Button, Col, Image, Row } from "react-bootstrap";
import Wrapper from "../Components/Wrapper";
import { ProductType } from "../Types";
import { createUseStyles } from "react-jss";
import Dot from "../Components/Dot";
import { MdPersonPin } from "react-icons/md";

const useStyles = createUseStyles({
    image: {
        width: "100%",
    },
    category: {
        color: "blue",
        '&:hover': {
            cursor: "pointer",
            textDecoration: "underline",
        }
    },
    stockRow: {
        display: "flex",
        marginTop: "10px",
        alignItems: "center",
        columnGap: "10px"
    }
})

interface ProductProps {
    product: ProductType;
}

function Product(props: ProductProps) {
    const classes = useStyles();

    return <Wrapper>
        <Row>
            <Col>
                <h1>{props.product?.name}</h1>
                <h6>Category <span className={classes.category}>{props.product?.category?.name}</span></h6>
                <br />
                <Image className={classes.image} src="/images/default.png" />
                <br />
                <br />
            </Col>
            <Col style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <h5>Price:</h5>
                <h1>{props.product.price} kr</h1>
                <Button style={{width: "75%"}}>Add to cart</Button>
                <div className={classes.stockRow}><Dot size="20px" numberAvailable={props.product?.numberAvailable} /> {props.product?.numberAvailable} in store</div>
                
            </Col>
        </Row>
        <hr />
        <Row>
            <Col>
                <h5>Description</h5>
                <p >{props.product.description}</p>
            </Col>

            <Col>

            </Col>
        </Row>
    </Wrapper>
}

export default Product;