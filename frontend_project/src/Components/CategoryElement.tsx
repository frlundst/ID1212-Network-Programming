import { Col } from "react-bootstrap";
import { CategoryType } from "../Types";
import { useNavigate } from "react-router-dom";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    item: {
        color: "black",
        background: "white",
        border: "1px solid lightgray",
        borderRadius: "5px",
        padding: "10px",
        textAlign: "center",
        '&:hover': {
            boxShadow: "2px 2px 5px lightgray",
            cursor: "pointer",
        }
    },
    productTitle: {
        '&:hover': {
            cursor: "pointer",
            textDecoration: "underline",
        }
    }
});

interface CategoryProps {
    category: CategoryType;
}

function CategoryElement({ category }: CategoryProps) {
    const classes = useStyles();
    const navigate = useNavigate();
    return <Col
        xs={3}
        key={category.id}
        className={classes.item}
        onClick={() => navigate(`/category/${category.id}`)}
    >
        <h5>{category.name}</h5>
        <p>{category.description}</p>
    </Col>
}

export default CategoryElement;