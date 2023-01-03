import React from "react"
import { GetServerSideProps } from "next"
import Layout from "../../components/Layout"
import prisma from "../../lib/prisma"
import { Product, SubCategory } from "@prisma/client"
import { ProductListing } from "../../components/ProductListing"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  grid: {
    display: "grid",
    gridTemplateColumns: "auto auto auto"
  }
})

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params.id;

  const subCategory = await prisma.subCategory.findUnique({
    where: {
      id: id as string
    },
    include: {
      products: true
    },
  })

  return {
    props: {
      subCategory: subCategory
    },
  }
}

interface ExtendedSubCategory extends SubCategory {
  products: Product[]
}

interface SubCategoryProps {
  subCategory: ExtendedSubCategory
}
const SubCategory: React.FC<SubCategoryProps> = (props) => {
  const classes = useStyles();

  return (
    <Layout>
      <div>
        <h2>Products in "{props.subCategory.name}"</h2>
        <div className={classes.grid}>
          {props.subCategory.products.map((product) => {
            return <ProductListing 
              title={product.title}
              key={product.id} 
            />
          })}
        </div>
      </div>
    </Layout>
  )
}

export default SubCategory
