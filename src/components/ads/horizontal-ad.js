import React from "react";
import ad from "./pataka.png";

const HorizontalAd = () => {
  const redirectToAd = () => {
    const win = window.open("https://www.eatpataka.com/", "_blank");
    win.focus();
  };

  return (
    <div
      style={{
        marginTop: "25px",
        marginLeft: "6%",
        marginRight: "6%",
      }}
    >
      <img
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
        src={ad}
        onClick={redirectToAd}
      />
    </div>
  );
};

export default HorizontalAd;
