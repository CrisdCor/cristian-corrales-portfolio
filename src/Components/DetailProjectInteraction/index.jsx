import React, { useContext } from "react";
import { ProjectContext } from "../../Context/ProjectContext.jsx";
import IconGitHub from "../../assets/Icons/IconGithub.svg";
import "./styles.css";

const DetailProjectInteraction = () => {
  const context = useContext(ProjectContext);

  return (
    <div className="card__element card__element--interaction">
      <figure className="interaction__image">
        <img
          src={context.projectToShow.image}
          alt={context.projectToShow.name}
        />
      </figure>
      <div className="interaction__links">
        <a
          className="links__view view--project text-m"
          href={context.projectToShow.url}
          target="_blank"
        >
          Ver Proyecto
        </a>
        <a
          className="links__view view--repository"
          href={context.projectToShow.repository}
          target="_blank"
        >
          <img src={IconGitHub} alt="Icono de Github" />
        </a>
      </div>
    </div>
  );
};

export default DetailProjectInteraction;
