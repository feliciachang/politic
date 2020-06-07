import React, { useEffect, useState } from "react";
import { CategoryPhoto } from "../components/cover-photo/cover-photo";
import TitleCard from "../components/title-card";
import ContentCard from "../components/content-card";
import cover from "../assets/cover.png";
import CategoryCard from "../components/category-card";

const Cover = ({ content }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <CategoryPhoto
      image={content.jetpack_featured_media_url}
      slug={content.slug.rendered}
    />
    <div style={{ marginRight: "5%", marginLeft: "3%" }}>
      <ContentCard
        title={content.title.rendered}
        text={content.excerpt.rendered}
        image={content.jetpack_featured_media_url}
      />
    </div>
  </div>
);

const Content = ({ content }) => (
  <div style={{ display: "flex", alignItems: "flex-start" }}>
    <TitleCard title={"Local"} />
    <div style={{ marginRight: "5%", marginLeft: "3%" }}>
      {content.map((c, i) => (
        <CategoryCard
          key={i}
          title={c.title.rendered}
          text={c.excerpt.rendered}
          image={c.jetpack_featured_media_url}
        />
      ))}
    </div>
  </div>
);

const Categories = (props) => {
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const getCategory = async () => {
      let id = props.match.params.id;
      id = id.slice(4);
      console.log(id);
      let endpoint =
        "https://thepolitic.org/wp-json/wp/v2/posts?categories=" + id;
      try {
        let response = await fetch(endpoint);
        response = await response.json();
        setCategory(response);
      } catch (error) {
        console.log(error);
      }
    };
    getCategory();
    console.log(category);
  }, []);

  console.log(category);

  return (
    <div>
      {category == null ? (
        <div />
      ) : (
        <div>
          <Cover content={category[0]} />
          <div style={{ margin: "5%" }}>
            <Content content={category.slice(1)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
