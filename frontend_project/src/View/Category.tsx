import { createUseStyles } from "react-jss";
import Wrapper from "../Components/Wrapper";
import { CategoryType, ProductType } from "../Types";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Dot from "../Components/Dot";
import { MdHeight } from "react-icons/md";
import CategoryElement from "../Components/CategoryElement";
import ProductElement from "../Components/ProductElement";

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
        color: "black",
        '&:hover': {
            cursor: "pointer",
            textDecoration: "underline",
        }
    },
    productText: {
        color: "black",
        
    },
    stockRow: {
        color: "black",
        display: "flex",
        marginTop: "10px",
        alignItems: "center",
        columnGap: "10px"
    }
})

interface CategoryProps {
    category: CategoryType;
    products: ProductType[];
    addToCart: (productId: string) => void;
}

function Category(props: CategoryProps) {
    const classes = useStyles();
    const navigate = useNavigate();

    return <Wrapper>
        <h3>{props.category?.name} - Category</h3>
        <p>{props.category?.description}</p>
        <br/>
        {props.category?.children?.length !== 0 ? 
            <h4>Subcategories</h4>
            :
            <h4>Products</h4>
        }
        <br/>
        <Row style={{ columnGap: "10px", rowGap: "10px" }}>
            {props.category?.children?.map(child => {
                return <CategoryElement category={child} />
            })}

            {props.products?.map(product => {
                return <ProductElement product={product} addToCart={props.addToCart} />
            })}
        </Row>
    </Wrapper>
}

export default Category;

