import { createUseStyles } from "react-jss";
import Wrapper from "../Components/Wrapper";
import { Button, Form } from "react-bootstrap";

const useStyles = createUseStyles({
    wrapper: {
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0px 20%",
        textAlign: "center",
        background: "rgba(255, 255, 255, 0.2)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        WebkitDackdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        color: "white"
    }
})

interface RegisterProps {

}

function Register(props: RegisterProps) {
    const classes = useStyles();

    return <div className={classes.wrapper}>
        <div>
            <Form>
                <h1>Register</h1>
                <br/>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
                <br/>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    </div>
}

export default Register;