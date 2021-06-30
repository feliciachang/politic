import React from "react";
import { useHistory } from "react-router-dom";
import "./content-card.css"
import { parseUTC } from "../../utils/helper";

const ContentCard = ({ title, subtitle, text, slug, author, date }) => {

    let history = useHistory();

    const goToArticle = () => {
        history.push({ pathname: "/" + slug });
    };

    return (
        <div className="content-card-container">
            {/* <div className="content-card-subtitle">{subtitle}</div> */}
            <div className="content-card-title" onClick={goToArticle} dangerouslySetInnerHTML={{ __html: title }}/>
            <div className="content-card-subcontent">{parseUTC(date)}</div>
            <div className="content-card-content" dangerouslySetInnerHTML={{ __html: text }}/>
        </div>
    );
};

export default ContentCard;
