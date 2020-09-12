import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { CategoryPhoto } from "../components/cover-photo/cover-photo";
import TitleCard from "../components/title-card";
import CategoryCard from "../components/category-card";
import ReactPaginate from "react-paginate";
import styled from "styled-components";

const Subtitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Expandable = styled.div`
  padding: 10px;
  padding-left: 20px;
  max-width: 250px;
  width: 250px;
  cursor: pointer;
`;

const TitleContentCard = ({ title, subtitle, text, slug }) => {
  let history = useHistory();
  const goToArticle = () => {
    history.push({ pathname: "/:articles=" + slug });
  };

  return (
    <Expandable onClick={goToArticle}>
      <Subtitle>{subtitle}</Subtitle>
      <div
        style={{
          fontFamily: "Roboto Slab",
          fontSize: "20px",
        }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div
        style={{
          fontFamily: "Inter",
          fontSize: "12px",
        }}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </Expandable>
  );
};

const Cover = ({ content }) => {
  let history = useHistory();
  const goToArticle = () => {
    history.push({ pathname: "/:articles=" + content.slug });
  };

  return (
    <div
      style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      onClick={goToArticle}
    >
      <CategoryPhoto
        image={content.jetpack_featured_media_url}
        slug={content.slug.rendered}
      />
      <div style={{ marginRight: "10%", marginLeft: "3%" }}>
        <TitleContentCard
          title={content.title.rendered}
          text={content.excerpt.rendered}
          image={content.jetpack_featured_media_url}
        />
      </div>
    </div>
  );
};

const Content = ({ content, type, pageCount, handlePageClick }) => {
  return (
    <div
      style={{ display: "flex", alignItems: "flex-start", cursor: "pointer" }}
    >
      <TitleCard title={type} />
      <div style={{ marginRight: "5%", marginLeft: "3%" }}>
        <div>
          {content.map((c, i) => (
            <CategoryCard
              key={i}
              title={c.title.rendered}
              text={c.excerpt.rendered}
              image={c.jetpack_featured_media_url}
              slug={c.slug}
            />
          ))}
        </div>
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

const Categories = (props) => {
  const [category, setCategory] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [type, setType] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    const getCategory = async () => {
      let id = props.match.params.id;
      id = id.slice(4);
      switch (id) {
        case "2317":
          setType("Local");
          break;
        case "3":
          setType("National");
          break;
        case "7":
          setType("World");
          break;
        case "2853":
          setType("Culture");
          break;
        case "957":
          setType("Experts Of");
          break;
        case "4291":
          setType("Voices Of");
          break;
        default:
          setType("The Sophist");
          break;
      }
      let endpoint =
        "https://thepoliticbackend.org/wp-json/wp/v2/posts?categories=" + id;
      setId(id);
      try {
        let response = await fetch(endpoint);
        let json = await response.json();
        let header = await response.headers.get("X-WP-Total");
        setPageCount(parseInt(header) / 10);

        setCategory(json);
      } catch (error) {
        //console.log(error);
      }
    };
    getCategory();
    //console.log(category);
  }, [props.match.params.id]);

  const handlePageClick = async (data) => {
    let selected = data.selected;
    let offset = (selected + 1) * 10;
    let endpoint =
      "https://thepoliticbackend.org/wp-json/wp/v2/posts?" +
      "offset=" +
      offset +
      "&" +
      "categories=" +
      id;
    let response = await fetch(endpoint);
    response = await response.json();
    setCategory(response);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <div>
      {category == null ? (
        <SkeletonTheme color="#E5E5E5" highlightColor="#F2F2F2">
          <div style={{ marginRight: "40%" }}>
            <Skeleton height={300} count={1} />
          </div>
          <div style={{ margin: "5%", marginLeft: "20%" }}>
            <div>
              <Skeleton height={100} count={10} />
            </div>
          </div>
        </SkeletonTheme>
      ) : (
        <div>
          <Cover content={category[0]} />
          <div style={{ margin: "5%" }}>
            <Content
              content={category.slice(1)}
              type={type}
              pageCount={pageCount}
              handlePageClick={handlePageClick}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
