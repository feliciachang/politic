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

const Article = (props) => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const getCover = async () => {
      let id = props.match.params.article;
      id = id.slice(10);
      try {
        let response = await fetch(
          "https://thepolitic.org/wp-json/wp/v2/posts?slug=" + id
        );
        response = await response.json();
        console.log(response[0]);
        setArticle(response[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getCover();
  }, []);
  return (
    <div>
      {article === null ? (
        <div>loading</div>
      ) : (
        <div>
          <ImgContainer>
            <Img alt="" src={article.jetpack_featured_media_url} />
            <div>{article.cc_featured_image_caption.caption_text}</div>
          </ImgContainer>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "10%",
              marginRight: "15%",
              marginTop: "5%",
              flexDirection: "row",
            }}
          >
            <div> social media </div>
            <div style={{ marginLeft: "10%" }}>
              <h1 style={{ fontFamily: "Merriweather" }}>
                {article.title.rendered}
              </h1>
              <br />
              <div
                style={{
                  fontFamily: "Inter",
                  lineHeight: "1.6",
                  fontSize: "15px",
                }}
                dangerouslySetInnerHTML={{ __html: article.content.rendered }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Article;
