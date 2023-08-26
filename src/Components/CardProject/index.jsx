import React from "react";
import { useContext } from "react";
import { ProjectContext } from "../../Context/ProjectContext.jsx";
import "./styles.css";

const CardProject = ({
  name,
  image,
  type,
  year,
  url,
  description,
  repository,
}) => {
  const context = useContext(ProjectContext);

  const showProject = (project) => {
    context.setProjectToShow(project);
    context.closeProjectDetail();
    setTimeout(() => {
      context.openProjectDetail();
    }, 300);
  };

  return (
    <article
      className="card-project"
      onClick={() =>
        showProject({
          name,
          image,
          url,
          type,
          year,
          description,
          repository,
        })
      }
    >
      <div className="card-project__text">
        <p className="text-l text-center text-regular">{name}</p>
      </div>
      <img className="card-project__image" src={image} alt={name} />
    </article>
  );
};

export default CardProject;
