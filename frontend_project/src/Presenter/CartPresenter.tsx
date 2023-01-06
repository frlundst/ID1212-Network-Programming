import React from "react";
import Cart from "../View/Cart";
import { ProductType } from "../Types";

interface CartPresenterProps {
    productIds: string[];
    showCart: boolean;
    setShowCart: () => void;
    setProductIds: (ids: string[]) => void;
}

export interface ProductTypeWithCount extends ProductType {
    count: number;
}

function CartPresenter(props: CartPresenterProps) {

    const [products, setProducts] = React.useState<ProductTypeWithCount[]>([]);
    const [total, setTotal] = React.useState(0);
    const [isValid, setIsValid] = React.useState<boolean>(true);

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

    const addNumber = (id: string) => {
        props.setProductIds([...props.productIds, id]);
    }

    const removeNumber = (id: string) => {
        var array = props.productIds;
        array.splice(props.productIds.indexOf(id), 1);
        props.setProductIds([...array]);
    }

    return <Cart products={products} showCart={props.showCart} setShowCart={props.setShowCart} onAdd={addNumber} onRemove={removeNumber} isValid={isValid} />
}

export default CartPresenter;