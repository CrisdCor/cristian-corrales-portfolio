import React from "react";
import CardProject from "../../Components/CardProject";
import { useProjectContext } from "../../Context/ProjectContext.jsx";
import "./styles.css";

const AllProjects = () => {
  const { getProjectsData } = useProjectContext();
  const projectsData = getProjectsData;

  return (
      <section className="projects-section">
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
      </section>
  );
};

export default AllProjects;
