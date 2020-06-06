import React from "react";
import styled from "styled-components";

const Subtitle = styled.div`
  font-size: 10px;
  font-weight: bold;
  font-family: Noto Sans JP;
`;

const Title = styled.div`
  font-size: 20px;
  font-family: Roboto Slab;
`;

const Text = styled.div`
  font-size: 12px;
  font-family: Noto Sans JP;
`;

const ImgContainer = styled.div`
  padding-top: 10px;
  position: relative;
  width: 30%;
  height: 100px;
`;

const CategoryCard = ({ title, subtitle, text, image }) => {
  return (
    <div style={{ paddingLeft: "20px", display: "flex", marginBottom: "3%" }}>
      <div style={{ paddingRight: "2%", width: "100%" }}>
        <hr />
        <Subtitle>{subtitle}</Subtitle>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </div>
      <ImgContainer>
        <img
          src={image}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </ImgContainer>
    </div>
  );
};

export default CategoryCard;
