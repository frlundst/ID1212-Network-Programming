import { Button, Form, Offcanvas, Row } from "react-bootstrap";
import { ProductTypeWithCount } from "../Presenter/CartPresenter";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    button: {
        width: "50px",
        borderRadius: "0px",
    },
    control: {
        width: "50px",
        borderRadius: "0px",
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
            {props.products.map((product) => {
                return <div key={product.id}>
                    <div>{product.name}</div>
                    <Row style={{margin: "5px 0px 10px 0px"}}>
                        <Button className={classes.button} onClick={() => props.onRemove(product.id)}>-</Button>
                        <Form.Control value={product.count} className={classes.control} />
                        <Button className={classes.button} onClick={() => props.onAdd(product.id)}>+</Button>
                    </Row>
                </div>
            })}
            <div>Total: {total}</div>
        </Offcanvas.Body>
    </Offcanvas>
}

export default Cart;