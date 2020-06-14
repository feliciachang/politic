import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Item = styled.a`
  color: black;
  text-decoration: none;
  font-size: 15px;
  margin-right: 10px;
  cursor: pointer;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  max-width: 160px;
  width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin-left: -10px;
  z-index: 1;
`;

const Dropdown = styled.div`
  :hover ${DropdownContent} {
    display: block;
  }
  display: "flex";
  margin-top: 7px;
`;

export const AboutNav = () => {
  return (
    <div>
      <Dropdown>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "15px",
          }}
        >
          About
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </div>
        <DropdownContent>
          <Item href="/about/our-team">Our Team</Item>
          <Item href="/about/our-history">Our History</Item>
          <Item>Contact Us</Item>
        </DropdownContent>
      </Dropdown>
    </div>
  );
};

export const MultimediaNav = () => {
  return (
    <div>
      <Dropdown>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "15px",
          }}
        >
          Multimedia
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </div>
        <DropdownContent>
          <Item href="/category/id=podcasts">Podcasts</Item>
          <Item href="/category/id=documentary">Documentary</Item>
        </DropdownContent>
      </Dropdown>
    </div>
  );
};

export const InterviewsNav = () => {
  return (
    <div>
      <Dropdown>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "15px",
          }}
        >
          Interviews
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </div>
        <DropdownContent>
          <Item href="/category/id=podcasts">Experts Of</Item>
          <Item href="/category/id=documentary">Voices Of</Item>
        </DropdownContent>
      </Dropdown>
    </div>
  );
};
