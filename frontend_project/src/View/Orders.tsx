import { Row } from "react-bootstrap";
import Wrapper from "../Components/Wrapper";
import { OrderType } from "../Types";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";

const useStyles = createUseStyles({
    wrapper: {
        backgroundColor: "white",
        color: "black",
        padding: "10px 5px 5px 5px",
        borderRadius: "5px",
        margin: "0",
        '&:hover': {
            cursor: "pointer",
        },
        marginBottom: "10px"
    }
})

interface OrdersProps {
    orders: OrderType[];
}

function Orders (props: OrdersProps) {
    const classes = useStyles();
    const navigate = useNavigate();

    return <Wrapper>
        <h1>Orders</h1>
        <hr/>
        {props.orders.length === 0 ? <h2>No orders</h2> : null}
        {props.orders.sort((a, b) => a.date > b.date ? -1 : 1).map(order => {
            return <Row key={order.id} className={classes.wrapper} onClick={() => navigate(`/order/${order.id}`)}>
                <h5>Order at <span>{order.date}</span></h5>
                <p>Order id: #{order.id}</p>
                <p>Order payment method: {order.paymentMethod}</p>
                <p>{order.payed ? "Order is payed" : "Order is not payed"}</p>
            </Row>
        })}
    </Wrapper>
}

export default Orders;