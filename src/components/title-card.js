import React from "react";
import styled from "styled-components";

const Title = styled.div`
  font-size: 20px;
  padding: 20px;
  border: 2px solid black;
  font-weight: bold;
  font-family: Merriweather;
`;

const TitleCard = ({ title }) => {
  return <Title>{title}</Title>;
};

export default TitleCard;
