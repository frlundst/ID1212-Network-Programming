import React from "react";
import { OrderType, ProfileType } from "../Types";
import Orders from "../View/Orders";

interface OrdersPresenterProps {
    profile: ProfileType | null;
}

function OrdersPresenter(props: OrdersPresenterProps) {
    const [orders, setOrders] = React.useState<OrderType[]>([]);

    React.useEffect(() => {
        if (props.profile !== null) {
            const res = fetch(`http://localhost:8080/orders/${props.profile?.id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            });
            res.then(data => {
                data.json().then((data: OrderType[]) => {
                    console.log(data);
                    setOrders(data);
                });
            });
        }
    }, [props.profile]);

    return <Orders orders={orders} />
}

export default OrdersPresenter;