import { useState } from 'react'
import React from 'react';
import NavbarPresenter from './Presenter/NavbarPresenter';
import { createUseStyles } from 'react-jss';
import HomePresenter from './Presenter/HomePresenter';
import { Route, Routes } from 'react-router-dom';
import CategoriesPresenter from './Presenter/CategoriesPresenter';
import CategoryPresenter from './Presenter/CategoryPresenter';

const useStyles = createUseStyles({
  wrapper: {
    padding: "20px 10.5%",
    background: "lightgray",
    minHeight: "100vh",
  }
})

function App() {
  const classes = useStyles();

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
          element={<CategoriesPresenter />}
        />

        <Route
          path="/category/:id"
          element={<CategoryPresenter />}
        />

      </Routes>
    </div>
  </div>
}

export default App
