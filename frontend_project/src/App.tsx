import { useState } from 'react'
import React from 'react';
import NavbarPresenter from './Presenter/NavbarPresenter';
import { createUseStyles } from 'react-jss';
import HomePresenter from './Presenter/HomePresenter';
import { Route, Routes } from 'react-router-dom';

const useStyles = createUseStyles({
  wrapper: {
    padding: "20px 25%",
    background: "lightgray",
    minHeight: "100vh",
  }
})

function App() {
  const classes = useStyles();

  /*React.useEffect(() => {
    const res = fetch('http://localhost:8080/categories');
    res.then((res) => {
      res.json().then((data) => {
        console.log(data);
      });
    });
  }, []);*/

  return <div>
    <NavbarPresenter />
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
          element={<HomePresenter />}
        />

      </Routes>
    </div>

  </div>
}

export default App
