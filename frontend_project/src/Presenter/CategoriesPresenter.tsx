import React from "react";
import Categories from "../View/Categories";
import { CategoryType } from "../Types";

interface CategoriesPresenterProps {
    
}

function CategoriesPresenter(props: CategoriesPresenterProps) {

  const [categories, setCategories] = React.useState<CategoryType[]>([]);

  React.useEffect(() => {
    const res = fetch('http://localhost:8080/categories');
    res.then((res) => {
      res.json().then((data) => {
        console.log(data);
        setCategories(data);
      });
    });
  }, [])

  return <Categories categories={categories} />
}

export default CategoriesPresenter;