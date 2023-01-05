import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    wrapper: {
        padding: "20px",
        backgroundColor: "white",
        minHeight: "80vh",
        borderRadius: "10px",
    }
})

interface WrapperProps {
    children: React.ReactNode | React.ReactNode[];
}

function Wrapper(props: WrapperProps) {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            {props.children}
        </div>
    );
}

export default Wrapper;