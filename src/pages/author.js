import React, { useEffect, useState } from "react";
import CategoryCard from "../components/category-card";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
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
      try {
        let author = await fetch(
          "https://thepoliticbackend.org/wp-json/wp/v2/users/" + id
        );
        author = await author.json();
        setAuthor(author);
        let response = await fetch(
          "https://thepoliticbackend.org/wp-json/wp/v2/posts?author=" + id
        );
        response = await response.json();
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
      )}
    </>
  );
};

export default AuthorPage;
