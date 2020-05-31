import React, { useState, useMemo, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/navbar";

import Home from "./pages/home";
import Categories from "./pages/categories";

import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="category/local/" exact component={Categories} />
        <Route path="category/national/" exact component={Categories} />
        <Route path="category/world/" exact component={Categories} />
        <Route path="category/culture/" exact component={Categories} />
      </Router>
    </div>
  );
};

export default App;
