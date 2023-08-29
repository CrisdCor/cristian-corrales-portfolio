import React, { useContext } from "react";
import { ProjectContext } from "../../Context/ProjectContext.jsx";
import DetailProjectInteraction from "../../Components/DetailProjectInteraction";
import DetailProjectDescription from "../../Components/DetailProjectDescription";

import "./styles.css";

const CardDetailProject = () => {
  const context = useContext(ProjectContext);

  const closeProject = (project) => {
    context.setProjectToShow(project);
    context.closeProjectDetail();
  };

  const isClosed = context.isProjectOpen === false;
  const cardClassName = isClosed
    ? "animation-card--close"
    : "animation-card--open";

  return (
    <div className={`detail-project-section-wrap ${cardClassName}`}>
      <article className={`detail-project-section ${cardClassName}`}>
        <div
          className="detail-project-section__close-button text-center text-m"
          onClick={closeProject}
        >
          Cerrar
        </div>
        <DetailProjectInteraction />
        <DetailProjectDescription />
      </article>
    </div>
  );
};

export default CardDetailProject;
