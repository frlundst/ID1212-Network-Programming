import { useState } from 'react'
import React from 'react';
import HeaderPresenter from './Presenter/HeaderPresenter';
import { createUseStyles } from 'react-jss';
import HomePresenter from './Presenter/HomePresenter';
import { Route, Routes, useLocation } from 'react-router-dom';
import CategoriesPresenter from './Presenter/CategoriesPresenter';
import CategoryPresenter from './Presenter/CategoryPresenter';
import ProductPresenter from './Presenter/ProductPresenter';
import CartPresenter from './Presenter/CartPresenter';
import RegisterPresenter from './Presenter/RegisterPresenter';
import LoginPresenter from './Presenter/LoginPresenter';
import CheckoutPresenter from './Presenter/CheckoutPresenter';
import { ProfileType } from './Types';
import SearchResultPresenter from './Presenter/SearchResultPresenter';

const useStyles = createUseStyles({
  wrapper: {
    padding: "20px 10.5%",
    //backgroundImage:" linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
    background: "transparent",
    minHeight: "100vh",
  }
})

function App() {
  const classes = useStyles();

  const [cart, setCart] = React.useState<string[]>(JSON.parse(localStorage["cart"] ?? "[]"));
  const [profile, setprofile] = React.useState<ProfileType | null>(null);
  const [token, setToken] = React.useState<string | null>(localStorage.getItem("token") ?? null);

  React.useEffect(() => {
    setToken(localStorage.getItem("token") ?? null);
  })

  React.useEffect(() => {
    const key = `Bearer ${localStorage.getItem("token")}`;

    fetch('http://localhost:8080/customer/getProfile', {
      headers: {
        'Authorization': key
      }
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((res) => {
          console.log(res);
          setprofile(res);
        });
      } else {
        setprofile(null);
      }
    }).catch(() => {
      setprofile(null);
    });
  }, [token]);

  React.useEffect(() => {
    localStorage["cart"] = JSON.stringify(cart);
  }, [cart]);

  const addToCart = (productId: string) => {
    setCart([...cart, productId]);
    setShowCart(true);
    setTimeout(() => setShowCart(false), 750);
  }

  const [showCart, setShowCart] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const logout = () => {
    localStorage.clear();
    setprofile(null);
    setToken(null);
    window.location.reload();
  }

  return <div>

    <HeaderPresenter profile={profile} logoutFun={logout} cartLength={cart.length} setShowCart={(show) => setShowCart(show)} setShowRegister={(show) => setShowRegister(show)} setShowLogin={(show) => setShowLogin(show)} />

    <CartPresenter productIds={cart} showCart={showCart} setShowCart={() => setShowCart(false)} setProductIds={(productIds) => setCart(productIds)} />

    <RegisterPresenter setShowRegister={() => setShowRegister(false)} showRegister={showRegister} />

    <LoginPresenter setShowLogin={() => setShowLogin(false)} showLogin={showLogin} />

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

        <Route
          path="/checkout"
          element={<CheckoutPresenter setShowCart={(show) => setShowCart(show)} productIds={cart} profile={profile} setShowRegister={(show) => setShowRegister(show)} setShowLogin={(show) => setShowLogin(show)} />}
        />

        <Route
          path="/searchResult/:search"
          element={<SearchResultPresenter addToCart={addToCart} />}
        />
        
      </Routes>
    </div>
  </div>
}

export default App
