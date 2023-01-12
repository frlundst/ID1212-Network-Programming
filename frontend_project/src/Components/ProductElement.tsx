import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";
import { ProductType } from "../Types";
import { Button, Card, Row } from "react-bootstrap";
import Dot from "./Dot";

const useStyles = createUseStyles({
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

interface ProductElementProps {
    product: ProductType;
    addToCart: (productId: string) => void;
}

function ProductElement({ product, addToCart }: ProductElementProps) {
    const navigate = useNavigate();
    const classes = useStyles();

    return <Card
        key={product.id}
        style={{ width: '18rem' }}
    >
        <Card.Img height="150" variant="top" src={product?.imagePathname} />
        <Card.Body>
            <Card.Title
                className={classes.productTitle}
                onClick={() => navigate(`/product/${product.id}`)}>
                {product.name}
            </Card.Title>
            {/*<Badge bg="danger">
            Sale
</Badge>*/}
            <Card.Text className={classes.productText}>

                {product.description.substring(0, 100) + "..."}

            </Card.Text>

        </Card.Body>
        <Row style={{ marginTop: "flex", height: "75px" }}>
            <div className={classes.stockRow}> <Dot size="15px" numberAvailable={product?.numberAvailable} /> {product?.numberAvailable} in store</div>
            <div style={{ width: "50%", fontWeight: "bold" }}>
                <div className={classes.productText}>Price: {product.price} kr</div>
            </div>
            <Button style={{ width: "50%", position: "absolute", bottom: "10px", left: "50%" }} variant="primary" onClick={() => addToCart(product.id)}>Add to cart</Button></Row>
    </Card>
}

export default ProductElement;
