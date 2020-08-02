import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  text-align: right;
  object-fit: cover;
`;

const StaticPages = (props) => {
  const [article, setArticle] = useState(null);
  const [id, setId] = useState(null);
  useEffect(() => {
    const getCover = async () => {
      let id = props.match.params.id;
      id = id.slice(3);
      console.log(id);
      setId(id);
      try {
        let response = await fetch(
          "https://thepolitic.org/wp-json/wp/v2/pages?slug=" + id
        );
        response = await response.json();
        console.log("content", response[0].content.rendered);

        // parse the HTML string into a DOM
        const domParser = new DOMParser();
        const doc = domParser.parseFromString(
          response[0].content.rendered,
          "text/html"
        );
        console.log("dom doc", doc);
        // strip all DOM elements of class and style attributes
        const allElements = doc.getElementsByTagName("*");
        console.log("all elements", allElements);
        for (let elem of allElements) {
          elem.removeAttribute("class");
          elem.removeAttribute("style");
        }
        const bodyElement = doc.querySelector("body");
        const wrappedHTMLDOM = `<div class="static-page-body">${bodyElement.innerHTML}</div>`;

        // convert back to string
        // console.log("reconverted", doc.documentElement.innerHTML);

        setArticle(wrappedHTMLDOM);
      } catch (error) {
        console.log(error);
      }
    };
    getCover();
  }, [props.match.params.article]);

  return (
    <div
      style={{ margin: "10%" }}
      dangerouslySetInnerHTML={{ __html: article }}
    />
  );
};

export default StaticPages;
