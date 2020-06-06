import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import styled from "styled-components";

const Title = styled.div`
  font-size: 20px;
  padding: 15px;
  border: 2px solid black;
  font-weight: bold;
  font-family: Merriweather;
  min-width: 150px;
`;

const TitleCard = ({ title, endpoint }) => {
  let history = useHistory();

  const redirectTo = () => {
    history.push({ pathname: "/category/" + endpoint });
  };
  return <Title onClick={() => redirectTo()}>{title}</Title>;
};

export default TitleCard;
