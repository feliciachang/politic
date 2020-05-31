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
      <Link to="/">
        <img style={{ width: "100px" }} src={logo} />
      </Link>
      <Link to="/category/local">Local</Link>
      <Link to="/category/national">National</Link>
      <Link to="/category/world">World</Link>
      <Link to="/category/culture">Culture</Link>
      <Link to="/category/local">Local</Link>
      <Link to="/category/national">National</Link>
      <Link to="/category/world">World</Link>
      <Link to="/category/culture">Culture</Link>
      <Link to="/category/culture">Culture</Link>
    </Nav>
  );
};

export default Navbar;
