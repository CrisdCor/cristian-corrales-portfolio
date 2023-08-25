import React from "react";
import { useContext } from "react";
import { ProjectContext } from "../../Context/ProjectContext.jsx";
import "./styles.css";

const CardProject = ({ name, image, type, year, url, description, repository }) => {
  const context = useContext(ProjectContext);

  const showProject = (project) => {
    context.setProjectToShow(project);
    context.closeProjectDetail();
    setTimeout(()=>{
      context.openProjectDetail();
    },500);
  };

  return (
    <article className="card-project" onClick={() => showProject({name, image, url, type, year, description, repository})}>
      <img className="card-project__image" src={image} alt={name} />
      <div className="card-project__text">
        <p className="text-l text-center text-regular">{name}</p>
      </div>
    </article>
  );
};

export default CardProject;
