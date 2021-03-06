import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer";
import ReactGA from "react-ga";

import Home from "./pages/home";
import Categories from "./pages/categories";
import Article from "./pages/article";
import Author from "./pages/author";
import StaticPages from "./pages/static-pages";

import "./App.css";

ReactGA.initialize("UA-184469006-1");
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
  return (
    <div>
      <div className="body">
        <Router>
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/category/:id" exact component={Categories} />
          <Route path="/:article" exact component={Article} />
          <Route path="/page/:id" exact component={StaticPages} />
          <Route path="/author/:id" exact component={Author} />
        </Router>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
