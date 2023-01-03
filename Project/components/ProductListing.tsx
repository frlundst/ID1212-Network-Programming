import Image from "next/image";
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  wrapper: {
    padding: "5px",
    borderRadius: "5px",
    height: "300px",
    '&:hover': {
      cursor: "pointer",
      boxShadow: "2px 2px 2px 2px lightgray"
    }
  },
  image: {
    height: "200px",
    background: "",
    backgroundSize: "cover"
  }
})

interface ProductListingProps {
  title: string
}

export const ProductListing: React.FC<ProductListingProps> = (props) => {
  const classes = useStyles();

  return <div className={classes.wrapper}>
    <div 
      className={classes.image} 
      style={{backgroundImage: "url('/sample.jpg'"}}
    />
    {props.title}
  </div>
}