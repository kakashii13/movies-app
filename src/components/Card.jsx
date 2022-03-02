import React from "react";
import "../style/components/Card.css";

const Card = ({ bckimg, rating, title, year, genres }) => {
  return (
    <div className="card">
      <a href="#" className="movie-link">
        <figure className="card-container">
          <img className="img-card" src={bckimg} />
          <figcaption className="hidden-info hidden-xs hidden-sm">
            <span>
              <img src="https://icongr.am/fontawesome/star.svg?size=25&color=5da93c" />
            </span>
            {rating !== 0 ? <h4 className="rating">{`${rating} / 10`}</h4> : ""}
            <h4 className="hidden-info-genre">{genres ? genres[0] : ""}</h4>
            <h4 className="hidden-info-genre">{genres ? genres[1] : ""}</h4>
            <span className="hidden-info-button">View Details</span>
          </figcaption>
        </figure>
      </a>
      <div className="card-text">
        <h5 className="card-text-title">{title}</h5>
        <span className="card-text-year">{year}</span>
      </div>
    </div>
  );
};

export { Card };
