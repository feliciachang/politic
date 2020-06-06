import React, { useEffect, useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import styles from "./cp.module.css";

const CoverPhoto = ({ text, image, type }) => {
  const history = useHistory();
  const [img, setImg] = useState();
  const [slug, setSlug] = useState();

  useEffect(() => {
    const getCover = async () => {
      try {
        let response = await fetch(
          "http://thepolitic.org/wp-json/wp/v2/posts?per_page=1"
        );
        response = await response.json();
        setImg(response[0].jetpack_featured_media_url);
        setSlug(response[0].slug);
      } catch (error) {
        console.log(error);
      }
    };
    getCover();
  }, []);

  const goToArticle = () => {
    console.log(slug);
    history.push({ pathname: "/:articles=" + slug });
  };

  return (
    <div className={styles.imgcontainer} onClick={() => goToArticle()}>
      <img alt="" className={styles.img} src={img} />
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "10%",
          right: "0",
        }}
      >
        <div
          style={{
            fontSize: "1.3vw",
            fontWeight: "bold",
            color: "white",
            padding: "3px 10px 3px 3px",
            width: "15%",
          }}
        >
          {type}
        </div>
        <div
          style={{
            right: 0,
            fontSize: "7vw",
            fontWeight: "bold",
            textAlign: "left",
            backgroundColor: "#fff",
            opacity: "50%",
            fontFamily: "Merriweather",
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default withRouter(CoverPhoto);
