import { createUseStyles } from "react-jss";
import React from "react";
import { CategoryType } from "../Types";

const useStyles = createUseStyles({
    category: {
        padding: "20px"
    }
})

interface CategoriesProps {
    categories: CategoryType[];
}

function Categories(props: CategoriesProps) {
    const classes = useStyles();

    const [currentCategoryId, setCurrentCategoryId] = React.useState<string>("");

    return <div style={{ backgroundColor: "white" }}>
        <h1>Categories</h1>
        {props.categories?.map((category) => {
            if (category.parent_id === null) {
                return <div key={category.id}>
                    <div 
                        className={classes.category} 
                        onClick={() => setCurrentCategoryId(category.id)}
                    >
                        {category.name}
                    </div>
                    <ul>
                        {currentCategoryId === category.id ? 
                            category.children?.map(child => {
                                return <li key={child.id}>{child.name}</li>
                            })
                            : null
                        }
                    </ul>
                </div>

            }

        })}
    </div>
}

export default Categories;