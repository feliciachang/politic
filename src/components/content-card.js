import React from "react";
import styled from "styled-components";

const Subtitle = styled.div`
  font-size: 10px;
  font-weight: bold;
`;

const ContentCard = ({ title, subtitle, text }) => {
  return (
    <div
      style={{
        padding: "10px",
        paddingLeft: "20px",
        moxWidth: "200px",
        width: "300px",
      }}
    >
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
          fontFamily: "Inter",
          fontSize: "12px",
        }}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};

export default ContentCard;
