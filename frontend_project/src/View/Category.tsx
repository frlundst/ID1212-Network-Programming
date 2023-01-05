import { createUseStyles } from "react-jss";
import Wrapper from "../Components/Wrapper";
import { CategoryType } from "../Types";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const useStyles = createUseStyles({
    item: {
        border: "1px solid lightgray",
        borderRadius: "5px",
        padding: "10px",
        textAlign: "center",
        margin: "10px",
        '&:hover': {
            boxShadow: "2px 2px 5px lightgray",
            cursor: "pointer",
        }
    }
})

interface CategoryProps {
    category: CategoryType;
}

function Category(props: CategoryProps) {
    const classes = useStyles();
    const navigate = useNavigate();

    return <Wrapper>
        <h3>Category "{props.category.name}"</h3>
        <p>{props.category.description}</p>
        <Row>
        {props.category?.children?.map(child => {
            return <Col 
                xs={3} 
                key={child.id} 
                className={classes.item}
                onClick={() => navigate(`/category/${child.id}`)}
            >
                <h5>{child.name}</h5>
                <p>{child.description}</p>
            </Col>
        })}
        </Row>
    </Wrapper>
}

export default Category;

