import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import AdSense from "react-adsense";
import { Helmet } from "react-helmet";
import CoverPhoto from "../components/cover-photo/cover-photo";
import TitleCard from "../components/title-card";
import ContentCard from "../components/content-card";
import EditorCard from "../components/editor-card";
import StandardCard from "../components/standard-card";
import Mailchimp from "../components/subscribe";
import Iframe from "react-iframe";
import cover from "../assets/cover.png";
import styled from "styled-components";
import { fetchFromAPI } from "../utils/api";
import HorizontalAd from "../components/ads/horizontal-ad";

import pataka from "../components/ads/pataka.png";
import macmillan from "../components/ads/globalist.jpg";

const Line = styled.div`
  border-left: 2px solid rgb(240, 240, 240);
  height: 360px;
  left: 50%;
  margin-left: -1px;
  top: 0;
  @media (max-width: 800px) {
    display: none;
  }
`;

const EditorLine = styled.div`
  border-left: 2px solid rgb(240, 240, 240);
  height: 250px;
  left: 50%;
  margin-left: -1px;
  top: 0;
  @media (max-width: 800px) {
    display: none;
  }
`;

const Collapsible = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 5%;
  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

const Ad = styled.div``;

const Cover = () => {
  const [highlights, setHighlights] = useState(null);

  useEffect(() => {
    const getHighlights = async () => {
      try {
        let response = await fetchFromAPI("posts?per_page=4");
        setHighlights(response);
      } catch (error) {
        //console.log(error);
      }
    };
    getHighlights();
  }, []);

  return (
    <Collapsible style={{ marginTop: "0" }}>
      <CoverPhoto image={cover} text={"Lorem ipsum"} type={""} />
      <div
        style={{ alignItems: "center", marginRight: "5%", marginLeft: "3%" }}
      >
        <TitleCard top={true} title="Highlights" />
        <br />
        {highlights === null ? (
          <SkeletonTheme color="#E5E5E5" highlightColor="#F2F2F2">
            <div>
              <Skeleton height={150} count={3} />
            </div>
          </SkeletonTheme>
        ) : (
          <div>
            <ContentCard
              title={highlights[1].title.rendered}
              subtitle=""
              text={highlights[1].excerpt.rendered}
              slug={highlights[1].slug}
              date={highlights[1].date}
            />
            <ContentCard
              title={highlights[2].title.rendered}
              subtitle=""
              text={highlights[2].excerpt.rendered}
              slug={highlights[2].slug}
              date={highlights[2].date}
            />
            <ContentCard
              title={highlights[3].title.rendered}
              subtitle=""
              text={highlights[3].excerpt.rendered}
              slug={highlights[3].slug}
              date={highlights[3].date}
            />
          </div>
        )}
      </div>
    </Collapsible>
  );
};

const NormalSection = ({ type, endpoint, path }) => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const getArticles = async () => {
      try {
        let response;
        response = await fetch(endpoint);
        response = await response.json();
        setArticles(response);
      } catch (error) {
        //console.log(error);
      }
    };
    getArticles();
  }, []);

  return (
    <div>
      {articles == null ? (
        <SkeletonTheme color="#E5E5E5" highlightColor="#F2F2F2">
          <div style={{ display: "flex" }}>
            <Skeleton height={150} count={3} />
          </div>
        </SkeletonTheme>
      ) : (
        <Collapsible>
          <TitleCard title={type} path={path} />
          <StandardCard
            title={articles[0].title.rendered}
            subtitle={articles[0].excerpt.rendered}
            image={articles[0]?.jetpack_featured_media_url}
            slug={articles[0].slug}
            date={articles[0].date}
          />
          <Line />
          <StandardCard
            title={articles[1].title.rendered}
            subtitle={articles[1].excerpt.rendered}
            image={articles[1].jetpack_featured_media_url}
            slug={articles[1].slug}
            date={articles[1].date}
          />
          <Line />
          <StandardCard
            title={articles[2].title.rendered}
            subtitle={articles[2].excerpt.rendered}
            image={articles[2].jetpack_featured_media_url}
            slug={articles[2].slug}
            date={articles[2].date}
          />
        </Collapsible>
      )}
    </div>
  );
};

const Mag = () => {
  return (
    <div>
      <Collapsible>
        <TitleCard title="Mag" />
        <Iframe
          url="https://issuu.com/theyalepolitic/docs/issue_1_2021_proof"
          width="100%"
          height="450px"
          id="myId"
          className="iframecss"
          display="initial"
          position="relative"
        />
      </Collapsible>
    </div>
  );
};

const Title = styled.div`
  font-size: 3vh;
  padding: 20px;
  font-weight: bold;
  font-family: Merriweather;
`;

const EditorPicks = ({ endpoint }) => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const getArticles = async () => {
      try {
        let response;
        response = await fetch(endpoint);
        response = await response.json();
        setArticles(response);
        console.log(response);
      } catch (error) {
        //console.log(error);
      }
    };

    getArticles();
  }, []);

  return (
    <div style={{ marginBottom: "5%" }}>
      <Title style={{ marginLeft: "5%", marginBottom: "0px" }}>
        The Editor's Picks:{" "}
      </Title>
      {articles == null ? (
        <SkeletonTheme color="#E5E5E5" highlightColor="#F2F2F2">
          <div style={{ display: "flex" }}>
            <Skeleton height={150} count={3} />
          </div>
        </SkeletonTheme>
      ) : (
        <Collapsible>
          <EditorCard
            title={articles[0].title.rendered}
            subtitle={articles[0].excerpt.rendered}
            image={articles[0].jetpack_featured_media_url}
            slug={articles[0].slug}
            date={articles[0].date}
          />
          <EditorLine />
          <EditorCard
            title={articles[1].title.rendered}
            subtitle={articles[1].excerpt.rendered}
            image={articles[1].jetpack_featured_media_url}
            slug={articles[1].slug}
            date={articles[1].date}
          />
          <EditorLine />
          <EditorCard
            title={articles[2].title.rendered}
            subtitle={articles[2].excerpt.rendered}
            image={articles[2].jetpack_featured_media_url}
            slug={articles[2].slug}
            date={articles[2].date}
          />
        </Collapsible>
      )}
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>The Yale Politic - Home</title>
        <meta
          name="description"
          content="Yale’s Political Publication Since 1947"
        />
      </Helmet>
      <Cover />
      <HorizontalAd ad={macmillan} link="https://macmillan.yale.edu/"/>
      <HorizontalAd ad={pataka} link="https://www.eatpataka.com/"/>
      {/* <EditorPicks endpoint="https://thepoliticbackend.org/wp-json/wp/v2/posts?categories=2387" /> */}
      <div>
        <NormalSection
          type="Local"
          endpoint="https://thepoliticbackend.org/wp-json/wp/v2/posts?categories=2317"
          path=":id=2317"
        />
        <NormalSection
          type="National"
          endpoint="https://thepoliticbackend.org/wp-json/wp/v2/posts?categories=3"
          path=":id=3"
        />
        <NormalSection
          type="World"
          endpoint="https://thepoliticbackend.org/wp-json/wp/v2/posts?categories=7"
          path=":id=7"
        />
        <NormalSection
          type="Opinion"
          endpoint="https://thepoliticbackend.org/wp-json/wp/v2/posts?categories=949"
          path=":id=949"
        />
        <NormalSection
          type="Culture"
          endpoint="https://thepoliticbackend.org/wp-json/wp/v2/posts?categories=2853"
          path=":id=2853"
        />
        <Mag />
      </div>
      <Mailchimp />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="adsense-container"
      >
        <AdSense.Google
          client="ca-pub-6983293802174566"
          slot="2769088860"
          style={{ height: "50px", width: "70%" }}
        />
      </div>
    </div>
  );
};

export default Home;
