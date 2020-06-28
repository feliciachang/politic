import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import styled from "styled-components";

const Title = styled.div`
  font-size: 20px;
  padding: 15px;
  border: 2px solid black;
  font-weight: bold;
  font-family: Merriweather;
  min-width: ${(props) => (props.top ? "250px" : "150px")};
  @media (max-width: 800px) {
    width: 300px;
    margin-bottom: 20px;
    margin-top: 20px;
    justify-content: center;
  }
`;

const TitleCard = ({ title, endpoint, top }) => {
  let history = useHistory();

  const redirectTo = () => {
    history.push({ pathname: "/category/" + endpoint });
  };
  return (
    <Title top={top} onClick={() => redirectTo()}>
      {title}
    </Title>
  );
};

export default TitleCard;
