import { createUseStyles } from "react-jss";
import Wrapper from "../Components/Wrapper";
import { Button, Form, Offcanvas } from "react-bootstrap";
import React from "react";

const useStyles = createUseStyles({

})

interface RegisterProps {
    setShowRegister: () => void;
    showRegister: boolean;
}

function Register(props: RegisterProps) {
    const classes = useStyles();

    const [validated, setValidated] = React.useState(false);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        event.stopPropagation();
        
        const form = event.currentTarget;
        
        if (form.checkValidity() === true) {           
            const email = form.elements.formBasicEmail.value;
            const password = form.elements.formBasicPassword.value;
            const name = form.elements.formBasicName.value;
            const address = form.elements.formBasicAddress.value;
            const phone = form.elements.formBasicPhone.value;

            const res = fetch('http://localhost:8080/customer/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    name: name,
                    address: address,
                    phone: phone
                })
            });

            res.then((res) => {
                if(res.status === 200){
                    props.setShowRegister();
                    alert("Register success");
                }
            });
        }

        setValidated(true);
    };

    return <Offcanvas placement="end" show={props.showRegister} onHide={props.setShowRegister}>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Register</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control required type="name" placeholder="Enter name" />
                    <Form.Text className="text-muted">
                        Please enter your full name.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control required type="address" placeholder="Enter address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control required type="phone" placeholder="Enter phone" />
                </Form.Group>

                <Button style={{ margin: "0 auto", display: "block" }} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Offcanvas.Body>
    </Offcanvas>
}

export default Register;