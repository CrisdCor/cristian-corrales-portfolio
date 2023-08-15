import React from "react";
import DummieImage from "../../assets/Images/FotoPrueba.png";
import IconGitHub from "../../assets/Icons/IconGithub.svg";
import "./styles.css";

const CardDetailProject = ({ name, type, year, repository, url, image }) => {
  return (
    <div className="detail-project-section">
      <div className="line-decoration">
        <span className="line-decoration--circle"></span>
        <span className="line-decoration--line"></span>
      </div>
      <article className="detail-project-section__card">
        <img
          className="detail-project-section__card--image"
          src={DummieImage}
          alt={name}
        />
        <div className="description__links">
          <a className="text-m" href="https://github.com/">
            Ver Proyecto
          </a>
          <a className="link__repository" href="https://github.com/">
            <img src={IconGitHub} alt="" />
          </a>
        </div>
        <div className="description__text">
          <h2 className="text-lg text-center">ACADEMIA ALEXANDER</h2>
          <p className="text-m text-bold text-center">
            TIPO: <span className="text-m text-regular">Aplicación web.</span>
          </p>
          <p className="text-m text-bold text-center">
            AÑO: <span className="text-m text-regular">2023</span>
          </p>
        </div>
      </article>
      <p className="detail-project-section--text text-m text-center text-bold">
        Selecciona cualquier proyecto que quieras ver en detalle
      </p>
      <div className="line-decoration line-decoration--right">
        <span className="line-decoration--line"></span>
        <span className="line-decoration--circle"></span>
        <span className="line-decoration--circle"></span>
      </div>
    </div>
  );
};

export default CardDetailProject;
