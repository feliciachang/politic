import React, { useEffect, useState } from "react";

const StaticPages = (props) => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const getCover = async () => {
      let id = props.match.params.id;
      id = id.slice(3);
      try {
        let response = await fetch(
          "https://thepolitic.org/wp-json/wp/v2/pages?slug=" + id
        );
        response = await response.json();

        // parse the HTML string into a DOM
        const domParser = new DOMParser();
        const doc = domParser.parseFromString(
          response[0].content.rendered,
          "text/html"
        );
        const allElements = doc.getElementsByTagName("*");
        console.log("all elements", allElements);
        for (let elem of allElements) {
          elem.removeAttribute("class");
          elem.removeAttribute("style");
        }
        const bodyElement = doc.querySelector("body");
        const wrappedHTMLDOM = `<div class="static-page-body">${bodyElement.innerHTML}</div>`;

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
