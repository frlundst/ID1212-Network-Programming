import { createUseStyles } from "react-jss"
import { BsCart } from "react-icons/bs"
import Router from "next/router";

const useStyles = createUseStyles({
    navbar: {
        padding: "20px 25% 20px 25%",
        background: "white",
        display: "flex"
    },
    "logo": {
        margin: "0"
    },
    "menu": {
        marginLeft: "auto",
        display: "flex",
        alignContent: "center",
        flexWrap: "wrap",
        columnGap: "10px"
    },
    "link": {
        textDecoration: "none !important",
        padding: "5px",
        '&:hover': {
            cursor: "pointer",
            background: "lightgray",
            borderRadius: "5px"
        }
    },
    "shoppingCart": {
        fontSize: "23px",
    },
    "@media screen and (max-width: 1300px)": {
        navbar: {
            padding: "20px 2% 20px 2%"
        }
    }
});

interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = ({ }) => {
    const classes = useStyles();

    return <div className={classes.navbar}>
        <h1 className={classes.logo}>Komplett</h1>
        <div className={classes.menu}>
            <div className={classes.link} onClick={() => Router.push("/category")}>Categories</div>
            <div className={classes.link} onClick={() => Router.push("/hej")}>Sale</div>
            <div className={classes.link} onClick={() => Router.push("/hej")}>Search</div>
            <div className={classes.link} onClick={() => Router.push("/hej")}><BsCart className={classes.shoppingCart} /></div>
        </div>
        <style jsx>{`
        .menuLink {
          text-decoration: none !important;
        }

        .menuLink:hover {
            background: lightgray;
        }
      `}</style>
    </div>
}