import React, { useContext } from "react";
import { ProjectContext } from "../../Context/ProjectContext.jsx";
import DetailProjectInteraction from "../../Components/DetailProjectInteraction";
import DetailProjectDescription from "../../Components/DetailProjectDescription";
import "./styles.css";

const CardDetailProject = () => {
  const context = useContext(ProjectContext);

  const isClosed = context.isProjectOpen === false;
  const cardClassName = isClosed
    ? "animation-card--close"
    : "animation-card--open";

  return (
    <div className="detail-project-section">
      <article className={`detail-project-section__card ${cardClassName}`}>
        <DetailProjectInteraction />
        <DetailProjectDescription />
      </article>
    </div>
  );
};

export default CardDetailProject;
