import { Button, Col, Form, Image, Offcanvas, Row } from "react-bootstrap";
import { ProductTypeWithCount } from "../Presenter/CartPresenter";
import { createUseStyles } from "react-jss";
import Dot from "../Components/Dot";
import { MdProductionQuantityLimits } from "react-icons/md";
import { GoTrashcan } from "react-icons/go";

const useStyles = createUseStyles({
    button: {
        width: "50px",
        borderRadius: "0px",
    },
    control: {
        width: "50px",
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
    }
})

interface CartProps {
    products: ProductTypeWithCount[];
    showCart: boolean;
    setShowCart: () => void;
    onAdd: (id: string) => void;
    onRemove: (id: string) => void;
}

function Cart(props: CartProps) {
    const classes = useStyles();

    const total = props.products.reduce((acc, product) => acc + product.price * product.count, 0);

    return <Offcanvas show={props.showCart} onHide={props.setShowCart}>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <hr/>
            {props.products.map((product) => {
                return <Row key={product.id}>
                    <Col>
                        <div>{product.name}</div>
                        <div className={classes.inStore}><Dot size="20px" numberAvailable={product.numberAvailable} /> {product.numberAvailable} in store</div>
                        <Row style={{ margin: "5px 0px 10px 0px" }}>
                            <Button 
                                variant={product.count === 1 ? "danger" : "primary"}
                                className={classes.button} 
                                onClick={() => props.onRemove(product.id)}
                            >{product.count === 1 ? <GoTrashcan /> : "-"}</Button>
                            <Form.Control value={product.count} disabled={true} className={classes.control} />
                            <Button 
                                className={classes.button} 
                                onClick={() => product.count < product.numberAvailable ? props.onAdd(product.id) : null}
                            >+</Button>
                        </Row>
                    </Col>
                    <Col>
                        <Image className={classes.image} src="/images/default.png" />
                    </Col>
                    <hr/>
                </Row>
            })}
            <div>Total: {total}</div>
        </Offcanvas.Body>
    </Offcanvas>
}

export default Cart;