import React, { useEffect, useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import styles from "./cp.module.css";

export const CategoryPhoto = ({ image, slug }) => {
  const history = useHistory();

  const goToArticle = () => {
    history.push({ pathname: "/:articles=" + slug });
  };

  return (
    <div className={styles.imgcontainer} onClick={() => goToArticle()}>
      <img alt="" className={styles.img} src={image} />
    </div>
  );
};

const CoverPhoto = ({ type }) => {
  const history = useHistory();
  const [img, setImg] = useState();
  const [text, setText] = useState();
  const [excerpt, setExceprt] = useState();
  const [slug, setSlug] = useState();

  useEffect(() => {
    const getCover = async () => {
      try {
        let response = await fetch(
          "https://thepolitic.org/wp-json/wp/v2/posts?per_page=1"
        );
        response = await response.json();
        setImg(response[0].jetpack_featured_media_url);
        setText(response[0].title.rendered);
        setSlug(response[0].slug);
        setExceprt(response[0].excerpt.rendered);
      } catch (error) {
        console.log(error);
      }
    };
    getCover();
  }, []);

  const goToArticle = () => {
    history.push({ pathname: "/:articles=" + slug });
  };

  return (
    <div style={{ cursor: "pointer", width: "100%" }}>
      <div className={styles.imgcontainer} onClick={() => goToArticle()}>
        <img alt="" className={styles.img} src={img} />
      </div>
      <div style={{ marginLeft: "5%", marginTop: "3%", marginRight: "2%" }}>
        <div
          style={{
            fontSize: "10px",
            fontWeight: "bold",
            fontFamily: "Noto Sans JP",
            marginTop: "3%",
            marginBottom: "1%",
          }}
          dangerouslySetInnerHTML={{ __html: "COVER STORY" }}
        />
      </div>
      <div style={{ marginLeft: "5%", marginRight: "2%" }}>
        <div
          style={{
            fontFamily: "Merriweather",
            fontSize: "25px",
          }}
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <div
          style={{
            fontFamily: "Noto Sans JP",
            fontSize: "12px",
            marginRight: "5%",
          }}
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
      </div>
    </div>
  );
};

export default withRouter(CoverPhoto);
