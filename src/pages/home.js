import React, { useEffect, useState } from "react";
import CoverPhoto from "../components/cover-photo/cover-photo";
import TitleCard from "../components/title-card";
import ContentCard from "../components/content-card";
import EditorCard from "../components/editor-card";
import StandardCard from "../components/standard-card";
import cover from "../assets/cover.png";
import styled from "styled-components";

const Cover = () => {
  const [highlights, setHighlights] = useState(null);

  useEffect(() => {
    const getHighlights = async () => {
      try {
        let response = await fetch(
          "https://thepolitic.org/wp-json/wp/v2/posts?per_page=4"
        );
        response = await response.json();
        console.log(response);
        setHighlights(response);
      } catch (error) {
        console.log(error);
      }
    };
    getHighlights();
  }, []);

  console.log(highlights);

  return (
    <div style={{ display: "flex" }}>
      <CoverPhoto image={cover} text={"Lorem ipsum"} type={""} />
      <div
        style={{ alignItems: "center", marginRight: "5%", marginLeft: "3%" }}
      >
        <TitleCard title="Highlights" />
        <br />
        {highlights === null ? (
          <div />
        ) : (
          <div>
            <ContentCard
              title={highlights[1].title.rendered}
              subtitle="OPINION"
              text={highlights[1].excerpt.rendered}
            />
            <ContentCard
              title={highlights[2].title.rendered}
              subtitle="OPINION"
              text={highlights[2].excerpt.rendered}
            />
            <ContentCard
              title={highlights[3].title.rendered}
              subtitle="OPINION"
              text={highlights[3].excerpt.rendered}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const NormalSection = ({ type, endpoint }) => {
  const [articles, setArticles] = useState(null);
  useEffect(() => {
    const getArticles = async () => {
      try {
        let response = await fetch(endpoint);
        response = await response.json();
        setArticles(response);
      } catch (error) {
        console.log(error);
      }
    };
    getArticles();
    console.log(articles);
  }, []);

  return (
    <div>
      {articles == null ? (
        <div />
      ) : (
        <div
          style={{
            margin: "5%",
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <TitleCard title={type} endpoint={endpoint} />
          <StandardCard
            title={articles[0].title.rendered}
            subtitle="LOCAL"
            image={articles[0].jetpack_featured_media_url}
          />
          <StandardCard
            title={articles[1].title.rendered}
            subtitle="LOCAL"
            image={articles[1].jetpack_featured_media_url}
          />
          <StandardCard
            title={articles[2].title.rendered}
            subtitle="LOCAL"
            image={articles[2].jetpack_featured_media_url}
          />
        </div>
      )}
    </div>
  );
};

const Title = styled.div`
  font-size: 3vh;
  padding: 20px;
  font-weight: bold;
  font-family: Merriweather;
`;

const EditorPicks = () => (
  <div style={{ margin: "5%" }}>
    <Title>The Editor's Picks: </Title>
    <div style={{ display: "flex" }}>
      <EditorCard
        title="Lorem Ipsum"
        subtitle="OPINION"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia"
        image={cover}
      />
      <EditorCard
        title="Lorem Ipsum"
        subtitle="OPINION"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia"
        image={cover}
      />
      <EditorCard
        title="Lorem Ipsum"
        subtitle="OPINION"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia"
        image={cover}
      />
    </div>
  </div>
);

const Home = () => {
  return (
    <div>
      <Cover />
      <EditorPicks />
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
      </div>
    </div>
  );
};

export default Home;
