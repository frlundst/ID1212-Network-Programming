import { Button, Col, Form, Row } from "react-bootstrap";
import Wrapper from "../Components/Wrapper";
import { ProfileType } from "../Types";
import { ProductTypeWithCount } from "../Presenter/CartPresenter";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    wrapper: {
        width: "500px",
        marginBottom: "20px"
    }
})

interface CheckoutProps {
    profile: ProfileType | null;
    setShowRegister: (show: boolean) => void;
    setShowLogin: (show: boolean) => void;
    products: ProductTypeWithCount[];
    total: number;
}

function Checkout(props: CheckoutProps) {
    const classes = useStyles();

    return <Wrapper>
        <h1>Checkout</h1>

        {props.profile === null ?
            <div>
                <p>Please sign in to proceed</p>
                <Button onClick={() => props.setShowLogin(true)}>Login</Button>
                <span style={{ margin: "0px 10px 0px 10px" }}>or</span>
                <Button onClick={() => props.setShowRegister(true)}>Register</Button>
            </div>
            :
            <div>
                <hr />
                {props.products.length > 0 ?
                    props.products.map((product) => {
                        return <Row key={product.id} className={classes.wrapper}>
                            <Col>
                                <p>{product.name}</p>
                                <p>{product.price} kr</p>
                                <p>{product.count}</p>
                            </Col>
                            <Col>
                                <img src={product?.imagePathname} alt={product.name} />
                            </Col>

                        </Row>
                    })
                    :
                    <p>There are no products in your cart</p>}
                <hr />
                <p>Total: {props.total} kr</p>
                <hr />

                <Form className={classes.wrapper}>

                    <h3>Shipping</h3>

                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter address"
                            defaultValue={props.profile.address}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter city"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter zip"
                        />
                    </Form.Group>

                    <h3>Contact information</h3>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            defaultValue={props.profile.email}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter phone number" 
                            defaultValue={props.profile.phone}
                        />
                    </Form.Group>

                    <h3>Payment</h3>

                    <Form.Group className="mb-3" controlId="formBasicPaymentMethod">
                        <Form.Label>Payment method</Form.Label>
                        <Form.Select required aria-label="Default select example">
                            <option>Choose...</option>
                            <option value="1">Cash on delivery</option>
                            <option value="2">Credit card</option>
                            <option value="3">PayPal</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </div>
        }

    </Wrapper>
}

export default Checkout;