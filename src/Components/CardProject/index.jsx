import React from "react";
import { useContext } from "react";
import { ProjectContext } from "../../Context/ProjectContext.jsx";
import "./styles.css";

const CardProject = ({ name, image, type, year }) => {
  const context = useContext(ProjectContext);

  const showProject = (project) => {
    context.setProjectToShow(project);
    context.openProjectDetail();
  };

  return (
    <article className="card-project" onClick={() => showProject({name, image, type, year})}>
      <img className="card-project__image" src={image} alt={name} />
      <div className="card-project__text">
        <p className="text-l text-center text-regular">{name}</p>
      </div>
    </article>
  );
};

export default CardProject;
