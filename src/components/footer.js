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
      <img alt="logo" style={{ width: "150px", height: "100%" }} src={logo} />
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
              href="/page/:id=columns"
            >
              Columnists
            </a>
            <a
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "15px",
                paddingBottom: "10px",
              }}
              href="/category/:id=4284"
            >
              Sophists
            </a>
            <a
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "15px",
                paddingBottom: "10px",
              }}
              href="/category/:id=957"
            >
              Experts Of
            </a>
            <a
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "15px",
                paddingBottom: "10px",
              }}
              href="/category/:id=4291"
            >
              Voices Of
            </a>
            <a
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "15px",
                paddingBottom: "10px",
              }}
              href="https://soundcloud.com/user-923032759"
            >
              Podcasts
            </a>
            <a
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "15px",
                paddingBottom: "10px",
              }}
              href="/page/id=documentary"
            >
              Documentary
            </a>
          </div>
        </div>
      </SubContainer>
      <div>
        <Title>Find Us</Title>
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
              href="https://issuu.com/theyalepolitic/docs/issue_v_final"
            >
              Mag
            </a>
            <a
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "15px",
                paddingBottom: "10px",
              }}
              href="/page/id=our-team"
            >
              Masthead
            </a>
            <a
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "15px",
                paddingBottom: "10px",
              }}
              href="/page/id=our-history"
            >
              Our History
            </a>
            <a
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "15px",
                paddingBottom: "10px",
              }}
              href="/page/id=our-history"
            >
              Contact Us
            </a>
            <div style={{ display: "flex" }}>
              <a
                style={{ width: "40px" }}
                href="https://www.facebook.com/theyalepolitic"
                target="_blank"
                rel="noopener noreferrer" 
              >
                <img alt="fb" style={{ width: "100%" }} src={fb} />
              </a>
              <a
                style={{ width: "40px" }}
                href="https://www.instagram.com/theyalepolitic/"
                target="_blank"
                rel="noopener noreferrer" 
              >
                <img alt="insta" style={{ width: "100%" }} src={insta} />
              </a>
              <a
                style={{ width: "40px" }}
                href="https://twitter.com/yalepolitic"
                target="_blank"
                rel="noopener noreferrer" 
              >
                <img alt="twitter" style={{ width: "100%" }} src={twitter} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
