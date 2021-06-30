import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import AdSense from "react-adsense";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Helmet } from "react-helmet";
import {
  EmailShareButton,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailIcon,
} from "react-share";
import styled from "styled-components";
import { fetchFromAPI } from "../utils/api";
import VerticalAd from "../components/ads/vertical-ad";
import { parseUTC } from "../utils/helper"

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
  const [author, setAuthor] = useState(null);
  const [id, setId] = useState(null);
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
    const getCover = async () => {
      let id = props.match.params.article;
      // id = id.slice(10);
      setId(id);
      try {
        let response = await fetchFromAPI("posts?slug=" + id);
        let author = await fetchFromAPI("users/" + response[0].author);
        setAuthor(author);
        setArticle(response[0]);
      } catch (error) {
        //console.log(error);
      }
    };

    getCover();
  }, [props.match.params.article]);

  const redirectToAuthor = () => {
    history.push({ pathname: "/author/:id=" + author.id });
  };

  return (
    <div>
      {article === null ? (
        <SkeletonTheme color="#E5E5E5" highlightColor="#F2F2F2">
          <Skeleton variant="rect" height={500} />
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
      ) : (
        <>
          <Helmet>
            <title>
              The Yale Politic -
              {article?.title.rendered ? article?.title.rendered : "Article"}
            </title>
            <meta property="og:title" content={article?.title.rendered} />
            <meta property="og:description" content="" />
            <meta
              property="og:image"
              content={article?.jetpack_featured_media_url}
            />
            <meta
              name={"description"}
              content="Yale’s Political Publication Since 1947"
            />
          </Helmet>
          <div style={{ marginBottom: "5%" }}>
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
                  quote={article.title.rendered}
                  url={"https://thepolitic.org/:articles=" + id}
                >
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>

                <TwitterShareButton
                  title={article.title.rendered}
                  url={"https://thepolitic.org/:articles=" + id}
                >
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
                <EmailShareButton
                  subject={article.title.rendered}
                  url={"https://thepolitic.org/:articles=" + id}
                >
                  <EmailIcon size={32} round={true} />
                </EmailShareButton>
                <VerticalAd />
              </div>
              <div style={{ marginLeft: "10%", maxWidth: "500px" }}>
                <h1
                  style={{ fontFamily: "Merriweather" }}
                  dangerouslySetInnerHTML={{ __html: article.title.rendered }}
                />
                <br />
                <div
                  onClick={redirectToAuthor}
                  style={{
                    fontFamily: "Inter",
                    lineHeight: "1.6",
                    fontSize: "15px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  {author.name}
                </div>
                <div
                  style={{
                    fontFamily: "Inter",
                    lineHeight: "1.6",
                    fontSize: "15px",
                    fontWeight: "bold"
                  }}
                >
                  {parseUTC(article.date)}
                </div>
                <br />
                <div
                  style={{
                    fontFamily: "Inter",
                    lineHeight: "1.6",
                    fontSize: "15px",
                  }}
                  dangerouslySetInnerHTML={{ __html: article.content.rendered }}
                />
                <br />
                <br />
                <AdSense.Google
                  client="ca-pub-6983293802174566"
                  slot="2769088860"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Article;
