import React from "react";
import SearchResult from "../View/SearchResult";
import { CategoryType, ProductType } from "../Types";
import { useParams } from "react-router-dom";

interface SearchResultPresenterProps {
    addToCart: (productId: string) => void;
}

function SearchResultPresenter(props: SearchResultPresenterProps) {
    const { search } = useParams();
    const [products, setProducts] = React.useState<ProductType[]>([]);
    const [categories, setCategories] = React.useState<CategoryType[]>([]);

    React.useEffect(() => {
        const res = fetch(`http://localhost:8080/categories/search/${search}`);
        res.then(data => {
            data.json().then((data: CategoryType[]) => {
                setCategories(data);
            });
        });

        const res2 = fetch(`http://localhost:8080/products/search/${search}`);
        res2.then(data => {
            data.json().then((data: ProductType[]) => {
                console.log(data);
                setProducts(data);
            });
        });
    }, [search]);

    return <SearchResult categories={categories} products={products} search={search as string} addToCart={props.addToCart} />
}

export default SearchResultPresenter;