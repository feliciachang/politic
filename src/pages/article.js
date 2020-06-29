import React, { useEffect, useState } from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailIcon,
} from "react-share";
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
  const [id, setId] = useState(null);

  useEffect(() => {
    const getCover = async () => {
      let id = props.match.params.article;
      id = id.slice(10);
      setId(id);
      try {
        let response = await fetch(
          "https://thepolitic.org/wp-json/wp/v2/posts?slug=" + id
        );
        response = await response.json();
        //console.log(response[0]);
        setArticle(response[0]);
      } catch (error) {
        //console.log(error);
      }
    };
    // const getAuthors = async () => {
    //   let authorgrp = [];
    //   for (let j = 0; j < article._links.author.length; j++) {
    //     let author = await fetch(article._links.author[j].href);
    //     author = await author.json();
    //     authorgrp.push(author);
    //   }
    //   setAuthor(authorgrp);
    // };

    getCover();
    // getAuthors();
  }, [props.match.params.article]);
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
              justifyContent: "center",
              marginLeft: "10%",
              marginRight: "15%",
              marginTop: "5%",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                marginTop: "25px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <FacebookShareButton
                url={"http://thepolitic.org/:articles=" + id}
              >
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>

              <TwitterShareButton url={"http://thepolitic.org/:articles=" + id}>
                <TwitterIcon size={32} round={true} />
              </TwitterShareButton>
              <EmailShareButton url={"http://thepolitic.org/:articles=" + id}>
                <EmailIcon size={32} round={true} />
              </EmailShareButton>
            </div>
            <div style={{ marginLeft: "10%", maxWidth: "500px" }}>
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
