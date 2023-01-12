import React from "react";
import Product from "../View/Product";
import { useParams } from "react-router-dom";
import { ProductType } from "../Types";

interface ProductPresenterProps {
    addToCart: (productId: string) => void;
}

function ProductPresenter(props: ProductPresenterProps) {
    let {id } = useParams();

    const [product, setProduct] = React.useState<ProductType>({} as ProductType);

    React.useEffect(() => {
        const res = fetch(`http://localhost:8080/product/${id}`);
        res.then(data => {
            data.json().then((data) => {
                console.log(data);
                setProduct(data);
            })
        })
    }, [id]);

    return <Product product={product} addToCart={props.addToCart} />
}

export default ProductPresenter;