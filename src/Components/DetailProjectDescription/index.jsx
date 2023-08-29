import React, { useContext } from "react";
import { ProjectContext } from "../../Context/ProjectContext.jsx";
import "./styles.css";

const DetailProjectDescription = () => {
  const context = useContext(ProjectContext);

  return (
    <div className="card__element--description">
      <p className="text-m text-center">{context.projectToShow.description}</p>
      <div className="description__details">
        <p className="text-m text-bold text-center">
          TIPO:{" "}
          <span className="text-m text-regular">
            {context.projectToShow.type}
          </span>
        </p>
        <hr className="description__details--division" />
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
