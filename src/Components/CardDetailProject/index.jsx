import React from "react";
import "./styles.css";

const CardDetailProject = ({ name, type, year, repository, url, image }) => {
  return (
    <article className="card-detail-project">
      <img className="card-detail-project__image" src={image} alt={name} />
      <div className="card-detail-project__description">
        <div className="description__text">
          <h2 className="text-l">{name}</h2>
          <p className="text-m text-bold">
            TIPO: <span className="text-m text-regular">{type}</span>
          </p>
          <p className="text-m text-bold">
            AÑO: <span className="text-m text-regular">{year}</span>
          </p>
        </div>
        <div className="description__links">
          <a className="link__repository" href={repository}>
            <img src="" alt="" />
          </a>
          <a className="link__url-project" href={url}></a>
        </div>
      </div>
    </article>
  );
};

export default CardDetailProject;
