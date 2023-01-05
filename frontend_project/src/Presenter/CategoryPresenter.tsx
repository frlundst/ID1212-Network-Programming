import { useParams } from "react-router-dom";
import Category from "../View/Category";
import { CategoryType } from "../Types";
import React from "react";

interface CategoryPresenterProps {

}

function CategoryPresenter(props: CategoryPresenterProps) {
    let { id } = useParams();

    const [category, setCategory] = React.useState<CategoryType>({} as CategoryType);
    

    React.useEffect(() => {
        const res = fetch(`http://localhost:8080/category/${id}`);
        res.then((res) => {
            res.json().then((data) => {
                console.log(data);
                setCategory(data);
            });
        });
    }, [id]);

    return <Category category={category} />
}

export default CategoryPresenter;