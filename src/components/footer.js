import React from "react";
import logo from "../assets/white-logo.png";
import styled from "styled-components";
import insta from "../assets/insta.png";
import fb from "../assets/fb.png";
import twitter from "../assets/twitter.png";

const Container = styled.div`
  background-color: black;
  color: white;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 3%;
  padding-bottom: 3%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const SubContainer = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  @media (max-width: 800px) {
    margin: 0px;
    margin-bottom: 10%;
  }
`;

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
    <Container>
      <img alt="logo" style={{ width: "150px" }} src={logo} />
      <SubContainer>
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
      </SubContainer>
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
                <img alt="fb" style={{ width: "100%" }} src={fb} />
              </div>
              <div style={{ width: "40px" }}>
                <img alt="insta" style={{ width: "100%" }} src={insta} />
              </div>
              <div style={{ width: "40px" }}>
                <img alt="twitter" style={{ width: "100%" }} src={twitter} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
