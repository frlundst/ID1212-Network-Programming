import React from "react";
import Checkout from "../View/Checkout";
import { useNavigate } from "react-router-dom";
import { ProductType, ProfileType } from "../Types";
import { ProductTypeWithCount } from "./CartPresenter";

interface CheckoutPresenterProps {
    profile: ProfileType | null;
    setShowRegister: (show: boolean) => void;
    setShowLogin: (show: boolean) => void;
    productIds: string[];
}

function CheckoutPresenter(props: CheckoutPresenterProps) {
    const navigate = useNavigate();

    const [total, setTotal] = React.useState(0);
    const [isValid, setIsValid] = React.useState<boolean>(true);
    const [products, setProducts] = React.useState<ProductTypeWithCount[]>([]);

    React.useEffect(() => {
        if (props.productIds.length > 0) {
            const res = fetch(`http://localhost:8080/products/${props.productIds.join(",")}`);
            res.then(data => {
                data.json().then((data: ProductType[]) => {
                    const productsWithCount = data.map((product) => {
                        setTotal(total + product.price);
                        setIsValid(true);
                        const count = props.productIds.filter((id) => id === product.id).length;
                        if (count > product.numberAvailable) {
                            setIsValid(false);
                        }
                        return {
                            ...product,
                            count: count
                        }
                    })
                    setProducts(productsWithCount);
                })
            })
        }else{
            setProducts([]);
        }
    }, [props.productIds]);

    return <Checkout total={total} products={products} profile={props.profile} setShowRegister={(show) => props.setShowRegister(show)} setShowLogin={(show) => props.setShowLogin(show)} />
}

export default CheckoutPresenter;