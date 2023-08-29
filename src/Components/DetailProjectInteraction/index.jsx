import React, { useContext } from "react";
import { ProjectContext } from "../../Context/ProjectContext.jsx";
import IconGitHub from "../../assets/Icons/IconGithub.svg";
import IconBehance from "../../assets/Icons/IconBehance.svg";
import "./styles.css";

const DetailProjectInteraction = () => {
  const context = useContext(ProjectContext);

  const typeProject = context.projectToShow.type;
  const iconProject = typeProject === "Prototipo"
  ? IconBehance
  : IconGitHub;

  return (
    <div className="card__element--interaction">
      <figure className="interaction__image">
        <img
          src={context.projectToShow.image}
          alt={context.projectToShow.name}
        />
      </figure>
      <div className="interaction__links">
        <a
          className="interaction__links--view-project text-m"
          href={context.projectToShow.url}
          target="_blank"
        >
          Ver {context.projectToShow.name}
        </a>
        <hr className="interaction__links--division" />
        <a
          className="interaction__links--view-repo"
          href={context.projectToShow.repository}
          target="_blank"
        >
          <img src={iconProject} alt="Icono" />
        </a>
      </div>
    </div>
  );
};

export default DetailProjectInteraction;
