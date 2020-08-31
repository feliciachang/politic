import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import CoverPhoto from "../components/cover-photo/cover-photo";
import TitleCard from "../components/title-card";
import ContentCard from "../components/content-card";
import EditorCard from "../components/editor-card";
import StandardCard from "../components/standard-card";
import Mailchimp from "../components/subscribe";
import Iframe from "react-iframe";
import cover from "../assets/cover.png";
import styled from "styled-components";

const Line = styled.div`
  border-left: 2px solid rgb(240, 240, 240);
  height: 450px;
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

const Cover = () => {
  const [highlights, setHighlights] = useState(null);

  useEffect(() => {
    const getHighlights = async () => {
      try {
        let response = await fetch(
          "https://thepolitic.org/wp-json/wp/v2/posts?per_page=4"
        );
        response = await response.json();
        //console.log(response);
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
            />
            <ContentCard
              title={highlights[2].title.rendered}
              subtitle=""
              text={highlights[2].excerpt.rendered}
              slug={highlights[2].slug}
            />
            <ContentCard
              title={highlights[3].title.rendered}
              subtitle=""
              text={highlights[3].excerpt.rendered}
              slug={highlights[3].slug}
            />
          </div>
        )}
      </div>
    </Collapsible>
  );
};

const NormalSection = ({ type, endpoint }) => {
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
          <TitleCard title={type} endpoint={endpoint} />
          <StandardCard
            title={articles[0].title.rendered}
            subtitle={articles[0].excerpt.rendered}
            image={articles[0]?.jetpack_featured_media_url}
            slug={articles[0].slug}
          />
          <Line />
          <StandardCard
            title={articles[1].title.rendered}
            subtitle={articles[1].excerpt.rendered}
            image={articles[1].jetpack_featured_media_url}
            slug={articles[0].slug}
          />
          <Line />
          <StandardCard
            title={articles[2].title.rendered}
            subtitle={articles[2].excerpt.rendered}
            image={articles[2].jetpack_featured_media_url}
            slug={articles[0].slug}
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
          url="https://issuu.com/theyalepolitic/docs/issue_v_final"
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
          />
          <EditorLine />
          <EditorCard
            title={articles[1].title.rendered}
            subtitle={articles[1].excerpt.rendered}
            image={articles[1].jetpack_featured_media_url}
          />
          <EditorLine />
          <EditorCard
            title={articles[2].title.rendered}
            subtitle={articles[2].excerpt.rendered}
            image={articles[2].jetpack_featured_media_url}
          />
        </Collapsible>
      )}
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Cover />
      <EditorPicks endpoint="https://thepolitic.org/wp-json/wp/v2/posts?categories=2387" />
      <div>
        <NormalSection
          type="Local"
          endpoint="https://thepolitic.org/wp-json/wp/v2/posts?categories=2317"
        />
        <NormalSection
          type="National"
          endpoint="https://thepolitic.org/wp-json/wp/v2/posts?categories=3"
        />
        <NormalSection
          type="World"
          endpoint="https://thepolitic.org/wp-json/wp/v2/posts?categories=7"
        />
        <Mag />
      </div>
      <Mailchimp />
    </div>
  );
};

export default Home;
