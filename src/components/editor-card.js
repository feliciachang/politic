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
  position: relative;
  width: 100%;
  height: 200px;
`;

const EditorCard = ({ title, subtitle, text, image }) => {
  return (
    <div style={{ padding: "10px", paddingLeft: "20px" }}>
      <ImgContainer>
        <img
          src={image}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </ImgContainer>
      <br />
      <Subtitle>{subtitle}</Subtitle>
      <div
        style={{
          fontFamily: "Roboto Slab",
          fontSize: "17px",
        }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div
        style={{
          fontFamily: "Noto Sans JP",
          fontSize: "12px",
        }}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};

export default EditorCard;
