import { useParams } from "react-router-dom";
import Category from "../View/Category";
import { CategoryType, ProductType } from "../Types";
import React from "react";

interface CategoryPresenterProps {
    addToCart: (productId: string) => void;
}

function CategoryPresenter(props: CategoryPresenterProps) {
    let { id } = useParams();

    const [category, setCategory] = React.useState<CategoryType>({} as CategoryType);
    const [products, setProducts] = React.useState<ProductType[]>([]);

    React.useEffect(() => {
        const res = fetch(`http://localhost:8080/category/${id}`);
        res.then((res) => {
            res.json().then((category: CategoryType) => {
                //console.log(category);
                setCategory(category);

                // Fetch products if category has no children
                if(category.children?.length === 0){
                    const res = fetch(`http://localhost:8080/category/${category.id}/products`);
                    res.then((res) => {
                        res.json().then((products) => {
                            //console.log(products);
                            setProducts(products);
                        });
                    });
                }else{
                    setProducts([]);
                }
            });
        });
    }, [id]);

    return <Category category={category} products={products} addToCart={props.addToCart} />
}

export default CategoryPresenter;