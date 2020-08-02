import React, { useEffect, useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import styled from "styled-components";

const Box = styled.button`
  border: 1px solid black;
  padding: 5px;
`;

const Pagination = ({ records, offset }) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        {records.map((r, i) => (
          <Box>{r}</Box>
        ))}
      </div>
    </>
  );
};

export default Pagination;
