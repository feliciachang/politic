import React from "react";
import CoverPhoto from "../components/cover-photo/cover-photo";
import TitleCard from "../components/title-card";
import ContentCard from "../components/content-card";
import cover from "../assets/cover.png";
import CategoryCard from "../components/category-card";

const Cover = () => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <CoverPhoto image={cover} text={""} type={""} />
    <div style={{ marginRight: "5%", marginLeft: "3%" }}>
      <ContentCard
        title="Lorem Ipsum"
        subtitle="OPINION"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dia"
      />
    </div>
  </div>
);

const Content = () => (
  <div style={{ display: "flex", alignItems: "flex-start" }}>
    <TitleCard title={"Local"} />
    <div style={{ marginRight: "5%", marginLeft: "3%" }}>
      <CategoryCard
        title="Lorem Ipsum"
        subtitle="OPINION"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet"
        image={cover}
      />
      <CategoryCard
        title="Lorem Ipsum"
        subtitle="OPINION"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet"
        image={cover}
      />
      <CategoryCard
        title="Lorem Ipsum"
        subtitle="OPINION"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet"
        image={cover}
      />
      <CategoryCard
        title="Lorem Ipsum"
        subtitle="OPINION"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet"
        image={cover}
      />
      <CategoryCard
        title="Lorem Ipsum"
        subtitle="OPINION"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet"
        image={cover}
      />
    </div>
  </div>
);

const Categories = () => {
  return (
    <div>
      <Cover />
      <div style={{ margin: "5%" }}>
        <Content />
      </div>
    </div>
  );
};

export default Categories;
