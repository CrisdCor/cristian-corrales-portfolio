import React from "react";
import CardProject from "../../Components/CardProject";
import { useProjectContext } from "../../Context/ProjectContext.jsx";
import "./styles.css";

const AllProjects = () => {
  const { getProjectsData } = useProjectContext();
  const projectsData = getProjectsData;

  return (
    <section className="projects-section">
      <figure className="projects-section__arrow projects-section__arrow--left">
        <img src="" alt="" />
      </figure>
      <div className="projects-section__wrap">
        {projectsData().map((project, index) => (
          <CardProject
            key={index}
            name={project.name}
            description={project.description}
            type={project.type}
            year={project.year}
            repository={project.repository}
            url={project.url}
            image={project.image}
          />
        ))}
      </div>
      <figure className="projects-section__arrow projects-section__arrow--right">
        <img src="" alt="" />
      </figure>
    </section>
  );
};

export default AllProjects;
