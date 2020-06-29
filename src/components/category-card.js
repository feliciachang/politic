import React from "react";
import styled from "styled-components";

const ImgContainer = styled.div`
  padding-top: 10px;
  position: relative;
  width: 30%;
  height: 100px;
`;

const CategoryCard = ({ title, text, image }) => {
  return (
    <div style={{ paddingLeft: "20px", display: "flex", marginBottom: "3%" }}>
      <div style={{ paddingRight: "2%", width: "100%" }}>
        <hr />
        <div
          style={{
            fontFamily: "Roboto Slab",
            fontSize: "17px",
          }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
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
