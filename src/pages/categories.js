import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import AdSense from "react-adsense";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { CategoryPhoto } from "../components/cover-photo/cover-photo";
import TitleCard from "../components/title-card";
import CategoryCard from "../components/category-card";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import { fetchFromAPI, fetchFromAPIWithHeader } from "../utils/api";
import { parseUTC } from "../utils/helper";

const Subtitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Expandable = styled.div`
  padding: 10px;
  padding-left: 20px;
  max-width: 250px;
  width: 250px;
`;

const TitleContentCard = ({ title, subtitle, text, slug, date }) => {
  let history = useHistory();
  const goToArticle = () => {
    history.push({ pathname: "/" + slug });
  };

  return (
    <Expandable onClick={goToArticle}>
      <Subtitle>{subtitle}</Subtitle>
      <div className="card-title"
        style={{
          fontFamily: "Roboto Slab",
          fontSize: "20px",
        }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="card-subcontent">{parseUTC(date)}</div>
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
    history.push({ pathname: "/" + content.slug });
  };

  return (
    <div
      style={{ display: "flex", alignItems: "center" }}
      onClick={goToArticle}
    >
      <CategoryPhoto
        image={content.jetpack_featured_media_url}
        slug={content.slug.rendered}
      />
      <div style={{ marginRight: "15%", marginLeft: "3%" }}>
        <TitleContentCard
          title={content.title.rendered}
          text={content.excerpt.rendered}
          image={content.jetpack_featured_media_url}
          date={content.date}
        />
      </div>
    </div>
  );
};

const Content = ({ content, type, pageCount, handlePageClick }) => {
  return (
    <div
      style={{ display: "flex", alignItems: "flex-start" }}
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
              date={c.date}
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
        case "949":
          setType("Opinion");
          break;
        default:
          setType("The Sophist");
          break;
      }
      let endpoint = "posts?categories=" + id;
      setId(id);
      try {
        let response = await fetchFromAPIWithHeader(endpoint);
        console.log(response);
        setCategory(response.data);
        //let header = await response.headers.get("X-WP-Total");
        setPageCount(10);
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
    let endpoint = "posts?" + "offset=" + offset + "&" + "categories=" + id;
    let response = await fetchFromAPI(endpoint);
    setCategory(response);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <div>
      <Helmet>
        <title>The Yale Politic - {type ? type : "Category"}</title>
        <meta
          name="description"
          content="Yale’s Political Publication Since 1947"
        />
      </Helmet>
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
      <br />
      <br />
      <div className="adsense-container">
        <AdSense.Google client="ca-pub-6983293802174566" slot="2769088860" />
      </div>
    </div>
  );
};

export default Categories;
