import React from "react";
import styles from "./cp.module.css";

const CoverPhoto = ({ text, image }) => {
  return (
    <div className={styles.imgcontainer}>
      <img alt="" className={styles.img} src={image} />
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "10%",
          right: "10%",
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
          THE LATEST
        </div>
        <div
          style={{
            right: 0,
            fontSize: "9vw",
            fontWeight: "bold",
            textAlign: "left",
            backgroundColor: "#fff",
            opacity: "50%",
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default CoverPhoto;
