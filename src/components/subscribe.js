import React from "react";
import styled from "styled-components";

const DisplayButtons = styled.a`
  padding: 10px 30px;
  background-color: ${(props) => (props.black ? "black" : "white")};
  border: ${(props) => (props.black ? "2px solid white" : "2px solid black")};
  color: ${(props) => (props.black ? "white" : "black")};
  font-family: Merriweather;
  border-radius: 50px;
  width: ${(props) => (props.round ? "100%" : "100%")};
  font-size: 15px;
  margin-bottom: 5%;
  margin-right: ${(props) => (props.right ? "10px" : "0px")};
  margin-left: ${(props) => (props.left ? "10px" : "0px")};
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  margin-bottom: 10px;
  &:hover {
    background-color: ${(props) => (props.black ? "white" : "black")};
    color: ${(props) => (props.black ? "black" : "white")};
    border: ${(props) => (props.black ? "2px solid black" : "2px solid black")};
  }
  @media (max-width: 800px) {
    min-width: 250px;
    width: 250px;
  }
`;

const Flex = styled.div`
  display: flex;
  margin-right: 5%;
  margin-left: 25%;
  margin-bottom: 5%;
  margin-top: 5%;
  justify-content: space-between;
  align-items: "flex-start";
  @media (max-width: 800px) {
    flex-direction: column;
    margin-left: 5%;
    margin-right: 10%;
  }
`;

const Mailchimp = () => {
  return (
    <Flex>
      <DisplayButtons right href={"http://eepurl.com/dILf39 "}>
        Subscribe to the Politic
      </DisplayButtons>
      <DisplayButtons
        round
        black
        left
        right
        href={"https://www.paypal.com/donate/buttons"}
      >
        Donate to Us!
      </DisplayButtons>
      <DisplayButtons
        round
        black
        left
        href={
          "https://www.redbubble.com/people/eunicepark18/works/43000621-untitled?asc=u"
        }
      >
        Explore Politic Merch
      </DisplayButtons>
    </Flex>
  );
};

export default Mailchimp;
