import React, { useEffect, useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { CategoryPhoto } from "../components/cover-photo/cover-photo";
import TitleCard from "../components/title-card";
import CategoryCard from "../components/category-card";
import ReactPaginate from "react-paginate";
import { render } from "@testing-library/react";
import styled from "styled-components";

const H1 = styled.h1`
  font-family: "Merriweather";
`;

const AuthorPage = (props) => {
  const [author, setAuthor] = useState(null);
  const [articles, setArticles] = useState(null);
  useEffect(() => {
    const getCover = async () => {
      let id = props.match.params.id;
      id = id.slice(4);
      console.log(id);
      try {
        let author = await fetch(
          "https://thepolitic.org/wp-json/wp/v2/users/" + id
        );
        author = await author.json();
        setAuthor(author);
        let response = await fetch(
          "https://thepolitic.org/wp-json/wp/v2/posts?author=" + id
        );
        response = await response.json();
        console.log(response);
        setArticles(response);
      } catch (error) {
        //console.log(error);
      }
    };
    getCover();
  }, []);

  return (
    <>
      {articles !== null ? (
        <div
          style={{
            cursor: "pointer",
            margin: "5%",
          }}
        >
          {author !== null ? <H1>{author.name}</H1> : <div />}
          <div
            style={{
              cursor: "pointer",
              marginLeft: "5%",
              marginTop: "5%",
              marginBottom: "5%",
            }}
          >
            {articles?.map((c, i) => (
              <CategoryCard
                key={i}
                title={c.title.rendered}
                text={c.excerpt.rendered}
                image={c.jetpack_featured_media_url}
                slug={c.slug}
              />
            ))}
          </div>
        </div>
      ) : (
        <div />
      )}
    </>
  );
};

export default AuthorPage;
