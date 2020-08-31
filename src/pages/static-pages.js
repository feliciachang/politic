import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const StaticPages = (props) => {
  const [title, setTitle] = useState(null);
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
        console.log(response);

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
        setTitle(response[0].title.rendered);
        setArticle(wrappedHTMLDOM);
      } catch (error) {
        console.log(error);
      }
    };
    getCover();
  }, [props.match.params.article]);
  console.log(title, article);

  return (
    <>
      {title !== null && article !== null ? (
        <>
          <h1
            style={{
              marginLeft: "5%",
              marginRight: "5%",
              fontFamily: "Merriweather",
            }}
          >
            {title}
          </h1>
          <div
            style={{ margin: "10%" }}
            dangerouslySetInnerHTML={{ __html: article }}
          />
        </>
      ) : (
        <SkeletonTheme color="#E5E5E5" highlightColor="#F2F2F2">
          <div style={{ margin: "5%" }}>
            <Skeleton variant="rect" height={100} width={300} />
          </div>
          <div style={{ margin: "10%" }}>
            <Skeleton variant="rect" height={10} />
            <Skeleton variant="rect" height={10} />
            <Skeleton variant="rect" height={10} />
            <Skeleton variant="rect" height={10} />
            <Skeleton variant="rect" height={10} />
            <Skeleton variant="rect" height={10} />
            <Skeleton variant="rect" height={10} />
            <Skeleton variant="rect" height={10} />
          </div>
        </SkeletonTheme>
      )}
    </>
  );
};

export default StaticPages;
