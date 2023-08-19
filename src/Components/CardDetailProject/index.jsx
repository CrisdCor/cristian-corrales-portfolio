import React from "react";
import { useContext } from "react";
import { ProjectContext } from "../../Context/ProjectContext.jsx";
import IconGitHub from "../../assets/Icons/IconGithub.svg";
import IconRightArrow from "../../assets/Icons/IconRightArrow.svg";
import "./styles.css";

const CardDetailProject = () => {
  const context = useContext(ProjectContext);

  return (
    <div className="detail-project-section">
      <div className="line-decoration">
        <span className="line-decoration--circle"></span>
        <span className="line-decoration--line"></span>
      </div>
      <article
        className={`${
          context.isProjectOpen === false
            ? "detail-project-section__card detail-project-section__card--close"
            : "detail-project-section__card"
        }`}
      >
        <figure className="detail-project-section__card--image">
          <img
            src={context.projectToShow.image}
            alt={context.projectToShow.name}
          />
        </figure>

        <div className="description__links">
          <a
            className="description__links__project text-m"
            href={context.projectToShow.url}
            target="_blank"
          >
            Ver Proyecto
            <span>
              <img src={IconRightArrow} alt="" />
            </span>
          </a>
          <a
            className="description__links__repository"
            href={context.projectToShow.repository}
            target="_blank"
          >
            <img src={IconGitHub} alt="Icono de Github" />
          </a>
        </div>
        <div className="description__text">
          <h2 className="text-lg text-center">{context.projectToShow.name}</h2>
          <p className="text-m text-bold text-center">
            TIPO:{" "}
            <span className="text-m text-regular">
              {context.projectToShow.type}
            </span>
          </p>
          <p className="text-m text-bold text-center">
            AÑO:{" "}
            <span className="text-m text-regular">
              {context.projectToShow.year}
            </span>
          </p>
        </div>
      </article>
      {/* <p
        className={`${
          context.isProjectOpen === false
            ? "detail-project-section--text text-m text-center text-bold"
            : "detail-project-section--text detail-project-section--text-close text-m text-center text-bold"
        }`}
      >
        Selecciona cualquier proyecto que quieras ver en detalle
      </p> */}
      <div className="line-decoration line-decoration--right">
        <span className="line-decoration--line"></span>
        <span className="line-decoration--circle"></span>
        <span className="line-decoration--circle"></span>
      </div>
    </div>
  );
};

export default CardDetailProject;
