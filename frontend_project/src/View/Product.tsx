import { Button, Col, Image, Row } from "react-bootstrap";
import Wrapper from "../Components/Wrapper";
import { ProductType } from "../Types";
import { createUseStyles } from "react-jss";
import Dot from "../Components/Dot";
import { BsCheckLg } from "react-icons/bs";
import React from "react";
import { useNavigate } from "react-router-dom";

const useStyles = createUseStyles({
    image: {
        width: "100%",
    },
    category: {
        color: "orange",
        textDecoration: "underline",
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
    addToCart: (productId: string) => void;
}

function Product(props: ProductProps) {
    const classes = useStyles();
    const navigate = useNavigate();

    const [addedToCart, setAddedToCart] = React.useState(false);

    return <Wrapper>
        <Row>
            <Col>
                <h1>{props.product?.name}</h1>
                <h6>
                    Return to: <span className={classes.category} onClick={() => navigate(`/category/${props.product.category.id}`)}>
                        {props.product?.category?.name}
                    </span>
                </h6>
                <br />
                <Image className={classes.image} src={props.product?.imagePathname} />
                <br />
                <br />
            </Col>
            <Col style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <h1>Price: {props.product.price} kr </h1>
                <Button
                    style={{ width: "75%" }}
                    disabled={addedToCart}
                    onClick={() => {
                        setAddedToCart(true);
                        props.addToCart(props.product.id);
                        setTimeout(() => {
                            setAddedToCart(false);
                        }, 2000);
                    }}
                >{addedToCart ? <><BsCheckLg /> Added to cart</> : "Add to cart"}</Button>
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