import React from "react"
import { GetServerSideProps } from "next"
import Layout from "../../components/Layout";
import prisma from "../../lib/prisma";
import { createUseStyles } from "react-jss";
import Router from "next/router";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io"

const useStyles = createUseStyles({
  category: {
    width: "200px",
    padding: "5px",
    borderRadius: "5px",
    '&:hover': {
      cursor: "pointer",
      background: "lightgray"
    }
  },
  arrow: {
    margin: "3px 0px 0px 0px",
    //position: "absolute",
    float: "right"
  }
});

export const getServerSideProps: GetServerSideProps = async () => {
  const categories = await prisma.category.findMany({
    include: {
      subCategory: true
    },
  });

  return {
    props: {
      categories: categories
    },
  };
};

interface SubCategory {
  id: string,
  name: string
}

interface Category {
  id: string,
  name: string,
  subCategory: SubCategory[]
}

interface CategoryProps {
  categories: Category[]
}

const Category: React.FC<CategoryProps> = (props) => {
  const classes = useStyles();

  const [currentTab, setCurrentTab] = React.useState("");

  return (
    <Layout>
      <h2>Categories</h2>
      <main>
        {props.categories.map((category) => {
          return <div key={category.id}>
            <div
              className={classes.category}
              onClick={() => currentTab !== category.id ? setCurrentTab(category.id) : setCurrentTab("")}
            >
              {category.name}
              {currentTab !== category.id ?
                <IoIosArrowBack className={classes.arrow} /> :
                <IoIosArrowDown className={classes.arrow} />
              }
            </div>
            <ul>
              {currentTab === category.id ? category.subCategory.map((subCategory) => {
                return <li
                  className={classes.category}
                  key={subCategory.id}
                  onClick={() => Router.push(`/subcategory/${subCategory.id}`)}
                >
                  {subCategory.name}
                </li>
              }) : null}
            </ul>
          </div>
        })}
      </main>
    </Layout>
  )
}

export default Category