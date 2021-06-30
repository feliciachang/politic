import React from "react";
import { useHistory } from "react-router-dom";
import { parseUTC } from "../../utils/helper";
import "./standard-card.css"

const StandardCard = ({ title, subtitle, image, slug, author, date }) => {
  let history = useHistory();

  const goToArticle = () => {
    history.push({ pathname: "/" + slug });
  };

  return (
    <div className="standard-card-container">
      <div className="standard-card-img-container">
        <img alt="standard" src={image}/>
      </div>
      <div onClick={goToArticle} className="standard-card-title"dangerouslySetInnerHTML={{ __html: title }}/>
      <div className="standard-card-subcontent">{parseUTC(date)}</div>
      <div className="standard-card-subtitle" dangerouslySetInnerHTML={{ __html: subtitle }} />
    </div>
  );
};

export default StandardCard;
