import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { parseUTC } from "../../utils/helper";

const ImgContainer = styled.div`
  padding-top: 10px;
  position: relative;
  width: 30%;
  height: 100px;
`;

const CategoryCard = ({ title, text, image, slug, date }) => {
  let history = useHistory();
  const goToArticle = () => {
    history.push({ pathname: "/" + slug });
  };

  return (
    <div
      style={{
        paddingLeft: "20px",
        display: "flex",
        marginBottom: "3%",
      }}
    >
      <div style={{ paddingRight: "2%", width: "100%" }}>
        <hr />
        <div className="card-title"
          style={{
            fontFamily: "Roboto Slab",
            fontSize: "17px",
          }}
          onClick={goToArticle}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div className="card-subcontent">{parseUTC(date)}</div>
        <div
          style={{
            fontFamily: "Inter",
            fontSize: "12px",
          }}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
      <ImgContainer>
        <img
          alt="coverphoto"
          src={image}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </ImgContainer>
    </div>
  );
};

export default CategoryCard;
