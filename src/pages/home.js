import React from "react";
import CoverPhoto from "../components/cover-photo/cover-photo";
import TitleCard from "../components/title-card";
import ContentCard from "../components/content-card";
import EditorCard from "../components/editor-card";
import StandardCard from "../components/standard-card";
import cover from "../assets/cover.png";
import styled from "styled-components";

const Cover = () => (
  <div style={{ display: "flex" }}>
    <CoverPhoto image={cover} text={"Lorem ipsum"} type={""} />
    <div style={{ alignItems: "center", marginRight: "5%", marginLeft: "3%" }}>
      <TitleCard title="Highlights" />
      <br />
      <ContentCard
        title="Lorem Ipsum"
        subtitle="OPINION"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia"
      />
      <ContentCard
        title="Lorem Ipsum"
        subtitle="OPINION"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia"
      />
      <ContentCard
        title="Lorem Ipsum"
        subtitle="OPINION"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia"
      />
    </div>
  </div>
);

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
