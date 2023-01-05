import React from "react";
import Product from "../View/Product";
import { useParams } from "react-router-dom";
import { ProductType } from "../Types";

interface ProductPresenterProps {
}

function ProductPresenter(props: ProductPresenterProps) {
    let {id } = useParams();

    const [product, setProduct] = React.useState<ProductType>({} as ProductType);

    React.useEffect(() => {
        const res = fetch(`http://localhost:8080/product/${id}`);
        res.then(data => {
            data.json().then((data: ProductType) => {
                setProduct(data);
            })
        })
    })

    return <Product product={product} />
}

export default ProductPresenter;