import { Button, Form } from "react-bootstrap";
import Wrapper from "../Components/Wrapper";

interface AdminProps {
    onAddCategory: (event: any) => void;
    onAddProduct: (event: any) => void;
}

function Admin(props: AdminProps) {
  return <Wrapper>
    <h1>Admin</h1>
    <hr/>
    <h2>Add category</h2>
    <Form onSubmit={props.onAddCategory} style={{width: "50%"}}>
        <Form.Group controlId="categoryName" >
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group controlId="categoryDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter description" />
        </Form.Group>
        <Form.Group controlId="categoryParentName">
            <Form.Label>Parent category name</Form.Label>
            <Form.Control type="text" placeholder="Enter parent category" />
        </Form.Group>
        <br/>
        <Button type="submit" className="btn btn-primary">Submit</Button>
    </Form>
    <hr/>
    <h2>Add product</h2>
    <Form style={{width: "50%"}} onSubmit={props.onAddProduct}>
        <Form.Group controlId="productName" >
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group controlId="productDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter description" />
        </Form.Group>
        <Form.Group controlId="productImagePathname">
            <Form.Label>Image pathname</Form.Label>
            <Form.Control defaultValue={"/images/default.png"} type="text" placeholder="Enter image pathname" />
        </Form.Group>
        <Form.Group controlId="productPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="Enter price" />
        </Form.Group>
        <Form.Group controlId="productOldPrice">
            <Form.Label>Old Price</Form.Label>
            <Form.Control type="number" placeholder="Enter old price" />
        </Form.Group>
        <Form.Group controlId="productNumberAvailable">
            <Form.Label>Number available</Form.Label>
            <Form.Control type="number" placeholder="Enter number available" />
        </Form.Group>
        <Form.Group controlId="productCategoryName">
            <Form.Label>Category name</Form.Label>
            <Form.Control type="text" placeholder="Enter category name" />
        </Form.Group>
        <br/>
        <Button type="submit" className="btn btn-primary">Submit</Button>
    </Form>
  </Wrapper>
}

export default Admin;