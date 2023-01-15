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
    setShowCart: (show: boolean) => void;
}

function CheckoutPresenter(props: CheckoutPresenterProps) {
    const navigate = useNavigate();

    const [isValid, setIsValid] = React.useState<boolean>(true);
    const [products, setProducts] = React.useState<ProductTypeWithCount[]>([]);

    React.useEffect(() => {
        if (props.productIds.length > 0) {
            const res = fetch(`http://localhost:8080/products/${props.productIds.join(",")}`);
            res.then(data => {
                data.json().then((data: ProductType[]) => {
                    const productsWithCount = data.map((product) => {
                        setIsValid(true);
                        const count = props.productIds.filter((id) => id === product.id).length;
                        if (count > product.numberAvailable) {
                            setIsValid(false);
                        }
                        return {
                            ...product,
                            count: count
                        }
                    });
                    setProducts(productsWithCount);
                })
            })
        }else{
            setProducts([]);
        }
    }, [props.productIds]);

    const handleSubmit = (event: any) => {
        console.log("submit")
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;

        const city = form.elements.formBasicCity.value;
        const address = form.elements.formBasicAddress.value;
        const zip = form.elements.formBasicZip.value;
        const email = form.elements.formBasicEmail.value;
        const phone = form.elements.formBasicPhone.value;
        const paymentMethod = form.elements.formBasicPaymentMethod.value;

        const p = products.map((product) => {
            return {
                id: product.id,
                description: product.description,
                name: product.name,
                price: product.price,
                numberAvailable: product.numberAvailable,
                imagePathname: product.imagePathname,
            } as ProductType;
        }) as ProductType[];

        const res = fetch('http://localhost:8080/order/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({
                city: city,
                email: email,
                address: address,
                zip: zip,
                phone: phone,
                paymentMethod: paymentMethod,
                products: p
            })
        });

        res.then((res) => {
            if (res.status === 200) {
                navigate("/orders");
                localStorage['cart'] = JSON.stringify([]);
                window.location.reload();
            }
        });
    };

    return <Checkout handleSubmit={handleSubmit} setShowCart={props.setShowCart} products={products} profile={props.profile} setShowRegister={(show) => props.setShowRegister(show)} setShowLogin={(show) => props.setShowLogin(show)} />
}

export default CheckoutPresenter;