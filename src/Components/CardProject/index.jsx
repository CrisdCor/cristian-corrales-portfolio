import React from "react";
import "./styles.css";

const CardProject = ({ name, image }) => {
  return (
    <article className="card-project">
      <div className="card-project__text">
        <p className="text-l text-center text-bold">{name}</p>
      </div>
      <img className="card-project__image" src={image} alt={name} />
    </article>
  );
};

export default CardProject;
