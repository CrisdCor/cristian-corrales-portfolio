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
      <picture className="card-project__image">
        <img src={image} alt={name} />
      </picture>
      <div className="card-project__text">
        <p className="card-project__text--name text-m text-center text-regular">{name}</p>
        <hr className="card-project__text--division" />
        <p className="card-project__text--type text-m text-center">{type}</p>
      </div>
    </article>
  );
};

export default CardProject;
