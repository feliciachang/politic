import React, { useEffect, useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import styled from "styled-components";

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  padding-bottom: 10px;
`;

const Container = styled.div`
  padding: 0px 20px 20px 20px;
  width: 30vw;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    min-width: 300px;
  }
`;

const EditorCard = ({ title, subtitle, text, image, slug }) => {
  let history = useHistory();
  const goToArticle = () => {
    history.push({ pathname: "/:articles=" + slug });
  };
  return (
    <Container onClick={goToArticle}>
      <ImgContainer>
        <img
          alt="editor"
          src={image}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </ImgContainer>
      <br />
      <div
        style={{
          fontFamily: "Roboto Slab",
          fontSize: "17px",
        }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div
        style={{
          fontSize: "10px",
          fontFamily: "Noto Sans JP",
        }}
        dangerouslySetInnerHTML={{ __html: subtitle }}
      />
      <div
        style={{
          fontFamily: "Noto Sans JP",
          fontSize: "12px",
        }}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </Container>
  );
};

export default EditorCard;
