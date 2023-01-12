import { Button, Form } from "react-bootstrap";
import Wrapper from "../Components/Wrapper";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";

const useStyles = createUseStyles({
    welcomeWrapper: {
        textAlign: "center",
        margin: "50px 0"
    },
    inputButtonWrapper: {
        display: "flex", 
        justifyContent: "center"
    },
    input: {
        width: "50%",
        borderRadius: "0.375rem 0 0 0.375rem"
    },
    button: {
        borderRadius: "0 0.375rem 0.375rem 0"
    }
});

interface HomeProps { }

function Home(props: HomeProps) {
    
    const classes = useStyles();
    const navigate = useNavigate();

    const handleSubmit = (event: any) => {
        event.preventDefault();
        event.stopPropagation();
        
        const form = event.currentTarget;
        const search = form.elements.formBasicSearch.value;
        
        navigate(`/searchResult/${search}`);
    };


    return <Wrapper>
        <div className={classes.welcomeWrapper}>
            <h1>Welcome to E-Space.</h1>
            <h4>Your number one tech/gaming gadget supplier!</h4>
        </div>
        
        <Form onSubmit={handleSubmit} >
            <Form.Group controlId="formBasicSearch">
                <div className={classes.inputButtonWrapper}>
                    <Form.Control className={classes.input} type="text" placeholder="Search" />
                    <Button className={classes.button} variant="primary" type="submit">
                        Search
                    </Button>
                </div>

            </Form.Group>
        </Form>
    </Wrapper>
}

export default Home;