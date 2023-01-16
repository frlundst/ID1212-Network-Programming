import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";
import { ProductType } from "../Types";
import { Badge, Button, Card, Row } from "react-bootstrap";
import Dot from "./Dot";
import React from "react";

const useStyles = createUseStyles({
    productTitle: {
        color: "black",
        '&:hover': {
            cursor: "pointer",
            textDecoration: "underline",
        }
    },
    productText: {
        color: "black"

    },
    stockRow: {
        position: "absolute",
        color: "black",
        display: "flex",
        alignItems: "center",
        columnGap: "10px",
        bottom: "10px"
    },
    scuffedbox: {
        fontSize: "70%",
        backgroundColor: "red",
        width: "56px",
        height: "15px",
        left: "10px",
        position: "absolute",
        textIndent: "2px",
        columnGap: "10px"
    }
})

interface ProductElementProps {
    product: ProductType;
    addToCart: (productId: string) => void;
    showAddToCart?: boolean;
    showStock?: boolean;
}

function ProductElement({ product, addToCart, showAddToCart = true, showStock = true }: ProductElementProps) {
    const navigate = useNavigate();
    const classes = useStyles();
    const [display, setDisplay] = React.useState(false);
    const [stock, setStock] = React.useState(false);
    const dif = product.oldprice - product.price;
    const percent = ((dif / product.oldprice) * 100).toFixed();
    React.useEffect(() => {
        if (product.oldprice === 0) {
            setDisplay(false);
        } else {
            setDisplay(true);
        }
    }, [product.oldprice]
    );
    React.useEffect(() => {
        if (product.numberAvailable === 0) {
            setStock(false);
        } else {
            setStock(true);
        }
    }, [product.numberAvailable]
    );
    return <Card
        key={product.id}
        style={{ width: '18rem' }}
    >
        <Card.Img height="150" variant="top" src={product?.imagePathname} />{display ? <p style={{}}>
            <h2 className={classes.scuffedbox}>SALE: {percent}%</h2></p> : <p></p>}

        <Card.Body>
            <Card.Title
                className={classes.productTitle}
                onClick={() => navigate(`/product/${product.id}`)}>
                {product.name}
            </Card.Title>
            {

            }
            <Card.Text className={classes.productText}>

                {product.description.substring(0, 80) + "..."}

            </Card.Text>

        </Card.Body>
        <Row style={{ marginTop: "flex", height: "100px" }}>

            <div style={{ width: "100%", fontWeight: "bold", position: "absolute", bottom: "20px" }}>
                <div className={classes.productText}>{display ? <p><p style={{ fontSize: "74%", textDecorationLine: "line-through", position: "absolute", bottom: "25px" }}> Original: {product.oldprice} kr</p> Price: {product.price} kr </p> : <p>Price: {product.price} kr</p>} </div>
            </div>
            {showStock ? <div className={classes.stockRow}> <Dot size="15px" numberAvailable={product?.numberAvailable} /> {product?.numberAvailable} in store</div> : null}
            {stock && showAddToCart ? <Button style={{ width: "50%", position: "absolute", bottom: "25px", left: "50%" }} variant="primary" onClick={() => addToCart(product.id)}>Add to cart</Button> :
                null}
        </Row>
    </Card>
}

export default ProductElement;
