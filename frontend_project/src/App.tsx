import { useState } from 'react'
import React from 'react';
import HeaderPresenter from './Presenter/HeaderPresenter';
import { createUseStyles } from 'react-jss';
import HomePresenter from './Presenter/HomePresenter';
import { Route, Routes } from 'react-router-dom';
import CategoriesPresenter from './Presenter/CategoriesPresenter';
import CategoryPresenter from './Presenter/CategoryPresenter';
import ProductPresenter from './Presenter/ProductPresenter';
import CartPresenter from './Presenter/CartPresenter';
import { Offcanvas } from 'react-bootstrap';

const useStyles = createUseStyles({
  wrapper: {
    padding: "20px 10.5%",
    background: "#F6F6F6",
    minHeight: "100vh",
  }
})

function App() {
  const classes = useStyles();

  const [cart, setCart] = React.useState<string[]>(JSON.parse(localStorage["cart"] ?? "[]"));

  React.useEffect(() => {
    localStorage["cart"] = JSON.stringify(cart);
  }, [cart]);

  const addToCart = (productId: string) => {
    setCart([...cart, productId]);
  }

  const [showCart, setShowCart] = useState(false);

  return <div>

    <HeaderPresenter cartLength={cart.length} setShowCart={(show) => setShowCart(show)} />

    <CartPresenter productIds={cart} showCart={showCart} setShowCart={() => setShowCart(false)} setProductIds={(productIds) => setCart(productIds)} />

    <div className={classes.wrapper}>
      <Routes>

        <Route
          path="*"
          element={<div><h1>404 Not Found</h1></div>}
        />

        <Route
          path="/"
          element={<HomePresenter />}
        />

        <Route
          path="/categories"
          element={<CategoriesPresenter />}
        />

        <Route
          path="/category/:id"
          element={<CategoryPresenter addToCart={addToCart} />}
        />

        <Route
          path="/product/:id"
          element={<ProductPresenter addToCart={addToCart} />}
        />
      </Routes>
    </div>
  </div>
}

export default App
