import { Button, Col, Form, Image, Offcanvas, Row } from "react-bootstrap";
import { ProductTypeWithCount } from "../Presenter/CartPresenter";
import { createUseStyles } from "react-jss";
import Dot from "../Components/Dot";
import { MdProductionQuantityLimits } from "react-icons/md";
import { GoTrashcan } from "react-icons/go";
import React from "react";
import { useNavigate } from "react-router-dom";

const useStyles = createUseStyles({
    button: {
        width: "40px",
        borderRadius: "0px",
    },
    control: {
        width: "75px",
        borderRadius: "0px",
    },
    image: {
        width: "180px",
    },
    inStore: {
        margin: "5px 0px",
        display: "flex",
        alignItems: "center",
        columnGap: "10px"
    },
    total: {
        fontWeight: "500",
        margin: "0",
        width: "100%"
    },
    priceInt: {
        textAlign: "end",
        position: "absolute",
        right: "8px"
    },
    name: {
        fontWeight: "500",
        '&:hover': {
            cursor: "pointer",
            textDecoration: "underline"
        }
    }
})

interface CartProps {
    products: ProductTypeWithCount[];
    showCart: boolean;
    setShowCart: () => void;
    onAdd: (id: string) => void;
    onRemove: (id: string) => void;
    isValid: boolean;
}

function Cart(props: CartProps) {
    const classes = useStyles();
    const navigate = useNavigate();
    const total = props.products.reduce((acc, product) => acc + product.price * product.count, 0);

    return <Offcanvas placement="end" show={props.showCart} onHide={props.setShowCart}>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <hr />
            {props.products.map((product) => {
                return <Row key={product.id}>
                    <Col>
                        <div className={classes.name} onClick={() => {
                            props.setShowCart();
                            navigate(`product/${product.id}`);
                        }}>{product.name}</div>
                        <div className={classes.inStore}><Dot size="20px" numberAvailable={product.numberAvailable} /> {product.numberAvailable} in store</div>
                        <Row style={{ margin: "5px 0px 10px 0px" }}>
                            <Button
                                variant={product.count === 1 ? "danger" : "primary"}
                                className={classes.button}
                                onClick={() => props.onRemove(product.id)}
                            >{product.count === 1 ? <GoTrashcan /> : "-"}</Button>
                            <Form.Control
                                value={product.count}
                                disabled={true}
                                className={classes.control}
                                isInvalid={product.count > product.numberAvailable}
                            />
                            <Button
                                className={classes.button}
                                onClick={() => product.count < product.numberAvailable ? props.onAdd(product.id) : null}
                                disabled={product.count >= product.numberAvailable}
                            >+</Button>
                        </Row>
                    </Col>
                    <Col>
                        <Image className={classes.image} src="/images/default.png" />
                    </Col>
                    <Row className={classes.total}>
                        Price: <div className={classes.priceInt}>{product.price} kr</div>
                    </Row>
                    <hr style={{ marginTop: "10px" }} />
                </Row>
            })}
            <Row className={classes.total}>
                Total: <div className={classes.priceInt}>{total} kr</div>
            </Row>
            <Row style={{ margin: "0", width: "365px", position: "fixed", bottom: "10px" }}>
                <Button
                    variant="primary"
                    style={{ width: "100%" }}
                    disabled={props.products.length === 0 || !props.isValid}
                    onClick={() => {
                        if (props.products.length > 0 && props.isValid) {
                            props.setShowCart();
                            navigate("/checkout");
                        }
                    }}
                >Checkout →</Button>
            </Row>
        </Offcanvas.Body>
    </Offcanvas>
}

export default Cart;