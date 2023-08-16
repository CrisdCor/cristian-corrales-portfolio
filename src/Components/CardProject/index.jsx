import React from "react";
import { useContext } from "react";
import { ProjectContext } from "../../Context/ProjectContext.jsx";
import "./styles.css";

const CardProject = ({ name, image }) => {
  const context = useContext(ProjectContext);

  const showProject = () => {
    context.openProjectDetail();
    // context.setProjecTotShow();
  };

  return (
    <article className="card-project" onClick={() => showProject()}>
      <img className="card-project__image" src={image} alt={name} />
      <div className="card-project__text">
        <p className="text-l text-center text-regular">{name}</p>
      </div>
    </article>
  );
};

export default CardProject;
