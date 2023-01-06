import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    wrapper: {
        //padding: "20px",
        minHeight: "80vh",
        /*background: "rgba(255, 255, 255, 0.2)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        WebkitDackdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",*/
        color: "white"
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