import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { parseUTC } from "../../utils/helper";

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  padding-bottom: 10px;
`;

const Container = styled.div`
  padding: 0px 20px 20px 20px;
  width: 30vw;
  @media screen and (max-width: 800px) {
    min-width: 300px;
  }
`;

const EditorCard = ({ title, subtitle, text, image, slug, date }) => {
  let history = useHistory();
  const goToArticle = () => {
    history.push({ pathname: "/" + slug });
  };
  return (
    <Container>
      <ImgContainer>
        <img
          alt="editor"
          src={image}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </ImgContainer>
      <br />
      <div className="card-title" onClick={goToArticle}
        style={{
          fontFamily: "Roboto Slab",
          fontSize: "17px",
        }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="card-subcontent">{parseUTC(date)}</div>
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
