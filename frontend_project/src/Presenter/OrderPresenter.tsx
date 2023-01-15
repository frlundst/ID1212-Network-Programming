import { useParams } from "react-router-dom";
import Order from "../View/Order";
import { OrderItemType, OrderType, ProductType } from "../Types";
import React from "react";

interface OrderPresenterProps {

}

function OrderPresenter(props: OrderPresenterProps) {
    const {id} = useParams();
    const [order, setOrder] = React.useState<OrderType>({} as OrderType);
    const [products, setProducts] = React.useState<ProductType[]>([]);

    React.useEffect(() => {
        const res = fetch(`http://localhost:8080/order/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        });

        res.then((res) => {
            if (res.status === 200) {
                res.json().then((res) => {
                    setOrder(res);
                });
            }
        });

        const res2 = fetch(`http://localhost:8080/order/${id}/products`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        });

        res2.then((res) => {
            if (res.status === 200) {
                res.json().then((res) => {
                    setProducts(res.map((item: OrderItemType) => {
                        return item.product;
                    }));
                });
            }
        });
    }, []);

    return <Order order={order} products={products} />
}

export default OrderPresenter;