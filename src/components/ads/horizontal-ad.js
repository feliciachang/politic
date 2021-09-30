import React from "react";

const HorizontalAd = ({ ad, link }) => {
  const redirectToAd = () => {
    const win = window.open(link, "_blank");
    win.focus();
  };

  return (
    <div
      style={{
        marginTop: "25px",
        marginLeft: "6%",
        marginRight: "6%",
        cursor: "pointer",
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
