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

const NormalSection = ({ type, endpoint }) => (
  <div
    style={{
      margin: "5%",
      display: "flex",
      alignItems: "flex-start",
    }}
  >
    <TitleCard title={type} endpoint={endpoint} />
    <StandardCard
      title="Lorem Ipsum"
      subtitle="OPINION"
      text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia"
      image={cover}
    />
    <StandardCard
      title="Lorem Ipsum"
      subtitle="OPINION"
      text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia"
      image={cover}
    />
    <StandardCard
      title="Lorem Ipsum"
      subtitle="OPINION"
      text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia"
      image={cover}
    />
  </div>
);

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
      <NormalSection type="Local" endpoint="local" />
      <NormalSection type="National" endpoint="national" />
      <NormalSection type="World" endpoint="world" />
    </div>
  );
};

export default Home;
