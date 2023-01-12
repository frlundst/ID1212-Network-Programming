import { Row } from "react-bootstrap";
import Wrapper from "../Components/Wrapper";
import { CategoryType, ProductType } from "../Types";
import CategoryElement from "../Components/CategoryElement";

interface SearchResultProps {
    products: ProductType[];
    categories: CategoryType[];
    search: string;
}

function SearchResult(props: SearchResultProps) {
    return <Wrapper>
        <h1>Search result for "{props.search}"</h1>
        <hr/>
        <br/>
        {props.categories.length > 0 ? <><h2>Categories</h2>
        <br/>
        <Row style={{ columnGap: "10px", rowGap: "10px" }}>
            {props.categories.map(category => {
                return <CategoryElement key={category.id} category={category} />
            })}
        </Row></> : null}
        {props.products.length > 0 ? <><h2>Products</h2>
        <br/>
        <Row style={{ columnGap: "10px", rowGap: "10px" }}>
            {props.products?.map(product => {
                return `${product.name}`
            })}
        </Row></> : null}
        {props.categories.length === 0 && props.products.length === 0 ? <h2>No results found</h2> : null}
    </Wrapper>
}

export default SearchResult;