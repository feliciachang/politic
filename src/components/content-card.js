import React from "react";
import styled from "styled-components";

const Subtitle = styled.div`
  font-size: 10px;
  font-weight: bold;
`;

const Title = styled.div`
  font-size: 20px;
  font-family: Roboto Slab;
`;

const Text = styled.div`
  font-size: 12px;
`;

const ContentCard = ({ title, subtitle, text }) => {
  return (
    <div style={{ padding: "10px", paddingLeft: "20px" }}>
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </div>
  );
};

export default ContentCard;
