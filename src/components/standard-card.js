import React from "react";
import styled from "styled-components";

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  padding-bottom: 10px;
`;

const Container = styled.div`
  padding: 0px 10px 10px 10px;
  width: 25vw;
  @media screen and (max-width: 800px) {
    min-width: 300px;
  }
`;

const ContentCard = ({ title, subtitle, image }) => {
  return (
    <Container>
      <ImgContainer>
        <img
          alt="standard"
          src={image}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </ImgContainer>
      <div
        style={{
          fontFamily: "Roboto Slab",
          fontSize: "15px",
          padding: "5px",
        }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div
        style={{
          fontFamily: "Noto Sans JP",
          fontSize: "12px",
          paddingLeft: "5px",
          paddingRight: "5px",
        }}
        dangerouslySetInnerHTML={{ __html: subtitle }}
      />
    </Container>
  );
};

export default ContentCard;
