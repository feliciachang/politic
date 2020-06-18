import React from "react";
import styled from "styled-components";

const Subtitle = styled.div`
  font-size: 10px;
  font-weight: bold;
  padding-bottom: 5px;
`;

const Title = styled.div`
  font-size: 15px;
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

const Author = styled.div`
  font-size: 10px;
  font-weight: bold;
  font-family: Noto Sans JP;
`;

const ContentCard = ({ title, subtitle, image, author }) => {
  return (
    <div
      style={{
        padding: "0px 10px 10px 10px",
        paddingLeft: "20px",
        width: "25vw",
      }}
    >
      <ImgContainer>
        <img
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
    </div>
  );
};

export default ContentCard;
