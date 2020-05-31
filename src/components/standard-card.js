import React from "react";
import styled from "styled-components";

const Subtitle = styled.div`
  font-size: 10px;
  font-weight: bold;
  padding-bottom: 5px;
`;

const Title = styled.div`
  font-size: 20px;
  font-family: Roboto Slab;
`;

const Text = styled.div`
  font-size: 12px;
`;

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  padding-bottom: 10px;
`;

const ContentCard = ({ title, subtitle, text, image }) => {
  return (
    <div
      style={{
        padding: "0px 10px 10px 10px",
        paddingLeft: "20px",
      }}
    >
      <ImgContainer>
        <img
          src={image}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </ImgContainer>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </div>
  );
};

export default ContentCard;
