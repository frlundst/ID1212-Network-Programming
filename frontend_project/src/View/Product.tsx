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
        maxHeight: "350px",
        margin: "0 auto",
        display: "block"
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

    const [display, setDisplay] = React.useState(false);
    const [stock, setStock] = React.useState(false);
    React.useEffect(() => {
        if (props.product?.oldprice === 0) {
            setDisplay(false);
          } else {
            setDisplay(true);
          }
        }, [props.product?.oldprice]
    );
    React.useEffect(() => {
        if (props.product?.numberAvailable === 0) {
            setStock(false);
          } else {
            setStock(true);
          }
        }, [props.product?.numberAvailable]
    );
    const dif = props.product.oldprice - props.product.price;
    const percent = ((dif / props.product.oldprice) * 100).toFixed();
    return <Wrapper>
        <Row>
            <Col>
                <h1>{ display ?  <p>{props.product?.name} <h2 style={{fontSize: "60%"}}>SALE: {percent}%</h2></p> : <p>{props.product?.name}</p>}</h1>
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
                <h1> <div> { display ?  <p><h5 style={{textDecorationLine: "line-through"}}>Original price: {props.product.oldprice} kr</h5>  Price: {props.product.price} kr </p> : <p>Price: {props.product.price} kr</p>}  </div></h1>
                {stock ? <Button
                    style={{ width: "75%" }}
                    disabled={addedToCart}
                    onClick={() => {
                        setAddedToCart(true);
                        props.addToCart(props.product.id);
                        setTimeout(() => {
                            setAddedToCart(false);
                        }, 2000);
                    }}>{addedToCart ? <><BsCheckLg /> Added to cart</> : "Add to cart"}</Button>
                : <Button style={{ width: "75%", backgroundColor: "grey"}}>Out of Stock</Button>}
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