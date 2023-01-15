import { Button, Form, Image } from "react-bootstrap";
import Wrapper from "../Components/Wrapper";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";

const useStyles = createUseStyles({
    welcomeWrapper: {
        textAlign: "center",
        margin: "50px 0",
        animationName: "$fadeIn",
        animation: "2s fadeIn"
    },
    '@keyframes fadeIn': {
        "0%": {
            opacity: "0"
        },
        "100%": {
            opacity: "1"
        }
    },
    logo: {
        animationName: "$fadeInLogo",
        animation: "1s fadeInLogo",
        height: "100px",
    },
    '@keyframes fadeInLogo': {
        "0%": {
            width: "0px"
        },
        "50%": {
            width: "170px"
        },
        "75%": {
            width: "125px"
        },
        "90%": {
            width: "170px"
        },
        "95%": {
            width: "160px"
        },
        "100%": {
            width: "170px"
        }
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
            <Image className={classes.logo} src={"/images/logo.png"} style={{marginBottom: "10px"}} />
            <h3>Welcome to E-Space.</h3>
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