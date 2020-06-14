import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer";

import Home from "./pages/home";
import Categories from "./pages/categories";
import Article from "./pages/article";

import "./App.css";

const App = () => {
  return (
    <div>
      <div className="body">
        <Router>
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/category/:id" exact component={Categories} />
          <Route path="/:article" exact component={Article} />
        </Router>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
