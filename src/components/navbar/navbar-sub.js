import React from "react";
import styled from "styled-components";

const Item = styled.div`
  margin-right: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: Noto Sans JP;
  font-size: 12px;
  cursor: pointer;
  :hover {
    background-color: rgb(240, 240, 240);
    border-radius: 5px;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 140px;
  max-width: 140px;
  width: 140px;
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
            fontSize: "13px",
            fontFamily: "Noto Sans JP",
            cursor: "pointer",
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
            fontSize: "13px",
            fontFamily: "Noto Sans JP",
            cursor: "pointer",
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
          <Item>
            <a
              style={{
                color: "black",
                textDecoration: "none",
                fontSize: "12px",
                fontFamily: "Noto Sans JP",
              }}
              href="https://soundcloud.com/user-923032759"
            >
              Podcasts
            </a>
          </Item>
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
            fontSize: "13px",
            fontFamily: "Noto Sans JP",
            cursor: "pointer",
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
          <Item>
            <a
              style={{
                color: "black",
                textDecoration: "none",
                fontSize: "12px",
                fontFamily: "Noto Sans JP",
              }}
              href="/category/:id=957"
            >
              Experts Of
            </a>
          </Item>
          <Item href="/category/:id=4291">Voices Of</Item>
        </DropdownContent>
      </Dropdown>
    </div>
  );
};

export const OpinionNav = () => {
  return (
    <div>
      <Dropdown>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "13px",
          }}
        >
          Opinion
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
          <Item href="/category/id=podcasts">Columnists</Item>

          <Item href="/category/:id=4284">The Sophists</Item>
        </DropdownContent>
      </Dropdown>
    </div>
  );
};
