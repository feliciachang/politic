import React from "react";
import styled from "styled-components";

const Subtitle = styled.div`
  font-size: 10px;
  font-weight: bold;
`;

const Expandable = styled.div`
  padding: 10px;
  padding-left: 20px;
  max-width: 250px;
  width: 250px;
`;

const ContentCard = ({ title, subtitle, text }) => {
  return (
    <Expandable>
      <Subtitle>{subtitle}</Subtitle>
      <div
        style={{
          fontFamily: "Roboto Slab",
          fontSize: "15px",
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
    </Expandable>
  );
};

export default ContentCard;
