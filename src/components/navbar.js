import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 5%;
  margin-right: 5%;
`;

const Navbar = () => {
  return (
    <Nav>
      <a href="/">
        <img style={{ width: "100px" }} src={logo} />
      </a>
      <a
        style={{ color: "black", textDecoration: "none", fontSize: "15px" }}
        href="/category/:id=2317"
      >
        Local
      </a>
      <a
        style={{ color: "black", textDecoration: "none", fontSize: "15px" }}
        href="/category/:id=3"
      >
        National
      </a>
      <a
        style={{ color: "black", textDecoration: "none", fontSize: "15px" }}
        href="/category/:id=7"
      >
        World
      </a>
      <a
        style={{ color: "black", textDecoration: "none", fontSize: "15px" }}
        href="/category/:id=2317"
      >
        Local
      </a>
      <a
        style={{ color: "black", textDecoration: "none", fontSize: "15px" }}
        href="/category/:id=3"
      >
        National
      </a>
      <a
        style={{ color: "black", textDecoration: "none", fontSize: "15px" }}
        href="/category/:id=7"
      >
        World
      </a>
      <a
        style={{ color: "black", textDecoration: "none", fontSize: "15px" }}
        href="/category/:id=2317"
      >
        Local
      </a>
      <a
        style={{ color: "black", textDecoration: "none", fontSize: "15px" }}
        href="/category/:id=3"
      >
        National
      </a>
      <a
        style={{ color: "black", textDecoration: "none", fontSize: "15px" }}
        href="/category/:id=7"
      >
        World
      </a>
    </Nav>
  );
};

export default Navbar;
