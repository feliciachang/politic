import React, { useEffect, useState } from "react";
import CoverPhoto from "../components/cover-photo/cover-photo";
import TitleCard from "../components/title-card";
import ContentCard from "../components/content-card";
import EditorCard from "../components/editor-card";
import StandardCard from "../components/standard-card";
import Mailchimp from "../components/subscribe";
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

  //console.log(highlights);

  return (
    <Collapsible style={{ marginTop: "0" }}>
      <CoverPhoto image={cover} text={"Lorem ipsum"} type={""} />
      <div
        style={{ alignItems: "center", marginRight: "5%", marginLeft: "3%" }}
      >
        <TitleCard top={true} title="Highlights" />
        <br />
        {highlights === null ? (
          <div />
        ) : (
          <div>
            <ContentCard
              title={highlights[1].title.rendered}
              subtitle=""
              text={highlights[1].excerpt.rendered}
            />
            <ContentCard
              title={highlights[2].title.rendered}
              subtitle=""
              text={highlights[2].excerpt.rendered}
            />
            <ContentCard
              title={highlights[3].title.rendered}
              subtitle=""
              text={highlights[3].excerpt.rendered}
            />
          </div>
        )}
      </div>
    </Collapsible>
  );
};

const NormalSection = ({ type, endpoint }) => {
  const [articles, setArticles] = useState(null);
  const [authors, setAuthors] = useState(null);
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
    const getAuthors = async () => {
      let authorgrp = [];
      for (let i = 0; i < 3; i++) {
        let littleArray = [];
        for (let j = 0; j < articles[i]._links.author.length; j++) {
          let author = await fetch(articles[i]._links.author[j].href);
          author = await author.json();
          littleArray.push(author);
        }
        authorgrp.push(littleArray);
      }
      setAuthors(authorgrp);
    };
    getArticles();
  }, []);

  return (
    <div>
      {articles == null ? (
        <div />
      ) : (
        <Collapsible>
          <TitleCard title={type} endpoint={endpoint} />
          <StandardCard
            title={articles[0].title.rendered}
            subtitle={articles[0].excerpt.rendered}
            image={articles[0].jetpack_featured_media_url}
          />
          <Line />
          <StandardCard
            title={articles[1].title.rendered}
            subtitle={articles[1].excerpt.rendered}
            image={articles[1].jetpack_featured_media_url}
          />
          <Line />
          <StandardCard
            title={articles[2].title.rendered}
            subtitle={articles[2].excerpt.rendered}
            image={articles[2].jetpack_featured_media_url}
          />
        </Collapsible>
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
    <div style={{ display: "flex", alignItems: "center" }}>
      <EditorCard
        title="Lorem Ipsum"
        subtitle="OPINION"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia"
        image={cover}
      />
      <EditorLine />
      <EditorCard
        title="Lorem Ipsum"
        subtitle="OPINION"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia"
        image={cover}
      />
      <EditorLine />
      <EditorCard
        title="Lorem Ipsum"
        subtitle="OPINION"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia"
        image={cover}
      />
    </div>
  </div>
);

const Mag = (type, endpoint) => (
  <Collapsible>
    <TitleCard title={type} endpoint={endpoint} />
  </Collapsible>
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
      <Mailchimp />
    </div>
  );
};

export default Home;
