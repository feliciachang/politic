import React, { useEffect, useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styles from "./cp.module.css";
import { fetchFromAPI } from "../../utils/api";
import { parseUTC } from "../../utils/helper";

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
  const [img, setImg] = useState(null);
  const [text, setText] = useState();
  const [excerpt, setExceprt] = useState();
  const [slug, setSlug] = useState();
  const [date, setDate] = useState()

  useEffect(() => {
    const getCover = async () => {
      try {
        let response = await fetchFromAPI("posts?per_page=2");
        console.log(response);
        setImg(response[1].jetpack_featured_media_url);
        setText(response[1].title.rendered);
        setSlug(response[1].slug);
        setDate(response[1].date)
        setExceprt(response[1].excerpt.rendered);
      } catch (error) {
        console.log(error);
      }
    };
    getCover();
  }, []);

  const goToArticle = () => {
    history.push({ pathname: "/" + slug });
  };

  return (
    <div style={{ width: "100%" }}>
      {img === null ? (
        <SkeletonTheme color="#E5E5E5" highlightColor="#F2F2F2">
          <div>
            <Skeleton height={400} count={1} />
            <br />
            <Skeleton height={60} count={1} />
          </div>
        </SkeletonTheme>
      ) : (
        <>
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
            <div onClick={goToArticle} className={styles.coverphototitle}
              dangerouslySetInnerHTML={{ __html: text }}
            />
            <div className={styles.coverphotocardsubcontent}>{parseUTC(date)}</div>
            <div
              style={{
                fontFamily: "Noto Sans JP",
                fontSize: "12px",
                marginRight: "5%",
              }}
              dangerouslySetInnerHTML={{ __html: excerpt }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default withRouter(CoverPhoto);
