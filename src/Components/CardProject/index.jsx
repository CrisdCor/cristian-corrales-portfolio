import React from "react";
import "./styles.css";

const CardProject = ({ name, image }) => {
  return (
    <article className="card-project">
      <img className="card-project__image" src={image} alt={name} />
      <div className="card-project__text">
        <p className="text-l text-center text-regular">{name}</p>
      </div>
    </article>
  );
};

export default CardProject;
