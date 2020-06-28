import React from "react";
import logo from "../assets/white-logo.png";
import styled from "styled-components";
import insta from "../assets/insta.png";
import fb from "../assets/fb.png";
import twitter from "../assets/twitter.png";

const Title = styled.div`
  font-size: 20px;
  padding-bottom: 5px;
  border-bottom: 1px solid white;
  font-weight: bold;
  font-family: Merriweather;
  min-width: 180px;
`;

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        paddingLeft: "5%",
        paddingRight: "5%",
        paddingTop: "3%",
        paddingBottom: "3%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <img style={{ width: "150px" }} src={logo} />
      <div style={{ marginLeft: "10%", marginRight: "10%" }}>
        <Title>Read More</Title>
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "25px",
              marginRight: "35px",
            }}
          >
            <a
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "15px",
                paddingBottom: "10px",
              }}
              href="/category/:id=2317"
            >
              Local
            </a>
            <a
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "15px",
                paddingBottom: "10px",
              }}
              href="/category/:id=3"
            >
              National
            </a>
            <a
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "15px",
                paddingBottom: "10px",
              }}
              href="/category/:id=7"
            >
              World
            </a>
            <a
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "15px",
                paddingBottom: "10px",
              }}
              href="/category/:id=2853"
            >
              Culture
            </a>
            <a
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "15px",
                paddingBottom: "10px",
              }}
              href="/category/:id=3"
            >
              Opinion
            </a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "25px",
            }}
          >
            <a
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "15px",
                paddingBottom: "10px",
              }}
              href="/category/:id=7"
            >
              Tech
            </a>
            <a
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "15px",
                paddingBottom: "10px",
              }}
              href="/category/:id=2317"
            >
              Interviews
            </a>
            <a
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "15px",
                paddingBottom: "10px",
              }}
              href="/category/:id=3"
            >
              Multimedia
            </a>
            <a
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "15px",
                paddingBottom: "10px",
              }}
              href="/category/:id=7"
            >
              About
            </a>
          </div>
        </div>
      </div>
      <div>
        <Title>Find US</Title>
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "25px",
              marginRight: "30px",
            }}
          >
            <a
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "15px",
                paddingBottom: "10px",
              }}
              href="/category/:id=2317"
            >
              Contact Us
            </a>
            <div style={{ display: "flex" }}>
              <div style={{ width: "40px" }}>
                <img style={{ width: "100%" }} src={fb} />
              </div>
              <div style={{ width: "40px" }}>
                <img style={{ width: "100%" }} src={insta} />
              </div>
              <div style={{ width: "40px" }}>
                <img style={{ width: "100%" }} src={twitter} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
