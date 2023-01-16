import Wrapper from "../Components/Wrapper";
import { CategoryType, ProductType } from "../Types";
import { Row } from "react-bootstrap";
import CategoryElement from "../Components/CategoryElement";
import ProductElement from "../Components/ProductElement";

interface CategoryProps {
    category: CategoryType;
    products: ProductType[];
    addToCart: (productId: string) => void;
}

function Category(props: CategoryProps) {
    return <Wrapper>
        <h1>{props.category?.name} - Category</h1>
        <p style ={{color: " orange"}}>{props.category?.description}</p>
        <hr/>
        {props.category?.children?.length !== 0 ? 
        
            <h4>Subcategories</h4>
            :
            <h4>Products</h4>
        }
        <br/>
        <Row style={{ margin: "0", columnGap: "10px", rowGap: "10px" }}>
            {props.category?.children?.map(child => {
                return <CategoryElement key={child.id} category={child} />
            })}

            {props.products?.map(product => {
                return <ProductElement key={product.id} product={product} addToCart={props.addToCart} />
            })}
        </Row>
    </Wrapper>
}

export default Category;

