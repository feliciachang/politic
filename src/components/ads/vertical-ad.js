import React from "react";
import ad from "./houseofnaan.png";

const VerticalAd = () => {
  const redirectToAd = () => {
    const win = window.open("https://houseofnaan.com/", "_blank");
    win.focus();
  };

  return (
    <img
      style={{ marginTop: "25px", width: "125px" }}
      src={ad}
      onClick={redirectToAd}
    />
  );
};

export default VerticalAd;
