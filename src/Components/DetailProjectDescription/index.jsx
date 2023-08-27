import React, { useContext } from "react";
import { ProjectContext } from "../../Context/ProjectContext.jsx";
import "./styles.css";

const DetailProjectDescription = () => {
  const context = useContext(ProjectContext);

  return (
    <div className="card__element card__element--description">
      <h2 className="text-lg text-center">{context.projectToShow.name}</h2>
      <p className="text-m text-center">{context.projectToShow.description}</p>
      <div className="description__details">
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
    </div>
  );
};

export default DetailProjectDescription;
