import React from "react";
import { Button, Form, Offcanvas } from "react-bootstrap";

interface LoginProps {
    showLogin: boolean;
    setShowLogin: () => void;
}

function Login(props: LoginProps) {
    const [validated, setValidated] = React.useState(false);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        event.stopPropagation();
        
        const form = event.currentTarget;
        
        if (form.checkValidity() === true) {           
            const email = form.elements.formBasicEmail.value;
            const password = form.elements.formBasicPassword.value;

            const res = fetch('http://localhost:8080/customer/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: email,
                    password: password,
                })
            });

            res.then((res) => {
                if(res.status === 200){
                    res.json().then((data) => {
                        console.log(data);
                        localStorage.setItem("token", data.token);
                    });
                    props.setShowLogin();
                    alert("Login success");
                }
            });
        }

        setValidated(true);
    };

    return <Offcanvas placement="end" show={props.showLogin} onHide={props.setShowLogin}>
    <Offcanvas.Header closeButton>
        <Offcanvas.Title>Login</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" placeholder="Password" />
            </Form.Group>

            <Button style={{ margin: "0 auto", display: "block" }} variant="primary" type="submit">
                Login
            </Button>
        </Form>
    </Offcanvas.Body>
</Offcanvas>
}

export default Login;