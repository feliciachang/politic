import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./navbar.module.css";
import { CSSTransition } from "react-transition-group";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [isSmall, setSmall] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setSmall(true);
      setVisible(!visible);
    } else {
      setSmall(false);
    }
  };

  const toggleNav = () => {
    setVisible(!visible);
  };

  return (
    <header className={styles.Header}>
      <a href="/" className="Logo">
        <img style={{ width: "100px" }} src={logo} />
      </a>
      <CSSTransition
        in={!isSmall || visible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <div className={styles.Nav}>
          <a
            style={{
              color: "black",
              textDecoration: "none",
              fontSize: "15px",
              marginRight: "10px",
            }}
            href="/category/:id=2317"
          >
            Local
          </a>
          <a
            style={{
              color: "black",
              textDecoration: "none",
              fontSize: "15px",
              marginRight: "10px",
            }}
            href="/category/:id=3"
          >
            National
          </a>
          <a
            style={{
              color: "black",
              textDecoration: "none",
              fontSize: "15px",
              marginRight: "10px",
            }}
            href="/category/:id=7"
          >
            World
          </a>
          <a
            style={{
              color: "black",
              textDecoration: "none",
              fontSize: "15px",
              marginRight: "10px",
            }}
            href="/category/:id=2853"
          >
            Culture
          </a>
          <a
            style={{
              color: "black",
              textDecoration: "none",
              fontSize: "15px",
              marginRight: "10px",
            }}
            href="/category/:id=3"
          >
            Opinion
          </a>
          <a
            style={{
              color: "black",
              textDecoration: "none",
              fontSize: "15px",
              marginRight: "10px",
            }}
            href="/category/:id=7"
          >
            Tech
          </a>
          <a
            style={{
              color: "black",
              textDecoration: "none",
              fontSize: "15px",
              marginRight: "10px",
            }}
            href="/category/:id=2317"
          >
            Interviews
          </a>
          <a
            style={{
              color: "black",
              textDecoration: "none",
              fontSize: "15px",
              marginRight: "10px",
            }}
            href="/category/:id=3"
          >
            Multimedia
          </a>
          <a
            style={{
              color: "black",
              textDecoration: "none",
              fontSize: "15px",
              marginRight: "10px",
            }}
            href="/category/:id=7"
          >
            About
          </a>
        </div>
      </CSSTransition>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        onClick={() => toggleNav()}
        className={styles.collapse}
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z" />
      </svg>
    </header>
  );
};

export default Navbar;
