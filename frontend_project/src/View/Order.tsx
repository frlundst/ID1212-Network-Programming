import { Badge, Button, Row } from "react-bootstrap";
import ProductElement from "../Components/ProductElement";
import Wrapper from "../Components/Wrapper";
import { OrderType, ProductType } from "../Types";

interface OrderProps {
    order: OrderType;
    products: ProductType[];
}

function Order(props: OrderProps) {
    let total = 0;
    return <Wrapper>
        <h1>Order at <Badge bg="success" >{props.order.date}</Badge></h1>
        <p>#{props.order.id}</p>
        <hr />
        <h4>Given contact information:</h4>
        <p>Email: {props.order.email}</p>
        <p>Phone: {props.order.phone}</p>
        <p>Address: {props.order.address}</p>
        <p>Zip: {props.order.zip}</p>
        <p>City: {props.order.city}</p>
        <hr />
        <h4>Products:</h4>
        <Row style={{ margin: "0", rowGap: "10px", columnGap: "10px" }}>
            {props.products.map((product) => {
                total += product.price;
                return <ProductElement
                    key={product.id}
                    product={product}
                    addToCart={() => null}
                    showAddToCart={false}
                    showStock={false}
                />
            })}
        </Row>
        <hr />
        <h4>Total: <Badge bg="success" >{total} kr</Badge></h4>
        <hr />
        <h4>Settings</h4>
        <br />
        <Button variant="danger" >Remove order</Button>
    </Wrapper>
}

export default Order;